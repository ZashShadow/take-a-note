import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { auth, handlers } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  // Optional: callbacks, session strategy, adapter, etc.
});
export { handlers as GET, handlers as POST };