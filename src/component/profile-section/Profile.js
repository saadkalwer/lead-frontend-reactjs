import React, { useState } from "react";
import { Detailstyled } from "./style";
import Sidebar from "../Sidebar/SideBar";
import { VscListFlat } from "react-icons/vsc";
import Avatar from "../../image/User.png";
import { FiBell } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";

function Profile() {
  const [marital, setmarital] = useState("");
  const [city, setCity] = useState("");
  const [house, sethouse] = useState("");
  const [accommodation, setaccommodation] = useState("");
  const handleMaritalChange = (event) => {
    setmarital(event.target.value);
  };
  const handleHouseChange = (event) => {
    sethouse(event.target.value);
  };
  const handleaccommodationChange = (event) => {
    setaccommodation(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
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
                <span className="call-center">Company</span>
              </div>
            </div>
            <div className="Company-Detail-Box">
              <div className="Company-Details-Container">
                <div className="All-Form-Section">
                  <span className="Contact-Title">Company Details</span>
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
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Mobile Number 1</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Number"
                          placeholder="+91 | 90000 00000"
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Mobile Number 2</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Number"
                          placeholder="+91 | 90000 00000"
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Email ID</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Email"
                          placeholder="Enter Email Id"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="Form-Box-Title-Main">Gender</span>
                  <div className="Check-Box-Section">
                    <label>
                      <input type="checkbox" />
                      {" Male"}
                    </label>
                    <label>
                      <input type="checkbox" />
                      {" Female"}
                    </label>
                  </div>
                  <div className="Names-Form-Bottom-Section">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Date of Birth</span>
                      <div className="FormBox-Bottom">
                        <input
                          className="NameBox-Center"
                          type="date"
                          id="birthday"
                          name="birthday"
                          placeholder="Enter Date of Birth"
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Marital status</span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
                          value={marital}
                          onChange={handleMaritalChange}
                        >
                          <option value="">Marital status</option>
                          <option value="city1">Single</option>
                          <option value="city2">Married</option>
                          <option value="city3">divorced</option>
                          <option value="city4">cohabitation</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <span className="Form-Box-Title-Main">Address Details</span>
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Street</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Adress"
                          placeholder="Enter Street"
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Housing Type</span>
                      <div className="FormBox-Bottom-House">
                        <select
                          className="NameBox-Select-House"
                          value={house}
                          onChange={handleHouseChange}
                        >
                          <option value="">Enter Housing Type</option>
                          <option value="city1">House</option>
                          <option value="city2">Flat</option>
                        </select>
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Zip code</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="code"
                          placeholder="Enter Zip code"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="City-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Accommodation</span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
                          value={accommodation}
                          onChange={handleaccommodationChange}
                        >
                          <option value="">Accommodation</option>
                          <option value="city1">Owner</option>
                          <option value="city2">Tenant</option>
                        </select>
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">City</span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
                          value={city}
                          onChange={handleCityChange}
                        >
                          <option value="">Select a City</option>
                          <option value="city1">France</option>
                          <option value="city2">Pakistan</option>
                          <option value="city3">India</option>
                          <option value="city4">Bangladesh</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <span className="Form-Box-Title-Main">Status Customer</span>
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Fiscal Number</span>
                      <div className="FormBox-Bottom">
                        <input
                          className="NameBox-Select"
                          type="Number"
                          placeholder="1"
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Ref. Tax Notice</span>
                      <div className="FormBox-Bottom">
                        <input
                          className="NameBox-Select"
                          type="Number"
                          placeholder="124"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Annual Income</span>
                      <div className="FormBox-Bottom">
                        <input
                          className="NameBox-Select"
                          type="Number"
                          placeholder="Enter Annual Income"
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Date of the Lead</span>
                      <div className="FormBox-Bottom">
                        <input
                          className="NameBox-Select"
                          type="Name"
                          placeholder="Enter Bank Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="Form-Add-Button">
                    <button className="Add-Button">Upload Document</button>
                    <button className="Add-Button">Add New Lead</button>
                    <button className="Cancel-Button">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Detailstyled>
    </Sidebar>
  );
}

export default Profile;
