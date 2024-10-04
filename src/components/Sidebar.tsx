import { Link, NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoCartOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";

export default function Sidebar() {
  return (
    <div className="bg-secondary md:px-5 px-3 py-8 min-h-screen font-primary flex flex-col justify-between">
      <div>
        <div className="font-secondary text-2xl  text-main font-semibold">
          <Link to="/admin/dashboard">
            <p className="md:block hidden">TechSphere</p>
            <p className="block md:hidden text-center">TS</p>
          </Link>
        </div>
        <ul className="w-full mt-8 space-y-4">
          <li className="w-full">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "bg-gray-300 rounded-md px-2" : ""
                } flex items-center gap-2 py-2 max-md:justify-center`
              }
              to="/admin/dashboard"
            >
              <RxDashboard size={20} />
              <p className="hidden md:block">Dashboard</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "bg-gray-300 rounded-md px-2" : ""
                } flex items-center gap-2 py-2 max-md:justify-center`
              }
              to="/admin/products"
            >
              <MdOutlineInventory2 size={20} />
              <p className="hidden md:block">Products</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "bg-gray-300 rounded-md px-2" : ""
                } flex items-center gap-2 py-2 max-md:justify-center`
              }
              to="/admin/orders"
            >
              <IoCartOutline size={20} />
              <p className="hidden md:block">Orders</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "bg-gray-300 rounded-md px-2" : ""
                } flex items-center gap-2 py-2 max-md:justify-center`
              }
              to="/admin/users"
            >
              <HiOutlineUsers size={20} />
              <p className="hidden md:block">Users</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "bg-gray-300 rounded-md px-2" : ""
                } flex items-center gap-2 py-2 max-md:justify-center`
              }
              to="/admin/settings"
            >
              <IoSettingsOutline size={20} />
              <p className="hidden md:block">Settings</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <p className="flex items-center max-md:justify-center gap-2 mt-12">
          <IoIosLogOut size={20} />
          <p className="hidden md:block"> Logout</p>
        </p>
      </div>
    </div>
  );
}
