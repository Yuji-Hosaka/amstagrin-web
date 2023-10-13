import { Link } from "react-router-dom";
import LogoAM from "../components/LogoAM";
import DropDown from "./DropDown";
// import Menu from "./Menu";

export default function Header() {
  return (
    <nav className=" grid grid-cols-3 px-4 bg-white shadow-lg sticky top-0 ">
      <div className=" py-2 justify-self-start">
        <Link to="/">
          <LogoAM />
        </Link>
      </div>
      {/* <div>
        <Menu />
      </div> */}
      <div className=" justify-self-end self-center">
        <DropDown />
      </div>
    </nav>
  );
}
