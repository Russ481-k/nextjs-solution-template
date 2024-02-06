"use client";

import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { menuIds } from "@/app/menuList";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [primaryMenuId, setPrimaryMenuId] = useState<string>("");
  const [secondaryMenuId, setSecondaryMenuId] = useState<string>("");
  const [thirdMenuId, setThirdMenuId] = useState<string>("");

  useEffect(() => {
    if (typeof window === "object") {
      setPrimaryMenuId(window.location.href.split("/")[3]);
      setSecondaryMenuId(window.location.href.split("/")[4]);
      setThirdMenuId(window.location.href.split("/")[5]);
      console.log("1", menuIds.find((e) => e.id === primaryMenuId)?.text);
      console.log("2", menuIds.find((e) => e.id === secondaryMenuId)?.text);
      console.log("3", menuIds.find((e) => e.id === thirdMenuId)?.text);
    }
  });

  return (
    <div className="body flex-grow-1 mb-4">
      <Container fluid>
        <Breadcrumb
          primaryMenu={primaryMenuId}
          secondaryMenu={secondaryMenuId}
          thirdMenu={thirdMenuId}
        />
      </Container>
      <Container fluid>{children}</Container>
    </div>
  );
}
