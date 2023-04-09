import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        }

        const loginRes = await fetch("http://10.28.164.119:8000/api/token/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password })
        })
        const user = await loginRes.json()
        console.log(user)
        if (loginRes.ok && user) {
          return user
        }
        else {
          throw new Error("Invalid Credentials")
        }
      }

    })

  ]
}

export default NextAuth(authOptions);