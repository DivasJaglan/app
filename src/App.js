import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal/Modal";

function App() {
  const [openModal, setIsOpenModal] = useState(false);

  return (
    <div className="App">
      <h1>All notification </h1>
      <button
        className="openModalBtn"
        onClick={() => setIsOpenModal((prev) => !prev)}
      >
        Save
      </button>
      {openModal && <Modal setOpenModal={setIsOpenModal} />}
    </div>
  );
}

export default App;
