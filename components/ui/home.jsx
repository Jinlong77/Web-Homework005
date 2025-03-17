import { Input } from "@heroui/react";
import AppSidebar from "./appsidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./sidebar";
import { SearchIcon } from "@/lib/icon";
import { Card } from "./card";
import { Separator } from "./separator";
import HeaderTagItem from "./headertag";
import FilterContainer from "./filtercontainer";

export default function SidebarComponent({ children }) {
  return (
    <>
      <SidebarProvider
        style={{
          "--sidebar-width": "23rem",
          "--sidebar-width-mobile": "17rem",
        }}
      >
        <AppSidebar />
        <SidebarTrigger />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 pl-4 py-10 pr-10">
            <div className="mx-auto h-24 w-full max-w-7xl rounded-xl">
              <Input
                isClearable
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                    "shadow-xl",
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
            </div>
            <Card className="mx-auto w-full max-w-7xl rounded-xl max-h-[calc(100vh-5rem)] h-full">
              <div className="p-8">
                {children}
              </div>
            </Card>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
