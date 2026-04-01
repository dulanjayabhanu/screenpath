import {ModeToggle} from "@/components/mode-toggle.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useEffect} from "react";
import usePageScroll from "@/hooks/usePageScroll.ts";
import {Link} from "react-router";
import MovieNavigationMenu from "@/components/ui/custom/MovieNavigationMenu.tsx";
import MobileNavigationMenu from "@/components/ui/custom/MobileNavigationMenu.tsx";

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
            <section className="flex h-18 sm:h-14 items-center justify-between mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">

                <div className="flex items-center gap-4">
                    <Link to={"/"} className="flex items-center gap-2">
                        <img src="/screenpath-logo.svg" alt="ScreenPath logo" loading="lazy" className="h-7 w-auto invert-0 dark:invert-100"/>
                        <span className="sr-only">Home</span>
                    </Link>
                    <div className="hidden md:block">
                        <MovieNavigationMenu />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="hidden md:flex items-center gap-2">
                        <ModeToggle />
                        <a href="https://github.com/dulanjayabhanu/screenpath" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon" className="dark:bg-gray-950 dark:hover:bg-gray-950">
                                <img src="/github.svg" alt="Github logo" loading="lazy" className="aspect-square h-5 invert-0 dark:invert-100"/>
                            </Button>
                        </a>
                    </div>
                    <div className="flex md:hidden">
                        <MobileNavigationMenu />
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default NavBar