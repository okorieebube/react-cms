module.exports = {
    mongoDBurl:'mongodb://localhost:27017/node_cms',
    PORT: process.env.PORT || 3200,
    jwtSecret:'my_jwtSecrete',
    sessionSecrete: 'sess',
    /* globalVariables:(req,res,next)=> {
        res.locals.user = req.user || null;
        next();
    } */
}