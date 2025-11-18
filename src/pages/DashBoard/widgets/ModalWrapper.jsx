import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ModalWrapper = ({ id, title, children }) => {
  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-end">
              <button
                type="button"
                className="btn-outline-secondary fs-5"
                data-bs-dismiss="modal"
              >
                <AiOutlineClose size={25} />
              </button>
            </div>

            <h5 className="mb-4">{title}</h5>

            {children}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
