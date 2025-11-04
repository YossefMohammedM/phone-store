import React from "react";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import logo from '../../../assets/Images/Logo/person2.webp'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <nav className="nav-dashboard">
        <div className="container">
          <div className="d-flex justify-content-around align-items-center flex-wrap pt-3">
            <p className="fs-3 mb-0">Analytics</p>
            <div className="d-flex align-items-center gap-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Search..."
                />
                <button className="btn btn-primary">
                  <IoSearch />
                </button>
              </div>
              <button className="btn-outline-secondary">
                <BsHandbag size={23} />
              </button>
              <button className="btn-outline-secondary">
                <HiOutlineBellAlert size={25} />
              </button>
              <div className="dropdown d-flex align-items-center">
                <img
                  src={logo}
                  width={40}
                  height={50}
                  alt=""
                  className=" dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <RiArrowDropDownLine
                  size={30}
                  className=" dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
