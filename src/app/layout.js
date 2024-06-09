import { Bree_Serif, Poppins } from "next/font/google";
import "./globals.css";
const bree_serif = Bree_Serif({
  subsets:[ "latin"],
  weight: "400",
  variable: "--font-bree-serif",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${poppins.variable} ${bree_serif.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
