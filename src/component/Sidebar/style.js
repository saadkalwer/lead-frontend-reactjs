import styled from "styled-components";

export const Sidebarstyled = styled.div`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }
  .icon{
    
   font-size: 17px;

  }
  .Sidebar-Logo {
    width: 250px;
    margin-top: 10px;
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
    background: #daf2ff;
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
    color: #606669;
    cursor: pointer;
    gap: 10px;
    padding: 5px 23px;
    height: 40px;
    align-items: center;
    text-decoration: none;
  }
  .link:hover {
    background: #8adfff;
    height: 40px;
  }
  .active {
    background: #8adfff;
    height: 40px;
  }
  .link_text {
    white-space: nowrap;
    font-size: 19px;
  }

  .menu {
    display: flex;
    color: #606669;
    height: 40px;
    padding: 5px 23px;
    cursor: pointer;

    justify-content: space-between;
  }
  .menu_item {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .menu:hover {
    background: #8adfff;
    height: 40px;
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
