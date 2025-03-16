"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderTag() {
  const title = usePathname();

  return (
    <div className="hidden md:block max-w-60 h-10 py-2 px-4 rounded-md shadow-sm border-separate border-[1.7px] border-zinc-200">
      <p className="text-center font-bold text-[var(--second)]">
        {title === "/"
          ? "Homepage"
          : title === "/book-categories"
          ? "All Books"
          : "Old School Cartoons"}
      </p>
    </div>
  );
}
