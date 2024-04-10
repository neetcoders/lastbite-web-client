"use client";
import BuyerNavbar from "@/components/Navbar/BuyerNavbar";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import getAuthToken from "@/app/services/getAuthToken";
import { AuthContextProvider } from "../services/BuyerAuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const logoutHandler = () => {
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/user/login");
  };

  const [currentUser, setCurrentUser] = useState(null);

  const getCurrentUser = async () => {
    try {
      const accessToken = await getAuthToken();

      if (accessToken === undefined) {
        return setCurrentUser(null);
      } else {
        const response = await axios.get(
          "http://localhost:8000/api/v1/users/me",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setCurrentUser(response.data.data);
      }
    } catch (error) {
      setCurrentUser(null);
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  });

  return (
    <AuthContextProvider>
      <html lang="en">
        <body className="w-full">
          <BuyerNavbar
            currentUser={currentUser}
            logoutHandler={logoutHandler}
          />
          <div className="w-full py-[5%] px-[7%]">{children}</div>
        </body>
      </html>
    </AuthContextProvider>
  );
}
