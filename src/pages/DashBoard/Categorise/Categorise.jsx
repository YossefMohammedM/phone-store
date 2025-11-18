import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FiPlus } from "react-icons/fi";
import { IoPrintSharp } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";
import { MdEditSquare, MdSaveAlt } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import AddCategory from "./AddCategory";
export default function Categorise() {
  const fixImageUrl = (url) => {
    return url.replace(
      "http://localhost:3000",
      import.meta.env.VITE_BASE_URL.replace("/api", "")
    );
  };

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [data, setData] = useState([]);

  async function createData() {
    try {
      const res = await axios.get(`${baseUrl}/categories`);
      console.log(res.data);
      setData(res.data.categories);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    createData();
  }, []);

  const columns = [
    {
      name: "Title (EN)",
      selector: (row) => row.title.en,
      sortable: true,
    },
    {
      name: "Title (AR)",
      selector: (row) => row.title.ar,
    },
    {
      name: "Image",
      cell: (row) => (
        <img
          src={fixImageUrl(row.image)}
          alt={row.title.en}
          height={60}
          width={100}
          style={{ borderRadius: "8px" }}
        />
      ),
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
      sortable: true,
    },
    {
      name: "Active",
      selector: (row) => (row.isActive ? "Active" : "NotActive"),
    },
    {
      name: "Homepage",
      selector: (row) => (row.isHomepage ? "Yes" : "No"),
    },
    {
      name: "Actions",
      cell: () => (
        <div className="d-flex gap-2">
          <button className="btn-outline-primary btn-edit">
            <MdEditSquare />
          </button>
          <button className="btn-outline-primary btn-delete">
            <RiDeleteBin6Fill />
          </button>
        </div>
      ),
    },
  ];

  // const [records, setRecords] = useState(data);

  // const handleFilter = (e) => {
  //   const newData = data.filter((item) => {
  //     return item.title.toLowerCase().includes(e.target.value.toLowerCase());
  //   });
  //   setRecords(newData);
  // };

  return (
    <>
      <main className="main-category">
        <AddCategory
          onCategoryAdded={(newCategory) => setData([newCategory, ...data])}
        />
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
          <div className="d-flex gap-2 align-items-center ">
            <div className="">
              <input
                type="text"
                className="form-control p-2"
                placeholder="🔍 Search..."
                // onChange={handleFilter}
              />
            </div>
            <div>
              <button className="btn-primary p-2">
                <LuFilter size={20} />
              </button>
            </div>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <div>
              <button className="btn-secondary">
                <IoPrintSharp size={20} />
              </button>
            </div>
            <div>
              <button className="btn-secondary">
                <MdSaveAlt size={20} />
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn-primary p-1 pe-3 ps-2"
                data-bs-toggle="modal"
                data-bs-target="#modalCategory"
              >
                <span>
                  <FiPlus size={20} className="me-2" />
                </span>
                New Category
              </button>
            </div>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={data}
          selectableRows
          fixedHeader
          pagination
          striped
          highlightOnHover
        />
      </main>
    </>
  );
}
