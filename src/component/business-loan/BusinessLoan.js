import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import Sidebar from "../Sidebar/SideBar";
import { Partnerstyled } from "./style";
import { IoMdSearch } from "react-icons/io";
import { API } from "../../api/api";
import { toast } from "react-toastify";
import { MdOutlineDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { VscEye } from "react-icons/vsc";

function BusinessLoan() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [DeleteId, setDeleteId] = useState("");
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
  const toggleDeleteModal = (e, _id) => {
    setIsDeleteModalOpen(!isDeleteModalOpen);

    setDeleteId(_id);
  };

  const DeleteModal = ({ isOpen, closeModal, id }) => {

    if (!isOpen) return null;
    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <p className="Title">Are You Sure</p>

          <div className="DeleteButtons">
            <button className="del-Button" onClick={closeModal}>Annuler</button>
            <button className="del-Button" onClick={(e) => handleDelete(e, id)}>

              Continuer
            </button></div>
        </div>
      </div>
    );
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getAllCompanies();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, currentPage]);


  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      getAllCompanies();
    }
  };




  useEffect(() => {
    getAllCompanies(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getAllCompanies(page);
  };

  const getAllCompanies = async () => {
    try {
      const response = await API.getAllCallCenter({
        page: currentPage,
        searchTerm,
      });
      const responseData = response.data;

      if (responseData && responseData.success) {
        setCompanies(responseData.data);
        // Handle pagination details if available in response
        // toast.success(responseData.message);
      } else {
        // toast.error("Failed to fetch companies");
      }
    } catch (error) {
      // toast.error("Error fetching companies: " + error.message);
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    await API.deleteCompany({
      id: id,
    })
      .then((resp) => {
        // console.log(resp);
        if (resp.status == 200) {
          toast.success(resp.data.message);
          // console.log(resp.data.data);
          getAllCompanies();
          toggleDeleteModal();
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
                      <IoPersonSharp className="Manager-Avatar" />
                      <div className="Avatar-Text-Section">
                        <span className="Avatar-Title">
                          {userData.userName}
                        </span>
                        <span className="Avatar-Text">Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Call-Center-Title">
                  <span className="call-center">
                    Liste des centres d'appels</span>
                </div>
              </div>
              <div className="Parter-Main-Section">
                <div className="Partner-Container">
                  <div className="Partner-Form-Header">
                    <div className="Header-Text">
                      <span>
                        Liste des centres d'appels</span>
                    </div>
                    <div className="Header-Button-Section">

                    </div>
                  </div>
                  <div className="Name-Filter-Box1">
                    <div className="kyc-search-box1">
                      <IoMdSearch className="kyc-icon1" />
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
                          <th>ID
                          </th>
                          <th> Nom et prénom

                          </th>
                          <th>Centre d'appel</th>
                          <th>Informations de contact
                          </th>
                          <th>Rue
                          </th>
                          <th>Ajouté le
                          </th>
                          <th>Ville</th>
                          <th>Code postal
                          </th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {companies?.users?.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="Client-Color">{item.userName}</td>
                            <td>{item.role}</td>
                            <td>{item.mobileNo1}</td>
                            <td>{item.street}</td>
                            <td>{formatDate(item.createdAt)}</td>
                            <td>{item.city}</td>
                            <td>{item.zip}</td>
                            <td className="Icons-Gapping">
                              <TbEdit
                                className="Table-Icons"
                                onClick={() =>
                                  navigate(`/update-call-center/${item._id}`)
                                }
                                key={index}
                              />

                              <VscEye className="Table-Icons"
                                onClick={() =>
                                  navigate(`/call-center-details/${item._id}`)
                                }

                              />
                              <MdOutlineDelete
                                onClick={(e) => toggleDeleteModal(e, item._id)}
                                className="Table-Icons1"
                              />
                              <DeleteModal
                                isOpen={isDeleteModalOpen}
                                closeModal={toggleDeleteModal}
                                id={item._id}
                              />
                            </td>
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
                        Array(companies?.pagination?.totalPages).keys()
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
                          currentPage === companies?.pagination?.totalPages
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

export default BusinessLoan;
