import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware executed");
  const candidate = request.cookies.get("candidate")?.value;
  // console.log(candidate)
  const authToken = request.cookies.get("token")?.value;
//   const email = request.cookies.get("email")?.value;
  const path = request.nextUrl.pathname;

  // If no authToken and the path is "/", redirect based on city cookie
  if (!authToken && path === "/") {
 
      return NextResponse.redirect(new URL(`/signup`, request.url));
  
   
  }

  // If no authToken and trying to access /profile, redirect to home
  if (!authToken && path === "/company-profile") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // If no authToken and trying to access /search, redirect to home
  if (!authToken && path === "/search/talent" ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (authToken && path === "/search/talent" && !candidate ) {
    return NextResponse.redirect(new URL("/categories", request.url));
  }
if (authToken && path === "/" && candidate) {
  return NextResponse.redirect(new URL(`/search/talent`, request.url));
}
  // If authToken exists and the path is "/", redirect based on city cookie
  if (authToken && path === "/") {
   
      return NextResponse.redirect(new URL(`/categories`, request.url));
    
  }
  

  // If city is defined and the path is "/explore", redirect to specific city page
//   if (city && path === "/explore") {
//     return NextResponse.redirect(new URL(`/explore/${city}`, request.url));
//   }

  // If the path is "/profile" and authToken exists, allow access
//   if (path === "/profile" && authToken) {
//     return NextResponse.next();
//   }

  // Default case: allow access to the requested resource
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/company-profile", "/search/:path*"],
};
