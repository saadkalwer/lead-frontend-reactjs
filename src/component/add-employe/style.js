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
    background-color: white;
    justify-content: center;
    height: 1040px;
    width: 93%;
    margin-top: 30px;
    border-radius: 5px;
  }
  .Company-Details-Container {
    display: flex;
    flex-direction: column;
  }
  .Document-Upper-Main-Section {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }
  .Document-Section-Container {
    display: flex;
    margin-top: 20px;

    flex-direction: column;
    align-items: center;
    height: 283px;
    border: 3px dotted #e9ebec;
    width: 330px;
    border-radius: 25px;
    margin-left: 20px;
  }
  .Document-Section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Documnt-Title {
    font-size: 20px;

    color: #495057;
  }
  .Document-Logo {
    width: 89px;
    padding-top: 50px;
    height: 88px;
    color: #878a99;
  }
  .FormBox-Bottom-House {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 880px;
  }
  .NameBox-Select-House {
    width: 870px;
    height: 37px;
    font-size: 17px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: black;
  }
  .Forms-Display {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .Gender-Section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }

  .Form-Box-Text {
    display: flex;

    flex-direction: column;
  }
  .NameBox-Top {
    width: 870px;
    height: 40px;
    font-size: 15px;
    border: none;
    outline: none;
    color: #5d646e;
    padding-left: 10px;
  }
  .FormBox-Top {
    border: 2px #e6e9ec solid;
    width: 880px;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    display: flex;
    height: 45px;
    background-color: white;
    align-items: center;
  }
  .Form-Box-Title {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 40px;
  }
  .Form-Box-Text-Bottom {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .Form-Box-Title-Main {
    font-size: 20px;
    font-weight: 500;
  }
  .Check-Box-Section {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    font-size: 18px;
    font-weight: 500;
  }
  .NameBox-Select {
    width: 590px;
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
    width: 600px;
  }
  .Names-Form {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-left: 15px;
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
    width: 71px;
    height: 43px;
    background: #34437a;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 16px;
  }
  .Cancel-Button {
    width: 93px;
    height: 43px;
    background: #f3f3f9;
    border-radius: 4px;
    border: none;
    color: black;
    font-size: 17px;
    font-weight: 500;
  }
  .FormBox-Address {
    border: 2px #e6e9ec solid;
    width: 1210px;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    display: flex;
    height: 50px;
    background-color: white;
  }
  .NameBox-Address {
    width: 1200px;
    height: 30px;
    font-size: 15px;
    border: none;
    outline: none;
    color: #5d646e;

    padding-left: 10px;
  }
  .Gender-Name {
    display: flex;
    justify-content: center;
    gap: 10px;
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
    cursor: pointer;
    margin-left: 20px;
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
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
