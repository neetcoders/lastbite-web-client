import { createContext, ReactNode, useState, useEffect, useCallback } from "react";
import { getAuthToken } from "./authTokenService";
import { IStore, getCurrentStore } from "./storeService";

interface Props {
  children?: ReactNode;
}
const AuthContext = createContext<{currentStore?: IStore, refetchCurrentStore: () => void}>({
  currentStore: undefined,
  refetchCurrentStore: () => {},
});

const AuthContextProvider = ({ children }: Props) => {
  const [currentStore, setCurrentStore] = useState<IStore | undefined>(undefined);

  const refetchCurrentStore = useCallback(async () => {
    const authToken = await getAuthToken();
  
    if (!authToken) {
      setCurrentStore(undefined);
    }
    else {
      const store = await getCurrentStore();
      setCurrentStore(store);
    }
  }, []);

  useEffect(() => {
    refetchCurrentStore();
  }, [refetchCurrentStore]);

  return <AuthContext.Provider value={{currentStore, refetchCurrentStore}}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
