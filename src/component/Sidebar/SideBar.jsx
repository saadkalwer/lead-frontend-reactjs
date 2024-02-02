import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiGrid } from "react-icons/fi";
import { IoSpeedometerSharp } from "react-icons/io5";
import { RiFileList3Fill } from "react-icons/ri";
import { FaBookBookmark } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { IoTrophyOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { BsBank2 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { Sidebarstyled } from "./style";
import Sidebarlogo from "../../image/Logo.png";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <IoSpeedometerSharp />,
  },
  {
    path: "/Company",
    name: "Company",
    icon: <FaRegBuilding />,
  },
  {
    path: "/customer",
    name: "Customer",
    icon: <RiAccountCircleLine />,
    subRoutes: [
      {
        path: "/list-lead",
        name: "Become a partner ",
        icon: "-",
      },
      {
        path: "/customer",
        name: "customer",
        icon: "-",
      },
    ],
  },
  {
    path: "/partner",
    name: "Partner",
    icon: <IoMdPerson />,
    subRoutes: [
      {
        path: "/partner",
        name: "DSA ",
        icon: "-",
      },
      {
        path: "/dsa-company-list",
        name: "Sub DSA",
        icon: "-",
      },
      {
        path: "/dsa-client-list",
        name: "Consultant",
        icon: "-",
      },
      {
        path: "/add-employe",
        name: "Employee",
        icon: "-",
      },
      {
        path: "/",
        name: "Partner Commission",
        icon: "-",
      },
    ],
  },
  {
    path: "/products",
    name: "Products",
    icon: <FiGrid />,
    subRoutes: [
      {
        path: "/company-details",
        name: "Profile ",
        icon: "-",
      },
      {
        path: "/",
        name: "2FA",
        icon: "-",
      },
    ],
  },

  {
    path: "/businessloan",
    name: "Application",
    icon: <RiFileList3Fill />,
    subRoutes: [
      {
        path: "/",
        name: "Credit Card ",
        icon: "-",
      },
      {
        path: "/",
        name: "Instant Loan",
        icon: "-",
      },
      {
        path: "/businessloan",
        name: "Business Loan",
        icon: "-",
      },
      {
        path: "/",
        name: "Home Loan",
        icon: "-",
      },
      {
        path: "/",
        name: "Mortgage Loan",
        icon: "-",
      },
      {
        path: "/",
        name: "Auto Loan",
        icon: "-",
      },
    ],
  },
  {
    path: "/training",
    name: "Training",
    icon: <FaBookBookmark />,
    subRoutes: [],
  },
  {
    path: "/",
    name: "Rewards",
    icon: <IoTrophyOutline />,
  },
  {
    path: "/",
    name: "Payouts",
    icon: <MdPayment />,
  },
  {
    path: "/",
    name: "Leadership",
    icon: <RiMedalLine />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <IoMdSettings />,
    exact: true,
    subRoutes: [],
  },
  {
    path: "/bank",
    name: "Bank",
    icon: <BsBank2 />,
    exact: true,
    subRoutes: [],
  },
  {
    path: "/",
    name: "Support",
    icon: <BiSupport />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  // const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Sidebarstyled>
        <div className="main-container">
          <motion.div
            animate={{
              width: isOpen ? "320px" : "45px",

              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
            className={`sidebar `}
          >
            <div className="top_section">
              <AnimatePresence>
                {isOpen && (
                  <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                  >
                    <img className="Sidebar-Logo" src={Sidebarlogo} alt="" />
                  </motion.h1>
                )}
              </AnimatePresence>

              {/* <div className="bars">
                <FaBars onClick={toggle} />
              </div> */}
            </div>

            <section className="routes">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }

                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>
          </motion.div>

          <main>{children}</main>
        </div>
      </Sidebarstyled>
    </>
  );
};

export default SideBar;
