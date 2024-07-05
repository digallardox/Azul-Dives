"use server";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";

export const GET = (req: NextApiRequest, res: NextApiResponse) => {
  const session = cookies().get("token");
  return Response.json(session);
};
