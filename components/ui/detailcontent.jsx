"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchCartoonById } from "@/services/cartoonService";
import { fetchBookById } from "@/services/bookService";

export default function DetailContent({ id }) {
  const path = useSearchParams();
  const type = path.get("type");
  const [item, setItem] = useState({});

  useEffect(() => {
    async function loadItem() {
      if (type === "cartoon") {
        const book = await fetchCartoonById(id);
        setItem(book.payload);
      } else if (type === "book") {
        const cartoon = await fetchBookById(id);
        setItem(cartoon.payload);
      }
    }
    loadItem();
  }, [type, id]);

  return (
    <>
      <div className="overflow-hidden relative">
        <p className="text-2xl font-bold line-clamp-1">
          {item?.ct_title ?? item?.book_title}
        </p>
        <p className="text-xl">
          by{" "}
          <span className="text-[var(--second)] font-semibold">
            {item?.book_author ?? item?.ct_creator}
          </span>
        </p>
        {type === "cartoon" && (
          <div className="flex items-center gap-2 text-[var(--second)] mb-4">
            <Image
              src="https://cdn.hugeicons.com/icons/view-stroke-rounded.svg"
              width={25}
              height={25}
              alt="View"
            ></Image>
            <p className="text-md font-semibold">{item?.view_count}</p>
            <div className="h-4">
              <Separator
                orientation="vertical"
                className="hidden md:block w-[2px] bg-[var(--second)]"
              />
            </div>
            <p className="text-md font-semibold">{item?.published_year}</p>
          </div>
        )}
        <p className="text-medium font-medium">
          {item?.description ?? item?.ct_description}
        </p>
      </div>

      {item && (
        <Image
          src={item?.image ?? item?.ct_image ?? "/images/placeholder.png"}
          width={300}
          height={300}
          className="rounded-lg absolute -top-32 right-20"
          alt={
            path === "cartoon" ? item?.ct_title : item?.book_title ?? "image"
          }
        />
      )}
    </>
  );
}
