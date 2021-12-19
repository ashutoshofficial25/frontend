import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import './header.css';
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Logo Here
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse my-nav" id="navbarNavDropdown">
            <ul className="navbar-nav">
              
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
             </ul>
<ul className="navbar-nav">              
                <li className="nav-item">
                  <Button>
                  <NavLink className="nav-link" to="/signup">
                    Signup
                  </NavLink></Button>
                </li>
                <li className="nav-item">
                  <Button>
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink></Button>
                </li>

                <li className="nav-item">
                  <Button>
                  <NavLink className="nav-link" to="/addBlog">
                    Add Blog
                  </NavLink></Button>
                </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
