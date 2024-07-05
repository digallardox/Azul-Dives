"use client"
import { useRouter } from "next/navigation"

export const CloseButton = () => {
    const router = useRouter()

    return (
        <>
        <button onClick={() => router.back()}>Go Back</button>
        </>
    )
}