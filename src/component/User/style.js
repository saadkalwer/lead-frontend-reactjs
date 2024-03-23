import styled from "styled-components";

export const Partnerstyled = styled.div`
  background-color: #f3f3f9;
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;
  /* justify-content: center; */

  .Parter-Main-Section {
    background-color: white;
    width: 90%;
    font-size: 17px;
    display: flex;
    margin-top: 60px;
    justify-content: center;
    height: 380px;
    margin-left: 30px;
  }
  .Partner-Container {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 95%;
    align-items: center;
  }
  .Partner-Form-Header {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin-top: 10px;
    padding: 10px;
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
    width: 221px;
    height: 43px;
    margin-top: 50px;
    margin-left: 150px;
    gap: 1px;
    background-color: #34437a;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
  }
  .kyc-search1 {
    width: 200px;
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
    width: 210px;
  }
  .kyc-icon {
    width: 20px;
    height: 18px;
    color: #878a99;
  }
  .Name-Filter-Box1 {
    display: flex;
    align-items: center;
    width: 210px;
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
  .Client-Company-Tags {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Client-Tag {
    display: flex;
    width: 50%;
    height: 30px;
    justify-content: center;
    font-size: 17px;
    font-weight: 500;
    color: #405189;
    align-items: center;
    background-color: #4051891a;
  }
  .Company-Tag {
    display: flex;
    width: 50%;
    height: 30px;
    justify-content: center;
    font-size: 17px;
    font-weight: 500;
    color: white;
    align-items: center;
    background-color: #34437a;
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
    width: 550px;
    height: 430px;
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
    font-size: 27px;
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

  .FormBox {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 500px;
  }
  .NameBox {
    width: 490px;
    height: 37px;
    font-size: 17px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
  }
  .Form-Box-Text-Bottom {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 25px;
  }

  .Sign-Form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .Form-Box-Text {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
`;
