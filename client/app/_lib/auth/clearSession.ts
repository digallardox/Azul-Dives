import { cookies } from "next/headers"

export const clearSession = () => {
    const cookie = cookies()
    cookie.delete("token");
    cookie.delete("diver");
}