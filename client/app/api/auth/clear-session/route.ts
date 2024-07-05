"use server";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";

export const DELETE = (req: NextApiRequest, res: NextApiResponse) => {
  cookies().delete("token");
  cookies().delete("diver");
  return Response.json({
    status: 200,
  });
};
