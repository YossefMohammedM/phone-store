import React from 'react';
import { CiLineHeight } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const RThreeParOne = () => {


    const headerMenu = [
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
              <div className="catigorise-header d-none d-lg-block">
                <div className="container d-flex align-items-center  justify-content-between ">
                  <div className="position-relative">
                    <div className="">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <CiLineHeight className="me-3" size={25} />
                        SELECT CATEGORISE
                        <MdArrowDropDown className="ms-3" size={25} />
                      </button>
                    </div>
                    <div className="collapse dropdown-float mt-3" id="collapseExample">
                      <ul className="list-unstyled">
                        <li className="fw-bold">MOBILES</li>
                        <li className="fw-bold">TABLETS</li>
                        <li className="fw-bold">MOBILE ACCESSORIES</li>
                        <li className="fw-bold">AUDIO</li>
                        <li className="fw-bold">SMART LIFE</li>
                      </ul>
                    </div>
                  </div>
                  <nav className="d-flex align-items-center header_menu_navigation">
                    <ul className="d-flex gap-3 list-unstyled m-3">
                      {headerMenu.map((menu, index) => (
                        <li
                          className="fw-bold header_menu_items pe-2 position-relative"
                          key={index}
                        >
                          {menu.title}
                          <RiArrowDropDownLine size={25} />
                          <ul className="header_sub_menu list-unstyled">
                            {menu.items.map((item, idx) => (
                              <li className="fw-bold" key={idx}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                      <li className="fw-bold header_menu_items">CONTACT</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </>
    );
}

export default RThreeParOne;
