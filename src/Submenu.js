import React, { useState, useRef, useEffect } from "react";
import { GlobalContext } from "./context";

const Submenu = () => {
  const [column, setColumn] = useState("");
  const {
    submenuOpen,
    location,
    page: { page, links },
  } = GlobalContext();

  const submenuEl = useRef();
  useEffect(() => {
    setColumn("col-2");
    const { center, bottom } = location;
    const element = submenuEl.current;
    element.style.left = `${center}px`;
    element.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumn("col-3");
    }
    if (links.length > 3) {
      setColumn("col-4");
    }
  }, [location]);

  return (
    <aside
      className={`${submenuOpen ? "submenu show" : "submenu"}`}
      ref={submenuEl}
    >
      <h4>{page}</h4>
      <div className={`submenu-center  ${column}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon} {label}{" "}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
