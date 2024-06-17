import Single from "./Single"

const arr = ["test", "test2", "test3", "test4"]

const Multiple = async () => {

    const res = await fetch('https://automatic-happiness-4r65xpq77x5cq456-3000.app.github.dev/dive_spots')
    const data = await res.json()

    return (
        <>
        <div className="pb-[60px]">
        {data.map((diveSpot) => (
            <Single
            id={diveSpot.id}
            title={diveSpot.name}
            text={diveSpot.description}
            cost={diveSpot.price}
            />
        ))}
        </div>
        </>
    )
}

export default Multiple;