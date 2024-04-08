"use client"
import BuyerNavbar from "@/components/Navbar/BuyerNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BuyerNavbar />
        {children}
      </body>
    </html>
  );
}
