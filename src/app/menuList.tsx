import {
  faLayerGroup,
  faCreditCard,
  faMoneyCheckDollar,
  faFileInvoiceDollar,
  faSheetPlastic,
} from "@fortawesome/free-solid-svg-icons";

export const menuList = [
  {
    id: 1,
    icon: faSheetPlastic,
    text: "전표관리",
    child: [],
    url: "/accounting/voucher",
  },
  {
    id: 2,
    icon: faFileInvoiceDollar,
    text: "매입매출",
    child: [
      {
        id: 1,
        icon: null,
        text: "매입매출목록",
        url: "/accounting/sales-purchase/sales-purchase-list",
      },
      { id: 2, icon: null, text: "미지급현황", url: "/accounting/sales-purchase/unpaid-status" },
      {
        id: 3,
        icon: null,
        text: "미수금현황",
        url: "/accounting/sales-purchase/unreceived-status",
      },
      { id: 4, icon: null, text: "매출원장", url: "/accounting/sales-purchase/sales-ledger" },
      { id: 5, icon: null, text: "매입원장", url: "/accounting/sales-purchase/purchase-ledger" },
    ],
    url: "",
  },
  {
    id: 3,
    icon: faMoneyCheckDollar,
    text: "은행예금",
    child: [],
    url: "/accounting/bank",
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
        url: "/accounting/corporate-card/corporate-card-search",
      },
      {
        id: 2,
        icon: null,
        text: "카드내역 등록",
        url: "/accounting/corporate-card/corporate-card-reg",
      },
    ],
    url: "",
  },
  {
    id: 5,
    icon: faLayerGroup,
    text: "세금계산서",
    child: [
      { id: 1, icon: null, text: "매입", url: "/accounting/tax-invoice/buy" },
      { id: 2, icon: null, text: "매출", url: "/accounting/tax-invoice/sell" },
    ],
    url: "",
  },
];

export const menuIds = [
  {
    id: "dashboard",
    text: "대시보드",
  },
  {
    id: "accounting",
    text: "회계관리",
  },
  {
    id: "voucher",
    text: "전표관리",
  },
  {
    id: "sales-purchase",
    text: "매입매출",
  },
  {
    id: "sales-purchase-list",
    text: "매입매출목록",
  },
  {
    id: "unpaid-status",
    text: "미지급현황",
  },
  {
    id: "unreceived-status",
    text: "미수금현황",
  },
  {
    id: "sales-ledger",
    text: "매출원장",
  },
  {
    id: "purchase-ledger",
    text: "매입원장",
  },
  {
    id: "bank",
    text: "은행예금",
  },
  {
    id: "corporate-card",
    text: "법인카드",
  },
  {
    id: "corporate-card-search",
    text: "법인카드 조회",
  },
  {
    id: "corporate-card-reg",
    text: "카드내역 등록",
  },
  {
    id: "tax-invoice",
    text: "세금계산서",
  },
  {
    id: "buy",
    text: "매입",
  },
  {
    id: "sell",
    text: "매출",
  },
  {
    id: "electric-approval",
    text: "전자결재",
  },
];
