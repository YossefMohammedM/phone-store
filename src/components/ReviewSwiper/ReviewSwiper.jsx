import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/Images/NewImages/Review.webp";
import img2 from "../../assets/Images/NewImages/Review2.jpg";
import img3 from "../../assets/Images/NewImages/Review3.webp";
import img4 from "../../assets/Images/NewImages/Review4.jpg";
import img5 from "../../assets/Images/NewImages/Review5.webp";

const ReviewSwiper = () => {
  const getPhones = [
    { img: img1, title: "Ono Offer" },
    { img: img2, title: "Dos Offer" },
    { img: img3, title: "Tres Offer" },
    { img: img4, title: "Qautro Offer" },
    { img: img5, title: "Senco Offer" },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className=""
    >
      {getPhones.map((phone, idx) => (
        <SwiperSlide key={idx}>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center swiper-section d-flex justify-content-center align-items-center"
          >
            <Link to={`/products/${idx + 1}`} className="text-decoration-none">
              <motion.img
                src={phone.img}
                alt={phone.title}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                  cursor: "pointer",
                }}
              />
            </Link>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSwiper;
