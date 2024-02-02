import React from "react";
import Sidebar from "../Sidebar/SideBar";
import { Customerstyled } from "./style";
import Profile from "../../image/Profile.png";
import { VscListFlat } from "react-icons/vsc";
import Avatar from "../../image/User.png";
import { FiBell } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";

function customer() {
  return (
    <>
      <Sidebar>
        <Customerstyled>
          <div className="Business-Main-Section">
            <div className="Business-Container">
              <div className="Sidebar-Header-Content">
                <div className="Sidebar-Header-Section">
                  <div className="Sidebar-Search-Box-Section">
                    <VscListFlat className="Listing-Icon" />
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
                        <span className="Avatar-Title">Anna Adame</span>
                        <span className="Avatar-Text">Founder</span>
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
                      <span className="Profile-Text">Anna Adame</span>
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
                          <span className="Name-Text">Anna Adame</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Gender </span>
                          <span className="Name-Text">Female</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Date of Birth </span>
                          <span className="Name-Text">26/03/1998</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">PAN Number </span>
                          <span className="Name-Text">ASDFG78946</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Mobile </span>
                          <span className="Name-Text">+(1) 987 6543</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">E-mail </span>
                          <span className="Name-Text">
                            daveadame@velzon.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="Detail-Title">Address Details</p>
                    <div className="Details-Box-Section">
                      <div className="Name-Box-Section">
                        <span className="Name-Title">Pincode </span>
                        <span className="Name-Text">963852</span>
                      </div>
                      <div className="Name-Box-Section">
                        <span className="Name-Title">State</span>
                        <span className="Name-Text">Lorem Ipsum</span>
                      </div>
                      <div className="Name-Box-Section">
                        <span className="Name-Title">Country </span>
                        <span className="Name-Text">Lorem Ipsum</span>
                      </div>
                      <div className="Name-Box-Section">
                        <span className="Name-Title">City </span>
                        <span className="Name-Text">Lorem Ipsum</span>
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

export default customer;
