import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan | Creative Director & Designer",
  description: "Design with ROAM — Bold, culture-shifting brand work for startups and D2C brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
