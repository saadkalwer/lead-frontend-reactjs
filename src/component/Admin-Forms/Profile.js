import React, { useState } from "react";
import { Detailstyled } from "./style";
import Sidebar from "../Sidebar/SideBar";
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
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
  const [callCenterComment, setCallCenterComment] = useState("");

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleCallCenterCommentChange = (e) => {
    setCallCenterComment(e.target.value);
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
      callCenterComment,
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

                </div>
                <div className="Bell-Main-Section">
                  <div className="Bell-Section">
                    <FiBell className="Bell-Icon" />
                  </div>
                  <div className="Avatar-Main-Section">
                    <IoPersonSharp className="Manager-Avatar" />
                    <div className="Avatar-Text-Section">
                      <span className="Avatar-Title">Anna Adame</span>
                      <span className="Avatar-Text">Founder</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Call-Center-Title">
                <span className="call-center">Nouveau responsable</span>
              </div>
            </div>
            <div className="Company-Detail-Box">
              <div className="Company-Details-Container">
                <div className="All-Form-Section">
                  <span className="Contact-Title">Details du profile
                  </span>
                  <form className="Sign-Form">
                    <div className="Form-Box-Text">
                      <span className="Form-Box-Title">
                        Nom du client</span>
                      <div className="FormBox-Top">
                        <input
                          className="NameBox-Top"
                          type="Name"
                          placeholder="
                          Entrez le nom de l'entreprise"
                          value={customerName}
                          onChange={handleCustomerNameChange}
                        />
                      </div>
                    </div>
                  </form>
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Téléphone 1
                      </span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Number"
                          placeholder="+91|90000 00000"
                          value={mobileNumber1}
                          onChange={handleNumber1Change}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Telephone 2
                      </span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Number"
                          placeholder="+91|9000000000"
                          value={mobileNumber2}
                          onChange={handleNumber2Change}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Email ID
                      </span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Email"
                          placeholder="Entrez l'identifiant de messagerie"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </div>
                    </div>
                  </div>
                  <span className="Form-Box-Title-Main">Genre</span>
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
                      <span className="Form-Box-Title">Date de naissance</span>
                      <div className="FormBox-Bottom">
                        <input
                          className="NameBox-Center"
                          type="date"
                          id="birthday"
                          name="birthday"
                          placeholder="Entrer date de naissance"
                          value={dob}
                          onChange={handleDobChange}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">
                        État civil</span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
                          value={martialStatus}
                          onChange={handleMaritalChange}
                        >
                          <option value="">
                            Veuf
                          </option>
                          <option>Célibataire
                          </option>
                          <option>Marié
                          </option>
                          <option> Divorcé
                          </option>
                          <option>Concubinage</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <span className="Form-Box-Title-Main">
                    Détails de l'adresse</span>
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Rue</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Adress"
                          placeholder="
                          Entrez la rue"
                          value={street}
                          onChange={handleStreetChange}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">
                        Type de logement</span>
                      <div className="FormBox-Bottom-House">
                        <select
                          className="NameBox-Select-House"
                          value={housingType}
                          onChange={handleHousingTypeChange}
                        >
                          <option value="">Entrez le type de logement</option>
                          <option>Maison
                          </option>
                          <option>Appartement</option>
                        </select>
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Code postal
                      </span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="code"
                          placeholder="

                          Entrez le code postal
                          "
                          value={zip}
                          onChange={handleZipChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="City-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Statut de l'occupant
                      </span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
                          value={accommodation}
                          onChange={handleAccommodationChange}
                        >
                          <option value="">Hébergé</option>
                          <option>Propriétaire
                          </option>
                          <option> Locataire</option>
                        </select>
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Ville
                      </span>
                      <div className="FormBox-Bottom">
                        <input
                          className="NameBox-Select"
                          type="city"
                          placeholder="Entrez votre ville"
                          value={city}
                          onChange={handleCityChange}
                        />


                      </div>
                    </div>
                  </div>
                  <span className="Form-Box-Title-Main">Statut Client</span>
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Numéro fiscal</span>
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
                      <span className="Form-Box-Title">
                        Réf. Avis d'impôt</span>
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
                      <span className="Form-Box-Title">
                        Revenu annuel</span>
                      <div className="FormBox-Bottom">
                        <input
                          className="NameBox-Select"
                          type="Number"
                          placeholder="
                          Entrez le revenu annuel"
                          value={annualIncome}
                          onChange={handleAnnualIncomeChange}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">
                        Mode de chauffage</span>
                      <div className="FormBox-Bottom">

                        <select
                          className="NameBox-Select"
                          value={bankName}
                          onChange={handleBankNameChange}
                        >
                          <option value="">
                            Sélectionnez votre mode de chauffage</option>
                          <option>Gaz
                          </option>
                          <option>Fioul
                          </option>
                          <option>Électrique
                          </option>
                          <option>Pompe à chaleur

                          </option>
                          <option> Bois
                          </option>
                          <option> Clim réversible

                          </option>
                          <option>Autre
                          </option>
                        </select>
                      </div>
                    </div>

                  </div>
                  <div className="Form-Box-Text-Bottom">
                    <span className="Form-Box-Title">
                      Commentaire</span>
                    <div className="FormBox-Comment">

                      <textarea
                        className="NameBox-Comment"
                        placeholder="Ajouter un commentaire"
                        value={callCenterComment}
                        onChange={handleCallCenterCommentChange}
                        rows={5}
                      ></textarea>

                    </div>
                  </div>
                  {/* {showAttechment && (
                    <div className="File-Div">
                      <input type="file" />
                    </div>
                  )} */}
                  <div className="Form-Add-Button">
                    {/* <button
                      className="Add-Button"
                      onClick={() => setShowAttechment(!showAttechment)}
                    >
                      Upload Document
                    </button> */}
                    <button
                      className="Add-Button"
                      onClick={(e) => oncreateLead(e)}
                    >
                      Ajouter un nouveau prospect
                    </button>
                    <button className="Cancel-Button" onClick={() => navigate("/partner")}>Annuler</button>
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
