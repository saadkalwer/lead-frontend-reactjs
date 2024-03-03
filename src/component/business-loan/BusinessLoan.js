import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../../image/User.png";
import { FiBell } from "react-icons/fi";
import Sidebar from "../Sidebar/SideBar";
import { Partnerstyled } from "./style";
import { FiFilter } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { API } from "../../api/api";
import { toast } from "react-toastify";

function BusinessLoan() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
    getAllCompanies(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getAllCompanies(page);
  };

  const getAllCompanies = async () => {
    try {
      console.log(currentPage);
      const response = await API.getAllCompanies({
        page: currentPage,
      });
      const responseData = response.data;

      if (responseData && responseData.success) {
        setCompanies(responseData.data);
        // Handle pagination details if available in response
        toast.success(responseData.message);
      } else {
        toast.error("Failed to fetch companies");
      }
    } catch (error) {
      toast.error("Error fetching companies: " + error.message);
    }
  };

  // Use useEffect to fetch initial data
  useEffect(() => {
    getAllCompanies({ page: currentPage });
  }, [currentPage]);

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
                          {userData.userName}
                        </span>
                        <span className="Avatar-Text">Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Call-Center-Title">
                  <span className="call-center">Companies</span>
                </div>
              </div>
              <div className="Parter-Main-Section">
                <div className="Partner-Container">
                  <div className="Partner-Form-Header">
                    <div className="Header-Text">
                      <span>Company Lists</span>
                    </div>
                    <div className="Header-Button-Section">
                      <FiFilter className="Header-icon" />
                    </div>
                  </div>
                  <div className="Name-Filter-Box1">
                    <div className="kyc-search-box1">
                      <IoMdSearch className="kyc-icon1" />
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
                        <tr>
                          <th>Sl.No</th>
                          <th>Company Name</th>
                          <th>Owner Name</th>
                          <th>Contact Info</th>
                          <th>Location</th>
                          <th>Apply Date</th>
                          <th>City</th>
                        </tr>
                      </thead>
                      <tbody>
                        {companies?.users?.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="Client-Color">{item.userName}</td>
                            <td>{item.firstName}</td>
                            <td>{item.mobileNo1}</td>
                            <td>{item.street}</td>
                            <td>{formatDate(item.createdAt)}</td>
                            <td>{item.city}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="pagination-container">
                    <span className="pagination-text">
                      Showing{" "}
                      {(currentPage - 1) * companies?.pagination?.pageSize + 1}{" "}
                      to{" "}
                      {Math.min(
                        currentPage * companies?.pagination?.pageSize,
                        companies?.pagination?.totalItems
                      )}{" "}
                      of {companies?.pagination?.totalItems} results
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
