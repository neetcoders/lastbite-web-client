"use client";
import BuyerNavbar from "@/components/Navbar/BuyerNavbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAuthToken } from "@/app/services/authTokenService";
import { AuthContextProvider } from "../services/BuyerAuthContext";
import { IUser, getCurrentUser, logout } from "../services/userService";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const logoutHandler = async () => {
    logout().then(() => router.push("/user/login"));
  };

  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const getUser = async () => {
      const accessToken = await getAuthToken();

      if (!accessToken) {
        setCurrentUser(undefined);
      } 
      else {
        const user = await getCurrentUser();
        setCurrentUser(user);
      }
    };

    getUser();
  }, []);

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
