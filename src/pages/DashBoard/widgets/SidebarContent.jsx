import React from 'react';
import { TbCategoryPlus } from "react-icons/tb";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { BiStore } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";

import { Link } from "react-router-dom";
const SidebarContent = () => {
    const btnDashboard = [
        {
          to: "/dashboard",
          icon: <RxDashboard size={20} className="me-2" />,
          title: "Dashboard",
        },
        {
          to: "",
          icon: <BiStore size={20} className="me-2" />,
          title: "Products",
        },
        {
          to: "",
          icon: <MdOutlineLocalGroceryStore size={20} className="me-2" />,
          title: "Orders",
        },
        {
          to: "/dashboard/categorise",
          icon: <TbCategoryPlus size={20} className="me-2" />,
          title: "Categorise",
        },
        {
          to: "",
          icon: <FaChartLine size={20} className="me-2" />,
          title: "Statistics",
        },
      ];
    return (
      <>
        {btnDashboard.map((item, idx) => (
          <div key={idx} className="mt-4">
            <Link to={item.to} className="text-decoration-none">
              <button
                className="btn-primary p-2 w-100"
                data-bs-dismiss="offcanvas"
              >
                {item.icon}
                <span>{item.title}</span>
              </button>
            </Link>
          </div>
        ))}
      </>
    );
}

export default SidebarContent;
