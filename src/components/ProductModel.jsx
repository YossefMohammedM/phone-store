import React, { useEffect, useState } from "react";
import { fixImageUrl } from "../Ui/fixImageUrl";
import { AiOutlineClose } from "react-icons/ai";

const ProductModel = ({ selectedProduct }) => {

    const [activeVariantIndex, setActiveVariantIndex] = useState(0);

    useEffect(() => {
      setActiveVariantIndex(0);
    }, [selectedProduct]);

    const activeVariant = selectedProduct?.variants?.[activeVariantIndex];

  return (
    <>
      <div
        className="modal fade"
        id="productModal"
        tabIndex="-1"
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            {selectedProduct ? (
              <>
                <div className="modal-body">
                  <div className="text-end">
                    <button
                      type="button"
                      className="btn-outline-secondary fs-5"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <AiOutlineClose size={25} />
                    </button>
                  </div>
                  <div className="d-flex flex-wrap justify-content-center gap-5">
                    <div>
                      <img
                        src={fixImageUrl(
                          activeVariant.image || selectedProduct.mainImage
                        )}
                        alt={selectedProduct.title?.en}
                        className="img-fluid rounded mb-3"
                      />
                    </div>
                    <div className="">
                      <h3 className="modal-title fs-5" id="productModalLabel">
                        {selectedProduct.title?.en}
                      </h3>
                      <div className="d-flex gap-3 align-items-center mt-2">
                        <p className="fw-bold mb-0">
                          {activeVariant.price} EGP
                        </p>
                        <p className="text-muted mb-0 text-decoration-line-through">
                          {activeVariant.priceAfterDiscount} EGP
                        </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        {selectedProduct.variants?.length > 0 && (
                          <div className="mt-3">
                            <p>
                              <strong>SKU:</strong>{" "}
                              {selectedProduct.variants[activeVariantIndex].sku}
                            </p>
                            <p>
                              <strong>Status:</strong>{" "}
                              {selectedProduct.variants[activeVariantIndex]
                                .isActive
                                ? "Active"
                                : "Inactive"}
                            </p>
                          </div>
                        )}
                      </div>
                      <p>{selectedProduct.description?.en}</p>
                      {selectedProduct.variants.map((v, i) => (
                        <button
                          key={i}
                          className={`btn me-2 ${
                            i === activeVariantIndex
                              ? "btn-dark"
                              : "btn-outline-dark"
                          }`}
                          onClick={() => setActiveVariantIndex(i)}
                        >
                          {v.size.width}x{v.size.height} {v.size.unit}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <span className="loader"></span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModel;
