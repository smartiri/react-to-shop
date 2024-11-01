import React from "react";
import Header from "./Header";
import { useTheme } from "../the_context/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <Header />
      <main className="theme">{children}</main>
    </div>
  );
};

export default Layout;
