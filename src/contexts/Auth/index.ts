import { createContext } from "react";
import IUser from "../../models/user";

interface AuthProps {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const AuthContext = createContext<AuthProps>({
  user: null,
  setUser: () => null,
});

export default AuthContext;
