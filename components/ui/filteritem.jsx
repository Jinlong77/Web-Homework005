"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

export default function FilterItem({ categories }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [headerTitle, setHeaderTitle] = useState("All Books");

  const bookCategoryId = searchParams.get("query");
  const cartoonGenreId = searchParams.get("genre");
  const selectedId = bookCategoryId || cartoonGenreId;

  useEffect(() => {
    if (pathname === "/") {
      setHeaderTitle("Homepage");
    } else if (pathname.includes("/book-categories")) {
      setHeaderTitle("All Books");
    } else if (pathname.includes("/old-school-cartoons")) {
      setHeaderTitle("Old School Cartoons");
    }

    if (selectedId && categories && categories.length > 0) {
      const selected = categories.find(c => c.id.toString() === selectedId);
      
      if (selected) {
        const name = getCategoryName(selected);
        setHeaderTitle(name);
      }
    }
  }, [pathname, selectedId, categories]);

  const getCategoryName = (category) => {
    if (pathname.includes("/book-categories")) {
      return category.book_cate_name;
    } else {
      return category.cartoon_genre;
    }
  };

  const handleCategorySelect = (value) => {
    if (pathname.includes("/book-categories")) {
      if (value === "") {
        router.push("/book-categories");
      } else {
        router.push(`/book-categories?query=${value}`);
      }
    } else if (pathname.includes("/old-school-cartoons")) {
      if (value === "") {
        router.push("/old-school-cartoons");
      } else {
        router.push(`/old-school-cartoons?genre=${value}`);
      }
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="hidden md:block max-w-3xl h-10 py-2 px-4 rounded-md shadow-sm border-separate border-[1.7px] border-zinc-200">
          <p className="text-center font-bold text-[var(--second)]">
            {headerTitle}
          </p>
        </div>
        <div className="w-48">
          {pathname !== "/" && categories && categories.length > 0 && (
            <Select
            value={selectedId || ""}
              onValueChange={handleCategorySelect}
            >
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Filter By Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>All Categories</SelectLabel>
                  {categories.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={category.id.toString()}
                    >
                      {getCategoryName(category)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </div>
      </div>
    </>
  );
}