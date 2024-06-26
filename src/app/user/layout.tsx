"use client";
import BuyerNavbar from "@/components/Navbar/BuyerNavbar";
import { AuthContextProvider } from "../services/BuyerAuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthContextProvider>
      <div className="w-full">
        <BuyerNavbar />
        <div className="w-full py-[5%] px-[7%]">{children}</div>
      </div>
    </AuthContextProvider>
  );
}
