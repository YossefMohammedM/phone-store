
import React from "react";
import { BsApple, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaHeart, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerImg from "../../assets/Images/footer-image.webp";
import { SiFirefox } from "react-icons/si";

const Footer = () => {
  const footerData = [
    {
      title: "MY ACCOUNT",
      links: [
        { name: "My Account", path: "/account" },
        { name: "Shopping Cart", path: "/cart" },
        { name: "Login", path: "/login" },
        { name: "Register", path: "/register" },
        { name: "Checkout", path: "/checkout" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "About Us", path: "/about" },
        { name: "Wishlist", path: "/wishlist" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Frequently Asked", path: "/faq" },
      ],
    },
    {
      title: "FIND IT FAST",
      links: [
        { name: "Mobiles", path: "/category/mobiles" },
        { name: "Tablets", path: "/category/tablets" },
        { name: "Audio", path: "/category/audio" },
        { name: "Power & Cables", path: "/category/power-cables" },
        { name: "Wearables", path: "/category/wearables" },
      ],
    },
  ];

  return (
    <>
      <main className="main-footer py-5">
        <div className="container">
          <section className="d-flex pb-4 section-one justify-content-center justify-content-xl-between align-items-center flex-wrap">
            <div>
              <h2>
                Subscribe <span style={{ color: "#1a73e8" }}>Newsletter</span>
              </h2>
              <p className="text-muted">
                Be the first to know about exclusive deals, new arrivals, and
                more!
              </p>
            </div>
            <div className="">
              <div className="input-group p-2 mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  aria-label="Enter Your Email"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-primary p-2"
                  type="button"
                  id="button-addon2"
                >
                  SUBSCRIBE NOW
                </button>
              </div>
            </div>
          </section>
          <section className="section-two py-4">
            <div className="row">
              <div className="col-12 col-xl-4">
                <h4>About Us</h4>
                <p className="text-muted">
                  We value our customers and strive to provide excellent service
                  and support. If you have any questions or feedback, please
                  feel free to contact us anytime. Thank you for choosing us!
                </p>
                <ul className="list-unstyled communication-links d-flex gap-4">
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      <BsInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      <FaYoutube size={20} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-xl-8">
                <div className="d-flex justify-content-between flex-wrap">
                  {footerData.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="">{item.title}</h4>
                      <ul className="list-unstyled components-links">
                        {item.links.map((link, linkIdx) => (
                          <li key={linkIdx} className="mb-2">
                            <Link
                              to={link.path}
                              className="text-decoration-none text-muted"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="section-three pt-5">
            <div className="row align-items-center text-center text-md-start">
              <div className="col-12 col-md-6 col-xl-4 mb-3 mb-md-0">
                <Link
                  to="/home"
                  className="text-decoration-none d-inline-block"
                >
                  <p className="mb-0 fs-1 fw-bold">
                    <BsApple size={40} className="mb-2" />
                    -ST
                    <SiFirefox size={20} />
                    RE
                  </p>
                </Link>
              </div>

              <div className="col-12 col-md-6 col-xl-4 mb-3 mb-md-0">
                <p className="mb-0">
                  <span className="text-primary fs-5">© 2025</span> APPLESTORE –
                  Developed by Yossef <FaHeart style={{ color: "#ff0000" }} />.
                  All Rights Reserved.
                </p>
              </div>

              <div className="col-12 col-md-6 mt-md-3 col-xl-4">
                <img
                  src={footerImg}
                  alt="How To Payment"
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Footer;
