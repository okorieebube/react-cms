import { Link } from "react-router-dom";
const NavBar = () => {
    return ( 
        
      <header>
      {/* {'{'}{'{'}!--  --{'}'}{'}'} */}
      <div className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/"><img src="/img/logo.png" alt="" width={199} height={52} /></Link>
          </div>
          <div className="navbar-collapse collapse ">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <Link to="/" className="dropdown-toggle " data-close-others="false">Home </Link>
              </li>
              {/* {'{'}{'{'}#if user{'}'}{'}'} */}
              <li className="dropdown">
                <Link to="/admin/" className="dropdown-toggle " data-close-others="false">Admin </Link>			
              </li>
              {/* {'{'}{'{'}else{'}'}{'}'} */}
              <li className="dropdown">
                <Link to="/register" className="dropdown-toggle " data-close-others="false">Register </Link>			
              </li>
              <li className="dropdown">
                <Link to="/login" className="dropdown-toggle " data-close-others="false">Login </Link>	
              </li>
              {/* {'{'}{'{'}/if{'}'}{'}'} */}
              <li className="dropdown">
                <Link to="/portfolio" className="dropdown-toggle " data-close-others="false">About </Link>			
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
     );
}
 
export default NavBar;