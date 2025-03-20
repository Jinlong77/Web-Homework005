"use client";

import Link from "next/link";
import Image from "next/image";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { initialNavbar } from "../../lib/icon";
import { usePathname } from "next/navigation";

export default function NavbarMenuButton() {
  const pathname = usePathname();

  return (
    <>
      {initialNavbar.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            asChild
            isActive={
              item.hasAlternateIcon === true
                ? item.url === pathname
                  ? true
                  : false
                : item.isActive
            }
          >
            <Link href={item.url}>
              <Image
                src={`https://cdn.hugeicons.com/icons/${
                  item.hasAlternateIcon === true
                    ? item.url === pathname
                      ? item.solidIcon
                      : item.strokeIcon
                    : item.icon
                }`}
                alt={item.title}
                width="20"
                height="20"
              />
              <span className="font-semibold text-zinc-700">{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
}
