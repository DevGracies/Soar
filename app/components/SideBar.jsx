import { assets } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaFileInvoiceDollar,
  FaUser,
  FaMoneyBillWave,
  FaCreditCard,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FaHandHoldingDollar } from "react-icons/fa6";

const routes = [
  { name: "Dashboard", path: "/", icon: <IoMdHome size={20} /> },
  {
    name: "Transactions",
    path: "/Transactions",
    icon: <FaFileInvoiceDollar size={20} />,
  },
  { name: "Accounts", path: "/Accounts", icon: <FaUser size={20} /> },
  {
    name: "Investment",
    path: "/Investments",
    icon: <FaMoneyBillWave size={20} />,
  },
  {
    name: "Credit Cards",
    path: "/CreditCards",
    icon: <FaCreditCard size={20} />,
  },
  { name: "Loans", path: "/Loans", icon: <FaHandHoldingDollar size={20} /> },
  { name: "Services", path: "/Services", icon: <IoIosSettings size={20} /> },
  {
    name: "My Privileges",
    path: "/MyPrivileges",
    icon: <FaMoneyBillAlt size={20} />,
  },
  { name: "Settings", path: "/Settings", icon: <IoIosSettings size={20} /> },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();

  return (
    <div>
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white p-5 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64`}
      >
        <div className="flex items-center gap-3 p-3 text-gray-600 rounded-lg hover:text-black transition">
          <Image src={assets.icon} alt="icon" height={20} width={20} />
          <h2 className="text-[#343C6A] text-xl font-bold">Soar Task</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-[#343C6A]"
          >
            ✖
          </button>
        </div>

        <nav className="mt-4">
          {routes.map((route) => {
            const isActive = pathname === route.path;

            return (
              <Link
                key={route.path}
                href={route.path}
                className={`flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "text-black font-semibold border-l-8 border-black"
                    : "text-[#B1B1B1] hover:text-[#232323]"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <span
                  className={`${isActive ? "text-black" : "text-[#B1B1B1]"}`}
                >
                  {route.icon}
                </span>
                {route.name}
              </Link>
            );
          })}
        </nav>
      </aside>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
