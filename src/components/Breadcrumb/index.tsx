"use client";

import { menuIds } from "@/app/menuList";

export default function Breadcrumb({
  primaryMenu,
  secondaryMenu,
  thirdMenu,
}: {
  primaryMenu: string;
  secondaryMenu: string;
  thirdMenu: string;
}) {
  console.log("secondaryMenu", secondaryMenu, "thirdMenu", thirdMenu);
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-item">
        {menuIds.find((e) => e.id === primaryMenu)?.text ?? "Dashboard"}
      </div>

      {secondaryMenu && (
        <div className="breadcrumb-item">
          {`${menuIds.find((e) => e.id === secondaryMenu)?.text}`}
        </div>
      )}

      {thirdMenu && (
        <div className="breadcrumb-item">{`${menuIds.find((e) => e.id === thirdMenu)?.text}`}</div>
      )}
    </div>
  );
}
