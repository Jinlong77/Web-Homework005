"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchCartoonById } from "@/services/cartoonService";
import { fetchBookById } from "@/services/bookService";
import { Skeleton } from "./skeleton";

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
        {item?.ct_title ?? item?.book_title ? (
          <p className="text-2xl font-bold line-clamp-1">
            {item?.ct_title ?? item?.book_title}
          </p>
        ) : (
          <Skeleton className="h-6 w-64 mt-5" />
        )}
        {item?.book_author ?? item?.ct_creator ? (
          <p className="text-xl mt-2">
            by{" "}
            <span className="text-[var(--second)] font-semibold">
              {item?.book_author ?? item?.ct_creator}
            </span>
          </p>
        ) : (
          <Skeleton className="h-6 w-64 mt-2" />
        )}
        {type === "cartoon" && item?.view_count && item?.published_year && (
          <div className="flex items-center gap-2 text-[var(--second)] mb-4 mt-3">
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
        <div>
          {!(item?.description ?? item?.ct_description) ? (
            <Skeleton className="h-44 w-full rounded-xl mt-16" />
          ) : (
            <p className="text-medium font-medium mt-10">
              {item?.description ?? item?.ct_description}
            </p>
          )}
        </div>
      </div>

      {item && (item?.image || item?.ct_image) ? (
        <Image
          src={item?.image ?? item?.ct_image}
          width={300}
          height={300}
          className="rounded-lg absolute -top-32 right-20"
          alt={
            type === "cartoon" ? item?.ct_title : item?.book_title ?? "image"
          }
        />
      ) : (
        <Skeleton className="h-[500px] w-[300px] rounded-lg absolute -top-32 right-20" />
      )}
    </>
  );
}
