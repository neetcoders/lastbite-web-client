"use client";
import BuyerNavbar from "@/components/Navbar/BuyerNavbar";
import { useRouter } from "next/navigation";
import getAuthToken from "../services/getAuthToken";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const logoutHandler = () => {
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };

  const [currentUser, setCurrentUser] = useState(null);

  const getCurrentUser = async () => {

    try {
      const accessToken = await getAuthToken();
  
      const response = await axios.get("http://localhost:8000/api/v1/users/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setCurrentUser(response.data.data);
      
    } catch (error) {
      setCurrentUser(null);
      console.error('Error fetching user data:', error);
    }

  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <html lang="en">
      <body>
        <BuyerNavbar currentUser={currentUser} logoutHandler={logoutHandler} />
        {children}
      </body>
    </html>
  );
}
