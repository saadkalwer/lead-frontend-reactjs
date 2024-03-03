import React, { useState } from "react";
import { Adminstyled } from "./style";
import Loginwallpaper from "../login-wallpaper/Loginwallpaper";
import { Await, useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { API } from "../../api/api";
import { toast } from "react-toastify";

function Adminlogin() {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleuserNameChange = (e) => {
    setuserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = async (e) => {
    e.preventDefault();

    if (!userName) {
      return toast.error("Please enter your username");
    }

    if (!password) {
      return toast.error("Please enter your password");
    }

    const loginData = {
      userName,
      password,
    };

    await API.login(loginData)
      .then((resp) => {
        if (resp.status == 200) {
          localStorage.setItem("user", JSON.stringify(resp.data.data));

          JSON.stringify(localStorage.setItem("token", resp.data.data.token));

          if (resp.data.data.role === "Call Center") {
            navigate("/partner");
            toast.success(resp.data.message);
          } else if (resp.data.data.role === "Company") {
            navigate("/company-partner");
            toast.success(resp.data.message);
          } else if (resp.data.data.role === "Super Admin") {
            navigate("/list-lead");
            toast.success(resp.data.message);
          }
          // navigate("/list-lead");
          // console.log("chck");
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  };

  return (
    <>
      <Loginwallpaper>
        <Adminstyled>
          <div className="Admin-Main-Section">
            <div className="Admin-Main-Container">
              <div className="Admin-Welcome-Text">
                <span className="Welcome-Title">Welcome Back !</span>
                <span className="Welcome-Text">
                  Sign in to continue to Portal.
                </span>
              </div>

              <div className="Sign-Form-Section">
                <form className="Sign-Form">
                  <div className="Form-Box-Text">
                    <span className="Form-Box-Title">Username</span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Email"
                        placeholder="Enter username "
                        value={userName}
                        onChange={handleuserNameChange}
                      />
                    </div>
                  </div>
                  <div className="Form-Box-Text">
                    <div className="Password-Text-Section">
                      <span className="Password-Text">Password</span>
                      <span
                        className="Forget-Text"
                        onClick={() => navigate("/forget")}
                      >
                        Forgot password?
                      </span>
                    </div>

                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter password"
                      />
                      <IoEyeOutline className="FormIcon" />
                    </div>
                  </div>
                  <div className="Forget-Text-Section">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <span className="Character-Text">Remember me</span>
                  </div>
                  <div className="Sign-in-Button-Section">
                    <button
                      onClick={(e) => onLogin(e)}
                      className="Sign-In-Button"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Adminstyled>
      </Loginwallpaper>
    </>
  );
}

export default Adminlogin;
