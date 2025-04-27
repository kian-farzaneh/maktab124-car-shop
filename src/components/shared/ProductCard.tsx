import React from "react";
import { useRouter } from "next/navigation";
import { convertToPersianNumbers } from "@/utils/convertToPersianNumbers/convertToPersianNumbers";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { TbManualGearboxFilled } from "react-icons/tb";

export default function ProductCard(prop: {
  id: string;
  price: number;
  model: string;
  brand: string;
  gearbox: string;
  fuelType: string;
  seats: number;
  image: string;
  name: string;
}) {
  const { id, price, model, brand, gearbox, fuelType, seats, image, name } =
    prop;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/single-product/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-[400px] border border-[#ff8307] rounded-2xl h-[280px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-[#ff7f00]"
    >
      <div className="px-5 pt-2.5">
        <div>
          <img
            src={image}
            alt={`${brand} ${model}`}
            className="w-96 h-[200px] rounded-lg"
          />
        </div>

        <div className="flex items-center justify-between py-2">
          <p>
            <span className="font-bold">$</span>
            <span>{convertToPersianNumbers(price)}</span>
          </p>
          <p className="font-bold ">{name}</p>
        </div>
      </div>

      <div className="p-1 flex justify-around items-center bg-[#ff8307] text-white rounded-b-2xl">
        <div className="flex justify-center">
          <TbManualGearboxFilled size={22} />
          <p>{gearbox}</p>
        </div>
        <div className="flex justify-center gap-1">
          <BsFillFuelPumpDieselFill size={22} />
          <p>{fuelType}</p>
        </div>
        <div className="flex justify-center">
          <MdOutlineAirlineSeatReclineNormal size={24} />
          <p>{convertToPersianNumbers(seats)}</p>
        </div>
      </div>
    </div>
  );
}
