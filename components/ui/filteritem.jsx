"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { fetchCategoriesBook } from "../../services/bookService";
import { fetchAllCartoonGenres } from "@/services/cartoonService";

export default function FilterItem() {
  const path = usePathname();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        if (path.includes("/book-categories")) {
          const bookCategories = await fetchCategoriesBook();
          setCategories(bookCategories.payload);
        } else if (path.includes("/old-school-cartoons")) {
          const cartoonGenres = await fetchAllCartoonGenres();
          setCategories(cartoonGenres.payload);
        }
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    }

    if (path !== "/") {
      loadCategories();
    }
  }, [path]);

  const getCategoryName = (category) => {
    if (path.includes("/book-categories")) {
      return category.book_cate_name;
    } else {
      return category.cartoon_genre;
    }
  };

  const handleCategorySelect = (value) => {
    if (path.includes("/book-categories")) {
      
    } else {
      
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="hidden md:block max-w-60 h-10 py-2 px-4 rounded-md shadow-sm border-separate border-[1.7px] border-zinc-200">
          <p className="text-center font-bold text-[var(--second)]">
            {path === "/"
              ? "Homepage"
              : path.includes("/book-categories")
              ? "All Books"
              : "Old School Cartoons"}
          </p>
        </div>
        {
          <div className="max-w-48">
            {path !== "/" && categories && categories.length > 0 && (
              <Select onValueChange={handleCategorySelect}>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Filter By Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
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
        }
      </div>
    </>
  );
}
