import styled from "styled-components";

export const Detailstyled = styled.div`
  background-color: #f3f3f9;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: auto;
  .Company-Detail-Box {
    display: flex;
    justify-content: center;
    background-color: white;
    height: 1500px;
    width: 95%;
    margin-top: 30px;
    border-radius: 5px;
  }
  .Company-Details-Container {
    display: flex;
    justify-content: center;
  }
  .All-Form-Section {
    display: flex;
width: 940px;
    flex-direction: column;
  }
  .Sign-Form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-top: 15px;
  }

  .NameBox {
    width: 273px;
    height: 37px;
    font-size: 17px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
  }
  .NameBox-Select {
    width: 450px;
    height: 37px;
    font-size: 18px;
    font-weight: 500;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
  }
  .FormBox {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 286x;
  }
  .FormIcon {
    width: 25px;
    height: 17px;
    color: #8b97a8;
  }
  .Form-Text {
    display: flex;
    flex-direction: column;
  }
  .Form-Box-Text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .NameBox-Top {
    width: 700px;
    height: 38px;
    font-size: 15px;
    border: none;
    outline: none;
    color: #5d646e;
    padding-left: 10px;
  }
  .FormBox-Top {
    border: 2px #e6e9ec solid;
    width: 666px;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    display: flex;
    height: 44px;
    background-color: white;
    align-items: center;
  }
  .FormIcon {
    width: 25px;
    height: 17px;
    color: #878a99;
  }
  .Form-Text {
    display: flex;
    flex-direction: column;
  }
  .Form-Box-Title {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .Form-Box-Title-Main {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 30px;
  }
  .Form-Box-Text-Bottom {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 25px;
  }
  .Names-Form {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .City-Form {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .Names-Form-Bottom-Section {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  .FormBox-Bottom {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 470px;
  }
  .NameBox-Center {
    width: 450px;
    height: 37px;
    font-size: 18px;
    font-weight: 500;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
  }

  .Contact-Title {
    font-size: 22px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .Contact-Title1 {
    font-size: 22px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .Form-Add-Button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 94%;
    margin-top: 50px;
    gap: 10px;
    padding-bottom: 100px;
  }
  .Add-Button {
    width: 220px;
    height: 43px;
    background: #34437a;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 16px;
  }
  .Cancel-Button {
    width: 98px;
    height: 45px;
    background: #f3f3f9;
    border-radius: 4px;
    border: 1px solid #f3f3f9;
    color: black;
    font-size: 17px;
    font-weight: 500;
  }
   .Cancel-Button:hover{
    color: white;
    background-color: #34437a;
  }
  .Check-Box-Section {
    display: flex;
    align-items: center;
    margin-top: 25px;
    gap: 10px;
    margin-bottom: 20px;
  }
  .FormBox-Bottom-House {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 313px;
  }
  .NameBox-Select-House {
    width: 304px;
    height: 37px;
    font-size: 17px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
  }
  .FormBox-Comment {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 313px;
    height: 120px;
  }
  .NameBox-Comment {
    width: 300px;
   
    font-size: 17px;
    height: 106px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
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
    border-radius: 4px;
    margin-left: 20px;
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
    width: 0px;
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
  .File-Div {
    padding-top: 30px;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
