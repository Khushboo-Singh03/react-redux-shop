import { createContext, useContext, useState } from "react";

const SidebarContext = createContext({});

export const useSidebarContext = () => useContext(SidebarContext);

// eslint-disable-next-line react/prop-types
export const SidebarProvider = ({ children }) => {
  const [sidebarRTL, setSidebarRTL] = useState(false);
  const [sidebarBackgroundColor, setSidebarBackgroundColor] = useState(
    undefined
  );
  const [sidebarImage, setSidebarImage] = useState(undefined);

  return (
    <SidebarContext.Provider
      value={{
        sidebarBackgroundColor,
        setSidebarBackgroundColor,
        sidebarImage,
        setSidebarImage,
        sidebarRTL,
        setSidebarRTL,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
