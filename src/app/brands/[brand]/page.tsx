import BrandClientComponent from "@/components/application/brandsPage/BrandClientComponent";

type Props = {
  params: {
    brand: string;
  };
};

export default function BrandPage({
  params,
}: {
  params: { brand: string };
}){
  return <BrandClientComponent brand={params.brand} />;
}
