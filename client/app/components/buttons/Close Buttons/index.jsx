"use client"

const CloseButton = ({onClick}) => {
    return (
        <>
        <button
            onClick={onClick}
            className="w-[41px] h-[41px] bg-white rounded-full border border-black">
            <img
            src="/assets/close_icon.svg" alt="close button" />
        </button>
        </>
    )
}

export { CloseButton }