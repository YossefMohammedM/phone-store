import React from "react";
import { DiGitCompare } from "react-icons/di";
import { FaRegHeart } from "react-icons/fa";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";

const RowOne = () => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center justify-content-lg-between">
        <div className="d-none d-lg-block">
          <div className="d-flex gap-2">
            <div className="top-links-header pe-2">DELVERY</div>
            <div className="top-links-header pe-2">INSTALMENT</div>
            <div className="top-links-header pe-2">STORES</div>
            <p className="mb-0">FREE SHIPPING OVER EGP1000</p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="top-links-header pe-2">
            <FaRegHeart className="me-2" size={16} />
            Wishlist (0)
          </div>
          <div className="top-links-header pe-2">
            <DiGitCompare className="me-2" size={20} />
            Compare (0)
          </div>
          <div className="">
            <TiSocialFacebook size={20} className="me-3" />
            <IoLogoInstagram size={20} className="me-3" />
            <IoLogoYoutube size={18} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RowOne;
