"use client"
import Link from "next/link"

const LoggedOut = () => {
    return (
        <>
        <Container>
            <Explore />
            <Saved />
            <Dives />
            <Login />
        </Container>
        </>
    )
}

const Container = ({children}) => {
    return (
    <div className="fixed bottom-0 left-0 h-[75px] w-full bg-white border-x-0 border-t border-b-0 border-[#bfc8ca] flex gap-14 justify-center items-center ">
        { children }
    </div>
    )
}

const Explore = () => {
    return (
        <>
            <Link href="/"
            id="explore"
            className={Styles.menuItems}>
                <img src="/assets/search_icon.svg" alt="search icon" />
                <div className={Styles.text}>
                    Explore
                </div>
            </Link>
        </>
    )
}

const Saved = () => {
    return (
        <>
            <Link href="/saved"
            id="saved"
            className={Styles.menuItems}>
                <img src="/assets/heart_icon.svg" alt="heart icon" />
                <div className={Styles.text}>
                    Saved
                </div>
            </Link>
        </>
    )
}

const Dives = () => {
    return (
        <>
            <Link href="/dives"
            id="dives"
            className={Styles.menuItems}>

                <div className={Styles.text}>
                    Dives
                </div>
            </Link>
        </>
    )
}

const Login = () => {
    return (
        <>
            <Link href="/login"
            id="login"
            className={Styles.menuItems}>
                <img src="assets/profile_icon.svg" alt="profile icon" />
                <div className={Styles.text}>
                    Login
                </div>
            </Link>
        </>
    )
}

const Styles = {
    text: "text-[10px] text-[#3f484a]",
    menuItems: "flex flex-col items-center"
}

export default LoggedOut;