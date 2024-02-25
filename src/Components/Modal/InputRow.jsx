import { useState } from "react";

function InputRow() {
  const [field, setField] = useState({
    role: "",
    location: "",
  });
  return (
    <div className="item">
      <input
        value={field.role}
        onChange={(e) =>
          setField((prev) => ({ ...prev, role: e.target.value }))
        }
        className="input"
        type="text"
        placeholder="Role"
      />
      <input
        value={field.location}
        className="input"
        type="text"
        placeholder="Location"
        onChange={(e) => {
          setField((prev) => ({ ...prev, location: e.target.value }));
        }}
      />
    </div>
  );
}

export default InputRow;
