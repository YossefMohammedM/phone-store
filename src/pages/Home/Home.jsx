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
import ReviewSwiper from "../../components/ReviewSwiper/ReviewSwiper";
import { TbPointFilled } from "react-icons/tb";
import Products from "../Products/Products";

const Home = () => {
  const { themeMode } = useContext(ThemeModeContext);

  // const [activeCategory, setActiveCategory] = useState('MOBILES');

  // const handleCategoryChange = (category) =>{
  //   setActiveCategory(category);
  // }

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
      description: "We ensure secure payment",
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
        <section className="container servises-boxes d-flex justify-content-center p-0 justify-content-md-between align-items-center flex-wrap">
          {servicesBox.map((service, idx) => (
            <div className="d-flex align-items-center gap-3 p-3" key={idx}>
              {service.icon}
              <div>
                <h6>{service.title}</h6>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="container-fluid py-5">
          <ReviewSwiper />
        </section>
        <section className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="d-flex align-items-center gap-2 mb-2">
              <TbPointFilled
                size={30}
                style={{
                  color: "#1a73e8",
                  border: "1px solid  #1a73e8",
                  borderRadius: "50%",
                }}
              />
              <p className="fs-4 mb-0">
                <span className="fw-bold">BEST DEAL</span> PRODUCTS
              </p>
            </div>
            <div className="d-flex gap-3">
              <button
                className={`btn-outline-primary p-1 mb-2 `}
                // onClick={() => handleCategoryChange("MOBILES")}
              >
                MOBILES
              </button>
              <button
                className={`btn-outline-primary p-1 mb-2 `}
                // onClick={() => handleCategoryChange("TABLETS")}
              >
                TABLETS
              </button>
              <button
                className={`btn-outline-primary p-1 mb-2 `}
                // onClick={() => handleCategoryChange("ACCESSORIES")}
              >
                ACCESSORIES
              </button>
            </div>
          </div>
          <Products />
        </section>
      </main>
    </>
  );
};

export default Home;
