import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Sidebar from "./component/Sidebar/SideBar";
import Partner from "./component/partner/Partner";
import Customer from "./component/customer/customer";
import DsaListing from "./component/dsa-company-list/DsaListing";
import DsaClient from "./component/dsa-client-list/DsaClient";
import BusinessLoan from "./component/business-loan/BusinessLoan";
import Profile from "./component/Admin-Forms/Profile";
import AddEmploye from "./component/add-employe/AddEmploye";
import Listlist from "./component/lead-list/Leadlist";
import NewPassword from "./component/new-password/newpassword";
import Forget from "./component/Forget-password/Forget";
import Companydetails from "./component/company-details/Companydetails";
import CompanyPartner from "./component/Company-partner/CompanyPartner";
import Update from "./component/Update-Form/Update";
import Setting from "./component/Setting/Setting";
import { ProtectedRoute } from "./protectroute";
import { SuperAdminRoute } from "./SuperAdminRoute";
import { CallCenterRoute } from "./CallCenterRoute";
import { CompanyRoute } from "./CompanyRoute";
import User from "./component/User/User";
import CompanyViewDetails from "./component/Company-View-Details/CompanyViewDetails";
import CallCenterDetails from "./component/Call-Center-Details/CallCenterDetails";
import UpdateCompany from "./component/Update-Company/UpdateCompany";
import UpdateCallCenter from "./component/Update-Call-Center/UpdateCallCenter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <ProtectedRoute  >

            <Homepage />
            //  </ProtectedRoute>
          }
        />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route
          path="/partner"
          element={
            <ProtectedRoute>
              <CallCenterRoute>
                <Partner />{" "}
              </CallCenterRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/customer/:id"
          element={

            <Customer />

          }
        />
        <Route
          path="/company-view-details/:id"
          element={

            <CompanyViewDetails />

          }
        />
        <Route
          path="/call-center-details/:id"
          element={

            <CallCenterDetails />

          }
        />
        <Route
          path="/dsa-company-list"
          element={
            <ProtectedRoute>
              <SuperAdminRoute>
                <DsaListing />
              </SuperAdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dsa-client-list"
          element={
            <ProtectedRoute>
              <SuperAdminRoute>
                <DsaClient />
              </SuperAdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/businessloan"
          element={
            <ProtectedRoute>
              <SuperAdminRoute>
                <BusinessLoan />
              </SuperAdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/company-details"
          element={
            <ProtectedRoute>
              <SuperAdminRoute>
                <Companydetails />{" "}
              </SuperAdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-employe"
          element={
            <ProtectedRoute>
              <SuperAdminRoute>
                <AddEmploye />
              </SuperAdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/list-lead"
          element={
            <ProtectedRoute>
              <SuperAdminRoute>
                <Listlist />
              </SuperAdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/company-partner"
          element={
            <ProtectedRoute>
              <CompanyRoute>
                <CompanyPartner />
              </CompanyRoute>
            </ProtectedRoute>
          }
        />
        <Route path="/reset-password/:token" element={<NewPassword />} />
        <Route path="/forget" element={<Forget />} />
        <Route
          path="/admin-form"
          element={<Profile />}
        />
        <Route
          path="/update-form/:id"
          element={
            <ProtectedRoute>
              <SuperAdminRoute>
                <Update />
              </SuperAdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-company/:id"
          element={
            <ProtectedRoute>
              <SuperAdminRoute>
                <UpdateCompany />
              </SuperAdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-call-center/:id"
          element={
            <ProtectedRoute>
              <SuperAdminRoute>
                <UpdateCallCenter />
              </SuperAdminRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/setting"
          element={
            <ProtectedRoute>
              <Setting />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
