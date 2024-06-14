"use client"
import { useRouter } from "next/navigation"

const Single = ({title, text, cost, id}) => {
    const router = useRouter()

    function handleClick(){
        router.push(`/dive_spots/${id}`)
    }

    return (
        <>
        <div
        onClick={handleClick}
        className="pb-[40px] cursor-pointer">
            <div className="w-[320px] h-[320px] bg-[#d9d9d9] rounded-[15px]" />
            <div className="pt-[10px]"> 
                <span
                className="text-lg font-semibold">
                    {title}
                </span><br />
                <span>
                    {text}
                </span><br />
                <span>
                    <strong>${cost}</strong> per explorer
                </span><br />
            </div>
        </div>
        </>
    )
}

export default Single;