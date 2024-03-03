import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/SideBar";
import { Partnerstyled } from "./style";
import Avatar from "../../image/User.png";
import { FiBell } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { API } from "../../api/api";
import { toast } from "react-toastify";

function Setting() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

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

  return (
    <>
      <Sidebar>
        <Partnerstyled>
          <div className="Sidebar-Header-Content">
            <div className="Sidebar-Header-Section">
              <div className="Sidebar-Search-Box-Section">
                <div className="kyc-search-box">
                  <IoMdSearch className="kyc-icon" />
                  <input
                    className="kyc-search"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
              </div>
              <div className="Bell-Main-Section">
                <div className="Bell-Section">
                  <FiBell className="Bell-Icon" />
                </div>
                <div className="Avatar-Main-Section">
                  <img className="Manager-Avatar" src={Avatar} alt="" />
                  <div className="Avatar-Text-Section">
                    <span className="Avatar-Title"> {userData.userName}</span>
                    <span className="Avatar-Text">Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="Call-Center-Title">
              <span className="call-center">Settings</span>
            </div>
          </div>
          <div className="Parter-Main-Section">
            <div className="Partner-Container ">
              <div className="Table-Section">
                <div className="Sign-Form-Section">
                  <form className="Sign-Form">
                    <div className="Form-Box-Text">
                      <span className="Form-Box-Title">Current Password</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Password"
                          value={oldPassword}
                          onChange={handleOldPasswordChange}
                          placeholder="Enter Current password"
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text">
                      <span className="Form-Box-Title">New Password</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Password"
                          value={newPassword}
                          placeholder="Enter New password"
                          onChange={handleNewPasswordChange}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <button
                  className="Header-Button"
                  onClick={() => getNewPasword()}
                >
                  Change Password{" "}
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
