import AppSidebar from "../appbar/appsidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";

import { Card } from "../ui/card";
import Search from "../ui/search";
import FilterItem from "../appbar/filteritem";
import { Separator } from "../ui/separator";
import BookCard3DPage from "../book/bookcard";

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
              <Search />
            </div>
            <Card className="mx-auto w-full max-w-7xl rounded-xl max-h-[calc(100vh-5rem)] h-full">
              <div className="p-8">
                <FilterItem />
                <Separator className="my-4" />
                <div className="md:mt-10">
                  {children}
                </div>
              </div>
            </Card>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
