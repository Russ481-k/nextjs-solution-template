"use client";

import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import React, { PropsWithChildren, useContext } from "react";
import { SidebarContext } from "@/app/ui/dashboard/sidebar-provider";
import { NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  href: string;
  icon?: IconDefinition;
} & PropsWithChildren;

export default function SidebarNavItem(props: Props) {
  const { icon, children, href } = props;

  const {
    showSidebarState: [, setIsShowSidebar],
  } = useContext(SidebarContext);

  return (
    <NavItem style={{ height: "40px" }}>
      <Link href={href} passHref legacyBehavior>
        <NavLink className="p-2 d-flex align-items-center" onClick={() => setIsShowSidebar(false)}>
          {icon ? (
            <FontAwesomeIcon className="nav-icon ps-1 ms-n3" icon={icon} />
          ) : (
            <span className="nav-icon ps-2 ms-n3" />
          )}
          {children}
        </NavLink>
      </Link>
    </NavItem>
  );
}
