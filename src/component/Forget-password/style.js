import styled from "styled-components";

export const Adminstyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .Admin-Main-Section {
    display: flex;
    width: 500px;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: absolute;
    flex-direction: column;
    height: 400px;
    top: 187px;
  }
  .Admin-Main-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
  }
  .Admin-Welcome-Text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .Welcome-Title {
    font-size: 17px;
    font-weight: 600;
    color: #34437a;
    margin-bottom: 30px;
  }
  .Welcome-Text {
    color: #878a99;
    font-size: 17px;
    margin-bottom: 30px;
  }

  .Sign-Form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .Form-Box-Text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .NameBox {
    width: 386px;
    height: 38px;
    font-size: 15px;
    border: none;
    outline: none;
    color: #5d646e;
    padding-left: 10px;
  }
  .FormBox {
    border: 2px #e6e9ec solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    display: flex;
    height: 34px;
    background-color: white;
    align-items: center;
    margin-bottom: 20px;
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
  .Password-Text-Section {
    display: flex;
    justify-content: space-between;
  }
  .Form-Box-Title {
    font-size: 16px;
    font-weight: 600;
  }
  .Password-Text {
    font-size: 16px;
    font-weight: 600;
  }
  .Forget-Text {
    font-size: 15px;
    color: #9698a6;
  }
  .Sign-in-Button-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .Sign-In-Button {
    width: 386px;
    height: 35px;
    border-radius: 4px;
    background-color: #34437a;
    border: none;
    font-size: 15px;
    color: #e6e7ef;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .Sign-Text {
    font-size: 18px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    color: #34437a;
  }
  .Character-Text {
    font-size: 18px;
    font-weight: 500;
    margin-top: 10px;
  }
`;
