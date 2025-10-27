import axios from "axios";
import React, { useEffect, useState } from "react";
import { fixImageUrl } from "../../Ui/fixImageUrl";
import { FaHeart } from "react-icons/fa";
import { RiSearch2Fill } from "react-icons/ri";
import ProductModel from "../../components/ProductModel";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [hoverdIdx, setHoverdIdx] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  async function getProducts() {
    const { data } = await axios.get(`${BASE_URL}/products`);
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="row main-products py-5">
        {products.map((item, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div
              className="card h-100 shadow-sm product-card position-relative"
              onMouseEnter={() => setHoverdIdx(idx)}
              onMouseLeave={() => setHoverdIdx(null)}
            >
              <img
                src={
                  hoverdIdx === idx
                    ? fixImageUrl(item.gallery?.[0])
                    : fixImageUrl(item.mainImage)
                }
                className="card-img-top product-img"
                alt={item.title?.en || "Product Image"}
              />

              <div className="card-overlay">
                <div className="d-flex gap-1">
                  <button className="btn-outline-secondary">
                    <FaHeart
                      size={40}
                      style={{ color: "#01070fff" }}
                      className="p-2"
                    />
                  </button>

                  <button
                    className="btn-outline-secondary"
                    onClick={() => setSelectedProduct(item)}
                    data-bs-toggle="modal"
                    data-bs-target="#productModal"
                  >
                    <RiSearch2Fill
                      size={40}
                      style={{ color: "#010812ff" }}
                      className="p-2"
                    />
                  </button>
                </div>
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate">{item.title.en}</h5>
                <p className="card-text text-muted small flex-grow-1">
                  {item.description.en}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className="fw-bold mb-0">{item.priceRange.min} EGP</p>
                  <p className="text-muted mb-0 text-decoration-line-through">
                    {item.priceRange.max} EGP
                  </p>
                </div>

                <button className="btn-primary p-2">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProductModel selectedProduct={selectedProduct} />
    </>
  );
};

export default Products;
