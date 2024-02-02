import React from "react";
import Sidebar from "../Sidebar/SideBar";
import { Partnerstyled } from "./style";
import { FiFilter } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineUpload } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { VscEye } from "react-icons/vsc";
import { MdOutlineDelete } from "react-icons/md";
import { VscListFlat } from "react-icons/vsc";
import Avatar from "../../image/User.png";
import { FiBell } from "react-icons/fi";
function Leadlist() {
  const data = [
    {
      code: "1001",
      clientName: "Lorem Ipsum",
      mobileNumber: "Lorem Ipsum",
      city: "Lorem Ipsum",
      callType: "Lorem Ipsum",
      productRequested: "Ankita - 741852963",

      status: "Rejected",
    },
  ];
  const Table = [
    {
      code: "1001",
      clientName: "Lorem Ipsum",
      mobileNumber: "Lorem Ipsum",
      city: "Lorem Ipsum",
      callType: "Lorem Ipsum",

      status1: "Expired",
    },
  ];
  const data2 = [
    {
      code: "1001",
      clientName: "Lorem Ipsum",
      mobileNumber: "Lorem Ipsum",
      city: "Lorem Ipsum",
      callType: "Lorem Ipsum",

      status2: "Completed",
    },
  ];
  const Lead = [
    { label: "TOTAL LEADS", value: 100 },
    { label: "COMPANY", value1: 100 },
    { label: "CLIENTS", value2: 100 },
    { label: "BOOKING", value3: 100 },
    { label: "EXPIRED", value4: 100 },
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
                  <span className="call-center">Leads</span>
                </div>
              </div>
              <div className="dashboard">
                <div className="dashboard-container">
                  {Lead.map((item, index) => (
                    <div key={index} className="dashboard-item">
                      <div className="label">{item.label}</div>
                      <div className="value">{item.value}</div>
                      <div className="value1">{item.value1}</div>
                      <div className="value2">{item.value2}</div>
                      <div className="value3">{item.value3}</div>
                      <div className="value4">{item.value4}</div>
                    </div>
                  ))}
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
                      <button className="Header-Button">
                        {" "}
                        Monthly{" "}
                        <MdOutlineArrowDropDown className="Upload-button" />
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
                          <th>Product Category</th>
                          <th>Product Name</th>
                          <th>Status</th>
                          <th>Assign Partner</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="Client-Color">{item.code}</td>
                            <td>{item.clientName}</td>
                            <td>{item.mobileNumber}</td>
                            <td>{item.city}</td>
                            <td>{item.callType}</td>
                            <td className="Status-Color1">{item.status}</td>
                            <td>{item.productRequested}</td>
                            <td className="Icons-Gapping">
                              <TbEdit className="Table-Icons" />{" "}
                              <VscEye className="Table-Icons" />
                              <MdOutlineDelete className="Table-Icons1" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tbody>
                        {Table.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="Client-Color">{item.code}</td>
                            <td>{item.clientName}</td>
                            <td>{item.mobileNumber}</td>
                            <td>{item.city}</td>
                            <td>{item.callType}</td>
                            <td className="Status-Color2">{item.status1}</td>
                            <td>
                              <button className="Assign-Button">
                                <IoMdInformationCircleOutline className="InfoIcon" />
                                Assign Partner
                              </button>
                            </td>
                            <td className="Icons-Gapping">
                              {" "}
                              <TbEdit className="Table-Icons" />{" "}
                              <VscEye className="Table-Icons" />
                              <MdOutlineDelete className="Table-Icons1" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tbody>
                        {data2.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="Client-Color">{item.code}</td>
                            <td>{item.clientName}</td>
                            <td>{item.mobileNumber}</td>
                            <td>{item.city}</td>
                            <td>{item.callType}</td>
                            <td className="Status-Color">{item.status2}</td>
                            <td>
                              <button className="Assign-Button">
                                <IoMdInformationCircleOutline className="InfoIcon" />
                                Assign Partner
                              </button>
                            </td>
                            <td className="Icons-Gapping">
                              <TbEdit className="Table-Icons" />{" "}
                              <VscEye className="Table-Icons" />
                              <MdOutlineDelete className="Table-Icons1" />
                            </td>
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

export default Leadlist;
