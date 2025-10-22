import React, { useContext } from "react";
import { ThemeModeContext } from "../../Ui/ThemeToggle";
import lightBg from "../../assets/Images/main_home.jpg";
import darkBg from "../../assets/Images/black-background-with-leaves-vegetation-texture.jpg";
import SearBoxAboutNewPhone from "./SearBoxAboutNewPhone/SearBoxAboutNewPhone";
import SwiperHome from "./SwiperHome/SwiperHome";
import { FaShippingFast } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";

const Home = () => {
  const { themeMode } = useContext(ThemeModeContext);

  const backgroundImage =
    themeMode === "dark"
      ? darkBg
      : themeMode === "light"
      ? lightBg
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? darkBg
      : lightBg;

      const servicesBox = [
        {
          icon: <FaShippingFast size={25} />,
          title: "Free Shipping",
          description: "Free shipping over EGP500",
        },
        {
          icon: <MdSupportAgent size={25} />,
          title: "24/7 Support",
          description: "Contact us 24 hours a day",
        },
        {
          icon: <IoWallet size={25} />,
          title: "100% Money Back",
          description: "You have 15 days to return",
        },
        {
          icon: <RiSecurePaymentLine size={25} />,
          title: "Payment Secure",
          description: 'We ensure secure payment',
        },
      ];

  return (
    <>
      <main className="">
        <section
          className="home-page"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-xl-4 order-2 order-xl-1">
                <SearBoxAboutNewPhone />
              </div>
              <div className="swiperBox  mt-3 col-12 col-xl-8 order-1 order-xl-2">
                <SwiperHome />
              </div>
            </div>
          </div>
        </section>
        <div className="container servises-boxes d-flex justify-content-center p-0 justify-content-md-between align-items-center flex-wrap">
          {servicesBox.map((service, idx) => (
            <div className="d-flex align-items-center gap-3 p-3" key={idx}>
              {service.icon}
              <div>
                <h6>{service.title}</h6>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
