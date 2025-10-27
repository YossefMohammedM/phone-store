import React from 'react';
import { TbCategory2 } from "react-icons/tb";

const SearBoxAboutNewPhone = () => {

    const selectsData = [
      {
        label: "Battery",
        options: [
          { value: "4000", label: "4000 mAh Battery" },
          { value: "5000", label: "5000 mAh Battery" },
          { value: "6000", label: "6000 mAh Battery" },
        ],
      },
      {
        label: "Charging",
        options: [
          { value: "18W", label: "18W Fast Charging" },
          { value: "33W", label: "33W Fast Charging" },
          { value: "65W", label: "65W Super Fast Charging" },
        ],
      },
      {
        label: "Storage",
        options: [
          { value: "64", label: "64 GB" },
          { value: "128", label: "128 GB" },
          { value: "256", label: "256 GB" },
        ],
      },
      {
        label: "RAM",
        options: [
          { value: "4", label: "4 GB" },
          { value: "8", label: "8 GB" },
          { value: "12", label: "12 GB" },
        ],
      },
      {
        label: "Color",
        options: [
          { value: "black", label: "Black" },
          { value: "white", label: "White" },
          { value: "blue", label: "Blue" },
        ],
      },
    ];

    return (
      <>
        <div className="searBox-newPhone mt-3 mb-3 p-4  rounded-3">
          <div className="d-flex gap-2 align-items-center mb-2">
            <TbCategory2 size={25} />
            <h5>Looking For A New Smart Phone?</h5>
          </div>
          <p className="text-muted">
            Don't waste time browsing through endless options. Use our search by
            specs feature to find the perfect match for you.
          </p>

          {selectsData.map((select, idx) => (
            <div key={idx} className="mb-3">
              <select className="form-select p-2" aria-label={select.label}>
                <option value={select.label} disabled>
                  Select {select.label}
                </option>
                {select.options.map((opt, idx) => (
                  <option key={idx} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <button className="btn-primary w-100 p-2">Search Phone</button>
        </div>
      </>
    );
}

export default SearBoxAboutNewPhone;
