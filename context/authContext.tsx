import { UserContext } from ".";
import jwt_decode from "jwt-decode";
import { useEffect ,useState} from "react";


type JWTtoken = {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: 1;
};

export default function AuthContext({ children }: { children: JSX.Element }) {
    const [token, setToken]=useState("")
useEffect(() => {
  const item = localStorage.getItem('access_token') 
  setToken(item? item:'')
}, [token])
  const UserInfo = {
    userID: 0,
    isAuthenticated: false,
    token: "",
  };
  if (token!=='') {
    const userID: JWTtoken = jwt_decode(token);
    UserInfo.userID = userID.user_id;
    UserInfo.isAuthenticated = true;
    UserInfo.token = token;

}
  return (
    <UserContext.Provider value={UserInfo}>{children}</UserContext.Provider>
  );
}
