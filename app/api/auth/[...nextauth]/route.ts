import NextAuth, { NextAuthOptions } from "next-auth"
import DiscordProvider from "next-auth/providers/discord";
import { JWT } from 'next-auth/jwt'
import { Session as NextAuthSession, User as NextAuthUser } from 'next-auth'

interface User extends NextAuthUser {
  id: string
}

interface Session extends NextAuthSession {
  user: User
}

interface SessionPayload { session: Session, token: JWT }

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt(tokenPayload) {
      const { token, account, user } = tokenPayload;
      if (account) {
        token.accessToken = account.access_token
        token.id = user?.id
      }
      return token;
    },
    async session(sessionPayload) {
      const sp = sessionPayload as any;
      const { session, token } = sp as SessionPayload;
      if (token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    error: '/install'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }