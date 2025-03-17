import FilterContainer from "@/components/ui/filtercontainer";
import { Separator } from "@/components/ui/separator";

export default function Layout({ children }) {
  return (
    <>
      <FilterContainer path="/old-school-cartoons" />
      <Separator className="my-4" />
      <div className="md:mt-10">{children}</div>
    </>
  );
}
