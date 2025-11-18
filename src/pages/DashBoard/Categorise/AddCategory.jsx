import { useState } from "react";
import ModalWrapper from "../widgets/ModalWrapper";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategory = ({ onCategoryAdded }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [titleAr, setTitleAr] = useState();
  const [titleEn, setTitleEn] = useState();
  const [descAr, setDescAr] = useState();
  const [descEn, setDescEn] = useState();
  const [image, setImage] = useState();

  const notifySuccess = (msg) =>
    toast.success(msg, { position: "top-right", theme: "colored" });

  const notifyError = (msg) =>
    toast.error(msg, { position: "top-right", theme: "colored" });

  async function handleSubmit() {
    const formData = new FormData();

    formData.append("title[ar]", titleAr);
    formData.append("title[en]", titleEn);
    formData.append("description[ar]", descAr);
    formData.append("description[en]", descEn);
    formData.append("image", image);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(`${baseUrl}/categories`, formData, {
        headers: {
          token: token,
        },
      });
      console.log("Created", res.data);
      onCategoryAdded(res.data.data);
      console.log("API Response:", res.data);
      console.log("API Response:", res.data.data);

      notifySuccess("Category created successfully!");
      document.getElementById("modalCategoryCloseBtn").click();
    } catch (err) {
      console.error("Error creating category", err);
      console.log("Error creating category", err.message);
      notifyError(err.response?.data?.message || "Something went wrong!");
    }
  }

  return (
    <ModalWrapper id="modalCategory" title="Add New Category">
      <div className="d-flex gap-3 align-items-center">
        <div className="w-100">
          <label htmlFor="title-ar" className="form-label">
            Category Name (Ar)
          </label>
          <input
            type="text"
            className="form-control"
            id="title-ar"
            onChange={(e) => setTitleAr(e.target.value)}
          />
        </div>

        <div className="w-100">
          <label htmlFor="title-en" className="form-label">
            Category Name (En)
          </label>
          <input
            type="text"
            className="form-control"
            id="title-en"
            onChange={(e) => setTitleEn(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="image" className="form-label">
          Category Image
        </label>
        <input
          type="file"
          className="form-control"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <div className="py-5 d-flex gap-3 align-items-center">
        <div className="w-100">
          <label htmlFor="description-ar" className="form-label">
            Category Description (Ar)
          </label>
          <input
            type="text"
            className="form-control"
            id="description-ar"
            onChange={(e) => setDescAr(e.target.value)}
          />
        </div>

        <div className="w-100">
          <label htmlFor="description-en" className="form-label">
            Category Description (En)
          </label>
          <input
            type="text"
            className="form-control"
            id="description-en"
            onChange={(e) => setDescEn(e.target.value)}
          />
        </div>
      </div>

      <div className="d-flex gap-3">
        <button onClick={handleSubmit} className="btn btn-primary mt-3">
          Save Category
        </button>

        <button
          className="btn btn-secondary mt-3"
          id="modalCategoryCloseBtn"
          type="button"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
      </div>
      <ToastContainer />
    </ModalWrapper>
  );
};

export default AddCategory;
