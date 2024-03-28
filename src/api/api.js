import { request } from "./apiHandler";

// export const base_url = "https://api-back-end.groupe-nexus-seniors.com/api/";
export const base_url = "http://localhost:8000/api/";

export const API = {
  signup: (registerdata) =>
    request.post(base_url + "users/signup", registerdata),
  login: (loginData) => request.post(base_url + "users/signin", loginData),
  forget: (forgetData) =>
    request.post(base_url + "users/forgot-password", forgetData),
  createLead: (createLeadData) =>
    request.post(base_url + "leads/create-lead", createLeadData),
  getAllLeads: (data) => request.post(base_url + "leads/get-all-leads", data),
  createCompany: (createCompanyData) =>
    request.post(base_url + "users/create-company", createCompanyData),
  getAllCompanies: (data) =>
    request.post(base_url + "users/get-all-companies", data),
  getAllCallCenter: (data) =>
    request.post(base_url + "users/get-all-callcenters", data),
  getAllCompaniesForAdmin: (data) =>
    request.post(base_url + "users/get-all-companies-for-admin", data),
  createEmployee: (createEmployeeData) =>
    request.post(base_url + "employees/create-employee", createEmployeeData),
  getAllEmployee: () => request.get(base_url + "employees/get-all-employees"),
  // getId: (id) => request.post(base_url + "employees/get-employee-by-id", id),
  getStats: () => request.get(base_url + "users/get-stats"),
  deleteLead: (data) => request.post(base_url + "leads/delete-lead", data),
  deleteCompany: (data) => request.post(base_url + "users/delete-user", data),

  getLeadById: (data) => request.post(base_url + "leads/get-lead-by-id", data),
  getUser: (data) => request.post(base_url + "users/get-user", data),
  updateLead: (data) => request.post(base_url + "leads/update-lead", data),
  updateCompany: (data) => request.post(base_url + "users/update-user", data),
  assignLead: (data) => request.post(base_url + "leads/assign-lead", data),
  getAllLeadsForAdmin: (data) =>
    request.post(base_url + "leads/get-all-leads-for-admin", data),
  getLeadsByCompanyId: (data) =>
    request.post(base_url + "leads/get-company-leads", data),
  getCompanyLeads: (id) =>
    request.post(base_url + "leads/get-company-leads", id),
  getNewPasword: (data) =>
    request.post(base_url + "users/change-password", data),
  getUpdatePassword: (data) =>
    request.post(base_url + "users/update-password", data),
};
