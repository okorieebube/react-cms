import { useState } from "react";
import { Link } from "react-router-dom";
import lib from "../config/lib";

const Login = () => {
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);
    const [AjaxProcessing, setAjaxProcessing] = useState(false);
    const [Error, setError] = useState('');


    const processForm = async (e) => {
        e.preventDefault();
        const data = { email, password };
        setAjaxProcessing(true);
        const response = await fetch(lib.PORT + '/login', lib.fetchMetadata(data));
        const returned = await response.json();
        setAjaxProcessing(false);
        console.log(returned.errors[0].message);
        // console.log(returned);
        setError(returned.errors[0].message);
    }




    return (

        <div className="container">
            <div className="card card-login mx-auto my-5">
                <div id="err">{Error}</div>
                <div className="card-header">Login</div>
                <div className="card-body">
                    <form id="login">
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" value={email || ''} onChange={(e) => setemail(e.target.value)} className="form-control" id="inputemail" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input type="password" name="password" value={password || ''} onChange={(e) => setpassword(e.target.value)} className="form-control" id="exampleInputPass" placeholder="enter password" />
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" />remember password
                                </label>
                            </div>
                        </div>
                        {!AjaxProcessing && <input type="submit" value="Login" className="btn btn-success btn-block btn-lg" onClick={(e) => { processForm(e) }} />}
                        {AjaxProcessing && <input type="submit" value="Processing..." className="btn btn-success btn-block btn-lg" />}
                    </form>
                    <div className="text-center">
                        <Link to="/register" className="d-block small mt-3">Register Account</Link><br />
                        <Link to="" className="d-block small">Forgot Password</Link><br />
                        <Link to="/" className="d-block small">Home Page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;