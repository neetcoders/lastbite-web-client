import { createContext, ReactNode, useState, useEffect } from "react";
import getAuthToken from "./getAuthToken";
import axios from "axios";

interface Props {
  children?: ReactNode;
}

interface IUser {
  email: string;
  display_name: string;
  birth_date: string;
  active_address: string;
}

const AuthContext = createContext<IUser | undefined>(undefined);

const AuthContextProvider = ({ children }: Props) => {
  const [authToken, setAuthToken] = useState<string | undefined>(undefined);
  const [currentUserData, setCurrentUserData] = useState<IUser | undefined>(undefined);

  const getToken = async () => {
    const token = await getAuthToken();
    setAuthToken(token);
  };
  
  const getCurrentUser = async () => {
    if(authToken === undefined) {
      setCurrentUserData(undefined)
    } else {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/users/me", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setCurrentUserData(response.data.data)
      } catch (error) {
        setCurrentUserData(undefined)
      }
    }
  };

  useEffect(() => {
    getToken();
    getCurrentUser();
  })

  return <AuthContext.Provider value={currentUserData}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
