import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

import MyProSidebar from "./scenes/global/MySidebar";
import Dashboard from "./scenes/dashboard/Dashboard";
import Cart from "./components/Cart";
import ProductApi from "./components/ProductApi";
import Contact from "./components/Contact";
import About from "./components/About";
import Topbar from "./scenes/global/Topbar";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ProSidebarProvider> 
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
                <MyProSidebar />
                <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/product" element={<ProductApi />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/blog" element={<Contact />} />
                <Route path="/faq" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </ProSidebarProvider>
    </>
  );
}

export default App;
