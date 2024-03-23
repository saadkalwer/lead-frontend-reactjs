import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/SideBar";
import { Partnerstyled } from "./style";
import { FiFilter } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineUpload } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { API } from "../../api/api";
import { toast } from "react-toastify";
import { TbEdit } from "react-icons/tb";
import { VscEye } from "react-icons/vsc";
import { MdOutlineDelete } from "react-icons/md";

import * as XLSX from 'xlsx';


import { useNavigate } from "react-router-dom";

function Leadlist() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({});
  const [companies, setCompanies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leadId, setLeadId] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
  const [companyId, setcompanyId] = useState("");
  // Define options here
  const handlePageChange = (page) => {
    setCurrentPage(page);
    getAllLeads(page);
  };
  const options = [
    { label: "Option 1" },
    { label: "Option 2" },
    { label: "Option 3" },
  ];
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(leads);
    XLSX.utils.book_append_sheet(wb, ws, "Leads");
    XLSX.writeFile(wb, "leads.xlsx");
  };
  const toggleModal = (_id) => {
    setIsModalOpen(!isModalOpen);
    setLeadId(_id);
  };
  const handleAssign = async () => {
    if (!companyId) {
      return toast.error("Select Company First");
    }
    if (!leadId) {
      return toast.error("lead not found");
    }
console.log(leadId, companyId)
    await API.assignLead({
      
      leadId: leadId,
      companyId: companyId,
    })
      .then((resp) => {
        if (resp.status == 200) {
          toast.success(resp.data.message);

          getAllLeads();
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  };

  // Modal component
  const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;
    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <p className="Title">Sélectionnez les entreprises à attribuer</p>
          <select
            className="Selecting-Box"
            onChange={(e) => setcompanyId(e.target.value)}
          >
            {companies.map((item) => (
              <option key={item._id} value={item.userName}>
                {item.userName}
              </option>
            ))}
          </select>
          <button className="Add-Button" onClick={(e) => handleAssign(e)}>
          
Attribuer
          </button>
        </div>
      </div>
    );
  };
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
  useEffect(() => {
    getStats();
    getAllCompanies();
    getAllLeads();
  }, []);

  const getAllLeads = async () => {
    try {
     
      const response = await API.getAllLeadsForAdmin({
        page: currentPage, 
      });
  
      const responseData = response.data;
  
      if (responseData && responseData.success) {
        setLeads(responseData.data.leads);
        toast.success(responseData.message);
      } else {
        toast.error("Failed to fetch employees");
      }
    } catch (error) {
      toast.error("Error fetching employees: " + error.message);
    }
  };
   
  const getStats = async () => {
    // console.log("api check");
    await API.getStats()
      .then((resp) => {
        // console.log(resp);
        if (resp.status == 200) {
          setStats(resp.data.data);
          // toast.success(resp.data.message);
          // console.log(resp.data.data);
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    await API.deleteLead({
      id: id,
    })
      .then((resp) => {
        // console.log(resp);
        if (resp.status == 200) {
          toast.success(resp.data.message);
          // console.log(resp.data.data);
          getAllLeads();
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  };
  const getAllCompanies = async () => {
    // console.log("api check");
    await API.getAllCompaniesForAdmin()
      .then((resp) => {
        // console.log(resp);
        if (resp.status == 200) {
          setCompanies(resp.data.data);
          // toast.success(resp.data.message);
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  };
  const userData = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Sidebar>
        <Partnerstyled>
          <div className="Business-Main-Section">
            <div className="Business-Container">
              <div className="Sidebar-Header-Content">
                <div className="Sidebar-Header-Section">
                  <div className="Sidebar-Search-Box-Section">
                
                  </div>
                  <div className="Bell-Main-Section">
                  
                    <div className="Avatar-Main-Section">
                    <IoPersonSharp className="Manager-Avatar"  />
                      <div className="Avatar-Text-Section">
                        <span className="Avatar-Title">
                          {" "}
                          {userData.userName}
                        </span>
                        <span className="Avatar-Text">Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Call-Center-Title">
                  <span className="call-center">Liste des leads

</span>
                </div>
              </div>
              <div className="dashboard">
                <div className="dashboard-container">
                  <div className="dashboard-item">
                    <div className="label">Totale leads
</div>
                    <div className="value">{stats.totalLeads}</div>
                  </div>
                  <div className="dashboard-item">
                    <div className="label">Société</div>
                    <div className="value1">{stats.companies}</div>
                  </div>
                  <div className="dashboard-item">
                    <div className="label">Clients</div>
                    <div className="value2">{stats.clients}</div>
                  </div>
                  <div className="dashboard-item">
                    <div className="label">Reservation</div>
                    <div className="value3">{stats.booking}</div>
                  </div>
                  <div className="dashboard-item">
                    <div className="label">Expiré</div>
                    <div className="value4">{stats.expired}</div>
                  </div>
                </div>
              </div>
              <div className="Parter-Main-Section">
                <div className="Partner-Container">
                  <div className="Partner-Form-Header">
                    <div className="Header-Text">
                      <span>Liste des leads

</span>
                    </div>
                    <div className="Header-Button-Section">
                     
                    <button className="Header-Button" onClick={exportToExcel}>
                    <AiOutlineUpload className="Upload-button" /> Exporter vers excel

                  </button>
                    </div>
                  </div>
                  <div className="Name-Filter-Box1">
                    <div className="kyc-search-box1">
                      <IoMdSearch className="kyc-icon" />
                      <input
                        className="kyc-search1"
                        type="text"
                        placeholder="Taper un mot clé
                        "
                      />
                    </div>
                  </div>
                  <div className="Table-Section">
                    <table>
                      <thead>
                        <tr className="Tr-Font-Color">
                          <th>ID
</th>
                          <th>Code postal
</th>
                          <th>Call Center</th>
                          <th>Nom et prénom
</th>
                          <th>Téléphone 1
</th>
                          <th>Ville
</th>
                          <th>
Mode de chauffage</th>
                          <th>statut</th>
                          <th>Ajouté le 
</th>
                          <th>Action</th>
                          <th>Attribuer des sociétés
</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leads.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="Client-Color">
                              {item.fiscalNumber}
                            </td>
                            <td>{item?.userId?.userName}</td>
                            <td>{item.customerName}</td>
                            <td>{item.mobileNumber1}</td>
                            <td>{item.city}</td>
                            <td>{item.bankName}</td>
                            <td className="Status-Color1">{item.status}</td>
                            <td>{formatDate(item.createdAt)}</td>

                            <td className="Icons-Gapping">
                              <TbEdit
                                className="Table-Icons"
                                onClick={() =>
                                  navigate(`/update-form/${item._id}`)
                                }
                                key={index}
                              />

                              <VscEye className="Table-Icons"    onClick={() =>
                                  navigate(`/customer/${item._id}`)
                                } />
                              <MdOutlineDelete
                                onClick={(e) => handleDelete(e, item._id)}
                                className="Table-Icons1"
                              />
                            </td>
                            <td>
                              <button
                                className="Assign-Button"
                                onClick={() => toggleModal(item._id)}
                              >
                              Attribuer une entreprise
                              </button>
                              <Modal
                                isOpen={isModalOpen}
                                closeModal={toggleModal}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <Modal
                      isOpen={isModalOpen}
                      closeModal={toggleModal}
                      options={options}
                    />
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
        className={`page-button${
          currentPage === pageNumber + 1 ? " active" : ""
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
      </Sidebar>
    </>
  );
}

export default Leadlist;
