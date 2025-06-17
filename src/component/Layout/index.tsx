import React from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

function Layout({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`container mx-auto `.concat(className || "")}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
