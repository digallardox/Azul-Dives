"use server"
import { cookies } from "next/headers";

export const checkToken = () => {
    const token = cookies().get("token")
    return !!token ? true : false
}