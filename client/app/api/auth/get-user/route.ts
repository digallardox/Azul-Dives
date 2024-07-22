import { cookies } from "next/headers"

export const GET = () => {
    const diver = cookies().get("diver")
    return Response.json({
        id: diver!.value
    });
}