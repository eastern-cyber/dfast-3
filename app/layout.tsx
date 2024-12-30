import "./globals.css";
import type { Metadata } from "next";
import UserProvider from "./context/user";
import AllOverlays from "./components/AllOverlays";
// import AuthOverlay from "./components/AuthOverlay";

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
          <AllOverlays />
          {children}
        </body>

      </UserProvider>
    </html>
  );
}
