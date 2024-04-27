import styled from "styled-components";

export const Partnerstyled = styled.div`
  background-color: #f3f3f9;
  flex: 1;
  display: flex;
  height: 100vh;

  flex-direction: column;
  align-items: center;
  .Parter-Main-Section {
    background-color: white;
    width: 98%;
    font-size: 17px;
    display: flex;
    margin-top: 60px;

    justify-content: center;
    height: 100%;
    margin-bottom: 20px;
  }
  .DeleteButtons{
 display: flex;
 align-items: center;
 gap: 10px;
 width: 100%;
 justify-content: center;
 margin-top: 90px;
  }
  .del-Button{
        width: 120px;
    height: 33px;
  color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #34437A;

    border: 1px solid #34437a;
    border-radius: 4px;
    font-size: 14px;
  }
  .Partner-Container {
    display: flex;

    flex-direction: column;
    width: 95%;
  }
  .Partner-Form-Header {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #efefef;
  }
  .Header-Text {
    font-size: 20px;
    font-weight: 500;
  }
  .Header-Button-Section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .Header-icon {
    width: 28px;
    height: 24px;
    background-color: #ebecf2;
    border: 1px solid #34437a;
    color: #34437a;
    border-radius: 5px;
  }
  .Header-Button {
    width: 160px;
    height: 43px;
    gap: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ebecf2;
    color: #34437a;
    border: 1px solid #34437a;
    border-radius: 4px;
    font-size: 14px;
  }
  .kyc-search1 {
    width: 180px;
    height: 15px;
    font-size: 14px;
    border: none;
    outline: none;
    color: black;
    background-color: white;
  }
  .kyc-search-box1 {
    display: flex;
    align-items: center;
    background-color: white;
    border: 1px solid #ced4da;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
  }
  .kyc-icon {
    width: 20px;
    height: 18px;
    color: #878a99;
  }
  .Name-Filter-Box1 {
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
    padding: 10px 12px;
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
    margin-bottom: 30px;
  }
  .page-button:hover {
    background-color: #34437A;
    color: white;
  }
  .page-button2:hover {
    background-color: #34437a;
    color: white;
  }
  .page-button3:hover {
    background-color: #34437a;
    color: white;
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
  .Button-Display {
    display: flex;
    flex-direction: column;
  }
  .Assign-Button {
    width: 143px;
    height: 35px;
    background-color: #34437a;
    font-size: 13px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: white;
  }
  .InfoIcon {
    height: 15px;
    width: 25px;
  }
  .Status-Color2 {
    color: yellow;
  }
   .Upload-button {
    width: 17px;
    height: 22px;
}
  .Table-Icons {
    width: 28px;
    height: 24px;
    background-color: #eaf5fb;
    border: 1px solid #3577f1;
    color: #3577f1;
    border-radius: 5px;
  }
  .Table-Icons1 {
    width: 28px;
    height: 24px;
    background-color: #fcefec;
    border: 1px solid #f06548;
    color: #f06548;
    border-radius: 5px;
  }
  .Icons-Gapping {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .dashboard {
    display: flex;
    justify-content: space-around;
    background-color: #f3f3f9;
    align-items: center;
    width: 100%;
  }
  .dashboard-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 200px;
    background: #ffffff;
    border-right: 1px solid #d4d9df;
    height: 70px;
  }
  .dashboard-container {
    display: flex;
    margin-top: 10px;
    justify-content: center;
  }
  .label {
    font-size: 16px;
    font-weight: 500;
    color: #8f92a0;
  }
  .value {
    font-size: 20px;
    font-weight: 500;
    color: #495057;
  }
  .value1 {
    font-size: 20px;
    font-weight: 500;
    color: #3577f1;
  }
  .value2 {
    font-size: 20px;
    font-weight: 500;
    color: #47c6b5;
  }
  .value3 {
    font-size: 20px;
    font-weight: 500;
    color: #f2785f;
  }
  .value4 {
    font-size: 20px;
    font-weight: 500;
    color: #f7bc56;
  }
  .Business-Main-Section {
    width: 100%;
    display: flex;
    flex-direction: column;

    height: 100vh;
    overflow: auto;
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
    background-color: #f3f3f9;
    width: 165px;
    height: 64px;
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
    width: 24px;
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
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: #f3f3f9;
    padding: 20px;
    width: 500px;
    height: 350px;
    border-radius: 5px;
    position: relative;
  }

  .close {
    position: absolute;
    top: 0px;
    right: 10px;
    cursor: pointer;
    font-size: 40px;
  }
  .Title {
    font-size: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .Selecting-Box {
    display: flex;
    justify-content: center;
    border: 2px black solid;
    padding: 4px;
    border-radius: 6px;
    cursor: pointer;
    width: 450px;

    margin-top: 40px;
    height: 33px;
  }
  .Add-Button {
    width: 450px;
    margin-top: 90px;
    border-radius: 8px;
    margin-left: 3px;
    height: 33px;
    background-color: #34437a;
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: white;
  }
 
  @media all and (max-width: 1400px) {
    .dashboard-container {
      display: flex;
      margin-top: 10px;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  @media all and (max-width: 1600px) {
    .dashboard-container {
      display: flex;
      margin-top: 10px;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;
