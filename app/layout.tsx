import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3K",
  description: "Kok Kok Kok - SocialApp for your future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
