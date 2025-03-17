import BookCard3DPage from "@/components/ui/bookcard";
import { fetchBookAll } from "@/services/bookService";
import FilterContainer from "@/components/ui/filtercontainer";
import { Separator } from "@/components/ui/separator";

export default async function BookPage({searchParams}) {
  const api = await fetchBookAll();
  const allBooks = api?.payload || [];
  const id = (await searchParams).query;
  const searchQuery = (await searchParams).search;

  return (
    <>
      <FilterContainer path="/book-categories" />
      <Separator className="my-4" />
      <div className="md:mt-10">
        <BookCard3DPage books={allBooks} id={id} searchQuery={searchQuery}/>
      </div>
    </>
  );
}
