import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function authMiddleware(req: NextRequest) {
  const token = cookies().get("token");

  // if (req.nextUrl.pathname.startsWith("/_next/")) {
  //   return NextResponse.next()
  // }
  
  if (!token) {
    return Response.json({
      error: "Unauthorized",
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
