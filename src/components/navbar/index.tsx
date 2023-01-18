import Image from "next/image";
import logo from "../../assets/logo.png";
import { NavbarContainer } from "./navbar.styles";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Image src={logo} alt="Logo" width={120} />
    </NavbarContainer>
  );
};
