import React, { useState } from "react";
import { Detailstyled } from "./style";
import Sidebar from "../Sidebar-2/SideBar";
import { useNavigate } from "react-router-dom";

import { FiBell } from "react-icons/fi";

import { API } from "../../api/api";
import { toast } from "react-toastify";

function Profile() {
  const navigate = useNavigate();
  const [martialStatus, setMarital] = useState("");
  const [city, setCity] = useState("");
  const [housingType, setHousingType] = useState("");
  const [buildingMoreThenTwoOld, setBuildingMoreThenTwoOld] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber1, setNumber1] = useState("");
  const [mobileNumber2, setNumber2] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(null);
  const [dob, setDob] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [typeOfRadiators, setTypeOfRadiators] = useState("");
  const [numberOfTowelDryers, setNumberOfTowelDryers] = useState("");
  const [numberOfM2OfHouse, setNumberOfM2OfHouse] = useState("");
  const [heatingMode, setHeatingMode] = useState("");
  const [callCenterComment, setCallCenterComment] = useState("");
  const [numberOfRadiators, setNumberOfRadiators] = useState("");
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



  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };
  const handleZipChange = (e) => {
    setZip(e.target.value);
  };
  const handleTypeOfRadiatorsChange = (e) => {
    setTypeOfRadiators(e.target.value);
  };

  const handleNumberOfM2OfHouseChange = (e) => {
    setNumberOfM2OfHouse(e.target.value);
  };
  const handleNumberOfTowelDryersChange = (e) => {
    setNumberOfTowelDryers(e.target.value);
  };

  const handleHeatingModeChange = (e) => {
    setHeatingMode(e.target.value);
  };

  const handleHousingTypeChange = (event) => {
    setHousingType(event.target.value);
  };
  const handleBuildingMoreThenTwoOldChange = (event) => {
    setBuildingMoreThenTwoOld(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleAccommodationChange = (event) => {
    setAccommodation(event.target.value);
  };
  const handleNumberOfRadiatorsChange = (event) => {
    setNumberOfRadiators(event.target.value);
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



    if (!street) {
      return toast.error("Please Enter Your Street Address");
    }
    if (!typeOfRadiators) {
      return toast.error("Select type of Radiators");
    }





    if (!numberOfM2OfHouse) {
      return toast.error("Please Enter Your number of m2 of house");
    }
    if (!buildingMoreThenTwoOld) {
      return toast.error("Please Enter Your building more then two old");
    }
    if (!city) {
      return toast.error("Please Enter Your City");
    }
    if (!accommodation) {
      return toast.error("Please Enter Your Accommodatio");
    }
    if (!housingType) {
      return toast.error("Please Enter Your Housing Type");
    }
    if (!numberOfRadiators) {
      return toast.error("Please Enter Your Housing Type");
    }

    if (!numberOfTowelDryers) {
      return toast.error("Please Select Number Of Towel Dryers");
    }

    const createLeadData = {
      customerName,
      email,
      mobileNumber1,
      accommodation,


      street,
      housingType,
      zip,
      buildingMoreThenTwoOld,
      city,
      numberOfRadiators,
      numberOfM2OfHouse,
      typeOfRadiators,
      numberOfTowelDryers,
      heatingMode,
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
                    {/* <IoPersonSharp className="Manager-Avatar" /> */}
                    <div className="Avatar-Text-Section">
                      {/* <span className="Avatar-Title">Anna Adame</span>
                      <span className="Avatar-Text">Founder</span> */}
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
                          placeholder="+33"
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
                          placeholder="+33"
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
                      <span className="Form-Box-Title">Ville
                      </span>
                      <div className="FormBox-Bottom-House">
                        <input
                          className="NameBox-Select-House"
                          type="city"
                          placeholder="Entrez votre ville"
                          value={city}
                          onChange={handleCityChange}
                        />


                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Code postal
                      </span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="number"
                          placeholder="Entrez le code postal "
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
                          <option value="">
                            Sélectionnez l'hébergement</option>
                          <option >Hébergé</option>
                          <option>Propriétaire
                          </option>
                          <option> Locataire</option>
                        </select>
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">
                        Type de logement</span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
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

                  </div>
                  <div className="Names-Form-Bottom-Section">

                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">
                        Nombre de m2 de la maison</span>
                      <div className="FormBox-Bottom">
                        <input
                          className="NameBox-Select"
                          type="number"
                          placeholder="
                      Entrez Nombre de m2 de la maison"
                          value={numberOfM2OfHouse}
                          onChange={handleNumberOfM2OfHouseChange}
                        />
                      </div>
                    </div>

                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Batiment plus de 2 ans
                      </span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
                          value={buildingMoreThenTwoOld}
                          onChange={handleBuildingMoreThenTwoOldChange}
                        >
                          <option value="">
                            Sélectionnez Batiment plus de 2 ans</option>
                          <option >oui</option>
                          <option>non
                          </option>

                        </select>
                      </div>
                    </div>
                  </div>
                  {/* <span className="Form-Box-Title-Main">Statut Client</span> */}
                  <div className="City-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Type de radiateurs
                      </span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
                          value={typeOfRadiators}
                          onChange={handleTypeOfRadiatorsChange}
                        >
                          <option value="">
                            Sélectionnez Type de radiateurs</option>
                          <option >Hydraulique</option>
                          <option>Electrique
                          </option>
                          <option>Mixte
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">
                        Nombre de Radiateur</span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
                          value={numberOfRadiators}
                          onChange={handleNumberOfRadiatorsChange}
                        >
                          <option value="">
                            Sélectionnez Nombre de Radiateur
                          </option>
                          <option >
                            1
                          </option>
                          <option>2
                          </option>
                          <option>3
                          </option>
                          <option>4
                          </option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>

                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">
                        Nombre de sèche serviette</span>
                      <div className="FormBox-Bottom">
                        <select
                          className="NameBox-Select"
                          value={numberOfTowelDryers}
                          onChange={handleNumberOfTowelDryersChange}
                        >
                          <option value="">
                            Sélectionnez Nombre de sèche serviette
                          </option>
                          <option >
                            0
                          </option>
                          <option >
                            1
                          </option>
                          <option>2
                          </option>
                          <option>3
                          </option>
                          <option>4
                          </option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>


                        </select>
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">
                        Mode de chauffage</span>
                      <div className="FormBox-Bottom">

                        <select
                          className="NameBox-Select"
                          value={heatingMode}
                          onChange={handleHeatingModeChange}
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
