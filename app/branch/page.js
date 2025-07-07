"use client";
import Branch from "@/components/Branch/Branch";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from "react";

export default function BranchPage() {
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
        <Branch/>
          </div>
        <Footer/>
        </div>
      </div>
    
 )
}
