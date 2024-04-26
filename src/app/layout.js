import { Sora } from "next/font/google";
import "./globals.css";


const inter = Sora({ subsets: ["latin"] , display: "swap" });

export const metadata = {
  title: "My-Web",
  description: "Generated by create sundar software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        {children}
        </body>
    </html>
  );
}
