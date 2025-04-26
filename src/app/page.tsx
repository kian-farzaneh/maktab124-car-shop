"use client";

import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaCarAlt } from "react-icons/fa";
import { FiHeart, FiHome } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";

import { useEffect, useState } from "react";

import getProducts from "@/api/getProducts";
import perCommen from "@/localization/persian/shared/common.json";
import ProductCard from "@/components/shared/ProductCard";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = (searchValue?: string) => {
    setIsLoading(true);
    getProducts(searchValue ? { searchKey: "name", searchValue } : {})
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = () => {
    fetchProducts(searchText);
  };

  return (
    <div className="flex flex-col h-screen">
      {" "}
      <header className="bg-[#ec8c2f] py-3 px-1">
        <div dir="ltr" className="flex items-center justify-between px-3">
          <div className="logo flex items-center gap-1">
            <FaCarAlt size={40} />
            <div className="leading-3.5">
              <p className="text-[20px] font-bold">kian motors</p>{" "}
              <p className="text-[10px]">you trusted vehicle kian motors</p>
            </div>
          </div>

          <div className="account-management mr-2 bg-[#f1b77d] text-white p-1 rounded-lg">
            <IoIosNotificationsOutline size={35} />
          </div>
        </div>

        <div className="search-box flex items-center justify-center mt-9">
          <button
            onClick={handleSearch}
            className="bg-white text-[#ec8c2f] ml-[-3px] pr-3 h-12 rounded-r-lg"
          >
            <CiSearch size={34} />
          </button>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="جستجو کنید..."
            className="bg-white outline-none w-[290px] pr-2 h-12 rounded-l-lg"
          />
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
        {isLoading ? (
          <div className="text-center text-[#ec8c2f] mt-10 font-semibold">
            در حال بارگذاری...
          </div>
        ) : (
          <>
            {products.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                محصولی موجود نیست
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {products.map((item: any) => (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    price={Number(item.discountedPrice)}
                    model={item.model}
                    brand={item.brand}
                    gearbox={item.gearbox}
                    fuelType={item.fuelType}
                    seats={Number(item.seats)}
                    image={item.image}
                    name={item.name}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <footer className="footer p-4 flex justify-around items-center w-full h-auto rounded-t-4xl shadow-black shadow-2xl drop-shadow-lg bg-white">
        <div className="flex flex-col justify-center items-center gap-1 hover:text-[#ec8c2f] transition-colors duration-200 cursor-pointer">
          <FiHome strokeWidth={1} className="w-[30px] h-[30px]" />
          <p className="text-sm">{perCommen.Home}</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-1 hover:text-[#ec8c2f] transition-colors duration-200 cursor-pointer">
          <CiSearch className="w-[30px] h-[30px]" />
          <p className="text-sm">{perCommen.Search}</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-1 hover:text-[#ec8c2f] transition-colors duration-200 cursor-pointer">
          <FiHeart strokeWidth={1} className="w-[30px] h-[30px]" />
          <p className="text-sm">{perCommen.Favorite}</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-1 hover:text-[#ec8c2f] transition-colors duration-200 cursor-pointer">
          <CgProfile className="w-[30px] h-[30px]" />
          <p className="text-sm">{perCommen.Profile}</p>
        </div>
      </footer>
    </div>
  );
}
