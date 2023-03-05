import React, { useState, useContext, createContext } from "react";
import sublinks from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setpage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openSubmenu = (text, cordinates) => {
    const page = sublinks.find((link) => link.page === text);

    setpage(page);
    setLocation(cordinates);
    setSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        page,
        location,
        sidebarOpen,
        submenuOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const GlobalContext = () => {
  return useContext(AppContext);
};
