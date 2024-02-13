"use client";

import React, { PropsWithChildren } from "react";
import SidebarNavGroup from "@/app/ui/dashboard/Sidebar/SidebarNavGroup";
import SidebarNavItem from "@/app/ui/dashboard/Sidebar/SidebarNavItem";
import { menuIds, accountingMenuList, electricApprovalMenuList } from "@/app/menuList";

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props;

  return <li className="p-2 m-1 text-uppercase fw-semi-bold">{children}</li>;
};

export default function SidebarNav({ primaryMenu }: { primaryMenu: string }) {
  return (
    <ul className="list-unstyled">
      <SidebarNavTitle>
        {menuIds.find((e) => e.id === primaryMenu)?.text ?? "전자결재"}
      </SidebarNavTitle>
      {primaryMenu === "accounting"
        ? accountingMenuList.map((menu) => {
            if (!menu.child?.length) {
              return (
                <SidebarNavItem key={menu.id} icon={menu.icon} href={menu.url ?? "/#"}>
                  {menu.text}
                </SidebarNavItem>
              );
            } else {
              return (
                <SidebarNavGroup key={menu.id} toggleIcon={menu.icon} toggleText={menu.text}>
                  {menu.child?.map((child) => {
                    return (
                      <SidebarNavItem key={child.id} href={child.url ?? "/#"}>
                        {child.text}
                      </SidebarNavItem>
                    );
                  })}
                </SidebarNavGroup>
              );
            }
          })
        : electricApprovalMenuList.map((menu) => {
            if (!menu.child?.length) {
              return (
                <SidebarNavItem key={menu.id} icon={menu.icon} href={menu.url ?? "/#"}>
                  {menu.text}
                </SidebarNavItem>
              );
            } else {
              return (
                <SidebarNavGroup key={menu.id} toggleIcon={menu.icon} toggleText={menu.text}>
                  {menu.child?.map((child) => {
                    return (
                      <SidebarNavItem key={child.id} href={child.url ?? "/#"}>
                        {child.text}
                      </SidebarNavItem>
                    );
                  })}
                </SidebarNavGroup>
              );
            }
          })}
    </ul>
  );
}
