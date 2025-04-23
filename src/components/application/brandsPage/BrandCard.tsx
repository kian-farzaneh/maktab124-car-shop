import React from "react";
import Link from "next/link";
interface BrandCardProps {
  name: string;
  image: string;
  imgClassName: string;
  slug: string;
}

export default function BrandCard({
  name,
  image,
  imgClassName,
  slug,
}: BrandCardProps) {
  return (
    <Link href={`/brands/${slug}`}>
      <div className="flex flex-col justify-center items-center">
        <div className="shadow-gray-300 shadow-xl rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <img src={image} alt={`${name}_logo`} className={`${imgClassName}`} />
        </div>
        <p className="text-[25px]">{name}</p>
      </div>
    </Link>
  );
}
