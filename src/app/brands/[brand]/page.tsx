import BrandClientComponent from "@/components/application/brandsPage/BrandClientComponent";

export default function BrandPage({
  params,
}: {
  params: { brand: string };
}) {
  return <BrandClientComponent brand={params.brand} />;
}


export async function generateStaticParams() {
  const brands = ["Ford", "Benz", "Bentley", "Lamborghini", "Hummer", "Audi"];

  return brands.map((brand) => ({
    brand,
  }));
}
