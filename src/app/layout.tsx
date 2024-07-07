import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johannes Naylor | linktree and bio",
  description:
    "the linktree, bio, and pseudo-portfolio of Johannes Naylor. Inludes some of my personal social accounts link twitter, linkedin, github, etc as well as personal projects like Tapped and In The Loop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
