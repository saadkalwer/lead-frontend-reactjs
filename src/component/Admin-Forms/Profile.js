import React, { useState } from "react";
import { Detailstyled } from "./style";
import Sidebar from "../Sidebar/SideBar";
import { useNavigate } from "react-router-dom";
import Avatar from "../../image/User.png";
import { FiBell } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { API } from "../../api/api";
import { toast } from "react-toastify";

function Profile() {
  const navigate = useNavigate();
  const [martialStatus, setMarital] = useState("");
  const [city, setCity] = useState("");
  const [housingType, setHousingType] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber1, setNumber1] = useState("");
  const [mobileNumber2, setNumber2] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(null);
  const [dob, setDob] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [showAttechment, setShowAttechment] = useState(false);
  const [fiscalNumber, setFiscal] = useState("");
  const [refTaxNotice, setRefTaxNotice] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [bankName, setBankName] = useState("");

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleNumber1Change = (e) => {
    setNumber1(e.target.value);
  };
  const handleNumber2Change = (e) => {
    setNumber2(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };
  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };
  const handleZipChange = (e) => {
    setZip(e.target.value);
  };
  const handleFiscalChange = (e) => {
    setFiscal(e.target.value);
  };

  const handleAnnualIncomeChange = (e) => {
    setAnnualIncome(e.target.value);
  };
  const handleRefTaxNoticeChange = (e) => {
    setRefTaxNotice(e.target.value);
  };

  const handleBankNameChange = (e) => {
    setBankName(e.target.value);
  };
  const handleMaritalChange = (event) => {
    setMarital(event.target.value);
  };
  const handleHousingTypeChange = (event) => {
    setHousingType(event.target.value);
  };
  const handleAccommodationChange = (event) => {
    setAccommodation(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const oncreateLead = async (e) => {
    e.preventDefault();

    if (!customerName) {
      return toast.error("Please Enter Your Customer Name");
    }

    if (!mobileNumber1) {
      return toast.error("Please Enter Your Number");
    }
    if (!mobileNumber2) {
      return toast.error("Please Enter Your 2nd Number");
    }
    if (!email) {
      return toast.error("Please Enter Your Email");
    }

    if (!gender) {
      return toast.error("Please Select Your Gender");
    }

    if (!dob) {
      return toast.error("Please Enter Your Date of Birth");
    }
    if (!street) {
      return toast.error("Please Enter Your Street Address");
    }
    if (!fiscalNumber) {
      return toast.error("Please Enter Your Fiscal Number");
    }

    if (fiscalNumber.length > 13) {
      return toast.error("Fiscal number cannot be more than 13 digits");
    }
    if (!refTaxNotice) {
      return toast.error("Please Enter Your RefTaxNotice");
    }

    if (refTaxNotice.length > 13) {
      return toast.error("Tax Notice number cannot be more than 13 digits");
    }
    if (!annualIncome) {
      return toast.error("Please Enter Your Annual Income");
    }
    if (!accommodation) {
      return toast.error("Please Enter Your Accommodation");
    }
    if (!city) {
      return toast.error("Please Enter Your City");
    }
    if (!housingType) {
      return toast.error("Please Enter Your Housing Type");
    }
    if (!martialStatus) {
      return toast.error("Please Enter Your Martial Status");
    }

    const createLeadData = {
      customerName,
      email,
      mobileNumber1,
      mobileNumber2,
      gender,
      dob,
      martialStatus,
      street,
      housingType,
      zip,
      accommodation,
      city,
      fiscalNumber,
      refTaxNotice,
      annualIncome,
      bankName,
    };

    await API.createLead(createLeadData)
      .then((resp) => {
        if (resp.status == 200) {
          toast.success(resp.data.message);

          navigate("/partner");
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
            <div className="Company-Detail-Box">
              <div className="Company-Details-Container">
                <div className="All-Form-Section">
                  <span className="Contact-Title">Personal Details</span>
                  <form className="Sign-Form">
                    <div className="Form-Box-Text">
                      <span className="Form-Box-Title">Customer Name</span>
                      <div className="FormBox-Top">
                        <input
                          className="NameBox-Top"
                          type="Name"
                          placeholder="Enter company Name"
                          value={customerName}
                          onChange={handleCustomerNameChange}
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
                          value={mobileNumber1}
                          onChange={handleNumber1Change}
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
                          value={mobileNumber2}
                          onChange={handleNumber2Change}
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
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </div>
                    </div>
                  </div>
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
                          value={dob}
                          onChange={handleDobChange}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Marital status</span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
                          value={martialStatus}
                          onChange={handleMaritalChange}
                        >
                          <option value="">Marital status</option>
                          <option>Single</option>
                          <option>Married</option>
                          <option>divorced</option>
                          <option>cohabitation</option>
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
                          value={street}
                          onChange={handleStreetChange}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Housing Type</span>
                      <div className="FormBox-Bottom-House">
                        <select
                          className="NameBox-Select-House"
                          value={housingType}
                          onChange={handleHousingTypeChange}
                        >
                          <option value="">Enter Housing Type</option>
                          <option>House</option>
                          <option>Flat</option>
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
                          value={zip}
                          onChange={handleZipChange}
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
                          onChange={handleAccommodationChange}
                        >
                          <option value="">Accommodation</option>
                          <option>Owner</option>
                          <option>Tenant</option>
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
                          <option>France</option>
                          <option>Pakistan</option>
                          <option>India</option>
                          <option>Bangladesh</option>
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
                          value={fiscalNumber}
                          onChange={handleFiscalChange}
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
                          value={refTaxNotice}
                          onChange={handleRefTaxNoticeChange}
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
                          value={annualIncome}
                          onChange={handleAnnualIncomeChange}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Bank</span>
                      <div className="FormBox-Bottom">
                        <input
                          className="NameBox-Select"
                          type="Name"
                          placeholder="Enter Bank Name"
                          value={bankName}
                          onChange={handleBankNameChange}
                        />
                      </div>
                    </div>
                  </div>
                  {showAttechment && (
                    <div className="File-Div">
                      <input type="file" />
                    </div>
                  )}
                  <div className="Form-Add-Button">
                    <button
                      className="Add-Button"
                      onClick={() => setShowAttechment(!showAttechment)}
                    >
                      Upload Document
                    </button>
                    <button
                      className="Add-Button"
                      onClick={(e) => oncreateLead(e)}
                    >
                      Add New Lead
                    </button>
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
