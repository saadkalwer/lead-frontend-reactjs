import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/SideBar";
import { Partnerstyled } from "./style";
import { FiFilter } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { API } from "../../api/api";
import { toast } from "react-toastify";
function DsaListing() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [companies, setCompanies] = useState([]);
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


  const userData = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    getAllCompanies(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getAllCompanies(page);
  };

  const getAllCompanies = async () => {
    try {
      const response = await API.getAllCompanies({
        page: currentPage,
        searchTerm,
      });
      const responseData = response.data;

      if (responseData && responseData.success) {
        setCompanies(responseData.data.users);
        // Handle pagination details if available in response
        toast.success(responseData.message);
      } else {
        toast.error("Failed to fetch companies");
      }
    } catch (error) {
      toast.error("Error fetching companies: " + error.message);
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
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  };

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
                          {" "}
                          {userData.userName}
                        </span>
                        <span className="Avatar-Text">Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Call-Center-Title">
                  <span className="call-center">Super Admin</span>
                </div>
              </div>
              <div className="Parter-Main-Section">
                <div className="Partner-Container">
                  <div className="Partner-Form-Header">
                    <div className="Header-Text">
                      <span>DSA List</span>
                    </div>
                    <div className="Header-Button-Section">

                      <button
                        className="Header-Button"
                        onClick={() => navigate("/company-details")}
                      >

                        + Attribuer
                      </button>
                    </div>
                  </div>
                  <div className="Client-Company-Tags">
                    <div
                      className="Client-Tag"
                      onClick={() => navigate("/dsa-client-list")}
                    >
                      Client
                    </div>
                    <div className="Company-Tag">Company</div>
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
                          <th>ID
                          </th>
                          <th>Code postal
                          </th>
                          <th>Nom et prénom
                          </th>
                          <th>Téléphone 1
                          </th>
                          <th>Rue
                          </th>
                          <th>Industrie</th>
                          <th>Ajouté le </th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {companies.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="Client-Color">{item.zip}</td>
                            <td>{item.firstName}</td>

                            <td>{item.mobileNo1}</td>
                            <td>{item.street}</td>
                            <td>{item.role}</td>
                            <td>{formatDate(item.createdAt)}</td>
                            <td className="Icons-Gapping">

                              <MdOutlineDelete
                                onClick={(e) => handleDelete(e, item._id)}
                                className="Table-Icons1"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="pagination-container">
                    <div>
                      <span className="pagination-text">

                      </span>

                    </div>

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

export default DsaListing;
