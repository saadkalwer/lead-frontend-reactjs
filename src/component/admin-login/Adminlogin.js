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
                <span className="Welcome-Title">Content de te revoir !</span>
                <span className="Welcome-Text">
             
Connectez-vous pour continuer sur le portail.
                </span>
              </div>

              <div className="Sign-Form-Section">
                <form className="Sign-Form">
                  <div className="Form-Box-Text">
                    <span className="Form-Box-Title">
Nom d'utilisateur</span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Email"
                        placeholder="Saisissez votre nom d'utilisateur"
                        value={userName}
                        onChange={handleuserNameChange}
                      />
                    </div>
                  </div>
                  <div className="Form-Box-Text">
                    <div className="Password-Text-Section">
                      <span className="Password-Text">
Mot de passe</span>
                      <span
                        className="Forget-Text"
                        onClick={() => navigate("/forget")}
                      >
                      
Mot de passe oublié?
                      </span>
                    </div>

                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="
                        Entrer le mot de passe"
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
                    <span className="Character-Text">
Souviens-toi de moi</span>
                  </div>
                  <div className="Sign-in-Button-Section">
                    <button
                      onClick={(e) => onLogin(e)}
                      className="Sign-In-Button"
                    >
                      
Se connecter
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
