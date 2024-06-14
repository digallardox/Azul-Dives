"use client"
import { usePathname } from 'next/navigation'

export default function diveSpot(){
    const pathname = usePathname()
    return <p>Current pathname: {pathname}</p>
}