import React, { useRef } from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { GlobalContext } from "./context";

const Navbar = () => {
  const { openSubmenu, closeSubmenu, openSidebar } = GlobalContext();

  const handlOpenSubmenu = (e) => {
    const page = e.target.textContent;
    const btnsObeject = e.target.getBoundingClientRect();
    const center = (btnsObeject.left + btnsObeject.right) / 2;
    const bottom = btnsObeject.bottom - 3;

    openSubmenu(page, { center, bottom });
  };
  const handleCloseSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleCloseSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={handlOpenSubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={handlOpenSubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={handlOpenSubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
