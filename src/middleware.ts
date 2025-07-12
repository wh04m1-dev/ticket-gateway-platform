// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;

//   const isPublicPath = path === "/login" || path === "/register";

//   const token = request.cookies.get("authToken")?.value || "";

//   if (isPublicPath && token) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   if (!isPublicPath && !token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/", "/login", "/register", "/dashboard/:path*", "/profile/:path*"],
// };

import { NextResponse } from "next/server";

export default function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
