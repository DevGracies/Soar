import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaCog, FaSearch, FaBars, FaBell } from "react-icons/fa";
import { assets } from "@/assets";
import { useRouter } from "next/navigation";

const pageNames = {
  "/": "Overview",
  "/Transactions": "Transactions",
  "/Accounts": "Accounts",
  "/Investments": "Investments",
  "/CreditCards": "Credit Cards",
  "/Loans": "Loans",
  "/Services": "Services",
  "/MyPrivileges": "My Privileges",
  "/Settings": "Settings",
};

export default function Navbar({ setSidebarOpen }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = pageNames[pathname] || "Page Not Found";
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white shadow-md md:px-8">
      <div className="flex items-center gap-4">
        <button onClick={() => setSidebarOpen(true)} className="md:hidden">
          <FaBars size={24} />
        </button>
        <h1 className="text-lg font-inter font-semibold text-[28px] leading-[33.89px] tracking-normal ">
          {currentPage}
        </h1>
      </div>
      <h1 className="text-lg hidden md:flex font-inter font-semibold text-[28px] leading-[33.89px] tracking-normal">
        {currentPage}
      </h1>
      <div className="hidden md:flex items-center gap-4">
        <div className="relative bg-[#F5F7FA] w-64 h-9 border rounded-3xl">
          <FaSearch
            size={20}
            className="absolute left-3 top-2 text-[#718EBF]"
          />
          <input
            type="text"
            placeholder="Search for something"
            className="pl-10 pr-3 py-2 bg-transparent w-64 h-9 border rounded-3xl placeholder:text-[#718EBF] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div
          className="cursor-pointer text-[#718EBF] bg-[#F5F7FA] rounded-full h-9 w-8 flex justify-center items-center"
          onClick={() => router.push("/Settings")}
        >
          <FaCog size={18} />
        </div>
        <div
          className="cursor-pointer text-[#718EBF] bg-[#F5F7FA] rounded-full h-9 w-8 flex justify-center items-center"
          onClick={() => router.push("/Accounts")}
        >
          <FaBell size={18} />
        </div>

        <Image
          src={assets.lady}
          alt="User"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
      </div>
      <Image
        src={assets.lady}
        alt="User"
        width={40}
        height={40}
        className="rounded-full md:hidden"
      />
    </nav>
  );
}
