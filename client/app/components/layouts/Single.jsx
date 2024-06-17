"use client"
import { useRouter } from "next/navigation"
import { SaveButton } from "@/app/components/buttons/saveButtons/index"

const Single = ({title, text, cost, id}) => {
    const router = useRouter()

    function handleClick(){
        router.push(`/dives/${id}`)
    }

    // if (localStorage.getItem("jwt") !== null) {
    //     return (
    //         <>
    //         <div
    //         className="pb-[40px] cursor-pointer">
    //             <SaveButton style="absolute"/>
    //             <div className="w-[320px] h-[320px] bg-[#d9d9d9] rounded-[15px]" />
    //             <div className="pt-[10px]"> 
    //                 <span
    //                 className="text-lg font-semibold">
    //                     {title}
    //                 </span><br />
    //                 <span>
    //                     {text}
    //                 </span><br />
    //                 <span>
    //                     <strong>${cost}</strong> per explorer
    //                 </span><br />
    //             </div>
    //         </div>
    //         </>   
    //     )
    //   }

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