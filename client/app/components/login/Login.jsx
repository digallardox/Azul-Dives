import { CloseButton } from "../../components/buttons/Close Buttons/index"

const LoginScreen = ({onClick}) => {

    return (
        <>
        <div className="absolute bottom-0 left-0 rounded-t-[30px] w-screen h-[850px] bg-white" >
            <CloseButton onClick={onClick} />
        </div>
        <div className="w-screen h-screen bg-black/[0.20]" />
        </>
    )
}

export default LoginScreen;