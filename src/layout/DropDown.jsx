import { CgDetailsMore } from "react-icons/cg";
import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";

export default function DropDown() {
  return (
    <div className=" relative">
      <div className=" cursor-pointer">
        <Avatar />
      </div>
      <div className=" w-96 absolute bg-white right-0 translate-y-1 border rounded-xl shadow-xl p-2">
        <Link to="/login">
          <div className=" font-semibold"> Switch Accounts</div>
        </Link>
        <hr className=" m-2 border" />
        <div className=" flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl">
          <div className=" bg-gray-300 h-9 aspect-square rounded-full flex justify-center items-center">
            <CgDetailsMore />
          </div>
          <div className=" font-semibold"> Log out</div>
        </div>
      </div>
    </div>
  );
}
