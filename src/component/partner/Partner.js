import React, { useEffect, useState } from "react";
import Sidebars from "../Sidebar-2/SideBar";
import { Partnerstyled } from "./style";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { API } from "../../api/api";
import { toast } from "react-toastify";

function Partner() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  function formatDate(dateString) {
    // Create a new Date object from the dateString
    const date = new Date(dateString);

    // Format the date as per your requirements
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // If you want 12-hour format
    });

    return formattedDate;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Nouveau lead': // New lead
        return '#7b7777';
      case 'En cours de traitement': // In process
        return 'rgb(255 143 0)';
      case 'Annuler': // Canceled
        return 'red';
      case 'Rendez-vous': // Appointment
        return 'rgb(171, 0, 255)';
      case 'NRP': // Visit
        return 'rgb(0 217 255))';
      case 'Installé': // Install
        return 'rgb(39, 181, 84)';
      case 'Payé': // Paid
        return 'rgb(255, 0, 174)';
      default:
        return 'black'; // Default color if status is unknown
    }
  };

  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getAllLeads();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, currentPage]);


  const handleSearchChange = (e) => {
    const term = e.target.value;

    setSearchTerm(term);

    if (term.trim() === '') {
      getAllLeads();
    }
  };
  useEffect(() => {
    getAllLeads();
  }, []);

  const getAllLeads = async () => {

    try {

      const response = await API.getAllLeads({
        page: currentPage,
        searchTerm,
      });

      const responseData = response.data;

      if (responseData && responseData.success) {
        setLeads(responseData.data.leads);
        // toast.success(responseData.message);
      } else {
        // toast.error("Failed to fetch employees");
      }
    } catch (error) {
      // toast.error("Error fetching employees: " + error.message);
    }
  };

  return (
    <>
      <Sidebars>
        <Partnerstyled>
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
                      <IoPersonSharp className="Manager-Avatar" />
                      <div className="Avatar-Text-Section">
                        <span className="Avatar-Title">
                          {userData.userName}
                        </span>
                        <span className="Avatar-Text">
                          {userData.role == "callCenter" ? "Call Center" : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Call-Center-Title">
                  <span className="call-center">Centre d'appel</span>
                </div>
              </div>
              <div className="Parter-Main-Section">
                <div className="Partner-Container">
                  <div className="Partner-Form-Header">
                    <div className="Header-Text">
                      <span>Totale leads
                      </span>
                    </div>
                    <div className="Header-Button-Section">

                      <button
                        className="Header-Button"
                        onClick={() => navigate("/admin-form")}
                      >
                        + Ajouter un nouveau prospect
                      </button>
                    </div>
                  </div>
                  <div className="Name-Filter-Box1">
                    <div className="kyc-search-box1">
                      <IoMdSearch className="kyc-icon" />
                      <input
                        className="kyc-search1"
                        type="text"
                        placeholder="Taper un mot clé"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                    </div>
                  </div>
                  <div className="Table-Section">
                    <table>
                      <thead>
                        <tr>
                          <th> ID
                          </th>
                          <th>Nom et prénom
                          </th>
                          <th>Ville
                          </th>
                          <th>Code postal
                          </th>
                          <th>Téléphone 1
                          </th>
                          <th>Statut</th>
                          <th>Ajouté le
                          </th>
                          <th>Genre</th>
                          <th>Commentaire call center</th>
                          <th>Commentaire installateur
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {leads.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>

                            <td className="Client-Color">
                              {item.customerName}
                            </td>
                            <td>{item.city}</td>
                            <td>{item.zip}</td>
                            <td>{item.mobileNumber1}</td>

                            <td className="Status-Color" style={{ color: getStatusColor(item.status) }}>
                              {item.status}
                            </td>
                            <td>{formatDate(item.createdAt)}</td>
                            <td>{item.gender}</td>
                            <td>{item.callCenterComment}</td>
                            <td>{item.adminComment}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="pagination-container">
                    <span className="pagination-text">

                    </span>
                    <div className="pagination-buttons">
                      <button
                        className="page-button"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                      {Array.from(
                        Array(leads?.pagination?.totalPages).keys()
                      ).map((pageNumber) => (
                        <button
                          key={pageNumber}
                          className={`page-button${currentPage === pageNumber + 1 ? " active" : ""
                            }`}
                          onClick={() => setCurrentPage(pageNumber + 1)}
                        >
                          {pageNumber + 1}
                        </button>
                      ))}
                      <button
                        className="page-button"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={
                          currentPage === leads?.pagination?.totalPages
                        }
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Partnerstyled>
      </Sidebars>
    </>
  );
}

export default Partner;
