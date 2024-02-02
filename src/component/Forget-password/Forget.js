import React, { useState } from "react";
import { Adminstyled } from "./style";
import Loginwallpaper from "../login-wallpaper/Loginwallpaper";
import { useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";

function Forget() {
  const navigate = useNavigate();

  return (
    <>
      <Loginwallpaper>
        <Adminstyled>
          <div className="Admin-Main-Section">
            <div className="Admin-Main-Container">
              <div className="Admin-Welcome-Text">
                <span className="Welcome-Title">Reset your password</span>
                <span className="Welcome-Text">
                  Enter the email address associated with your account and we
                  will send you a link to reset your password.
                </span>
              </div>

              <div className="Sign-Form-Section">
                <form className="Sign-Form">
                  <div className="Form-Box-Text">
                    <div className="FormBox">
                      <IoMdMail className="FormIcon " />
                      <input
                        className="NameBox"
                        type="Email"
                        placeholder="Enter username "
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="Sign-in-Button-Section">
                <button
                  className="Sign-In-Button"
                  onClick={() => navigate("/new-password")}
                >
                  Continue
                </button>
              </div>

              <div className="Forget-Text-Section">
                <span className="Character-Text">
                  Don’t have an account?{" "}
                  <span className="Sign-Text" onClick={() => navigate("/")}>
                    {" "}
                    Sign Up
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Adminstyled>
      </Loginwallpaper>
    </>
  );
}

export default Forget;
