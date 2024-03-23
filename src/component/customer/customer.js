import React, { useEffect, useState } from "react";
import { API } from "../../api/api";
import { toast } from "react-toastify";
import Sidebar from "../Sidebar/SideBar";
import { Customerstyled } from "./style";
import { IoPersonSharp } from "react-icons/io5";
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
  
    // Format the date as per your requirements, forcing UTC timezone
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // If you want 12-hour format
      timeZone: "UTC" // Force UTC timezone
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
                  
                    </div>
                    <div className="Bell-Main-Section">
                      <div className="Bell-Section">
                      
                      </div>
                      <div className="Avatar-Main-Section">
                      
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
                      
                        <IoPersonSharp className="Profile-Img"  />
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
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Accommodation</span>
                          <span className="Name-Text">{user.accommodation}</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Fiscal Number</span>
                          <span className="Name-Text">{user.fiscalNumber}</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">refTaxNotice</span>
                          <span className="Name-Text">{user.annualIncome}</span>
                        </div>
                      </div>
                      <div className="Details-Box-Section">
                    
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Gender </span>
                          <span className="Name-Text">{user.gender}</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Date of Birth</span>
                          <span className="Name-Text">{user.dob}</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Martial Status</span>
                          <span className="Name-Text">{user.martialStatus}</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Bank Name</span>
                          <span className="Name-Text">{user.bankName}</span>
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
