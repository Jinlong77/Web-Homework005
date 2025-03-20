import BookCard3DPage from "@/components/book/bookcard";
import { fetchBookAll } from "@/services/bookService";

export default async function BookPage({ searchParams }) {
  const api = await fetchBookAll();
  const allBooks = api?.payload || [];
  const id = (await searchParams).query;
  const searchQuery = (await searchParams).search;

  return (
    <>
      <BookCard3DPage books={allBooks} id={id} searchQuery={searchQuery} />
    </>
  );
}
