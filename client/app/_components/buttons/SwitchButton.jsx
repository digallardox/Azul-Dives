export default function SwitchButton({ uri, context}){

    const handleClick = () => {
        localStorage.setItem("context", context)
        window.location.href = `/${uri}`
    }

    return (
        <>
                <button
                onClick={handleClick}
                className="block bg-black text-white h-[50px] w-[225px] rounded-full flex items-center justify-center gap-[5px]">
                  <img src="/assets/change_icon.svg" />
                  <span>Switch to {context}</span>
                </button>
        </>
    )
}