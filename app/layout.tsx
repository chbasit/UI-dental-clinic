import "./globals.css";
import { Toaster } from "react-hot-toast";
import {
  bagossCondensed,
  bagossExtended,
} from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bagossCondensed.variable} ${bagossExtended.variable}`}
    >
      <body className="font-condensed bg-[#FAF7F5]" >{children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}