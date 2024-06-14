const Searchbar = () => {
    return (
        <>
        <Container>
            <IconAndText />
        </Container>
        </>
    )
}

const IconAndText = () => {
    return (
        <>
            <img src="/assets/search_icon.svg" alt="search icon"/>
            <div>
                Where to, explorer?
            </div>
        </>
    )
}

const Container = ({ children }) => {
    return (
        <div className="rounded-[22px] border border-[#6f797a] w-[320px] h-12 bg-white flex justify-center items-center gap-[18px]">
            { children }
        </div>
    )
}

export default Searchbar;