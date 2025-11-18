import React, { useContext, useEffect, useState } from "react";

import {
  IoColorPaletteOutline,
  IoSettingsOutline,
  IoSunnyOutline,
} from "react-icons/io5";

import { Link } from "react-router-dom";
import { ThemeModeContext } from "../../../Ui/ThemeToggle";
import { GoMoon } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import LogoProject from "../../../components/LogoProject";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);

    const [ setSystemTheme] = useState(
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



  return (
    <>
      <main className="main-sidebar d-none d-lg-block">
        <div className="container">
          <section className="logo pt-3 "><LogoProject /></section>
          <div className="line"></div>
          <section className="">
            <SidebarContent />
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
            <div className="mt-4 mb-2">
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
