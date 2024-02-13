"use client";

import React from "react";
import SidebarProvider from "@/app/ui/dashboard/sidebar-provider";
import SidebarOverlay from "@/app/ui/dashboard/Sidebar/SidebarOverlay";
import Sidebar from "@/app/ui/dashboard/Sidebar/Sidebar";
import SidebarNav from "@/app/ui/dashboard/Sidebar/SidebarNav";
import Header from "@/app/ui/dashboard/Header/Header";
import Footer from "@/app/ui/dashboard/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [primaryMenu, setPrimaryMenu] = React.useState<string>("");

  const handleSetPrimaryMenu = (menu: string) => {
    setPrimaryMenu(menu);
  };
  return (
    <SidebarProvider>
      <SidebarOverlay />
      <Sidebar>
        <SidebarNav primaryMenu={primaryMenu} />
      </Sidebar>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header primaryMenuSetter={handleSetPrimaryMenu} />
        <div className="body flex-grow-1 my-1">{children}</div>
        <Footer />
      </div>
      <SidebarOverlay />
    </SidebarProvider>
  );
}
