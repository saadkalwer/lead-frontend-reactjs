import React, { useState } from "react";
import { Detailstyled } from "./style";
import Sidebar from "../Sidebar/SideBar";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { API } from "../../api/api";
import { toast } from "react-toastify";

function AddEmploye() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState(null);
  const [partnerName, setPartnerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState("");
  const [operationHours, setOperationHours] = useState("");
  const [numberOfOperators, setNumberOfOperators] = useState("");
  const [languageSupported, setLanguageSupported] = useState("");
  const handleLanguageSupportedChange = (e) => {
    setLanguageSupported(e.target.value);
  };

  const handleNumberOfOperatorsChange = (e) => {
    setNumberOfOperators(e.target.value);
  };

  const handleOperationHoursChange = (e) => {
    setOperationHours(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handlePartnerNameChange = (event) => {
    setPartnerName(event.target.value);
  };
  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };
  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };
  const userData = JSON.parse(localStorage.getItem("user"));

  const oncreateEmployee = async (e) => {
    e.preventDefault();

    if (!partnerName) {
      return toast.error("Please Enter Your Customer Name");
    }

    if (!mobileNumber) {
      return toast.error("Please Enter Your Number");
    }

    if (!email) {
      return toast.error("Please Enter Your Email");
    }

    if (!gender) {
      return toast.error("Please Select Your Gender");
    }

    if (!role) {
      return toast.error("Please Enter Your Role");
    }
    if (!street) {
      return toast.error("Please Enter Your Street Address");
    }

    if (!country) {
      return toast.error("Please Enter Your Country");
    }

    const createEmployeeData = {
      role,
      partnerName,
      email,
      mobileNumber,
      street,
      operationHours,
      country,
      numberOfOperators,
      languageSupported,
    };

    await API.createEmployee(createEmployeeData)
      .then((resp) => {
        if (resp.status == 200) {
          toast.success(resp.data.message);

          navigate("/dsa-client-list");
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  };

  return (
    <Sidebar>
      <Detailstyled>
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
                  <IoPersonSharp className="Manager-Avatar"  />
                    <div className="Avatar-Text-Section">
                      <span className="Avatar-Title">{userData.userName}</span>
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
                          <option>Hr</option>
                          <option>Manger</option>
                        </select>
                      </div>
                    </div>
                    <form className="Sign-Form">
                      <div className="Form-Box-Text">
                        <span className="Form-Box-Title">Manager</span>
                        <div className="FormBox-Top">
                          <input
                            className="NameBox-Top"
                            type="Name"
                            placeholder="Enter Manager Name"
                            value={partnerName}
                            onChange={handlePartnerNameChange}
                          />
                        </div>
                      </div>
                    </form>
                    <div className="Gender-Section">
                      <span className="Form-Box-Title-Main">Gender</span>
                      <div className="Check-Box-Section">
                        <label>
                          <input
                            type="checkbox"
                            checked={gender === "male"}
                            onChange={() => handleGenderChange("male")}
                          />
                          {" Male"}
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={gender === "female"}
                            onChange={() => handleGenderChange("female")}
                          />
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
                        value={street}
                        onChange={handleStreetChange}
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
                        value={mobileNumber}
                        onChange={handleMobileNumberChange}
                      />
                    </div>
                  </div>
                  <div className="Form-Box-Text-Bottom">
                    <span className="Form-Box-Title">Email ID</span>
                    <div className="FormBox">
                      <input
                        className="NameBox-Select"
                        type="email"
                        placeholder="Enter Email ID"
                        value={email}
                        onChange={handleEmailChange}
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
                        value={operationHours}
                        onChange={handleOperationHoursChange}
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
                        <option>France</option>
                        <option>Pakistan</option>
                        <option>India</option>
                        <option>Bangladesh</option>
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
                        type="Number"
                        placeholder="Enter PAN Number"
                        value={numberOfOperators}
                        onChange={handleNumberOfOperatorsChange}
                      />
                    </div>
                  </div>
                  <div className="Form-Box-Text-Bottom">
                    <span className="Form-Box-Title">Language supported</span>
                    <div className="FormBox">
                      <input
                        className="NameBox-Select"
                        type="number"
                        placeholder="Enter Aadhar Number"
                        value={languageSupported}
                        onChange={handleLanguageSupportedChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="Form-Add-Button">
                  <button
                    className="Add-Button"
                    onClick={(e) => oncreateEmployee(e)}
                  >
                    Add
                  </button>
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
