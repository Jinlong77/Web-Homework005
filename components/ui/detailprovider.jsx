"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Card } from "./card";

export default function DetailProvider({ children }) {
  const path = useSearchParams();
  const searchPath = path.get("name");
  const herifPath = "/" + searchPath.split(" ").join("-").toLowerCase();
  const namePath = searchPath
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(" ");

  console.log(path);

  return (
    <>
      <div className="max-w-[95rem] mx-auto">
        <Breadcrumb className="mt-20">
          <BreadcrumbList>
            <BreadcrumbItem>
              <div className="flex items-center gap-2 text-lg font-semibold group hover:cursor-pointer">
                <Image
                  src="https://cdn.hugeicons.com/icons/home-02-stroke-rounded.svg"
                  width={20}
                  height={20}
                  alt="home"
                  className="group-hover:hidden"
                />
                <Image
                  src="https://cdn.hugeicons.com/icons/link-01-stroke-rounded.svg"
                  width={20}
                  height={20}
                  alt="home"
                  className="hidden group-hover:block"
                />
                <Link href="/">Home</Link>
              </div>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <div className="flex items-center gap-2 text-lg font-semibold group hover:cursor-pointer">
                <Image
                  src="https://cdn.hugeicons.com/icons/link-01-stroke-rounded.svg"
                  width={20}
                  height={20}
                  alt="link"
                  className="hidden group-hover:block"
                />
                <Image
                  src="https://cdn.hugeicons.com/icons/book-02-stroke-rounded.svg"
                  width={20}
                  height={20}
                  alt="book"
                  className="group-hover:hidden"
                />
                <Link href={herifPath} className="text-lg font-semibold">
                  {namePath}
                </Link>
              </div>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="flex items-center gap-2 text-lg font-semibold text-[var(--fourth)]">
                <Image
                  src="https://cdn.hugeicons.com/icons/book-open-02-stroke-rounded.svg"
                  width={20}
                  height={20}
                  alt="book open"
                  style={{
                    filter:
                      "invert(19%) sepia(92%) saturate(2352%) hue-rotate(345deg) brightness(91%) contrast(88%)",
                  }}
                ></Image>
                <span>{path.get("title")}</span>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative mt-32">
          <Card className="w-full h-auto flex flex-col justify-end gap-4 pt-72 px-20 pb-20">
            {children}
          </Card>
        </div>
      </div>
    </>
  );
}
