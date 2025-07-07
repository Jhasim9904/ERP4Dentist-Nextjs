"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";
const page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
      <div className="app-layout">
        <Sidebar
          isOpen={sidebarOpen}
          onToggleSidebar={toggleSidebar}
          sidebarOpen={sidebarOpen}
        />
        <div className="main-content">
          <Navbar onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
          <div className="container1">
          </div>
          <div style={{ marginTop: "200px" }}>
            <Footer />
          </div>
        </div>
      </div>
  );
};

export default page;
