import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Link from "next/link";

export default function BookCard3DPage({ books, id, searchQuery }) {
  const categoryId = id ? Number(id) : null;

  let bookFilter = [];

  if (id) {
    bookFilter = books.filter((book) => {
      return book.book_cate_id === categoryId;
    });
  } else if (searchQuery) {
    bookFilter = books.filter((book) => {
      return book.book_title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  } else {
    bookFilter = books;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-h-[calc(100vh-20rem)] md:max-h-[calc(100vh-27rem)] overflow-auto">
      {bookFilter.map((book) => (
        <div key={book.id} className="w-full">
          <BookCard
            id={book.id}
            coverImage={book.image}
            title={book.book_title}
            description={book.description}
          />
        </div>
      ))}
    </div>
  );
}

function BookCard({ id, coverImage, title, description }) {
  const type = "book";

  const encodedTitle = encodeURIComponent(title).replace(/%20/g, "+");
  const encodedName = "book+categories";

  const articleUrl = `/read-full-article/${id}?type=${type}&name=${encodedName}&title=${encodedTitle}`;

  return (
    <Card className="flex flex-col sm:flex-row w-full p-3 sm:p-4 group mt-5">
      <div className="flex justify-center sm:block mb-4 sm:mb-0">
        <div
          className="w-[100px] sm:w-[120px] h-[150px] sm:h-[180px] mb-2"
          style={{ perspective: "1000px" }}
        >
          <div
            className="group-hover:book-transform h-full transition-all duration-250 ease-in-out"
            style={{
              transformStyle: "preserve-3d",
              transition: "all 250ms ease",
            }}
          >
            <div className="absolute h-full w-full">
              <div className="relative w-full h-full">
                <Image
                  src={coverImage}
                  alt={title}
                  fill
                  sizes="100px"
                  className="object-cover bg-[#e1e1e1]"
                />
              </div>
            </div>

            <div
              className="absolute top-0 h-full w-full bg-white group-hover:shadow-[5px_10px_15px_rgba(0,0,0,0.35)]"
              style={{
                transform: "translateZ(-40px)",
              }}
            ></div>

            <div
              className="absolute top-[5px] bottom-[2px] right-[-29px] w-[40px] bg-[#e1e1e1] opacity-0 group-hover:opacity-100"
              style={{
                backgroundSize: "5px",
                backgroundImage:
                  "linear-gradient(to right, #ccc 35%, #e1e1e1 35%)",
                transform: "rotate3d(0, 1, 0, 90deg)",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="relative text-center sm:text-left ml-4">
        <Link href={articleUrl}>
          <div className="text-lg sm:text-xl mb-2 font-bold line-clamp-1">
            {title}
          </div>
          <div className="text-[#757575] line-clamp-4">{description}</div>
          <div className="sm:hidden mt-3">
            <Button className="hover:bg-[var(--second)] text-xs px-2 py-1 w-full sm:w-auto">
              READ FULL ARTICLE
            </Button>
          </div>
          <Button className="absolute hover:bg-[var(--second)] bottom-2 hidden sm:block px-2 sm:text-sm sm:px-3 sm:py-1.5 md:text-sm whitespace-nowrap w-full ">
            <p className="md:text-sm text-[0.7rem] font-semibold">
              READ FULL ARTICLE
            </p>
          </Button>
        </Link>
      </div>
    </Card>
  );
}
