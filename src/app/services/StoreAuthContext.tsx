import { createContext, ReactNode, useState, useEffect } from "react";
import getAuthToken from "./getAuthToken";
import axios from "axios";

interface Props {
  children?: ReactNode;
}

interface IStoreAddress {
    street: string;
    longtitude: string;
    latitude: string;
}

interface IStore {
  email: string;
  display_name: string;
  address: IStoreAddress
}

const AuthContext = createContext<IStore | undefined>(undefined);

const AuthContextProvider = ({ children }: Props) => {
  const [authToken, setAuthToken] = useState<string | undefined>(undefined);
  const [currentStoreData, setCurrentStoreData] = useState<IStore | undefined>(undefined);

  const getToken = async () => {
    const token = await getAuthToken();
    setAuthToken(token);
  };
  
  const getCurrentStore = async () => {
    if(authToken === undefined) {
      setCurrentStoreData(undefined)
    } else {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/store/me", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setCurrentStoreData(response.data.data)
      } catch (error) {
        setCurrentStoreData(undefined)
      }
    }
  };

  useEffect(() => {
    getToken();
    getCurrentStore();
  })

  return <AuthContext.Provider value={currentStoreData}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
