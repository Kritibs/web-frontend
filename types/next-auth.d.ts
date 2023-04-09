import NextAuth from "next-auth"


export interface Token {
    access: string,
    refresh: string,
    
}


declare module "next-auth" {
    interface User {
        token?: Token;
    }

    interface Session {
        user?: User
        & DefaultSession["user"]
      }
    }

declare module "next-auth/jwt" {
    interface JWT {
        user?: User;
    }
}