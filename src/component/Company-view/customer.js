import React, { useEffect, useState } from "react";
import { API } from "../../api/api";
import { toast } from "react-toastify";
import Sidebar from "../Sidebar-3/SideBar3";
import { Customerstyled } from "./style";
import { IoPersonSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";

function Customer() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState({});
  const [lead, setlead] = useState([]);
  const [Id, setId] = useState();
  let { id } = useParams();
  function formatDate(dateString) {
    // Create a new Date object from the dateString
    const date = new Date(dateString);

    // Format the date as per your requirements, forcing UTC timezone
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",

      timeZone: "UTC" // Force UTC timezone
    });

    return formattedDate;
  }

  useEffect(() => {

    getLeadsByCompanyId();
  }, []);

  const getLeadsByCompanyId = async () => {
    await API.getLeadById({
      id: id,
    })
      .then((resp) => {
        if (resp.status == 200) {
          setUser(resp.data.data);
          // toast.success(resp.data.message);
        }
      })
    // .catch((e) => toast.error(e.response.data.message));
  };
  return (
    <>
      <Sidebar>
        <Customerstyled>
          <div className="Table-Fixing">
            <div className="Business-Main-Section">
              <div className="Business-Container">
                <div className="Sidebar-Header-Content">
                  <div className="Sidebar-Header-Section">
                    <div className="Sidebar-Search-Box-Section">

                    </div>
                    <div className="Bell-Main-Section">
                      <div className="Bell-Section">

                      </div>
                      <div className="Avatar-Main-Section">

                        <div className="Avatar-Text-Section">
                          <span className="Avatar-Title">
                            {user.partnerName}
                          </span>
                          <span className="Avatar-Text">{user.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Call-Center-Title">
                    <span className="call-center">Nouveau lead
                    </span>
                  </div>
                </div>
                <div className="Customer-Main-Section">
                  <div className="Customer-Container">
                    <div className="Profile-Main-Section">
                      <div className="Profile-Container">

                        <IoPersonSharp className="Profile-Img" />
                        <span className="Profile-Text">
                          {" "}
                          {userData.userName}
                        </span>
                      </div>
                    </div>
                    <div className="Profile-Detail-Section">
                      <div className="Profile-Detail-Container">
                        <div className="Profile-Button-Section">
                          <button className="Profile-Button">
                            {" "}
                            Details du profile

                          </button>
                        </div>
                        <p className="Detail-Title">Details du profile
                        </p>
                        <div className="Details-Box-Section">
                          <div className="Name-Box-Section">
                            <span className="Name-Title"> Nom et prénom
                            </span>
                            <span className="Name-Text">
                              {user.customerName}
                            </span>
                          </div>
                          <div className="Name-Box-Section">
                            <span className="Name-Title">Ville
                            </span>
                            <span className="Name-Text">{user.city}</span>
                          </div>
                          <div className="Name-Box-Section">
                            <span className="Name-Title">Revenue annuel
                            </span>
                            <span className="Name-Text">
                              {user.annualIncome}
                            </span>
                          </div>
                          <div className="Name-Box-Section">
                            <span className="Name-Title">Code postal
                            </span>
                            <span className="Name-Text">{user.zip}</span>
                          </div>
                          <div className="Name-Box-Section">
                            <span className="Name-Title">Téléphone 1
                            </span>
                            <span className="Name-Text">
                              {user.mobileNumber1}
                            </span>
                          </div>
                          <div className="Name-Box-Section">
                            <span className="Name-Title">Email
                            </span>
                            <span className="Name-Text">{user.email}</span>
                          </div>
                        </div>
                      </div>
                      <p className="Detail-Title">Détails du client</p>
                      <div className="Details-Box-Section">
                        <div className="Name-Box-Section">
                          <span className="Name-Title"> Ajouté le
                          </span>
                          <span className="Name-Text">
                            {formatDate(user.createdAt)}
                          </span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Rue
                          </span>
                          <span className="Name-Text">{user.street}</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Type de logement
                          </span>
                          <span className="Name-Text">{user.housingType}</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Statut de l'occupant</span>
                          <span className="Name-Text">{user.accommodation}</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Numéro fiscal</span>
                          <span className="Name-Text">{user.fiscalNumber}</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Avis de référence</span>
                          <span className="Name-Text">{user.annualIncome}</span>
                        </div>
                      </div>
                      <div className="Details-Box-Section">

                        <div className="Name-Box-Section">
                          <span className="Name-Title">Genre </span>
                          <span className="Name-Text">{user.gender}</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Date de naissance</span>
                          <span className="Name-Text" > {formatDate(user.dob)}</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title"> Situation maritale</span>
                          <span className="Name-Text">{user.martialStatus}</span>
                        </div>
                        <div className="Name-Box-Section">
                          <span className="Name-Title">Mode de chauffage</span>
                          <span className="Name-Text">{user.heatingMode}</span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Customerstyled>
      </Sidebar>
    </>
  );
}

export default Customer;
