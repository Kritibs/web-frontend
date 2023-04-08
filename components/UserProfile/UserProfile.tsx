import { useContext } from "react";
import { UserContext } from "@/context";
export default function UserProfile() {
  const userInfo = useContext(UserContext);
  return (
    <>
      <h1> {userInfo.userID}</h1>
      <h1> hi</h1>
    </>
  );
}
