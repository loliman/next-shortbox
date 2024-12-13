import type { Metadata } from "next";
import Sidenav from '@/app/ui/sidenav';
import '@/app/ui/global.css';
import {roboto} from "./ui/fonts";

export const metadata: Metadata = {
  title: "Shortbox",
  description: "Dein Archiv für deutsche Marvel Comics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
        <body className={`${roboto.className} antialiased`}>
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    <Sidenav />
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
            </div>
        </body>
    </html>
  );
}
