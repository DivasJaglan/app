import React, { useEffect, useRef, useState } from "react";
import "./Modal.css";
import InputRow from "./InputRow";

function Modal({ setOpenModal }) {
  const [count, setCount] = useState([1]);
  const [inputUrl, setInputUrl] = useState("");

  const ref = useRef(null);

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setOpenModal(false);
        }
      }
      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [setOpenModal]
  );

  return (
    <div className="modalBackground">
      <div ref={ref} className="modalContainer">
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
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            type="text"
            placeholder="Enter URL"
          />
        </div>
        <div className="body">
          {count.map((c, i) => {
            return <InputRow key={i} />;
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
