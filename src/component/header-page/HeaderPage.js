import React from "react";
import { VscListFlat } from "react-icons/vsc";
import { IoMdSearch } from "react-icons/io";
import Avatar from "../../image/User.png";
import { FiBell } from "react-icons/fi";
import { HeaderStyle } from "./style";

function HeaderPage() {
  return (
    <HeaderStyle>
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
          <span>Call Center</span>
        </div>
      </div>
    </HeaderStyle>
  );
}

export default HeaderPage;
