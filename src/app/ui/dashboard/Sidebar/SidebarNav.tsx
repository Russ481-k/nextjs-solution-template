import {
  faLayerGroup,
  faCreditCard,
  faMoneyCheckDollar,
  faFileInvoiceDollar,
  faSheetPlastic,
} from "@fortawesome/free-solid-svg-icons";
import React, { PropsWithChildren } from "react";
import SidebarNavGroup from "@/app/ui/dashboard/Sidebar/SidebarNavGroup";
import SidebarNavItem from "@/app/ui/dashboard/Sidebar/SidebarNavItem";

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props;

  return <li className="px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>;
};

export default function SidebarNav() {
  const menuList = [
    {
      id: 1,
      icon: faSheetPlastic,
      text: "전표관리",
      child: [],
      url: "/voucher",
    },
    {
      id: 2,
      icon: faFileInvoiceDollar,
      text: "매입매출",
      child: [
        { id: 1, icon: null, text: "매입매출", url: "sales-purchase" },
        { id: 2, icon: null, text: "미지급현황", url: "/unpaid-status" },
        { id: 3, icon: null, text: "미수금현황", url: "/unreceived-status" },
        { id: 4, icon: null, text: "매출원장", url: "/sales-ledger" },
        { id: 5, icon: null, text: "매입원장", url: "/purchase-ledger" },
      ],
      url: "",
    },
    {
      id: 3,
      icon: faMoneyCheckDollar,
      text: "은행예금",
      child: [],
      url: "/bank",
    },
    {
      id: 4,
      icon: faCreditCard,
      text: "법인카드",
      child: [
        {
          id: 1,
          icon: null,
          text: "법인카드 조회",
          url: "/corporate-card-search",
        },
        {
          id: 2,
          icon: null,
          text: "카드내역 등록",
          url: "/corporate-card-data-reg",
        },
      ],
      url: "",
    },
    {
      id: 5,
      icon: faLayerGroup,
      text: "세금계산서",
      child: [
        { id: 1, icon: null, text: "매입", url: "/tax-invoice-buy" },
        { id: 2, icon: null, text: "매출", url: "/tax-invoice-sell" },
      ],
      url: "",
    },
  ];

  return (
    <ul className="list-unstyled">
      <SidebarNavTitle>회계관리</SidebarNavTitle>
      {menuList.map((menu) => {
        if (!menu.child?.length) {
          return (
            <SidebarNavItem
              key={menu.id}
              icon={menu.icon}
              href={menu.url ?? "/#"}
            >
              {menu.text}
            </SidebarNavItem>
          );
        } else {
          return (
            <SidebarNavGroup
              key={menu.id}
              toggleIcon={menu.icon}
              toggleText={menu.text}
            >
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
