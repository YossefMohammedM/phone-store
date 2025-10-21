import React, { useContext, useState } from "react";
import { BsApple } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaMinus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { GoMoon, GoSearch } from "react-icons/go";
import { IoReorderThree, IoSearch, IoSunnyOutline } from "react-icons/io5";
import { SiFirefox } from "react-icons/si";
import { SlBasketLoaded } from "react-icons/sl";
import { Link } from "react-router-dom";
import { ThemeModeContext } from "../../../../Ui/ThemeToggle";
import { RiComputerLine, RiGlobalLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const PartTwo = () => {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);

  const cycleTheme = () => {
    if (themeMode === "light") setThemeMode("dark");
    else if (themeMode === "dark") setThemeMode("system");
    else setThemeMode("light");
  };

  const renderIcon = () => {
    if (themeMode === "light") return <IoSunnyOutline size={30} />;
    if (themeMode === "dark") return <GoMoon size={30} />;
    return <RiComputerLine size={30} />;
  };

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (name) => {
    openSection === name ? setOpenSection(null) : setOpenSection(name);
  };

  const menuItems = [
    {
      name: "home",
      title: "HOME",
      items: [
        "ABOUT",
        "STORES",
        "DELIVERY",
        "PRIVACY POLICY",
        "TERMS & CONDITIONS",
      ],
    },
    {
      name: "shop",
      title: "MOBILES",
      items: ["APPLE", "SAMSUNG", "XIAOMI", "OPPO", "REALME"],
    },
    {
      name: "support",
      title: "TABLETS",
      items: ["APPLE", "XIAOMI", "HUWAEI", "LENOVO", "SAMSUNG"],
    },
  ];

  return (
    <>
      <div className="d-sm-block d-lg-none header_part_two py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
              >
                <IoReorderThree size={30} />
              </div>

              <div
                className="offcanvas offcanvas-start section-canvas"
                data-bs-scroll="true"
                tabIndex="-1"
                id="offcanvasWithBothOptions"
              >
                <div className="offcanvas-header d-flex justify-content-between align-items-center">
                  <Link to="/" className="text-decoration-none">
                    <p className="mb-0 fs-1 fw-bold">
                      <BsApple size={40} className="mb-2" />
                      -ST
                      <SiFirefox size={20} />
                      RE
                    </p>
                  </Link>
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
                  {menuItems.map((menu, index) => (
                    <div key={index}>
                      <div className="title d-flex justify-content-between align-items-center">
                        <Link to="" className="fw-bold text-decoration-none">
                          {menu.title}
                        </Link>
                        <div
                          type="button"
                          onClick={() => toggleSection(menu.name)}
                          className={`icon-toggle ${
                            openSection === menu.name ? "rotate" : ""
                          }`}
                        >
                          {openSection === menu.name ? (
                            <FaMinus size={20} />
                          ) : (
                            <FiPlus size={25} className="fw-bold" />
                          )}
                        </div>
                      </div>

                      <div
                        className={`collapsible ${
                          openSection === menu.name ? "open" : ""
                        }`}
                      >
                        <div className="coll-body mt-2">
                          <ul className="list-unstyled">
                            {menu.items.map((item, i) => (
                              <li key={i} className="fw-bold">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="fw-bold p-3 ps-2">CONTACT</div>
                  <div className="mt-3 fw-bold">
                    <CgProfile size={30} className="me-2" />
                    Login / Register
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Link to="" className="text-decoration-none">
                <p className="mb-0 fs-1 fw-bold">
                  <BsApple size={40} className="mb-2" />
                  -ST
                  <SiFirefox size={20} />
                  RE
                </p>
              </Link>
            </div>

            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn-outline-secondary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <GoSearch size={25} />
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3 className="modal-title fs-5" id="exampleModalLabel">
                        Search Products
                      </h3>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="input-group">
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
                  </div>
                </div>
              </div>

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
                  data-bs-target="#offcanvasEnd"
                  aria-controls="offcanvasEnd"
                >
                  <SlBasketLoaded size={25} />
                </button>
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasEnd"
                  aria-labelledby="offcanvasEndtLabel"
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
                  <div className="offcanvas-body">No Items Added To Cart!?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartTwo;
