import CartoonContent from "@/components/ui/cartooncontent";
import FilterContainer from "@/components/ui/filtercontainer";
import { Separator } from "@/components/ui/separator";
import { fetchCartoonAll } from "@/services/cartoonService";

export default async function CartoonsPage({ searchParams }) {
  const id = (await searchParams).genre;
  const searchQuery = (await searchParams).search;
  const api = await fetchCartoonAll();
  const cartoons = api?.payload || [];

  return (
    <>
      <FilterContainer path="/old-school-cartoons" />
      <Separator className="my-4" />
      <div className="md:mt-10">
        <CartoonContent cartoons={cartoons} id={id} searchQuery={searchQuery} />
      </div>
    </>
  );
}
