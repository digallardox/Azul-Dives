import { cookies } from "next/headers";

export const GET = () => {
  const diver = cookies().get("token");
  return Response.json({
    id: diver!.value,
  });
};
