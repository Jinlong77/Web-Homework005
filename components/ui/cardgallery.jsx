
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { Card } from "./card";
import Link from "next/link";

export default async function CardGallery() {

  return (
    <div className="flex justify-center items-center min-h-[60vh] w-full px-4">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full max-w-[1400px] mx-auto">
      <CardComponent
        imageUrl="https://thesmartlocal.jp/wp-content/uploads/2023/02/Japanese-anime-movies-4.jpeg"
        title="Books"
        description="View All Available Books"
        navigate="/book-categories"
      />
      <CardComponent
        imageUrl="https://thesmartlocal.jp/wp-content/uploads/2020/03/Top-Anime-Movies-1.jpg"
        title="Cartoons"
        description="View All Available Cartoons"
        navigate="/old-school-cartoons"
      />
      </div>
    </div>
    );
}

export function CardComponent({ imageUrl, title, description, navigate }) {
  return (
    <div className="w-full h-[360px] md:h-[400px] rounded-[15px] p-4 md:p-6 bg-white relative flex items-end transition-all duration-400 ease-out shadow-lg hover:translate-y-5 group mx-auto max-w-[350px]">
      <div className="absolute top-0 left-0 w-full h-full rounded-[15px] bg-black/60 z-[2] transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
      <Card className="absolute top-3 gap-2 shadow-md left-3 text-md font-semibold px-2 py-0.5 flex items-center justify-center z-50 bg-white rounded-md">
        <Image
          src={`https://cdn.hugeicons.com/icons/tag-01-stroke-rounded.svg`}
          alt="tag-02"
          width="17"
          height="17"
        />
        <p className="">{title}</p>
      </Card>
      <div className="w-full h-full absolute top-0 left-0 rounded-[15px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover rounded-[15px]"
          priority
        />
      </div>

      <div className="relative z-[3] text-white opacity-0 translate-y-[30px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 w-full">
        <h1 className="text-xl md:text-2xl font-bold m-0">{title}</h1>
        <p className="tracking-wide text-md md:text-[15px] mt-2 line-clamp-3">
          {description}
        </p>
        <Link href={navigate}>
          <Button className="mt-4 py-2 px-4 md:py-[0.6rem] md:px-[0.6rem] outline-none border-none rounded-md bg-white text-black font-bold cursor-pointer transition-all duration-400 hover:bg-[var(--second)] hover:text-white text-sm md:text-base">
            View More
          </Button>
        </Link>
      </div>
    </div>
  );
}
