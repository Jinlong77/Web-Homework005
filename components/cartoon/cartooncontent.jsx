import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function CartoonPage({ cartoons, id, searchQuery }) {
  const genreId = id ? Number(id) : null;
  let cartoonsFilter = [];

  if (id) {
    cartoonsFilter = cartoons.filter((cartoon) => {
      return cartoon.ct_genre_id === genreId;
    });
  } else if (searchQuery) {
    cartoonsFilter = cartoons.filter((cartoon) => {
      return cartoon.ct_title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  } else {
    cartoonsFilter = cartoons;
  }

  return (
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center justify-center gap-y-20 gap-x-14 mt-10 max-h-[calc(100vh-20rem)] md:max-h-[calc(100vh-27rem)] overflow-auto">
      {cartoonsFilter.map((cartoon) => (
        <div key={cartoon.id}>
          <CartoonCard cartoon={cartoon} />
        </div>
      ))}
    </div>
  );
}

function CartoonCard({ cartoon }) {
  const type = "cartoon";

  const encodedTitle = encodeURIComponent(cartoon.ct_title).replace(
    /%20/g,
    "+"
  );

  const encodedName = "old+school+cartoons";

  const articleUrl = `/read-full-article/${cartoon.id}?type=${type}&name=${encodedName}&title=${encodedTitle}`;

  return (
    <div className="flex flex-col gap-2 max-w-[200px]">
      <Link href={articleUrl}>
        <div className="relative max-w-[200px] h-60 bg-gray-300 rounded-xl">
          <div className="absolute top-0 left-0 w-full max-w-[200px] h-full bg-black bg-opacity-50 rounded-lg"></div>
          <div className="absolute top-0 left-0 w-full max-w-[200px] h-full">
            <Image
              src={cartoon.image}
              alt="Cartoon"
              className="rounded-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 line-clamp-1">
          <p className="text-md font-bold line-clamp-1">{cartoon.ct_title}</p>
          <div className="flex items-center gap-2 text-[var(--second)]">
            <Image
              src="https://cdn.hugeicons.com/icons/view-stroke-rounded.svg"
              width={20}
              height={20}
              alt="View"
              color="var(--second)"
            ></Image>
            <p className="text-sm font-semibold">{cartoon.view_count}</p>
            <div className="h-4">
              <Separator
                orientation="vertical"
                className="hidden md:block w-[2px] bg-[var(--second)]"
              />
            </div>
            <p className="text-sm font-semibold">{cartoon.published_year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
