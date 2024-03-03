import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/SideBar";
import { Partnerstyled } from "./style";
import { FiFilter } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineUpload } from "react-icons/ai";
import { API } from "../../api/api";
import { toast } from "react-toastify";
import { TbEdit } from "react-icons/tb";
import { VscEye } from "react-icons/vsc";
import { MdOutlineDelete } from "react-icons/md";
import Avatar from "../../image/User.png";
import { FiBell } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Leadlist() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({});
  const [companies, setCompanies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [companyId, setcompanyId] = useState("");
  // Define options here
  const options = [
    { label: "Option 1" },
    { label: "Option 2" },
    { label: "Option 3" },
  ];
  console.log(leadId, companyId);

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
          <p className="Title">Select Companies To Assign</p>
          <select
            className="Selecting-Box"
            onChange={(e) => setcompanyId(e.target.value)}
          >
            {companies.map((item) => (
              <option key={item._id} value={item._id}>
                {item.companyName}
              </option>
            ))}
          </select>
          <button className="Add-Button" onClick={(e) => handleAssign(e)}>
            Assign{" "}
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
    await API.getAllLeadsForAdmin()
      .then((resp) => {
        if (resp.status == 200) {
          setLeads(resp.data.data);
          // toast.success(resp.data.message);
        }
      })
      .catch((e) => toast.error(e.response.data.message));
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
    await API.getAllCompanies()
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
                  <span className="call-center">Leads</span>
                </div>
              </div>
              <div className="dashboard">
                <div className="dashboard-container">
                  <div className="dashboard-item">
                    <div className="label">Total Leads</div>
                    <div className="value">{stats.totalLeads}</div>
                  </div>
                  <div className="dashboard-item">
                    <div className="label">Company</div>
                    <div className="value1">{stats.companies}</div>
                  </div>
                  <div className="dashboard-item">
                    <div className="label">Clients</div>
                    <div className="value2">{stats.clients}</div>
                  </div>
                  <div className="dashboard-item">
                    <div className="label">Booking</div>
                    <div className="value3">{stats.booking}</div>
                  </div>
                  <div className="dashboard-item">
                    <div className="label">Expired</div>
                    <div className="value4">{stats.expired}</div>
                  </div>
                </div>
              </div>
              <div className="Parter-Main-Section">
                <div className="Partner-Container">
                  <div className="Partner-Form-Header">
                    <div className="Header-Text">
                      <span>Leads list</span>
                    </div>
                    <div className="Header-Button-Section">
                      <FiFilter className="Header-icon" />
                      <button className="Header-Button">
                        <AiOutlineUpload className="Upload-button" /> Export
                        file
                      </button>
                    </div>
                  </div>
                  <div className="Name-Filter-Box1">
                    <div className="kyc-search-box1">
                      <IoMdSearch className="kyc-icon" />
                      <input
                        className="kyc-search1"
                        type="text"
                        placeholder="Type a keyword..."
                      />
                    </div>
                  </div>
                  <div className="Table-Section">
                    <table>
                      <thead>
                        <tr className="Tr-Font-Color">
                          <th>Sl.No</th>
                          <th>Lead No</th>
                          <th>Customer Name</th>
                          <th>Mobile Number</th>
                          <th>Country</th>
                          <th>Bank Name</th>
                          <th>Status</th>
                          <th>Requested on</th>
                          <th>Action</th>
                          <th>Assign Companies</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leads.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="Client-Color">
                              {item.fiscalNumber}
                            </td>
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

                              <VscEye className="Table-Icons" />
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
                                Assign Company
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
                      Showing 1 to 5 of 10 results
                    </span>
                    <div className="pagination-buttons">
                      <button className="page-button">Previous</button>

                      <button className="page-button1">1</button>
                      <button className="page-button2">2</button>

                      <button className="page-button3">Next</button>
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
