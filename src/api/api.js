import { request } from "./apiHandler";

// export const base_url = "https://api-back-end.groupe-nexus-seniors.com/api/";
export const base_url = "http://192.168.10.11:8000/api/";

export const API = {
  signup: (registerdata) =>
    request.post(base_url + "users/signup", registerdata),
  login: (loginData) => request.post(base_url + "users/signin", loginData),
  forget: (forgetData) =>
    request.post(base_url + "users/forgot-password", forgetData),
  createLead: (createLeadData) =>
    request.post(base_url + "leads/create-lead", createLeadData),
  getAllLeads: () => request.get(base_url + "leads/get-all-leads"),
  createCompany: (createCompanyData) =>
    request.post(base_url + "users/create-company", createCompanyData),
  getAllCompanies: (data) =>
    request.post(base_url + "users/get-all-companies", data),
  createEmployee: (createEmployeeData) =>
    request.post(base_url + "employees/create-employee", createEmployeeData),
  getAllEmployee: () => request.get(base_url + "employees/get-all-employees"),
  getId: (id) => request.post(base_url + "employees/get-employee-by-id", id),
  getStats: () => request.get(base_url + "users/get-stats"),
  deleteLead: (data) => request.post(base_url + "leads/delete-lead", data),
  getLeadById: (data) => request.post(base_url + "leads/get-lead-by-id", data),
  updateLead: (data) => request.post(base_url + "leads/update-lead", data),
  assignLead: (data) => request.post(base_url + "leads/assign-lead", data),
  getAllLeadsForAdmin: () =>
    request.get(base_url + "leads/get-all-leads-for-admin"),
  getLeadsByCompanyId: (data) =>
    request.post(base_url + "leads/get-company-leads", data),
  getCompanyLeads: (id) =>
    request.post(base_url + "leads/get-company-leads", id),
  getNewPasword: (data) =>
    request.post(base_url + "users/change-password", data),
};
