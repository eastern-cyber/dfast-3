import AuthOverlay from "@/app/components/AuthOverlay";
import "./globals.css";
import type { Metadata } from "next";
import UserProvider from "./context/user";

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
      <UserProvider>
      
        <body>
          <AuthOverlay />
          {children}
        </body>

      </UserProvider>
    </html>
  );
}
