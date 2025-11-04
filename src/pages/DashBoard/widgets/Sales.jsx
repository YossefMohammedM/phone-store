import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

const Sales = () => {
  return (
    <>
      <main className="main-sales">
        <div className="d-flex justify-content-between flex-wrap gap-3">
          <div className="d-flex align-items-center box-info-sales flex-grow-1 gap-3 p-2">
            <div className="icon-ball">
              <BsCurrencyDollar size={30} />
            </div>
            <div>
              <p className="text-muted mb-0">Total Sales</p>
              <p className="fw-bold mb-0">$19,626,065,423</p>
            </div>
          </div>
          <div className="d-flex align-items-center box-info-sales flex-grow-1 p-2 gap-3">
            <div className="icon-ball">
              <BsCurrencyDollar size={30} />
            </div>
            <div>
              <p className="text-muted mb-0">Total Orders</p>
              <p className="fw-bold mb-0">$925</p>
            </div>
          </div>
          <div className="d-flex align-items-center box-info-sales flex-grow-1 p-2 gap-3">
            <div className="icon-ball">
              <BsCurrencyDollar size={30} />
            </div>
            <div>
              <p className="text-muted mb-0">Total Products</p>
              <p className="fw-bold mb-0">$589</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sales;
