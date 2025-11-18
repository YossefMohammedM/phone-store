import { BsApple, BsPerson } from "react-icons/bs";
import { IoSearch, IoSunnyOutline } from "react-icons/io5";
import { SiFirefox } from "react-icons/si";
import { SlBasketLoaded } from "react-icons/sl";
import { RiComputerLine, RiGlobalLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GoMoon } from "react-icons/go";
import { ThemeModeContext } from "../../../../Ui/ThemeToggle";
import { AiOutlineClose } from "react-icons/ai";
import ItemsCart from "../../../ItemsCart";

const PartOne = () => {

  const { themeMode, setThemeMode } = useContext(ThemeModeContext);

  const cycleTheme = () => {
    if (themeMode === "light") setThemeMode("dark");
    else if (themeMode === "dark") setThemeMode("system");
    else setThemeMode("light");
  }

  const renderIcon = () => {
    if (themeMode === "light") return <IoSunnyOutline size={30} />;
    if (themeMode === "dark") return <GoMoon size={30} />;
    return <RiComputerLine size={30} />;
  }

  return (
    <>
      <div className="d-none d-lg-block container py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link to="/" className="text-decoration-none">
              <p className="mb-0 fs-1 fw-bold">
                <BsApple size={40} className="mb-2" />
                -ST
                <SiFirefox size={20} />
                RE
              </p>
            </Link>
          </div>
          <div>
            <div className="input-group">
              <span
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                type="button"
              >
                Categories
              </span>
              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" href="#">
                    Mobiles
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tablets
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Accessories
                  </a>
                </li>
              </ul>

              <div></div>

              <input
                type="text"
                className="form-control"
                placeholder="Search For Products..."
              />

              <button className="btn btn-primary">
                <IoSearch />
              </button>
            </div>
          </div>
          <div className="d-flex gap-3">
            <button className="btn-outline-secondary">
              <BsPerson size={30} />
            </button>
            <button
              className="btn-outline-secondary theme-toggle-btn"
              onClick={cycleTheme}
              title={`Mode: ${themeMode}`}
            >
              {renderIcon()}
            </button>
            <button className="btn-outline-secondary">
              <RiGlobalLine size={30} />
            </button>

            <div className="section-canvas">
              <button
                className="btn-outline-secondary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <SlBasketLoaded size={25} />
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header d-flex justify-content-between align-items-center">
                  <h5 className="offcanvas-title" id="offcanvasRightLabel">
                    Shopping Cart
                  </h5>
                  <button
                    type="button"
                    className="btn-outline-secondary fs-5"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <AiOutlineClose size={25} />
                  </button>
                </div>
                <div className="offcanvas-body">
                  No Items Added To Cart!?
                  <ItemsCart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartOne;
