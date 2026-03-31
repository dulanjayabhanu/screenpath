import {Outlet, ScrollRestoration} from "react-router";
import {Suspense} from "react";
import ProgressSpinner from "@/components/ui/custom/ProgressSpinner.tsx";

const RootLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Suspense fallback={
                <div className="fallback-wrapper">
                    <ProgressSpinner/>
                </div>
            }>
                <Outlet />
            </Suspense>
        </>
    )
}

export default RootLayout