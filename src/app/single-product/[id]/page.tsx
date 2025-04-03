"use client";
import { useParams } from "next/navigation";

export default function CarPage() {
  const params = useParams();
  const id = params.id;

  return <h1>ماشین شماره {id}</h1>;
}
