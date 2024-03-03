import React, { useState } from "react";
import { Adminstyled } from "./style";
import Loginwallpaper from "../login-wallpaper/Loginwallpaper";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { API } from "../../api/api";
import { toast } from "react-toastify";

function NewPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const onresetPassword = async (e) => {
    e.preventDefault();

    if (!password) {
      return toast.error("Please enter your new password");
    }

    if (!newpassword) {
      return toast.error("Please enter your confirm password");
    }
    if (!password != NewPassword) {
      return toast.error("New password and confirm password doesn't match");
    }

    const resetPasswordData = {
      password,
    };
    // console.log("api check");
    await API.resetPassword(resetPasswordData)
      .then((resp) => {
        // console.log(resp);
        if (resp.status == 200) {
          // console.log(resp.data.data);
          toast.success(resp.data.message);
          // console.log("check");
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
                    <span className="Form-Box-Title">New Password</span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="password"
                        placeholder="New Password "
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <IoEyeOutline className="FormIcon" />
                    </div>
                  </div>
                  <div className="Form-Box-Text">
                    <div className="Password-Text-Section">
                      <span className="Password-Text">Confirm Password</span>
                    </div>

                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Password"
                        placeholder="Confirm Password"
                        value={newpassword}
                        onChange={handleNewPasswordChange}
                      />
                      <IoEyeOutline className="FormIcon" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="Sign-in-Button-Section">
                <button
                  className="Sign-In-Button"
                  onClick={(e) => onresetPassword(e)}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </Adminstyled>
      </Loginwallpaper>
    </>
  );
}
export default NewPassword;
