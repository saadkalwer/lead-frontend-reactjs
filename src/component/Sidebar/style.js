import styled from "styled-components";

export const Sidebarstyled = styled.div`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }
  .Sidebar-Logo {
    width: 260px;
  }
  .main-container {
    display: flex;
  }
  main {
    width: 95%;
  }

  .title {
    font-size: 3rem;
    display: grid;
    place-items: center;
  }

  /* Sidebar */
  .sidebar {
    background: #34437a;
    color: white;
    height: 100vh;

    overflow-y: auto;
  }

  .top_section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    font-size: 20px;
  }
  .bars {
    width: 30px;
  }
  .hide {
    display: none;
  }

  .routes {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .link {
    display: flex;
    color: white;
    cursor: pointer;
    gap: 10px;
    padding: 5px 23px;
    text-decoration: none;
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  .link:hover {
    background: #5b6791;
    height: 40px;
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  .active {
    background: #5d6995;
    height: 40px;
  }
  .link_text {
    white-space: nowrap;
    font-size: 19px;
  }

  .menu {
    display: flex;
    color: white;

    padding: 5px 23px;
    cursor: pointer;
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    justify-content: space-between;
  }
  .menu_item {
    display: flex;
    gap: 10px;
  }
  .menu:hover {
    background: #5b6791;
    height: 40px;
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  .menu_container {
    display: flex;
    flex-direction: column;
  }
  .menu_container .link {
    padding-left: 20px;
    height: 40px;
  }
`;
