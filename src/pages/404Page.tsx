import {ThemeProvider} from "@/components/theme-provider.tsx";
import {useEffect} from "react";
import {Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle} from "@/components/ui/empty.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router";

const FileNotFoundPage = () => {
    useEffect(() => {
        document.title = "404: This page could not be found."
    }, [])

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

            <div className="min-h-screen relative">
                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                    <Empty className="h-dvh">
                        <EmptyHeader>
                            <EmptyTitle className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance">
                                404
                            </EmptyTitle>
                            <EmptyDescription>
                                The page you're looking for doesn't exist.
                            </EmptyDescription>
                        </EmptyHeader>
                        <EmptyContent>
                            <Button variant="default" asChild size="sm">
                                <Link to={"/"}>
                                    Go To Home
                                </Link>
                            </Button>
                        </EmptyContent>
                    </Empty>
                </div>
            </div>

        </ThemeProvider>
    )
}

export default FileNotFoundPage