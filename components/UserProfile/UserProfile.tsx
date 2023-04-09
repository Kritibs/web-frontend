import { useContext } from "react";
import { UserContext } from "@/context";
import { useSession} from "next-auth/react"

export default function UserProfile() {
  const userInfo = useContext(UserContext);
  const session = useSession()
//   console.log(userInfo.isAuthenticated)

  if (session) {
    console.log(session)
    return <p>Signed in as {session.status}</p>
  }
  return (
    <>
      <h1> {userInfo.userID}</h1>
    </>
  );
}
