"use client";
import "./globals.css";
import { useState } from "react";
import Sidebar from "./components/SideBar";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body className="flex z-50  ">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 flex flex-col md:ml-64">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="bg-[#E6EFF5] overflow-x-hidden md:p-4 mt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
