import styled from "styled-components";

export const Customerstyled = styled.div`
  background-color: #f3f3f9;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  .Table-Fixing {
    display: flex;

    align-items: center;
    overflow: auto;
    gap: 30px;
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }
  .Customer-Main-Section {
    display: flex;
    width: 95%;
  }
  .Customer-Container {
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    width: 100%;
  }
  .Profile-Main-Section {
    background-color: white;
    width: 330px;
    font-size: 17px;
    display: flex;
    margin-top: 20px;
    justify-content: center;
    height: 280px;
  }
  .Profile-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .Profile-Img {
    width: 120px;
    height: 80px;
  }
  .Profile-Text {
    font-size: 18px;
    font-weight: 500;
    color: #2d2f39;
  }
  .Profile-Detail-Section {
    background-color: white;
    width: 90%;
    font-size: 17px;
    display: flex;
    margin-top: 20px;
    gap: 10px;
    height: 500px;
    flex-direction: column;
  }
  .Profile-Detail-Container {
    display: flex;

    flex-direction: column;

    padding-bottom: 19px;

    width: 100%;
  }
  .Profile-Button-Section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #ebecf2;
    width: 98.8%;
    margin-bottom: 30px;
    margin-left: 10px;
    border: 1px solid #dadfe3;
  }

  .Detail-Title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
    margin-left: 30px;
  }
  .Details-Box-Section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #f6f6fb;
    padding-bottom: 19px;
  }
  .Name-Box-Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3px;
  }
  .Name-Title {
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
    color: #a4a7ab;
  }
  .Name-Text {
    font-size: 14px;
    font-weight: 500;
   
  }
  .Profile-Button {
    width: 150px;
    height: 43px;
    gap: 1px;
    background-color: #34437a;
    color: #ffffff;
    border: none;
    border-radius: 2px;
    font-size: 16px;
  }

  .Business-Main-Section {
    width: 100%;
    display: flex;
    flex-direction: column;

    height: 100vh;
  }
  .Business-Container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .Sidebar-Header-Section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    background-color: #ffffff;
    border-bottom: 1px solid #f1f1f7;
    padding-bottom: 10px;
  }
  .Sidebar-Header-Content {
    width: 100%;
    display: flex;

    flex-direction: column;
  }
  .Sidebar-Search-Box-Section {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .kyc-search {
    width: 200px;
    height: 29px;
    font-size: 13px;
    border: none;
    outline: none;
    color: black;
    background-color: #edeaf4;
  }
  .kyc-search-box {
    display: flex;
    align-items: center;
    background-color: #edeaf4;
    padding: 4px;
    margin-left: 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  .kyc-icon {
    width: 20px;
    height: 18px;
    color: #878a99;
  }

  .Listing-Icon {
    width: 47px;
    height: 30px;
    color: #878a99;
  }
  .Avatar-Main-Section {
    display: flex;

    margin-right: 30px;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .Avatar-Title {
    font-size: 14px;
    font-weight: 400;

    color: #2d2f39;
  }
  .Avatar-Text {
    font-size: 15px;
    font-weight: 500;
    color: #2d2f39;
  }
  .Manager-Avatar {
    height: 35px;
  }
  .Avatar-Text-Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .Bell-Main-Section {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;
  }
  .Bell-Icon {
    color: #495057;
    width: 30px;
    height: 25px;
  }
  .Call-Center-Title {
    font-size: 20px;
    font-weight: 500;
    color: #2d2f39;
    background-color: #ffffff;
    padding-left: 20px;
    padding-top: 10px;
  }
  .Parter-Main-Section-1 {
    background-color: white;
    width: 90%;
    font-size: 17px;
    display: flex;
    margin-top: 60px;
    justify-content: center;
    height: 500px;
  }
  .Partner-Container-1 {
    display: flex;

    flex-direction: column;
    width: 95%;
  }
  .Partner-Form-Header-1 {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin-top: 10px;
    padding: 10px;
    border-bottom: 1px solid #34437a;
  }
  .Header-Text-1 {
    font-size: 20px;
    font-weight: 500;
  }
  .Header-Button-Section-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .Header-icon-1 {
    width: 28px;
    height: 24px;
    background-color: #ebecf2;
    border: 1px solid #34437a;
    color: #34437a;
    border-radius: 5px;
  }
  .Header-Button-1 {
    width: 176px;
    height: 46px;
    gap: 10px;
    background-color: #34437a;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
  }
  .kyc-search-1 {
    width: 180px;
    height: 15px;
    font-size: 14px;
    border: none;
    outline: none;
    color: black;
    background-color: white;
  }
  .kyc-search-box-1 {
    display: flex;
    align-items: center;
    background-color: white;
    border: 1px solid #ced4da;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
  }
  .kyc-icon-1 {
    width: 20px;
    height: 18px;
    color: #878a99;
  }
  .Name-Filter-Box-1 {
    display: flex;
    align-items: center;
    width: 200px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .table-wrapper {
    margin: 20px;
    overflow-x: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 16px;
  }

  thead {
    background-color: #f4f4f4;
    font-size: 15px;
  }

  th,
  td {
    padding: 12px 15px;
    border: 1px solid #ddd;
  }

  tbody tr:nth-child(even) {
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  th {
    position: sticky;
    top: 0;
  }

  /* Style the pagination */
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .pagination button {
    padding: 5px 15px;
    margin: 0 5px;
    border: 1px solid #ddd;
    background: #f4f4f4;
    cursor: pointer;
  }

  .pagination button.active {
    background-color: #007bff;
    color: white;
  }

  .pagination button:hover {
    background-color: #007bff;
    color: white;
  }
  .Status-Color {
    color: #007bff;
  }
  .Status-Color1 {
    color: red;
  }
  .Client-Color {
    color: #007bff;
  }
  .pagination-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 10px;
  }
  .pagination-text {
    font-size: 15px;
    color: #878a99;
  }
  .pagination-buttons {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .page-button {
    width: 88px;
    height: 34px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    background-color: white;
    font-size: 15px;
    font-weight: 500;
    color: #878a99;
  }
  .page-button1 {
    width: 35px;
    height: 32px;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    background-color: #34437a;
    border: 1px solid #34437a;
  }
  .page-button2 {
    width: 35px;
    height: 32px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 15px;
    background-color: white;
    border: 1px solid #ced4da;
  }
  .page-button3 {
    width: 58px;
    height: 32px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 15px;
    background-color: white;
    border: 1px solid #ced4da;
  }
  .Business-Main-Section-1 {
    width: 100%;
    display: flex;
    flex-direction: column;

    height: 100vh;
  }
  .Business-Container-1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
