import styled from "styled-components";
import bgImage from "../../image/overlay.png";
export const WallStyle = styled.div`
  height: 100vh;
  background-color: #eaf5fb;
  .body {
    background: linear-gradient(to bottom, #ffcc00, #ff9900);
  }
  .Well-Menu-Section {
    background: url(${bgImage});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 340px;
  }
`;
