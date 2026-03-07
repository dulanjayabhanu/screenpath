import {Outlet, ScrollRestoration} from "react-router";

const RootLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Outlet />
        </>
    )
}

export default RootLayout