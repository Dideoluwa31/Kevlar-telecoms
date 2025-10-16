// app/layout.js
import Navbar from "@/components/Navbar";   
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Kevlar Telecoms Limited",
  description: "Official website of Kevlar Telecoms Limited – ICT & Telecommunications Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
