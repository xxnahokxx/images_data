"use client"
import GetBackgroundImageUrl from "@/utils/getBackgroundImageUrl";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <Image
        src={GetBackgroundImageUrl()}
        alt=""
        width={2560} // Añade un valor para la anchura
        height={1440}
      />
    </>
  );
}
