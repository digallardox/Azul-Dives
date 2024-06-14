type AuthFields = { email: string, password: string}

const API_ENDPOINT = (URI: string) => `https://automatic-happiness-4r65xpq77x5cq456-3000.app.github.dev${URI}`

const handleLogin = async (login: AuthFields) => {
    const res = await fetch(API_ENDPOINT("/auth/login"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            authentication: {
                email: login.email,
                password: login.password
            }
        })
    })
    const data = await res.json()

    console.log(data)
    return data
}


const handleSignup = async (signup: AuthFields) => {
    const res = await fetch(API_ENDPOINT("/divers"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            diver: {
                email: signup.email,
                password: signup.password
            }
        })
    })
    const data = await res.json()
    console.log(data)

}

export { handleLogin, handleSignup }