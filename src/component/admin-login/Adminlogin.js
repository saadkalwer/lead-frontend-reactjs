import React, { useState } from "react";
import { Adminstyled } from "./style";
import Loginwallpaper from "../login-wallpaper/Loginwallpaper";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

function Adminlogin() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
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
                </form>
              </div>
              <div className="Sign-in-Button-Section">
                <button
                  className="Sign-In-Button"
                  onClick={() => navigate("/sidebar")}
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

export default Adminlogin;
