import React from "react";
import Sidebar from "../Sidebar/SideBar";
import { Partnerstyled } from "./style";
import { FiFilter } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { VscListFlat } from "react-icons/vsc";
import Avatar from "../../image/User.png";
import { FiBell } from "react-icons/fi";

function DsaClient() {
  const data = [
    {
      code: "12454",
      clientName: "abc",
      mobileNumber: "+91 85274 74185",
      city: "Pune",
      callType: "₹20,00,000",
      productRequested: "01/11/2023 11:30 AM",
      requestedOn: "Assigned",
    },
  ];
  const Table = [
    {
      code: "12454",
      clientName: "abc",
      mobileNumber: "+91 85274 74185",
      city: "Pune",
      callType: "₹20,00,000",
      productRequested: "01/11/2023 11:30 AM",
      requestedOn: "Unassigned",
    },
    {
      code: "12454",
      clientName: "abc",
      mobileNumber: "+91 85274 74185",
      city: "Pune",
      callType: "₹20,00,000",
      productRequested: "01/11/2023 11:30 AM",
      requestedOn: "Unassigned",
    },
  ];
  const data2 = [
    {
      code: "12454",
      clientName: "abc",
      mobileNumber: "+91 85274 74185",
      city: "Pune",
      callType: "₹20,00,000",
      productRequested: "01/11/2023 11:30 AM",
      requestedOn: "Assigned",
    },
  ];
  return (
    <>
      <Sidebar>
        <Partnerstyled>
          <div className="Business-Main-Section">
            <div className="Business-Container">
              <div className="Sidebar-Header-Content">
                <div className="Sidebar-Header-Section">
                  <div className="Sidebar-Search-Box-Section">
                    <VscListFlat className="Listing-Icon" />
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
                        <span className="Avatar-Title">Anna Adame</span>
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
                      <button className="Header-Button">+ Assign</button>
                    </div>
                  </div>
                  <div className="Client-Company-Tags">
                    <div className="Client-Tag">Client</div>
                    <div className="Company-Tag">Company</div>
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
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.code}</td>
                            <td className="Client-Color">{item.clientName}</td>
                            <td>{item.mobileNumber}</td>
                            <td>{item.city}</td>
                            <td>{item.callType}</td>
                            <td>{item.productRequested}</td>
                            <td className="Status-Color">{item.requestedOn}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tbody>
                        {Table.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.code}</td>
                            <td className="Client-Color">{item.clientName}</td>
                            <td>{item.mobileNumber}</td>
                            <td>{item.city}</td>
                            <td>{item.callType}</td>
                            <td>{item.productRequested}</td>
                            <td className="Status-Color1">
                              {item.requestedOn}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tbody>
                        {data2.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.code}</td>
                            <td className="Client-Color">{item.clientName}</td>
                            <td>{item.mobileNumber}</td>
                            <td>{item.city}</td>
                            <td>{item.callType}</td>
                            <td>{item.productRequested}</td>
                            <td className="Status-Color">{item.requestedOn}</td>
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
