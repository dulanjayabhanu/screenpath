import {ModeToggle} from "@/components/mode-toggle.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useEffect} from "react";
import usePageScroll from "@/hooks/usePageScroll.ts";
import {Link} from "react-router";

const NavBar = () => {
    const {pageScrolled, setPageScrolled} = usePageScroll()

    useEffect(() => {
        const handleScroll = () => {
            setPageScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const finalClass: string = `sticky top-0 z-50 ${pageScrolled ? "backdrop-blur bg-background/30 border-b" : ""}`

    return (
        <nav className={finalClass}>
            <section className="flex h-18 sm:h-12 items-center justify-between mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">

                <Link to={"/"} className="flex items-center gap-2">
                    <img src="/favicon.svg" alt="ScreenPath logo" className="h-7 w-auto invert-0 dark:invert-100"/>
                    <span className="sr-only">Home</span>
                </Link>

                <div className="flex flex-row gap-2">
                    <ModeToggle/>
                    <a href="https://github.com/dulanjayabhanu/screenpath" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="dark:bg-gray-950 dark:hover:bg-gray-950">
                            <img src="/github.svg" alt="Github logo" className="aspect-square h-5 invert-0 dark:invert-100"/>
                        </Button>
                    </a>
                </div>
            </section>
        </nav>
    )
}

export default NavBar