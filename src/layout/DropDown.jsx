import { CgDetailsMore } from "react-icons/cg";
// import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../hooks/use-auth";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  const dropDownEl = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropDownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className=" relative" ref={dropDownEl}>
      <div className=" cursor-pointer flex items-center justify-center hover:bg-gray-100 p-2 gap-2 rounded-xl" onClick={() => setIsOpen(!isOpen)}>
        <CgDetailsMore className="  shadow-xl" /> 
      <div className=" font-semibold "> More</div>
      </div>

      {isOpen && (
        <div className=" w-96 absolute bg-white right-0 translate-y-1 border rounded-xl shadow-xl p-2 ">
          {/* <Link to="/login">
            <div className=" font-semibold flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl "> Switch Accounts</div>
          </Link> */}
         
          <div
            className=" flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"
            onClick={logout}
          >
            <div className=" font-semibold"> Log out</div>
          </div>
        </div>
      )}
    </div>
  );
}
