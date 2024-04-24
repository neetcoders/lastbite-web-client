import { createContext, ReactNode, useState, useEffect } from "react";
import { getAuthToken } from "./authTokenService";
import { IUser, getCurrentUser } from "./userService";

interface Props {
  children?: ReactNode;
}

const AuthContext = createContext<IUser | undefined>(undefined);

const AuthContextProvider = ({ children }: Props) => {
  const [currentUserData, setCurrentUserData] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const getUser = async () => {
      const authToken = await getAuthToken();
  
      if (!authToken) {
        setCurrentUserData(undefined);
      }
      else {
        const user = await getCurrentUser();
        setCurrentUserData(user);
      }
    }
    
    getUser();
  }, []);

  return <AuthContext.Provider value={currentUserData}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
