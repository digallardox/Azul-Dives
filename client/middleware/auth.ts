import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function authMiddleware(req: NextRequest) {
  const token = cookies().get("token");
  if (!token) {
    return Response.json({
      error: "Unauthorized",
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
