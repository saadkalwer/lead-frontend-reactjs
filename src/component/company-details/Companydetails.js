import React, { useEffect, useState } from "react";
import { Detailstyled } from "./style";
import Sidebar from "../Sidebar/SideBar";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { API } from "../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Companydetails() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [role, setRole] = useState("");
  const [assignedClient, setAssignedClient] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo1, setMobileNo1] = useState("");
  const [mobileNo2, setMobileNo2] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leads, setLeads] = useState([]);

  const handleClose = () => {
    setIsModalOpen(false);
    navigate("/businessloan");
  };

  useEffect(() => {
    getAllLeads();
  }, []);

  const getAllLeads = async () => {
    await API.getAllLeadsForAdmin()
      .then((resp) => {
        if (resp.status == 200) {
          setLeads(resp.data.data.leads);
          // toast.success(resp.data.message);
        }
      })
    // .catch((e) => toast.error(e.response.data.message));
  };
  const Modal = () => {
    return (
      <div className="modal-overlay" onClick={() => handleClose()}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={() => handleClose()}>
            &times;
          </span>
          <p className="Title">{userEmail}</p>
          <p className="Title">{userPassword}</p>
        </div>
      </div>
    );
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleMobileNo1Change = (e) => {
    setMobileNo1(e.target.value);
  };
  const handleMobileNo2Change = (e) => {
    setMobileNo2(e.target.value);
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
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const handleAssignedClientChange = (event) => {
    setAssignedClient(event.target.value);
  };

  const oncreateCompany = async (e) => {
    e.preventDefault();

    if (!userName) {
      return toast.error("Please Enter Your Customer Name");
    }
    if (!firstName) {
      return toast.error("Please Enter Your First Name");
    }
    if (!lastName) {
      return toast.error("Please Enter Your Last Name");
    }

    if (!mobileNo1) {
      return toast.error("Please Enter Your 1st Number");
    }
    // if (!mobileNo2) {
    //   return toast.error("Please Enter Your 2nd Number");
    // }
    if (!email) {
      return toast.error("Please Enter Your Email");
    }

    if (!street) {
      return toast.error("Please Enter Your Street Address");
    }

    const createCompanyData = {
      firstName,
      lastName,
      userName,
      email,
      mobileNo1,
      mobileNo2,
      street,
      zip,
      city,
      role,
      assignedClient,
    };

    await API.createCompany(createCompanyData)
      .then((resp) => {
        if (resp.status == 200) {
          setUserEmail(resp.data.data.email);
          setUserPassword(resp.data.data.randomPassword);
          // toast.success(resp.data.message);
          setIsModalOpen(true);
          // navigate("/businessloan");
        }
      })
    // .catch((e) => toast.error(e.response.data.message));
  };

  const userData = JSON.parse(localStorage.getItem("user"));
  return (
    <Sidebar>
      <Detailstyled>
        <div className="Business-Main-Section">
          <div className="Business-Container">
            <div className="Sidebar-Header-Content">
              <div className="Sidebar-Header-Section">
                <div></div>
                <div className="Bell-Main-Section">

                  <div className="Avatar-Main-Section">
                    <IoPersonSharp className="Manager-Avatar" />
                    <div className="Avatar-Text-Section">
                      <span className="Avatar-Title">{userData.userName}</span>
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
                      <span className="Form-Box-Title">Nom du client</span>
                      <div className="FormBox-Top">
                        <input
                          className="NameBox-Top"
                          type="Name"
                          placeholder="
                          Entrez le nom de l'entreprise"
                          value={userName}
                          onChange={handleUserNameChange}
                        />
                      </div>
                    </div>
                  </form>
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">
                        Prénom</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Name"
                          placeholder="
                          Entrez votre prénom"
                          value={firstName}
                          onChange={handleFirstNameChange}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">

                        Nom de famille</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Name"
                          placeholder="
                          Entrer le nom de famille"
                          value={lastName}
                          onChange={handleLastNameChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Téléphone 1
                      </span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Name"
                          placeholder="+91 | 90000 00000"
                          value={mobileNo1}
                          onChange={handleMobileNo1Change}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Email ID</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Email"
                          placeholder="
                          Entrez l'identifiant de messagerie"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </div>
                    </div>
                  </div>
                  <form className="Sign-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Telephone 2
                      </span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Number"
                          placeholder="+91 | 90000 00000"
                          value={mobileNo2}
                          onChange={handleMobileNo2Change}
                        />
                      </div>
                    </div>
                  </form>
                  <span className="Contact-Title1">
                    Détails de l'adresse</span>
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">

                        Rue</span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="Street"
                          placeholder="

                          Entrez la rue"
                          value={street}
                          onChange={handleStreetChange}
                        />
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Code postal
                      </span>
                      <div className="FormBox">
                        <input
                          className="NameBox"
                          type="code"
                          placeholder="Code postal
                          "
                          value={zip}
                          onChange={handleZipChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="Form-Box-Text-Bottom">
                    <span className="Form-Box-Title">Ville
                    </span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="city"
                        placeholder="
                        Entrez votre ville"
                        value={city}
                        onChange={handleCityChange}
                      />
                    </div>
                  </div>
                  <span className="Contact-Title1">Catégorie</span>
                  <div className="Names-Form">
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Produit</span>
                      <div className="FormBox">
                        <select
                          className="NameBox-Select"
                          value={role}
                          onChange={handleRoleChange}
                        >
                          <option value="">Sélectionnez un rôle</option>
                          <option>Company</option>
                          <option>Super Admin</option>
                          <option>Call Center</option>
                        </select>
                      </div>
                    </div>
                    <div className="Form-Box-Text-Bottom">
                      <span className="Form-Box-Title">Client assigné</span>
                      <div className="FormBox">
                        <select
                          className="NameBox-Select"
                          value={assignedClient}
                          onChange={handleAssignedClientChange}
                        >
                          <option value="">Select Assigned</option>
                          {leads.map((item) => (
                            <option key={item._id} value={item._id}>
                              {item.customerName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="Form-Add-Button">
                    <button
                      className="Add-Button"
                      onClick={(e) => oncreateCompany(e)}
                    >


                      Ajouter
                    </button>
                    <button
                      className="Cancel-Button"
                      onClick={() => navigate("/dsa-company-list")}
                    >

                      Annuler
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && <Modal />}
      </Detailstyled>
    </Sidebar>
  );
}

export default Companydetails;
