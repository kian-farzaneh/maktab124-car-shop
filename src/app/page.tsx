import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaCarAlt } from "react-icons/fa";
import { FiHeart, FiHome } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import perCommen from "@/localization/persian/shared/common.json";

export default function Home() {
  return (
    <div className="h-screen grid grid-rows-[1fr_auto]">
      <div>
        <header className="bg-[#ec8c2f] py-3 px-1">
          <div dir="ltr" className="flex items-center justify-between px-3">
            <div className="logo flex items-center gap-1">
              <FaCarAlt size={40} />
              <div className="leading-3.5">
                <p className="text-[20px]">kian motors</p>
                <p className="text-[10px]">you trusted vehicle kian motors</p>
              </div>
            </div>
            <div className="account-management mr-2 bg-[#f1b77d] text-white p-1 rounded-lg">
              <IoIosNotificationsOutline size={35} />
            </div>
          </div>
          <div className="search-box flex items-center justify-center mt-9 ">
            <button className="bg-white text-[#ec8c2f] ml-[-3px] pr-3 h-12 rounded-r-lg">
              <CiSearch size={34} />
            </button>
            <input
              type="text"
              className="bg-white outline-none w-[290px] pr-2 h-12 rounded-l-lg"
            />
          </div>
        </header>
      </div>

      <footer className="footer p-4 flex justify-center items-center gap-8 w-full h-auto rounded-t-4xl shadow-black shadow-2xl drop-shadow-lg">
        <div className="flex flex-col justify-center items-center gap-1 hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200">
          <FiHome strokeWidth={1} className="w-[30px] h-[30px]" />
          <p>{perCommen.Home}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200">
          <CiSearch className="w-[30px] h-[30px]" />
          <p>{perCommen.Search}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200">
          <FiHeart strokeWidth={1} className="w-[30px] h-[30px]" />
          <p>{perCommen.Favorite}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200">
          <CgProfile className="w-[30px] h-[30px]" />
          <p>{perCommen.Profile}</p>
        </div>
      </footer>
    </div>
  );
}
