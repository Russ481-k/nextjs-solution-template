"use client";

import Link from "next/link";
import { Container } from "react-bootstrap";
import HeaderSidebarToggler from "@/app/ui/dashboard/Header/HeaderSidebarToggler";
import HeaderFeaturedNav from "@/app/ui/dashboard/Header/HeaderFeaturedNav";
import HeaderNotificationNav from "@/app/ui/dashboard/Header/HeaderNotificationNav";
import HeaderProfileNav from "@/app/ui/dashboard/Header/HeaderProfileNav";
import Image from "next/image";

interface HeaderProps {
  primaryMenu: string;
  primaryMenuSetter: (menu: string) => void;
}

export default function Header({ primaryMenu, primaryMenuSetter }: HeaderProps) {
  return (
    <header className="header sticky-top py-2 px-sm-2 border-bottom">
      <Container fluid className="header-navbar d-flex align-items-center">
        <HeaderSidebarToggler />
        <Link href="/" className="header-brand d-md-none" as="image">
          <Image
            className="sidebar-brand-full"
            src="/assets/brand/topLogo.png#full"
            alt="logo"
            priority
            width={100}
            height={25}
          />
        </Link>
        <div className="header-nav d-none d-md-flex">
          <HeaderFeaturedNav primaryMenu={primaryMenu} primaryMenuSetter={primaryMenuSetter} />
        </div>
        <div className="header-nav ms-auto">
          <HeaderNotificationNav />
        </div>
        <div className="header-nav ms-2">
          <HeaderProfileNav />
        </div>
      </Container>
    </header>
  );
}
