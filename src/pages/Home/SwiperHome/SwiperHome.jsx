import axios from "axios";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

import { motion } from "motion/react";

const SwiperHome = () => {
  const [getPhones, setGetPhones] = useState([]);

  async function getPhonesData() {
    const { data } = await axios.get(
      "https://dummyjson.com/products/category/smartphones"
    );
    setGetPhones(data.products);
  }

  useEffect(() => {
    getPhonesData();
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper "
    >
      {getPhones.map((phone) => (
        <SwiperSlide key={phone.id}>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center swiper-section m-5 p-5 ps-0 pe-0 d-flex justify-content-between align-items-center"
          >
            <div className="order-2 order-lg-1">
              <h2 className="mt-2 text-white">{phone.title}</h2>
              <p className="text-muted d-none d-md-block">{phone.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="btn btn-primary p-2 mt-5 d-flex align-items-center w-100 justify-content-center"
                style={{ borderRadius: "50px", gap: "8px" }}
              >
                Shop Now
                <FaArrowRight className="ms-1" />
              </motion.button>
            </div>

            <motion.img
              className="order-1 order-lg-2"
              key={phone.thumbnail}
              src={phone.thumbnail}
              alt={phone.title}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                height: "320px",
                objectFit: "contain",
                borderRadius: "15px",
              }}
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperHome;
