import React, { useEffect, useState } from "react";
import { Detailstyled } from "./style";
import Sidebar from "../Sidebar/SideBar";
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { API } from "../../api/api";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));
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
  const [status, setStatus] = useState("");
  const [fiscalNumber, setFiscal] = useState("");
  const [refTaxNotice, setRefTaxNotice] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [bankName, setBankName] = useState("");
  const [adminComment, setAdminComment] = useState("");
  const [lead, setLead] = useState({});
  let { id } = useParams();

  console.log(id);
  const handleCustomerNameChange = (e) => {
    const updatedLead = { ...lead, customerName: e.target.value };
    setLead(updatedLead);
  };

  const handleNumber1Change = (e) => {
    const updatedLead = { ...lead, mobileNumber1: e.target.value };
    setLead(updatedLead);
  };
  const handleNumber2Change = (e) => {
    const updatedLead = { ...lead, mobileNumber2: e.target.value };
    setLead(updatedLead);
  };
  const handleEmailChange = (e) => {
    const updatedLead = { ...lead, email: e.target.value };
    setLead(updatedLead);
  };
  const handleGenderChange = (selectedGender) => {
    const updatedLead = { ...lead, gender: selectedGender };
    setLead(updatedLead);
  };

  const handleDobChange = (e) => {
    const updatedLead = { ...lead, adminComment: e.target.value };
    setLead(updatedLead);
  };
  const handleAdminCommentChange = (e) => {
    const updatedLead = { ...lead, adminComment: e.target.value };
    setLead(updatedLead);
  };
  const handleCallCenterCommentChange = (e) => {
    const updatedLead = { ...lead, callCenterComment: e.target.value };
    setLead(updatedLead);
  };
  const handleStreetChange = (e) => {
    const updatedLead = { ...lead, street: e.target.value };
    setLead(updatedLead);
  };
  const handleZipChange = (e) => {
    const updatedLead = { ...lead, zip: e.target.value };
    setLead(updatedLead);
  };
  const handleFiscalChange = (e) => {
    const updatedLead = { ...lead, fiscalNumber: e.target.value };
    setLead(updatedLead);
  };

  const handleStatusChange = (e) => {
    const updatedLead = { ...lead, status: e.target.value };
    setLead(updatedLead);
  };
  const handleAnnualIncomeChange = (e) => {
    const updatedLead = { ...lead, annualIncome: e.target.value };
    setLead(updatedLead);
  };
  const handleRefTaxNoticeChange = (e) => {
    const updatedLead = { ...lead, refTaxNotice: e.target.value };
    setLead(updatedLead);
  };

  const handleBankNameChange = (event) => {
    const updatedLead = { ...lead, bankName: event.target.value };
    setLead(updatedLead);
  };
  const handleMaritalChange = (event) => {
    const updatedLead = { ...lead, martialStatus: event.target.value };
    setLead(updatedLead);
  };
  const handleHousingTypeChange = (event) => {
    const updatedLead = { ...lead, housingType: event.target.value };
    setLead(updatedLead);
  };
  const handleAccommodationChange = (event) => {
    const updatedLead = { ...lead, accommodation: event.target.value };
    setLead(updatedLead);
  };
  const handleCityChange = (event) => {
    const updatedLead = { ...lead, city: event.target.value };
    setLead(updatedLead);
  };

  useEffect(() => {
    getLeadById(id);
  }, []);
  const getLeadById = async (id) => {
    console.log("api check");
    await API.getLeadById({
      id: id,
    })
      .then((resp) => {
        console.log();
        if (resp.status == 200) {
          console.log(resp.data.data);
          setLead(resp.data.data);
          toast.success(resp.data.message);
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  };

  const updateLead = async () => {
    // console.log("api check");
    lead.id = lead._id;
    await API.updateLead(lead)
      .then((resp) => {
        // console.log();
        if (resp.status == 200) {
          // console.log(resp.data.data);
          // setLead(resp.data.data);
          getLeadById(id);
          navigate("/list-lead");
          toast.success(resp.data.message);
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
                <span className="call-center">Responsable de la mise à jour</span>
              </div>
            </div>
            <div className="Company-Detail-Box">
              <div className="Company-Details-Container">
                <div className="All-Form-Section">
                  <span className="Contact-Title">Responsable de la mise à jour</span>
                  <form className="Sign-Form">
                    <div className="Form-Box-Text">
                      <span className="Form-Box-Title">

                        Nom du client</span>
                      <div className="FormBox-Top">
                        <input
                          className="NameBox-Top"
                          type="Name"
                          placeholder="Enter company Name"
                          value={
                            lead.customerName ? lead.customerName : customerName
                          }
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
                          placeholder="+91 | 90000 00000"
                          value={lead.mobileNumber1 ? lead.mobileNumber1 : ""}
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
                          placeholder="+91 | 90000 00000"
                          value={lead.mobileNumber2 ? lead.mobileNumber2 : ""}
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
                          placeholder="Entrez l'identifiant de messagerie"
                          value={lead.email ? lead.email : ""}
                          onChange={handleEmailChange}
                        />
                      </div>
                    </div>
                  </div>
                  <span className="Form-Box-Title-Main">Genre</span>
                  <div className="Check-Box-Section">
                    <label>
                      <input
                        type="radio" // Change to radio for exclusive selection
                        checked={lead.gender === "male"}
                        onChange={() => handleGenderChange("male")}
                      />
                      {" Male"}
                    </label>
                    <label>
                      <input
                        type="radio" // Change to radio for exclusive selection
                        checked={lead.gender === "female"}
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
                          value={lead.dob ? lead.dob : ""}
                          onChange={handleDobChange}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">État civil</span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
                          value={lead.martialStatus ? lead.martialStatus : ""}
                          onChange={handleMaritalChange}
                        >
                          <option value="">
                            Sélectionnez le statut martial
                          </option>
                          <option >Veuf
                          </option>
                          <option>Célibataire
                          </option>
                          <option>Marié
                          </option>
                          <option>Divorcé
                          </option>
                          <option>Concubinage</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <span className="Form-Box-Title-Main">Détails de l'adresse</span>
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Rue</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Adress"
                          placeholder=" Entrez la rue"
                          value={lead.street ? lead.street : ""}
                          onChange={handleStreetChange}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Type de logement</span>
                      <div className="FormBox-Bottom-House">
                        <select
                          className="NameBox-Select-House"
                          value={lead.housingType ? lead.housingType : ""}
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
                      <span className="Form-Box-Title">Code postal</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="code"
                          placeholder="Entrez le code postal"
                          value={lead.zip ? lead.zip : ""}
                          onChange={handleZipChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="City-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Statut de l'occupant</span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
                          value={lead.accommodation ? lead.accommodation : ""}
                          onChange={handleAccommodationChange}
                        >
                          <option value="">
                            Sélectionnez l'hébergement</option>
                          <option >Hébergé
                          </option>
                          <option>Propriétaire
                          </option>
                          <option>Locataire</option>
                        </select>
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Ville</span>
                      <div className="FormBox-Bottom">
                        <input
                          type="City"
                          placeholder="Entrez votre ville"
                          className="NameBox-Select"
                          value={lead.city ? lead.city : ""}
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
                          value={lead.fiscalNumber ? lead.fiscalNumber : ""}
                          onChange={handleFiscalChange}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Réf. Avis d'impôt</span>
                      <div className="FormBox-Bottom">
                        <input
                          className="NameBox-Select"
                          type="Number"
                          placeholder="124"
                          value={lead.refTaxNotice ? lead.refTaxNotice : ""}
                          onChange={handleRefTaxNoticeChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Revenu annuel</span>
                      <div className="FormBox-Bottom">
                        <input
                          className="NameBox-Select"
                          type="Number"
                          placeholder="Entrez le revenu annuel"
                          value={lead.annualIncome ? lead.annualIncome : ""}
                          onChange={handleAnnualIncomeChange}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Mode de chauffage</span>
                      <div className="FormBox-Bottom">

                        <select
                          className="NameBox-Select"
                          value={lead.bankName ? lead.bankName : ""}
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
                          <option> Pompe à chaleur

                          </option>
                          <option> Bois

                          </option>
                          <option>Clim réversible

                          </option>
                          <option> Autre
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="Names-Form-Comment">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">
                        Commentaire centre d'appel</span>
                      <div className="FormBox-Comment">

                        <textarea
                          className="NameBox-Comment"
                          placeholder="
    Ajouter un commentaire"

                          value={lead.callCenterComment ? lead.callCenterComment : ""}
                          onChange={handleCallCenterCommentChange}
                          rows={5}
                        ></textarea>

                      </div>
                    </div>
                    <div className="Form-Box-Text-Status">
                      <span className="Form-Box-Title">
                        Statut</span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
                          value={lead.status ? lead.status : ""}
                          onChange={handleStatusChange}
                        >
                          <option value="" >Sélectionnez le statut
                          </option>
                          <option  >Nouveau lead
                          </option>
                          <option>En cours de traitement
                          </option>
                          <option>Rendez-vous
                          </option>

                          <option>NRP
                          </option>
                          <option>Annuler
                          </option>
                          <option>Installé
                          </option>
                          <option>Payé</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="Form-Box-Text-Bottom">
                    <span className="Form-Box-Title">

                      Commentaire de l'administrateur</span>
                    <div className="FormBox-Comment">

                      <textarea
                        className="NameBox-Comment"
                        placeholder="Add a Comment"

                        value={lead.adminComment ? lead.adminComment : ""}
                        onChange={handleAdminCommentChange}
                        rows={5}
                      ></textarea>

                    </div>
                  </div>
                  <div className="Form-Add-Button">
                    <button onClick={() => updateLead()} className="Add-Button">
                      Modifier le formulaire
                    </button>
                    <button className="Cancel-Button" onClick={() => navigate("/list-lead")}>
                      Annuler</button>
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

export default Update;
