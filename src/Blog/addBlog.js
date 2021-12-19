import { Button, IconButton, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { InputAdornment } from "@mui/material";
import { Formik } from "formik";
import MDEditor from "@uiw/react-md-editor";
import "./addBlog.css";
import {
  ArrowBack,
  Close,
  EmailRounded,
  Google,
  Lock,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import appConfig from "../config";
import Swal from "sweetalert2";
import { useState } from "react";
const AddBlog = () => {
  const url = appConfig.api_url;
  const blogForm = {
    title: "",
    description: "",
    data: {},
    author: "",
  };
  const [blogData, setBlogData] = useState("**Hello world!!!**");
  const blogSubmit = (formdata) => {
    console.log(formdata);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/blog/add", reqOpt)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "You have registered succcesfully",
        });
      });
  };

  return (
    <div>
      <div className="body">
        <div className="header">

        </div>
        <div className="container">


          <div className="card post-card">
            <div className="card-body">
              <h4 className="text-center mt-2 mb-4">Add New Blog</h4>
              <div className="back-btn">
                <Button>
                  <NavLink to="/home">
                    <Close />
                  </NavLink>
                </Button>
              </div>
              <Formik initialValues={blogForm} onSubmit={blogSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      className="w-100 mb-2"
                      id="Title"
                      label="Title"
                      multiline
                      rows={1}
                    />
                    <br />
                    <TextField
                      className="w-100 mb-2"
                      id="description"
                      label="Description"
                      multiline
                      rows={4}
                      
                    />
                    <br/>
                    <TextField
                      className="w-100 mb-2"
                      id="Tags"
                      label="Tags"
                      multiline
                      rows={1}
                    />

                    <br />
                    <div className="text-center">
                      {/* MD editor for inserting blogs */}

                      <MDEditor value={blogData} onChange={setBlogData} />
                      <Button
                        className="mt-2 w-100"
                        type="submit"
                        variant="contained"
                      >
                        Post
                      </Button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddBlog;
