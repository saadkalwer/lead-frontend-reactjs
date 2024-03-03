import axios from "axios";

export const request = axios.create();

request.interceptors.request.use(function (config) {
  let token = localStorage.getItem("token");
  console.log(token);
  config.headers["Accept"] = "application/json";
  config.headers["Authorization"] = token ? "Bearer " + token : "";
  return config;
});
