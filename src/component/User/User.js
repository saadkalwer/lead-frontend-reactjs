import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/SideBar";
import { Partnerstyled } from "./style";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { API } from "../../api/api";
import { toast } from "react-toastify";
function User() {
    const userData = JSON.parse(localStorage.getItem("user"));
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const getNewPasword = async () => {
      if (!email) {
        return toast.error("Please Enter Your New Password");
      }
      if (!password) {
        return toast.error("Please Enter Your old password");
      }
      // console.log("api check");
      await API.getUpdatePassword({
        email,
        newPassword: password,
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
                  <IoPersonSharp className="Manager-Avatar"  />
                    <div className="Avatar-Text-Section">
                      <span className="Avatar-Title"> {userData.userName}</span>
                      <span className="Avatar-Text">Founder</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Call-Center-Title">
                <span className="call-center">User</span>
              </div>
            </div>
            <div className="Parter-Main-Section">
              <div className="Partner-Container ">
                <div className="Table-Section">
                  <div className="Sign-Form-Section">
                    <form className="Sign-Form">
                      <div className="Form-Box-Text">
                        <span className="Form-Box-Title">Email</span>
                        <div className="FormBox">
                          <input
                            className="NameBox"
                            type="Email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Entrer votre Email
                            "
                          />
                        </div>
                      </div>
                      <div className="Form-Box-Text">
                        <span className="Form-Box-Title">Mot de passe
</span>
                        <div className="FormBox">
                          <input
                            className="NameBox"
                            type="Password"
                            value={password}
                            placeholder="Tapez votre mot de passe
                            "
                            onChange={handlePasswordChange}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <button
                    className="Header-Button"
                    onClick={() => getNewPasword()}
                  >
                   Mettre à jour le mot de passe
{" "}
                  </button>
                </div>
              </div>
            </div>
          </Partnerstyled>
        </Sidebar>
      </>
    );
  }

export default User