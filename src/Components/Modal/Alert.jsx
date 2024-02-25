import React, { useState } from "react";

const AlertModal = () => {
  const [inputs, setInputs] = useState([{ role: "", location: "" }]);
  const [companyUrl, setCompanyUrl] = useState("");

  const handleInputChange = (index, key, value) => {
    const newInputs = [...inputs];
    newInputs[index][key] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { role: "", location: "" }]);
  };

  const handleSave = () => {
    // Handle submission of companyUrl and inputs
    console.log("Company URL:", companyUrl);
    console.log("Inputs:", inputs);
    // Add your logic for submission (e.g., sending data to an API)
  };

  return (
    <div>
      <div>
        <label htmlFor="companyUrl">Company URL:</label>
        <input
          type="text"
          id="companyUrl"
          value={companyUrl}
          onChange={(e) => setCompanyUrl(e.target.value)}
        />
      </div>

      {inputs.map((input, index) => (
        <div key={index}>
          <label htmlFor={`role-${index}`}>Role:</label>
          <input
            type="text"
            id={`role-${index}`}
            value={input.role}
            onChange={(e) => handleInputChange(index, "role", e.target.value)}
          />

          <label htmlFor={`location-${index}`}>Location:</label>
          <input
            type="text"
            id={`location-${index}`}
            value={input.location}
            onChange={(e) =>
              handleInputChange(index, "location", e.target.value)
            }
          />
        </div>
      ))}

      <button onClick={handleAddInput}>+</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AlertModal;
