import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Homework005",
  description: "Booking booking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
            {children}
      </body>
    </html>
  );
}
