const  express = require('express');
var cors = require('cors');
/* const bodyParser = require('body-parser'); */
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const config = require('./config/config');
const methodOverride = require('method-override');
const lib = require('./config/lib.js');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const passport = require('passport');
const app = express();
//const http = require('http').createServer(app);
//const io = require('socket.io')(http);






//Global vars
app.use(function(req,res,next) {
    //res.locals.user = req.user || null ;
    next();
});


//MONGOOSE CONNECTION TO DATABASE
const db_connect = config.mongoDBurl;
mongoose.connect(db_connect, { useNewUrlParser: true, useUnifiedTopology: true })
.then( response =>{
    console.log('Mongodb Connected...');
    
    
}).catch(err => {
    console.log('DB Connection Failed.');
});


// CONFIGURE EXPRESS
app.use(express.json());    //bodyparser middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/public')));


//setting up session
 app.use(session({
    secret: config.sessionSecrete,
    saveUninitialized:true,
    resave:true,
})); 

app.use(passport.initialize());
app.use(passport.session());



//SETUP VIEW ENGINE TO USE HANDLEBARS
app.engine('handlebars', hbs({defaultLayout:'default', helpers:{select:lib.selectOptions}}));
app.set('view engine', 'handlebars');


//FILE UPLOAD MIDDLEWARE
app.use(fileUpload());

// Then use CORS before your routes are set up:
app.use(cors());


//ROUTES
const defaultRoutes = require('./routes/default/defaultRoutes')
const adminRoutes = require('./routes/admin/adminRoutes');
app.use('/', defaultRoutes);
app.use('/admin', adminRoutes);


/* app.get('/admin/chat/:id', (req,res) => {
    console.log(req.user)
    let reciever = req.params.id;
    UserM.findById(reciever)
        .then(recieve => {
            console.log(recieve)
            res.sendfile(__dirname+'/views/chat.handlebars',{reciever:recieve});

        })
    Chat.find().then(allchat => {
        res.sendfile(__dirname+'/views/chat.html', {allchat});

    })
}); */



//METHOD_OVERRIDE MIDDLEWARE
app.use(methodOverride('_method'));


const server = app.listen(config.PORT,() =>{
    console.log(`App server is listening on port ${config.PORT}`);
});


const Chat = require('./models/chatModel');
const conversation = require('./models/Conversation');
const Message = require('./models/Messages');
const io = require('socket.io')(server);
const connectedSockets = {};


//SOCKET.IO CONNECTION
io.on('connection', (socket) => {
    //console.log(socket);
    //socket.username = 'anonymous';

  
    socket.on('join',(data) => {
        socket.join(data.room);
        conversation.find((err,rooms) => {
            if (err) { console.log(err) };

            let count = 0;

            rooms.forEach(room => {
                if( room._id == data.room){
                    count++;
                    connectedSockets[data.room] = socket;

                }
            });

            if(count == 0){
                let conver = new conversation({
                    participants: [data.onlineUser, data.reciever],
                })
                conver.save()
                .then(cat=> {
                    //console.log(cat);
                    connectedSockets[cat._id] = socket;
                });
            }
            //console.log(data.room);return;
            
            Message.find({conversationId:data.room})
            .then((allChats) => {
                //if (err ){ throw err};
                //console.log(allChats);
                allChats.forEach(chat => {
                    socket.emit('chat-message', chat.message);
                })
            });


        })
    })

    
    socket.on('disconnect', () => {
        //console.log('User Offline..')
    });

    socket.on('chat-message', (msg) => {
        console.log( msg ); 
        let message = new Message({
            message:msg.msg,
            sender:msg.to.onlineUser,
            reciever:msg.to.reciever,
            conversationId:msg.to.room,
        });
        message.save();

       socket.to(msg.to.room).emit('chat-message', msg.msg);
    });

    socket.on('new-user', (msg)=> {
        console.log(msg);

       /*  socket.broadcast.emit('user-status', '...'+msg.name+' Is Online'); */
    })

});

