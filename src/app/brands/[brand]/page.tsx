import BrandClientComponent from "@/components/application/brandsPage/BrandClientComponent";

type Props = {
  params: {
    brand: string;
  };
};

// ✅ This is a server component now (no "use client")
export default function BrandPage({ params }: Props) {
  return <BrandClientComponent brand={params.brand} />;
}
