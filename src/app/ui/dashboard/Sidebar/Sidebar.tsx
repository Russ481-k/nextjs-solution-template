"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { Button } from "react-bootstrap";
import { SidebarContext } from "@/app/ui/dashboard/sidebar-provider";
import Image from "next/image";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [isNarrow, setIsNarrow] = useState(false);

  const {
    showSidebarState: [isShowSidebar],
    showSidebarMdState: [isShowSidebarMd, setIsShowSidebarMd],
  } = useContext(SidebarContext);

  const toggleIsNarrow = () => {
    const newValue = !isNarrow;
    localStorage.setItem("isNarrow", newValue ? "true" : "false");
    setIsNarrow(newValue);
  };

  // On first time load only
  useEffect(() => {
    if (localStorage.getItem("isNarrow")) {
      setIsNarrow(localStorage.getItem("isNarrow") === "true");
    }
  }, [setIsNarrow]);

  // On first time load only
  useEffect(() => {
    if (localStorage.getItem("isShowSidebarMd")) {
      setIsShowSidebarMd(localStorage.getItem("isShowSidebarMd") === "true");
    }
  }, [setIsShowSidebarMd]);

  return (
    <div
      className={classNames("sidebar d-flex flex-column position-fixed h-100", {
        "sidebar-narrow": isNarrow,
        show: isShowSidebar,
        "md-hide": !isShowSidebarMd,
      })}
      id="sidebar"
    >
      <div className="sidebar-brand d-none d-md-flex align-items-center justify-content-left">
        <Image
          className="sidebar-brand-full"
          src="/assets/brand/topLogo.png#full"
          alt="logo"
          priority
          width={180}
          height={40}
        />
        <Image
          className="sidebar-brand-narrow d-none"
          src="/assets/brand/topLogo.png#full"
          alt="logo"
          priority
          width={180}
          height={40}
        />
      </div>

      <div className="sidebar-nav flex-fill">{children}</div>

      <Button
        variant="link"
        className="sidebar-toggler px-3 d-none d-md-inline-block rounded-0 text-end pe-4 fw-bold shadow-none"
        onClick={toggleIsNarrow}
        type="button"
        aria-label="sidebar toggler"
      >
        <FontAwesomeIcon className="sidebar-toggler-chevron" icon={faAngleLeft} fontSize={24} />
      </Button>
    </div>
  );
}
