import NavbarMenuButton from "./navbarmain";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";
import Image from "next/image";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <header>
          <center>
            <Image
              className="rounded-full"
              src="https://i.pinimg.com/736x/50/29/b7/5029b778d7b738518ba1b9ec0467d3c4.jpg"
              width={150}
              height={150}
              priority={true}
              alt="profile"
            />
            <h1 className="font-semibold text-[var(--first)]">John Doe</h1>
            <p className="text-[var(--second)]">johndoe@gmail.com</p>
          </center>
        </header>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <NavbarMenuButton />
          </SidebarMenu>
        </SidebarGroup>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Image
                  src={`https://cdn.hugeicons.com/icons/settings-05-duotone-rounded.svg`}
                  alt="book-02"
                  width="20"
                  height="20"
                />
                <span className="font-semibold text-zinc-700">Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
