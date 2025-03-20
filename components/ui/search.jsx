"use client";

import { SearchIcon } from "@/lib/icon";
import { Input } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`${pathname}?search=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push(pathname);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <Input
        isClearable
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-md",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        label="Search"
        placeholder="Type to search..."
        radius="lg"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
    </form>
  );
}
