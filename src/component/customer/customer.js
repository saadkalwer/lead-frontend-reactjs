import React, { useEffect, useState } from "react";
import { API } from "../../api/api";
import { toast } from "react-toastify";
import Sidebar from "../Sidebar/SideBar";
import { Customerstyled } from "./style";
import Profile from "../../image/Profile.png";
import Avatar from "../../image/User.png";
import { FiBell } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { useParams } from "react-router-dom";

function Customer() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState({});
  const [lead, setlead] = useState([]);
  const [Id, setId] = useState();
  let { id } = useParams();
  function formatDate(dateString) {
    // Create a new Date object from the dateString
    const date = new Date(dateString);

    // Format the date as per your requirements
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // If you want 12-hour format
    });

    return formattedDate;
  }

  useEffect(() => {
    getId();
    getLeadsByCompanyId();
  }, []);
  const getId = async () => {
    await API.getId({
      id: id,
    })
      .then((resp) => {
        if (resp.status == 200) {
          setId(resp.data.data);
          toast.success(resp.data.message);

          setUser(resp.data.data);
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  };
  const getLeadsByCompanyId = async () => {
    await API.getLeadById({
      id: id,
    })
      .then((resp) => {
        if (resp.status == 200) {
          setUser(resp.data.data);
          toast.success(resp.data.message);
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  };
  return (
    <>
      <Sidebar>
        <Customerstyled>
          <div className="Table-Fixing">
            <div className="Business-Main-Section">
              <div className="Business-Container">
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
                          <span className="Avatar-Title">
                            {user.partnerName}
                          </span>
                          <span className="Avatar-Text">{user.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Call-Center-Title">
                    <span className="call-center">New Lead</span>
                  </div>
                </div>
                <div className="Customer-Main-Section">
                  <div className="Customer-Container">
                    <div className="Profile-Main-Section">
                      <div className="Profile-Container">
                        <img className="Profile-Img" src={Profile} alt="" />
                        <span className="Profile-Text">
                          {" "}
                          {userData.userName}
                        </span>
                      </div>
                    </div>
                    <div className="Profile-Detail-Section">
                      <div className="Profile-Detail-Container">
                        <div className="Profile-Button-Section">
                          <button className="Profile-Button">
                            {" "}
                            Profile Details
                          </button>
                        </div>
                        <p className="Detail-Title">Profile Details</p>
                        <div className="Details-Box-Section">
                          <div className="Name-Box-Section">
                            <span className="Name-Title">Full Name </span>
                            <span className="Name-Text">
                              {user.customerName}
                            </span>
                          </div>
                          <div className="Name-Box-Section">
                            <span className="Name-Title">City </span>
                            <span className="Name-Text">{user.city}</span>
                          </div>
                          <div className="Name-Box-Section">
                            <span className="Name-Title">Income </span>
                            <span className="Name-Text">
                              {user.annualIncome}
                            </span>
                          </div>
                          <div className="Name-Box-Section">
                            <span className="Name-Title">Postal code </span>
                            <span className="Name-Text">{user.zip}</span>
                          </div>
                          <div className="Name-Box-Section">
                            <span className="Name-Title">Mobile </span>
                            <span className="Name-Text">
                              {user.mobileNumber1}
                            </span>
                          </div>
                          <div className="Name-Box-Section">
                            <span className="Name-Title">E-mail </span>
                            <span className="Name-Text">{user.email}</span>
                          </div>
                        </div>
                      </div>
                      <p className="Detail-Title">Address Details</p>
                      <div className="Details-Box-Section">
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Applied on</span>
                          <span className="Name-Text">
                            {formatDate(user.createdAt)}
                          </span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Street </span>
                          <span className="Name-Text">{user.street}</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Housing Type</span>
                          <span className="Name-Text">{user.housingType}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Customerstyled>
      </Sidebar>
    </>
  );
}

export default Customer;
