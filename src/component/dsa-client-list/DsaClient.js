import Sidebar from "../Sidebar/SideBar";
import { Partnerstyled } from "./style";
import { FiFilter } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Avatar from "../../image/User.png";
import { FiBell } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { API } from "../../api/api";
import { toast } from "react-toastify";

function DsaClient() {
  const navigate = useNavigate();
  const [allEmployees, setAllEmployees] = useState([]);

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
    getAllEmployees();
  }, []);
  const getAllEmployees = async () => {
    console.log("api check");
    await API.getAllLeadsForAdmin()
      .then((resp) => {
        if (resp.status == 200) {
          setAllEmployees(resp.data.data);
          toast.success(resp.data.message);
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
                      <FiFilter className="Header-icon" />
                    </div>
                  </div>
                  <div className="Client-Company-Tags">
                    <div className="Client-Tag">Client</div>
                    <div
                      className="Company-Tag"
                      onClick={() => navigate("/dsa-company-list")}
                    >
                      Company
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
                        <tr>
                          <th>Sl.No</th>
                          <th>Code</th>
                          <th>Client Name</th>
                          <th>Mobile Number</th>
                          <th>Location</th>
                          <th>Product Requested</th>
                          <th>Requested on</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allEmployees.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.fiscalNumber}</td>
                            <td className="Client-Color">
                              {item.customerName}
                            </td>
                            <td>{item.mobileNumber1}</td>
                            <td>{item.city}</td>
                            <td>{item.annualIncome}</td>
                            <td>{formatDate(item.createdAt)}</td>
                            <td className="Status-Color">{item.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default DsaClient;
