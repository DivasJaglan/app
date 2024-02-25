import React, { useEffect, useRef, useState } from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  const [inputs, setInputs] = useState([{ role: "", location: "" }]);
  const [companyUrl, setCompanyUrl] = useState("");

  function handleInputChange(index, key, value) {
    const newInputs = [...inputs];
    newInputs[index][key] = value;
    setInputs(newInputs);
  }

  function handleAddInput() {
    if (!inputs[0].role || !inputs[0].location)
      return alert("Please Enter values in 1st row First");

    setInputs([...inputs, { role: "", location: "" }]);
  }

  function handleSave() {
    if (!companyUrl) return alert("Enter the URL Please");
    if (!inputs[0].role || !inputs[0].location)
      return alert("Please Enter values atleast in 1 row or in 1st row");

    console.log("Company URL:", companyUrl);
    console.log("Inputs:", inputs);
  }

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
        <div className="Url-container">
          <label className="text" htmlFor="companyUrl">
            Company URL
          </label>
          <input
            className="input"
            type="text"
            id="companyUrl"
            value={companyUrl}
            placeholder="Enter URL here"
            onChange={(e) => setCompanyUrl(e.target.value)}
          />
        </div>
        <div className="input-container">
          <div className="inputs-container">
            {inputs.map((input, index) => (
              <div className="inp-container" key={index}>
                <input
                  className="input"
                  placeholder="Role"
                  type="text"
                  id={`role-${index}`}
                  value={input.role}
                  onChange={(e) =>
                    handleInputChange(index, "role", e.target.value)
                  }
                />

                <input
                  placeholder="location"
                  className="input"
                  type="text"
                  id={`location-${index}`}
                  value={input.location}
                  onChange={(e) =>
                    handleInputChange(index, "location", e.target.value)
                  }
                />
              </div>
            ))}
          </div>
          <button className="addBtn" onClick={handleAddInput}>
            +
          </button>
        </div>
        <div className="footer">
          <button className="btn CloseBtn" onClick={() => setOpenModal(false)}>
            Cancel
          </button>
          <button className="btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
