import React, { useState } from "react";
import { Detailstyled } from "./style";
import Sidebar from "../Sidebar/SideBar";

function Companydetails() {
  const [city, setCity] = useState("");
  const [employment, setemployment] = useState("");
  const [income, setincome] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleEmploymentChange = (event) => {
    setemployment(event.target.value);
  };
  const handleIncomeChange = (event) => {
    setincome(event.target.value);
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
                <span className="call-center">Call Center</span>
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
                      <span className="Form-Box-Title">First Name</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Name"
                          placeholder="Enter First Name"
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Last Name</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Name"
                          placeholder="Enter Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Mobile Number 1</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Name"
                          placeholder="+91 | 90000 00000"
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Email ID</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Name"
                          placeholder="Enter Email Id"
                        />
                      </div>
                    </div>
                  </div>
                  <form className="Sign-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Mobile Number 2</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Name"
                          placeholder="+91 | 90000 00000"
                        />
                      </div>
                    </div>
                  </form>
                  <span className="Contact-Title1">Address Details</span>
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Street</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Name"
                          placeholder="Enter Street"
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Zip Code</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Name"
                          placeholder="Zip Code"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="Form-Box-Text-Bottom">
                    <span className="Form-Box-Title">City</span>
                    <div className="FormBox">
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
                  <span className="Contact-Title1">Category</span>
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Product</span>
                      <div className="FormBox">
                        <select
                          className="NameBox-Select"
                          value={employment}
                          onChange={handleEmploymentChange}
                        >
                          <option value="">Select Employment Type</option>
                          <option value="city1">Option1</option>
                          <option value="city2">Option2</option>
                          <option value="city3">Option3</option>
                        </select>
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Assigned Client</span>
                      <div className="FormBox">
                        <select
                          className="NameBox-Select"
                          value={income}
                          onChange={handleIncomeChange}
                        >
                          <option value="">Select Income Mode</option>
                          <option value="city1">€12000</option>
                          <option value="city2">€14000</option>
                          <option value="city3">€18000</option>
                          <option value="city4">€20000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="Form-Add-Button">
                    <button className="Add-Button">Add</button>
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

export default Companydetails;
