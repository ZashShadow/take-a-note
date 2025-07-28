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
  callbacks: {
  async redirect({ url, baseUrl }) {
    if (url.startsWith("/")) return `${baseUrl}${url}`;
    if (new URL(url).origin === baseUrl) return url;
    return baseUrl;
  },
},
});
export { handlers as GET, handlers as POST };