import { LoginButton } from "./buttons/login";

export const UnauthorizedView = ({ page }) => {
    const nodes = {
      profile: {
        title: "Hello, Explorer",
        message: "Log in to start planning your next dive",
        button: "variant2",
      },
      saved: {
        title: "Saved Dives",
        message: "Log in to see your saved dives",
        button: "variant2",
      },
      reservations: {
        title: "Upcoming Dives",
        message: "Log in to see your planned dives",
        button: "variant2",
      },
    };

    return (
      <>
        <div>
          <div className={Styles.title}>{nodes[page].title}</div>
          <div>{nodes[page].message}</div>
          <LoginButton />
        </div>
      </>
    );
}

const Styles = {
    title: "font-semibold text-[32px]"
}