import { fetchCategoriesBook } from "@/services/bookService";
import { fetchAllCartoonGenres } from "@/services/cartoonService";
import FilterItem from "./filteritem";

export default async function FilterContainer({ path}) {
  let categories = [];

  if (path.includes("/book-categories")) {
    const bookCategories = await fetchCategoriesBook();
    categories = bookCategories.payload || [];
  } else if (path.includes("/old-school-cartoons")) {
    const cartoonGenres = await fetchAllCartoonGenres();
    categories = cartoonGenres.payload || [];
  }

  return <FilterItem categories={categories} path={path} />;
}
