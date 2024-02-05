import Link from "next/link";
import { Nav, NavItem, NavLink } from "react-bootstrap";

export default function HeaderFeaturedNav() {
  return (
    <Nav>
      <NavItem>
        <Link href="/" passHref legacyBehavior>
          <NavLink className="p-2">업무관리</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/" passHref legacyBehavior>
          <NavLink className="p-2">그룹웨어</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#" passHref legacyBehavior>
          <NavLink className="p-2">전자결재</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#" passHref legacyBehavior>
          <NavLink className="p-2">회계관리</NavLink>
        </Link>
      </NavItem>
    </Nav>
  );
}
