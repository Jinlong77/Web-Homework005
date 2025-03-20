import CartoonContent from "@/components/cartoon/cartooncontent";
import { fetchCartoonAll } from "@/services/cartoonService";

export default async function CartoonsPage({ searchParams }) {
  const id = (await searchParams).genre;
  const searchQuery = (await searchParams).search;
  const api = await fetchCartoonAll();
  const cartoons = api?.payload || [];

  return (
    <>
      <CartoonContent cartoons={cartoons} id={id} searchQuery={searchQuery} />
    </>
  );
}
