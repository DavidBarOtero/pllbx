import React, { useState } from "react";

const MenuStateContext = React.createContext();

export const MenuProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => setOpenMenu(!openMenu);

  return (
    <MenuStateContext.Provider
      value={{
        openMenu,
        handleMenu,
      }}
    >
     
      {children}
    </MenuStateContext.Provider>
  );
};

export default MenuStateContext;
