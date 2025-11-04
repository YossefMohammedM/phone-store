import React, { useContext, useEffect, useState } from "react";
import { BiStore } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";
import {
  IoColorPaletteOutline,
  IoPeopleOutline,
  IoSettingsOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import lightLogo from "../../../assets/Images/Logo/imgi_163_nav-log-light.webp";
import DarkLogo from "../../../assets/Images/Logo/imgi_1_nav-log.webp";
import { ThemeModeContext } from "../../../Ui/ThemeToggle";
import { GoMoon } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";

const Sidebar = () => {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);

    const [systemTheme, setSystemTheme] = useState(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    useEffect(() => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e) => setSystemTheme(e.matches ? "dark" : "light");

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const logoImg =
      themeMode === "dark"
        ? lightLogo
        : themeMode === "light"
        ? DarkLogo
        : systemTheme === "dark"
        ? lightLogo
        : DarkLogo;

  const cycleTheme = () => {
    if (themeMode === "light") setThemeMode("dark");
    else if (themeMode === "dark") setThemeMode("system");
    else setThemeMode("light");
  };

  const renderIcon = () => {
    switch (themeMode) {
      case "light":
        return (
          <>
            <IoSunnyOutline size={25} className="me-2" />
            Light
          </>
        );
      case "dark":
        return (
          <>
            <GoMoon size={25} className="me-2" />
            Dark
          </>
        );
      default:
        return (
          <>
            <RiComputerLine size={25} className="me-2" />
            System
          </>
        );
    }
  };

  const btnDashboard = [
    {
      to: "/Dashboard",
      icon: <RxDashboard size={20} className="me-2" />,
      title: "Dashboard",
    },
    {
      to: "",
      icon: <BiStore size={20} className="me-2" />,
      title: "Products",
    },
    {
      to: "",
      icon: <MdOutlineLocalGroceryStore size={20} className="me-2" />,
      title: "Orders",
    },
    {
      to: "",
      icon: <IoPeopleOutline size={20} className="me-2" />,
      title: "Customers",
    },
    {
      to: "",
      icon: <FaChartLine size={20} className="me-2" />,
      title: "Statistics",
    },
  ];

  return (
    <>
      <main className="main-sidebar vh-100">
        <div className="container">
          <section className="logo pt-3 ">
            <Link to="/home" className="text-decoration-none d-flex justify-content-center">
              <img src={logoImg} width={200} alt="" />
            </Link>
          </section>
          <div className="line"></div>
          <section className="">
            {btnDashboard.map((item, idx) => (
              <div key={idx} className="mt-4">
                <Link to={item.to} className="text-decoration-none">
                  <button className="btn-primary p-2 w-100">
                    {item.icon}
                    {item.title}
                  </button>
                </Link>
              </div>
            ))}
          </section>
          <div className="line"></div>
          <section className="">
            <div className="mt-4">
              <Link to="" className="text-decoration-none">
                <button className="btn-outline-primary p-2 w-100">
                  <IoColorPaletteOutline size={25} className="me-2" />
                  Apperance
                </button>
              </Link>
            </div>
            <div className="mt-4">
              <Link to="" className="text-decoration-none">
                <button className="btn-outline-primary p-2 w-100">
                  <IoSettingsOutline size={25} className="me-2" />
                  Setting
                </button>
              </Link>
            </div>
            <div className="mt-4">
                <button
                  className="btn-outline-primary p-2 w-100"
                  onClick={cycleTheme}
                >
                  {renderIcon()}
                </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Sidebar;
