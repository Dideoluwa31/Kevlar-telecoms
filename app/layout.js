// app/layout.js
import "./globals.css";
import ThemeToggle from "@/Components/ThemeToggle";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
