import React from "react";
import { CiLineHeight } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";


const RThreeParTwo = () => {

  return (
    <>
      <div className="catigorise-header d-block d-lg-none">
        <div className="container   ">
          <div className="position-relative">
            <div className="w-100">
              <button
                className="btn btn-secondary w-100"
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
        </div>
      </div>
    </>
  );
};

export default RThreeParTwo;
