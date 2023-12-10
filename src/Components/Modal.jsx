import React, { useState } from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  const [count, setCount] = useState([1]);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <label htmlFor="URL" className="label">
            Enter company URL
          </label>
          <input
            className="input"
            id="URL"
            type="text"
            placeholder="Enter URL"
          />
        </div>
        <div className="body">
          {count.map((c) => {
            return (
              <div className="item">
                <input className="input" type="text" placeholder="Role" />
                <input className="input" type="text" placeholder="Location" />
              </div>
            );
          })}
        </div>
        <div className="addBtn">
          <button
            onClick={() => setCount((prev) => [...prev, 1])}
            className="btn"
          >
            +
          </button>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
