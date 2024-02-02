import React, { useState } from "react";
import { Adminstyled } from "./style";
import Loginwallpaper from "../login-wallpaper/Loginwallpaper";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

function NewPassword() {
  const navigate = useNavigate();

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
                      />
                      <IoEyeOutline className="FormIcon" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="Sign-in-Button-Section">
                <button
                  className="Sign-In-Button"
                  onClick={() => navigate("/")}
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
