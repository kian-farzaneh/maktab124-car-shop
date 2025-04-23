import React from 'react'
import BrandCard from './BrandCard'
import Logo from '@/components/base/Logo'
import persian from '@/localization/persian/application/brandsPage.json'

export default function BrandsMainComponent() {
  return (
    <div className="h-screen w-full flex flex-col">
      <header
        dir="ltr"
        className="bg-[url('/header/header.png')] bg-cover bg-center h-20 w-full pt-3 pl-2"
      >
        <Logo />
      </header>
      <div className="flex-1 overflow-y-auto scrollbar-hide grid grid-cols-3">
        <BrandCard name={persian.Benz} image={"/brands/Benz.png"} imgClassName='w-[300px]' slug="Benz" />
        <BrandCard name={persian.Bentley} image={"/brands/Bentley.png"} imgClassName='w-[300px] mx-[20px] my-[93px]' slug="Bentley" />
        <BrandCard name={persian.Lamborgini} image={"/brands/Lamborghini.png"} imgClassName='w-[177px] my-[50px] mx-[47px]' slug="Lamborghini" />
        <BrandCard name={persian.Ford} image={"/brands/Ford.png"} imgClassName='w-[205px] my-[90px] mx-[47px]' slug="Ford" />
        <BrandCard name={persian.Hummer} image={"/brands/Hummer.png"} imgClassName='w-[250px] my-[110px] mx-[40px]' slug="Hummer" />
        <BrandCard name={persian.Audi} image={"/brands/Audi.png"} imgClassName='w-[300px] my-[20px]' slug="Audi" />
      </div>
    </div>
  )
}
