import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;
  console.log("request:", pathname);

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });

  if (!session) {
    if (pathname === "/dashboard") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}
