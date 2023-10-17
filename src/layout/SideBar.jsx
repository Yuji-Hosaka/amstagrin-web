import LogoAM from "../components/LogoAM";
import { AiFillHome } from "react-icons/ai";
import {MdOutlineAddBox,MdOutlineExplore} from 'react-icons/md'
import {BsPersonCircle,BsSearch} from 'react-icons/bs'
import MenuSidebarItem from "./MenuSidebarItem";
import DropDown from "./DropDown";

export default function SideBar() {
  return (
    <div className=" flex flex-col  bg-white h-full">
      <div className="self-center pt-10">
        <LogoAM />
      </div>

      <div className="flex flex-col justify-between  h-full p-10">
        <div className=" flex flex-col gap-6 pt-10 ">
          <MenuSidebarItem Icon={AiFillHome} text={"Home"} />
          <MenuSidebarItem Icon={BsSearch} text={"Search"} />
          <MenuSidebarItem Icon={MdOutlineExplore} text={"Explore"} />
          <MenuSidebarItem Icon={MdOutlineAddBox} text={"Create"} />
          <MenuSidebarItem Icon={BsPersonCircle} text={"Profile"} />
        </div>

        <div className=" flex justify-start">
          <DropDown />
        </div>
      </div>
    </div>
  );
}
