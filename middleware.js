import { auth } from "./auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl, auth: session } = req;

  const publicRoutes = ['/api/auth', '/login'];
  const isPublic = publicRoutes.some((path) => nextUrl.pathname.startsWith(path));

  if (!session && !isPublic) {
    return NextResponse.redirect(new URL('/login', nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|login).*)",
    "/", // Protect the root route
  ],
};