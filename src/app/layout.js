import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";


const inter = Sora({ subsets: ["latin"] , display: "swap" });

export const metadata = {
  title: "Dinesh Web",
  description: "Generated by create Dinesh software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}
        </body>
    </html>
  );
}
