import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  // NavbarItem,
} from "@nextui-org/navbar";
import { Github } from "lucide-react";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
// import { Link } from "@nextui-org/react";

const NavBar = () => {
  return (
    <Navbar maxWidth="full" height={"4rem"} className=" flex fixed" isBordered>
      <NavbarBrand>
        <span className="text-4xl  font-dynaPuff text-[#f7c00ae8]">
          UrlShortner 123
        </span>
      </NavbarBrand>
     
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <Link
          href="https://github.com/Tejodeep2002"
          className=" w-10 h-10 rounded-2xl flex justify-center items-center  bg-white"
        >
          <Github className="text-black" />
        </Link>
        <Link
          href="https://twitter.com/ttezomon_dev"
          className=" w-10 h-10 rounded-2xl  flex justify-center items-center  bg-black"
        >
          <BsTwitterX className="text-white text-lg" />
        </Link>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
