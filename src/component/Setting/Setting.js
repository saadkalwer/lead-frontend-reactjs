import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/SideBar";
import { Partnerstyled } from "./style";
import { IoPersonSharp } from "react-icons/io5";
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";
import { API } from "../../api/api";
import { toast } from "react-toastify";

function Setting() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const getNewPasword = async () => {
    if (!newPassword) {
      return toast.error("Please Enter Your New Password");
    }
    if (!oldPassword) {
      return toast.error("Please Enter Your old password");
    }
    // console.log("api check");
    await API.getNewPasword({
      newPassword,
      oldPassword,
    })
      .then((resp) => {
        // console.log(resp);
        if (resp.status == 200) {
          toast.success(resp.data.message);
          navigate("/list-lead");
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible);
  };


  return (
    <>
      <Sidebar>
        <Partnerstyled>
          <div className="Sidebar-Header-Content">
            <div className="Sidebar-Header-Section">
              <div className="Sidebar-Search-Box-Section">

              </div>
              <div className="Bell-Main-Section">
                <div className="Bell-Section">

                </div>
                <div className="Avatar-Main-Section">
                  <IoPersonSharp className="Manager-Avatar" />
                  <div className="Avatar-Text-Section">
                    <span className="Avatar-Title"> {userData.userName}</span>
                    <span className="Avatar-Text">Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="Call-Center-Title">
              <span className="call-center">Parametre</span>
            </div>
          </div>
          <div className="Parter-Main-Section">
            <div className="Partner-Container ">
              <div className="Table-Section">
                <div className="Sign-Form-Section">
                  <form className="Sign-Form">
                    <div className="Form-Box-Text">
                      <span className="Form-Box-Title">
                        Mot de passe actuel</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type={isPasswordVisible ? "text" : "password"}
                          value={oldPassword}
                          onChange={handleOldPasswordChange}
                          placeholder="Entrer le mot de passe actuel"
                        />
                        {isPasswordVisible ? (
                          <IoEyeOutline className="FormIcon" onClick={togglePasswordVisibility} />
                        ) : (

                          <IoEyeOffOutline className="FormIcon" onClick={togglePasswordVisibility} />
                        )}
                      </div>
                    </div>
                    <div className="Form-Box-Text">
                      <span className="Form-Box-Title">Nouveau mot de passe</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type={isNewPasswordVisible ? "text" : "password"}
                          value={newPassword}
                          placeholder="Entrez un nouveau mot de passe"
                          onChange={handleNewPasswordChange}
                        />
                        {isNewPasswordVisible ? (
                          <IoEyeOutline className="FormIcon" onClick={toggleNewPasswordVisibility}
                          />
                        ) : (

                          <IoEyeOffOutline className="FormIcon" onClick={toggleNewPasswordVisibility} />
                        )}
                      </div>
                    </div>
                  </form>
                </div>
                <button
                  className="Header-Button"
                  onClick={() => getNewPasword()}
                >

                  Changer le mot de passe{" "}
                </button>
              </div>
            </div>
          </div>
        </Partnerstyled>
      </Sidebar>
    </>
  );
}

export default Setting;
