import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
  
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-lg-3">
                <div className="widget">
                  <h4>Get in touch with us</h4>
                  <address>
                    <strong>Sailor company Inc</strong><br />
                    Sailor suite room V124, DB 91<br />
                    Someplace 71745 Earth </address>
                  <p>
                    <i className="icon-phone" /> (123) 456-7890 - (123) 555-7891 <br />
                    <i className="icon-envelope-alt" /> email@domainname.com
                  </p>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="widget">
                  <h4>Information</h4>
                  <ul className="link-list">
                    <li><Link to="#">Press release</Link></li>
                    <li><Link to="#">Terms and conditions</Link></li>
                    <li><Link to="#">Privacy policy</Link></li>
                    <li><Link to="#">Career center</Link></li>
                    <li><Link to="#">Contact us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="widget">
                  <h4>Pages</h4>
                  <ul className="link-list">
                    <li><Link to="#">Press release</Link></li>
                    <li><Link to="#">Terms and conditions</Link></li>
                    <li><Link to="#">Privacy policy</Link></li>
                    <li><Link to="#">Career center</Link></li>
                    <li><Link to="#">Contact us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="widget">
                  <h4>Newsletter</h4>
                  <p>Fill your email and sign up for monthly newsletter to keep updated</p>
                  <div className="form-group multiple-form-group input-group">
                    <input type="email" name="email" className="form-control" />
                    <span className="input-group-btn">
                      <button type="button" className="btn btn-theme btn-add">Subscribe</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="sub-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="copyright">
                    <p>© Sailor Theme - All Right Reserved</p>
                    <div className="credits">
                      <Link to="https://bootstrapmade.com/free-business-bootstrap-themes-website-templates/">Business Bootstrap Themes</Link> by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="social-network">
                    <li><Link to="#" data-placement="top" title="Facebook"><i className="fa fa-facebook" /></Link></li>
                    <li><Link to="#" data-placement="top" title="Twitter"><i className="fa fa-twitter" /></Link></li>
                    <li><Link to="#" data-placement="top" title="Linkedin"><i className="fa fa-linkedin" /></Link></li>
                    <li><Link to="#" data-placement="top" title="Pinterest"><i className="fa fa-pinterest" /></Link></li>
                    <li><Link to="#" data-placement="top" title="Google plus"><i className="fa fa-google-plus" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    }
    
export default Footer;