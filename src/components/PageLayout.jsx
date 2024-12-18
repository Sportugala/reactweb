import React from "react";
import Footer from "./Footer";

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
