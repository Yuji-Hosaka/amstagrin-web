function MenuSidebarItem({ Icon, text, onClick = null }) {
  return (
    <div
      onClick={onClick ? () => onClick() : () => {}}
      className="flex gap-2 justify-start items-center px-3 cursor-pointer hover:bg-gray-200 rounded-xl "
    >
      <div>{<Icon />}</div>
      <div>{text}</div>
    </div>
  );
}

export default MenuSidebarItem;
