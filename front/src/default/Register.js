import { useState } from "react";
import { Link } from "react-router-dom";
import lib from "../config/lib";

const Register = () => {
    const [FirstName, setFirstName] = useState(null);
    const [LastName, setLastName] = useState(null);
    const [Email, setEmail] = useState(null);
    const [Password, setPassword] = useState(null);
    const [CPassword, setCPassword] = useState(null);
    const [AjaxProcessing, setAjaxProcessing] = useState(false);
    const [Error, setError] = useState('');


    const processForm = async (e) => {
        e.preventDefault();
        const data = {
            firstName: FirstName,
            lastName: LastName,
            email: Email,
            password: Password,
            password_confirmation: CPassword,
        };
        setAjaxProcessing(true);
        const response = await fetch(lib.PORT + '/register', lib.fetchMetadata(data));
        const returned = await response.json();
        setAjaxProcessing(false);
        console.log(returned.errors[0].message);
        // console.log(returned);
        setError(returned.errors[0].message);
    }






    return (

        <div>
            {/* end header */}
            <section id="inner-headline">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="breadcrumb">
                                <li><Link to="#"><i className="fa fa-home" /></Link><i className="icon-angle-right" /></li>
                                <li><Link to="#">Features</Link><i className="icon-angle-right" /></li>
                                <li className="active">Register</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                            <form className="register-form" >
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group text-center">
                                        <strong><h2>{Error}</h2></strong>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group text-center">
                                        <h2>Please Sign Up <small>It's free and always will be.</small></h2>
                                    </div>
                                </div>
                                <hr className="colorgraph" />
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="firstName" value={FirstName || ''} className="form-control input-lg" placeholder="First Name" tabIndex={1} required
                                                onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="lastName" value={LastName || ''} className="form-control input-lg" placeholder="Last Name" tabIndex={2} required
                                                onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" value={Email || ''} className="form-control input-lg" placeholder="Email Address" tabIndex={4} required
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="password" name="password" value={Password || ''} className="form-control input-lg" placeholder="Password" tabIndex={5} required
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="password" name="password_confirmation" value={CPassword || ''} className="form-control input-lg" placeholder="Confirm Password" tabIndex={6} required
                                                onChange={(e) => setCPassword(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <hr className="colorgraph" />
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        {!AjaxProcessing && <input type="submit" value="Register" className="btn btn-success btn-block btn-lg" onClick={(e) => { processForm(e) }} />}
                                        {AjaxProcessing && <input type="submit" value="Processing..." className="btn btn-success btn-block btn-lg" />}
                                    </div>
                                    <div className="col-xs-12 col-md-6">Already have an account? <Link to="login.html">Sign In</Link></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;