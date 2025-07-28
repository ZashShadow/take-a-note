import { auth } from "./auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl, auth: session } = req;
  
  const publicRoutes = ['/api/auth', '/login'];
  const isPublic = publicRoutes.some((path) => nextUrl.pathname.startsWith(path));
  
  console.log('Session:', session, 'Path:', nextUrl.pathname);

  // If no session and trying to access protected route
  if (!session && !isPublic) {
    return NextResponse.redirect(new URL('/login', nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};