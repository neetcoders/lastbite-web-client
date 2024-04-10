"use client";

import axios from "axios";
import getAuthToken from "../services/getAuthToken";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SellerNavbar from "@/components/Navbar/SellerNavbar";
import { AuthContextProvider } from "../services/StoreAuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const logoutHandler = () => {
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/store/login");
  };

  const [currentStore, setCurrentStore] = useState(null);

  const getCurrentStore = async () => {
    try {
      const accessToken = await getAuthToken();

      if (accessToken === undefined) {
        return setCurrentStore(null);
      } else {
        const response = await axios.get(
          "http://localhost:8000/api/v1/store/me",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setCurrentStore(response.data.data);
      }
    } catch (error) {
      setCurrentStore(null);
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getCurrentStore();
  });

  return (
    <AuthContextProvider>
      <html lang="en">
        <body className="w-full">
          <SellerNavbar
            currentStore={currentStore}
            logoutHandler={logoutHandler}
          />
          <div className="w-full py-[5%] px-[7%]">{children}</div>
        </body>
      </html>
    </AuthContextProvider>
  );
}
