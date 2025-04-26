"use client";
import SingleProductMainComponent from "@/components/application/single-product/SingleProductMainComponent";
import { useParams } from "next/navigation";

export default function CarPage() {
  const params = useParams();
  const id = params.id;

  return (
    <>
      <SingleProductMainComponent id={Number(id)} />
    </>
  );
}
