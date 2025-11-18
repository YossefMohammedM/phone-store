import React, { useContext, useState } from "react";
import lightLogo from "../assets/Images/Logo/imgi_163_nav-log-light.webp";
import DarkLogo from "../assets/Images/Logo/imgi_1_nav-log.webp";
import { ThemeModeContext } from "../Ui/ThemeToggle";
import { Link } from "react-router-dom";

const LogoProject = () => {
  const { themeMode } = useContext(ThemeModeContext);

  const [systemTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const logoImg =
    themeMode === "dark"
      ? lightLogo
      : themeMode === "light"
      ? DarkLogo
      : systemTheme === "dark"
      ? lightLogo
      : DarkLogo;

  return (
    <>
      <Link
        to="/home"
        className="text-decoration-none d-flex justify-content-center"
      >
        <img src={logoImg} width={200} alt="" />
      </Link>
    </>
  );
};

export default LogoProject;
