"use client"
import Button from "../buttons/Button"

const NotAuthPage = ({title, text, onClick, buttonText}) => {
    return (
        <>
        <div className="pt-[100px] px-[25px]">
            <span className="font-semibold text-[32px]">{title}</span>
            <div className="pt-[60px]">
                <span className="font-semibold text-[32px]">{text}</span><br />
                
                <Button
                onClick={onClick}
                text={buttonText}
                />
                
            </div>
        </div>
        </>
    )
}

export default NotAuthPage;