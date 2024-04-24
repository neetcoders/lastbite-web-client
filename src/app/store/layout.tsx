"use client";

import SellerNavbar from "@/components/Navbar/SellerNavbar";
import { AuthContextProvider } from "../services/StoreAuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthContextProvider>
      <div className="w-full">
        <SellerNavbar />
        <div className="w-full py-[5%] px-[7%]">{children}</div>
      </div>
    </AuthContextProvider>
  );
}
