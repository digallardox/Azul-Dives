type AuthFields = { email: string; password: string };

const API_ENDPOINT = (URI: string) =>
  `https://automatic-happiness-4r65xpq77x5cq456-3000.app.github.dev${URI}`;

const handleLogin = async (login: AuthFields) => {
  try {
    const res = await fetch(API_ENDPOINT("/auth/login"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authentication: {
          email: login.email,
          password: login.password,
        },
      }),
    });

    if (!res.ok) return `Error: ${res.status}`;
    const data = await res.json();
    if (!!data) localStorage.setItem("session_data", JSON.stringify(data))

  } catch (error) {
    console.error("Login failed", error);
  }
};

const handleSignup = async (signup: AuthFields) => {
  try {
    const res = await fetch(API_ENDPOINT("/divers"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        diver: {
          email: signup.email,
          password: signup.password,
        },
      }),
    });
    const data = await res.json();
    if (data.token) localStorage.setItem("jwt", data.token);
  } catch (error) {
    console.error("Failed creating accoutn", error);
  }
};

export { handleLogin, handleSignup };
