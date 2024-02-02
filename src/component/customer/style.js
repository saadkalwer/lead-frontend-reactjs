import styled from "styled-components";

export const Customerstyled = styled.div`
  background-color: #f3f3f9;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
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
    margin-left: 10px;
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
    font-size: 16px;
    font-weight: 500;
    color: #a4a7ab;
  }
  .Name-Text {
    font-size: 17px;
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
`;
