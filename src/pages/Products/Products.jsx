import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  console.log("Base URL:", BASE_URL);

  async function getProducts() {
    const { data } = await axios.get(`${BASE_URL}/products`);
    console.log(data.products);
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="row py-5">
        <div className="col-12 col-md-4 col-lg-3 ">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
