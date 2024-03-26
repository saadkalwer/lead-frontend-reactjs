import React, { useEffect, useState } from "react";
import { Detailstyled } from "./style";
import Sidebar from "../Sidebar/SideBar";
import { IoPersonSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { API } from "../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function UpdateCallCenter() {
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

    const [leads, setLeads] = useState([]);
    let { id } = useParams();
    const [lead, setLead] = useState({});

    const handleUserNameChange = (e) => {
        const updatedLead = { ...lead, userName: e.target.value };
        setLead(updatedLead);
    };
    const handleFirstNameChange = (e) => {
        const updatedLead = { ...lead, firstName: e.target.value };
        setLead(updatedLead);
    };
    const handleLastNameChange = (e) => {
        const updatedLead = { ...lead, lastName: e.target.value };
        setLead(updatedLead);
    };

    const handleMobileNo1Change = (e) => {
        const updatedLead = { ...lead, mobileNo1: e.target.value };
        setLead(updatedLead);
    };

    const handleMobileNo2Change = (e) => {
        const updatedLead = { ...lead, mobileNo2: e.target.value };
        setLead(updatedLead);
    };

    const handleEmailChange = (e) => {
        const updatedLead = { ...lead, email: e.target.value };
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

    const handleCityChange = (e) => {
        const updatedLead = { ...lead, city: e.target.value };
        setLead(updatedLead);
    };

    const handleRoleChange = (e) => {
        const updatedLead = { ...lead, role: e.target.value };
        setLead(updatedLead);
    };




    useEffect(() => {
        getLeadsByCompanyId(id);
    }, []);
    const getLeadsByCompanyId = async (id) => {

        await API.getUser({
            id: id,
        })
            .then((resp) => {

                if (resp.status == 200) {

                    setLead(resp.data.data);
                    toast.success(resp.data.message);
                }
            })
            .catch((e) => toast.error(e.response.data.message));
    };

    const updateCompany = async () => {
        // console.log("api check");
        lead.id = lead._id;
        await API.updateCompany(lead)
            .then((resp) => {
                // console.log();
                if (resp.status == 200) {
                    // console.log(resp.data.data);
                    // setLead(resp.data.data);
                    getLeadsByCompanyId(id);
                    navigate("/businessloan");
                    toast.success(resp.data.message);
                }
            })
            .catch((e) => toast.error(e.response.data.message));
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
                                <span className="call-center">
                                    Centre d'appel</span>
                            </div>
                        </div>
                        <div className="Company-Detail-Box">
                            <div className="Company-Details-Container">
                                <div className="All-Form-Section">
                                    <span className="Contact-Title">
                                        mettre à jour le centre d'appels</span>
                                    <form className="Sign-Form">
                                        <div className="Form-Box-Text">
                                            <span className="Form-Box-Title">Nom du client</span>
                                            <div className="FormBox-Top">
                                                <input
                                                    className="NameBox-Top"
                                                    type="Name"
                                                    placeholder="
                            Entrez le nom de l'entreprise"
                                                    value={
                                                        lead.userName ? lead.userName : userName
                                                    }
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
                                                    value={
                                                        lead.firstName ? lead.firstName : firstName
                                                    }
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
                                                    value={
                                                        lead.lastName ? lead.lastName : lastName
                                                    }
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
                                                    value={
                                                        lead.mobileNo1 ? lead.mobileNo1 : mobileNo1
                                                    }
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

                                                    value={
                                                        lead.email ? lead.email : email
                                                    }
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
                                                    value={
                                                        lead.mobileNo2 ? lead.mobileNo2 : mobileNo2
                                                    }
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
                                                    value={
                                                        lead.street ? lead.street : street
                                                    }
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
                                                    placeholder="Code postal "
                                                    value={
                                                        lead.zip ? lead.zip : zip
                                                    }
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
                                                value={
                                                    lead.city ? lead.city : city
                                                }
                                                onChange={handleCityChange}

                                            />
                                        </div>
                                    </div>

                                    <div className="Form-Add-Button">
                                        <button
                                            className="Add-Button"

                                            onClick={() => updateCompany()}
                                        >


                                            Ajouter
                                        </button>
                                        <button
                                            className="Cancel-Button"
                                            onClick={() => navigate("/businessloan")}
                                        >

                                            Annuler
                                        </button>
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


export default UpdateCallCenter