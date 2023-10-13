import { HiHome } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";

const menus = [
  { id: 1, to: "/", Icon: <HiHome /> },
  { id: 2, to: "/following", Icon: <BsFillPeopleFill /> },
];

export default function Menu() {
  const { pathname } = useLocation();

  return (
    <nav className=" flex justify-center items-center gap-2">
      {menus.map((el) => (
        <MenuItem
          key={el.id}
          to={el.to}
          Icon={el.Icon}
          active={pathname === el.to}
        />
      ))}
    </nav>
  );
}
