import BookCard3DPage from "@/components/ui/bookcard";

import { fetchBookAll } from "@/services/bookService";

export default async function BookPage() {
  const api = await fetchBookAll();
  const books = api?.payload || [];

  return <BookCard3DPage books={books} />;
}
