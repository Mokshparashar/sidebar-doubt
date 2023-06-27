import React from "react";
import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { isModalOpen, sidebarOpen, modalOpen } = useGlobalContext();
  console.log(isModalOpen);
  return (
    <main>
      <button type="button" onClick={sidebarOpen} className="sidebar-toggle">
        <FaBars />
      </button>
      <button type="button" onClick={modalOpen} className="btn">
        toggle Modal
      </button>
    </main>
  );
};

export default Home;
