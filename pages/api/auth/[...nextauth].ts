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

        const loginRes = await fetch(process.env.NEXT_PUBLIC_baseURL+"token/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password })
        })
        const user = await loginRes.json()
        // console.log(user)
        if (loginRes.ok && user) {
          return user
        }
        else {
          throw new Error("Invalid Credentials")
        }
      }

    })

  ],

  callbacks: {
    jwt: async ({ token, user }) => {
        user && (token.user = user)
        token.user.accessToken=token.user['access']
        return token
    },
    session: async ({ session, token, user }) => {
        session.user = token.user!
        return Promise.resolve(session)
    },
}
}

export default NextAuth(authOptions);