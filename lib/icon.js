export const initialNavbar = [
  {
    title: "Home",
    url: "/",
    icon: "home-02-solid-rounded.svg",
    isActive: true,
    hasAlternateIcon: true,
    solidIcon: "home-02-solid-rounded.svg",
    strokeIcon: "home-02-stroke-rounded.svg",
  },
  {
    title: "Book Categories",
    url: "/book-categories",
    icon: "book-02-stroke-rounded.svg",
    isActive: false,
    hasAlternateIcon: true,
    solidIcon: "book-02-solid-rounded.svg",
    strokeIcon: "book-02-stroke-rounded.svg",
  },
  {
    title: "Old-School Cartoons",
    url: "/old-school-cartoons",
    icon: "camera-smile-02-stroke-rounded.svg",
    isActive: false,
    hasAlternateIcon: true,
    solidIcon: "camera-smile-02-solid-rounded.svg",
    strokeIcon: "camera-smile-02-stroke-rounded.svg",
  },
  {
    title: "Movies & TV Shows",
    url: "#",
    icon: "play-list-stroke-rounded.svg",
    hasAlternateIcon: false,
  },
  {
    title: "Music",
    url: "#",
    icon: "music-note-01-stroke-rounded.svg",
    hasAlternateIcon: false,
  },
  {
    title: "Photography",
    url: "#",
    icon: "camera-01-stroke-rounded.svg",
    hasAlternateIcon: false,
  },
  {
    title: "Sports & Fitness",
    url: "#",
    icon: "dumbbell-01-stroke-rounded.svg",
    hasAlternateIcon: false,
  },
  {
    title: "Technology & Gadgets",
    url: "#",
    icon: "command-line-stroke-rounded.svg",
    hasAlternateIcon: false,
  },
  {
    title: "Travel & Exploration",
    url: "#",
    icon: "airplane-take-off-02-stroke-rounded.svg",
    hasAlternateIcon: false,
  },
  {
    title: "Writing & Journaling",
    url: "#",
    icon: "pencil-edit-02-stroke-rounded.svg",
    hasAlternateIcon: false,
  },
];

export const SearchIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
