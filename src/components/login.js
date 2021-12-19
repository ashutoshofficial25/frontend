import { Close, EmailRounded, Lock } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
    <div>
      <div className="body">
        <div className="container">
          <section className="card my-card">
            <div className="head-content card-body">
                
              <div className="l-part">
                <div className="login-logo">
                  <p>Logo here</p>
                  <div className="close-btn"><Button><NavLink to="/home"><Close/></NavLink></Button></div>
                </div>
                <div>
                  <form>
                    <TextField
                      className="mb-2"
                      id="input-with-icon-textfield"
                      label="Email"
                      type="email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailRounded />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <br />
                    <TextField
                      className="mb-2"
                      id="input-with-icon-textfield"
                      label="Password"
                      type="password"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <br/>
                    <Button className="mt-3 w-100" variant="contained">submit</Button>
                  </form>
                </div>
              </div>
            </div>
            <div class="sub-content card-body">
              <div class="s-part">
                Don't have an account?<NavLink to="/signup">Sign up</NavLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
