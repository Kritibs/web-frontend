import { UserContext } from ".";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

type JWTtoken = {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: 1;
};

  const UserInfo = {
    userID: 0,
    isAuthenticated: false,
    token: "",
  };
export default function AuthContext({ children }: { children: JSX.Element }) {
  const [userInfo, setUserInfo] = useState(UserInfo);

  useEffect(() => {
    if (localStorage.getItem("access_token")!==null){
        const token=localStorage.getItem("access_token")!
      const userID: JWTtoken = jwt_decode(token);
      UserInfo.userID = userID.user_id;
      UserInfo.isAuthenticated = true;
      UserInfo.token = token;
      setUserInfo(UserInfo);
    }


  }, []);

      console.log("hi",UserInfo)
  console.log("test",userInfo)

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}
