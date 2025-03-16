import { fetchCategoriesBook } from "@/services/bookService";

import FilterItem from "./filteritem";

export default async function HeaderTagItem() {
  const fetch = await fetchCategoriesBook();
  const categories = fetch.payload || [];

  return <FilterItem categories={categories}/>;
}
