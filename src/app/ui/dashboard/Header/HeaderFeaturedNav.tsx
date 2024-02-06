import { menuIds } from "@/app/menuList";
import Link from "next/link";
import { Button, Nav, NavLink } from "react-bootstrap";

interface HeaderProps {
  primaryMenu: string;
  primaryMenuSetter: (menu: string) => void;
}

export default function HeaderFeaturedNav({ primaryMenu, primaryMenuSetter }: HeaderProps) {
  const handleSetPrimaryMenu = (menu: string) => {
    primaryMenuSetter(menu);
  };
  console.log(primaryMenu);
  const primaryMenuId = window.location.href.split("/")[3];
  console.log(menuIds.find((e) => e.id === primaryMenuId)?.text);

  return (
    <Nav>
      <Button className="header-button">
        <Link href="/" passHref legacyBehavior>
          <NavLink className="nav-link-work-manage-button">업무관리</NavLink>
        </Link>
      </Button>
      <Button
        className="header-button"
        style={{
          color:
            menuIds.find((e) => e.id === primaryMenuId)?.text === "electric-approval"
              ? "rgba(57, 55, 130, 0.95)"
              : "",
          borderBottom:
            menuIds.find((e) => e.id === primaryMenuId)?.text === "electric-approval"
              ? "3px solid rgba(57, 55, 130, 0.95)"
              : "",
        }}
        onClick={() => handleSetPrimaryMenu("electric-approval")}
      >
        전자결재
      </Button>
      <Button
        className="header-button"
        style={{
          color:
            menuIds.find((e) => e.id === primaryMenuId)?.text === "electric-approval"
              ? "rgba(57, 55, 130, 0.95)"
              : "",
          borderBottom:
            menuIds.find((e) => e.id === primaryMenuId)?.text === "electric-approval"
              ? "3px solid rgba(57, 55, 130, 0.95)"
              : "",
        }}
        onClick={() => handleSetPrimaryMenu("accounting")}
      >
        회계관리
      </Button>
    </Nav>
  );
}
