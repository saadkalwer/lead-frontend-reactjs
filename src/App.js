import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Sidebar from "./component/Sidebar/SideBar";
import Partner from "./component/partner/Partner";
import Customer from "./component/customer/customer";
import DsaListing from "./component/dsa-company-list/DsaListing";
import DsaClient from "./component/dsa-client-list/DsaClient";
import BusinessLoan from "./component/business-loan/BusinessLoan";
import Profile from "./component/profile-section/Profile";
import AddEmploye from "./component/add-employe/AddEmploye";
import Listlist from "./component/lead-list/Leadlist";
import NewPassword from "./component/new-password/newpassword";
import Forget from "./component/Forget-password/Forget";
import Header from "./component/header-page/HeaderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/dsa-company-list" element={<DsaListing />} />
        <Route path="/dsa-client-list" element={<DsaClient />} />
        <Route path="/businessloan" element={<BusinessLoan />} />
        <Route path="/company-details" element={<Profile />} />
        <Route path="/add-employe" element={<AddEmploye />} />
        <Route path="/list-lead" element={<Listlist />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
