import { IoDocumentOutline } from "react-icons/io5";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { TfiMedallAlt } from "react-icons/tfi";

export const className = "flex-row my-2 text-base flex-center cursor-pointer gap-2 w-full hover:text-blue-700 hover:bg-gray-100 rounded-full px-3 py-2"
export const activeClassName = "flex-row my-2 flex-center text-base cursor-pointer gap-2 w-full rounded-full px-3 py-2 bg-gray-100 text-blue-700"

export const navItems = [
    { href: "/", icon: <MdOutlineSignalCellularAlt />, label: "Dashboard" },
    { href: "/skilltest", icon: <TfiMedallAlt />, label: "Skill Test" },
    { href: "/internship", icon: <IoDocumentOutline />, label: "Internship" },
];