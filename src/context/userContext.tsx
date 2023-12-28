import { User } from "@/models/user.model";
import { createContext, useContext } from "react";

const UserContext = createContext<{ user: User | null }>({ user: null });

interface UserContextProviderProps {
  children: React.ReactElement;
}

export function UserContextProvider(props: UserContextProviderProps) {
  const { children } = props;
  return (
    <UserContext.Provider
      value={{
        user: new User("QuatroLados", "https://github.com/viniciuSquare.png"),
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
