import { createContext, ReactNode, useState, useEffect, useCallback } from "react";
import { getAuthToken } from "./authTokenService";
import { IUser, getCurrentUser } from "./userService";

interface Props {
  children?: ReactNode;
}

const AuthContext = createContext<{currentUser?: IUser, refetchCurrentUser: () => void}>({
  currentUser: undefined,
  refetchCurrentUser: () => {},
});

const AuthContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  const refetchCurrentUser = useCallback(async () => {
    const authToken = await getAuthToken();
  
    if (!authToken) {
      setCurrentUser(undefined);
    }
    else {
      const user = await getCurrentUser();
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    refetchCurrentUser();
  }, [refetchCurrentUser]);

  return <AuthContext.Provider value={{currentUser, refetchCurrentUser}}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
