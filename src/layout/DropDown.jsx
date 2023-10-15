import { CgDetailsMore } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/use-auth";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <div className=" relative">
      <div className=" cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <CgDetailsMore />
      </div>

      {isOpen && (
        <div className=" w-96 absolute bg-white right-0 translate-y-1 border rounded-xl shadow-xl p-2">
          <Link to="/login">
            <div className=" font-semibold"> Switch Accounts</div>
          </Link>
          <hr className=" m-2 border" />
          <div
            className=" flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"
            onClick={logout}
          >
            <div className=" bg-gray-300 h-9 aspect-square rounded-full flex justify-center items-center">
              {/* <CgDetailsMore /> */}
            </div>
            <div className=" font-semibold"> Log out</div>
          </div>
        </div>
      )}
    </div>
  );
}
