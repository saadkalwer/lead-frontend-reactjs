import React, { useState } from "react";
import { Detailstyled } from "./style";
import Sidebar from "../Sidebar/SideBar";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { VscListFlat } from "react-icons/vsc";
import Avatar from "../../image/User.png";
import { FiBell } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";

function AddEmploye() {
  const [role, setrole] = useState("");
  const [country, setcountry] = useState("");
  const handleRoleChange = (event) => {
    setrole(event.target.value);
  };
  const handleCountryChange = (event) => {
    setcountry(event.target.value);
  };
  return (
    <Sidebar>
      <Detailstyled>
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
                <span className="call-center">Add Call Center</span>
              </div>
            </div>
            <div className="Company-Detail-Box">
              <div className="Company-Details-Container">
                <div className="Document-Upper-Main-Section">
                  <div className="Document-Section-Container">
                    <RiUploadCloud2Fill className="Document-Logo" />
                    <div className="Document-Section">
                      <span className="Documnt-Title">Upload Image</span>
                    </div>
                  </div>
                  <div className="Forms-Display">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Call Center Name</span>
                      <div className="FormBox-Bottom-House">
                        <select
                          className="NameBox-Select-House"
                          value={role}
                          onChange={handleRoleChange}
                        >
                          <option value="">Select Role</option>
                          <option value="city1">Hr</option>
                          <option value="city2">Manger</option>
                        </select>
                      </div>
                    </div>
                    <form className="Sign-Form">
                      <div className="Form-Box-Text">
                        <span className="Form-Box-Title">Customer Name</span>
                        <div className="FormBox-Top">
                          <input
                            className="NameBox-Top"
                            type="Name"
                            placeholder="Enter company Name"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="Gender-Section">
                      <span className="Form-Box-Title-Main">Gender</span>
                      <div className="Check-Box-Section">
                        <label className="Gender-Name">
                          <input type="checkbox" />
                          {" Male"}
                        </label>
                        <label className="Gender-Name">
                          <input type="checkbox" />
                          {" Female"}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Names-Form">
                  <div className="Form-Box-Text-Bottom">
                    <span className="Form-Box-Title">Address</span>
                    <div className="FormBox-Address">
                      <input
                        className="NameBox-Address"
                        type="Address"
                        placeholder="Enter Address"
                      />
                    </div>
                  </div>
                </div>
                <div className="Names-Form">
                  <div className="Form-Box-Text-Bottom">
                    <span className="Form-Box-Title">Mobile Number</span>
                    <div className="FormBox">
                      <input
                        className="NameBox-Select"
                        type="Number"
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                  </div>
                  <div className="Form-Box-Text-Bottom">
                    <span className="Form-Box-Title">Email ID</span>
                    <div className="FormBox">
                      <input
                        className="NameBox-Select"
                        type="Name"
                        placeholder="Enter Email ID"
                      />
                    </div>
                  </div>
                </div>
                <div className="Names-Form">
                  <div className="Form-Box-Text-Bottom">
                    <span className="Form-Box-Title">Operation Hours</span>
                    <div className="FormBox">
                      <input
                        className="NameBox-Select"
                        type="Number"
                        placeholder="Enter pincode"
                      />
                    </div>
                  </div>
                  <div className="Form-Box-Text-Bottom">
                    <span className="Form-Box-Title">Country</span>
                    <div className="FormBox">
                      <select
                        className="NameBox-Select"
                        value={country}
                        onChange={handleCountryChange}
                      >
                        <option value="">Select Country</option>
                        <option value="city1">France</option>
                        <option value="city2">Pakistan</option>
                        <option value="city3">India</option>
                        <option value="city4">Bangladesh</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="Names-Form">
                  <div className="Form-Box-Text-Bottom">
                    <span className="Form-Box-Title">Number of operators</span>
                    <div className="FormBox">
                      <input
                        className="NameBox-Select"
                        type="Pan"
                        placeholder="Enter PAN Number"
                      />
                    </div>
                  </div>
                  <div className="Form-Box-Text-Bottom">
                    <span className="Form-Box-Title">Language supported</span>
                    <div className="FormBox">
                      <input
                        className="NameBox-Select"
                        type="cnic"
                        placeholder="Enter Aadhar Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="Form-Add-Button">
                  <button className="Add-Button">Next</button>
                  <button className="Cancel-Button">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Detailstyled>
    </Sidebar>
  );
}
export default AddEmploye;
