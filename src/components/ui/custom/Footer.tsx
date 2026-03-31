import {Link} from "react-router";

const Footer = () => {
    return (
        <section className="w-full flex flex-col gap-4 items-center justify-center py-10">
            <div className="flex flex-row items-center gap-2">
                <img src="/screenpath-logo.svg" alt="ScreenPath logo" loading="lazy" className="h-8 w-auto invert-0 dark:invert-100"/>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    ScreenPath
                </h4>
            </div>
            <p className="text-muted-foreground py-1">
                Your calm path to the perfect movie
            </p>
            <div className="w-full md:w-xl lg:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 mx-auto gap-6 sm:gap-2 pt-4 pb-8">
                <div className="flex flex-col gap-2 text-center lg:text-start">
                    <h4 className="scroll-m-20 text-lg font-semibold tracking-tight py-2">
                        ScreenPath
                    </h4>
                    <Link to={"/"} className="text-muted-foreground hover:underline hover:invert-10">Home</Link>
                    <Link to={"/actors"} className="text-muted-foreground hover:underline hover:invert-10">Actors</Link>
                    <Link to={"/crews"} className="text-muted-foreground hover:underline hover:invert-10">Directors & Crew</Link>
                </div>
                <div className="flex flex-col gap-2 text-center lg:text-start">
                    <h4 className="scroll-m-20 text-lg font-semibold tracking-tight py-2">
                        Community
                    </h4>
                    <a href="https://github.com/dulanjayabhanu/screenpath" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline hover:invert-10">
                        GitHub
                    </a>
                </div>
                <div className="flex flex-col gap-2 text-center lg:text-start">
                    <h4 className="scroll-m-20 text-lg font-semibold tracking-tight py-2">
                        Legal
                    </h4>
                    <Link to={"/privacy"} className="text-muted-foreground hover:underline hover:invert-10">Privacy</Link>
                    <Link to={"/terms"} className="text-muted-foreground hover:underline hover:invert-10">Terms</Link>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full items-center lg:justify-between text-center lg:text-start pb-10">
                <p className="text-muted-foreground pt-6 pb-1 w-full max-w-xl">&copy; {new Date().getFullYear()} <Link to={"/"} className="font-semibold text-foreground hover:underline hover:invert-10">
                    ScreenPath
                </Link> <small className="text-xs">•</small> Data provided by TMDB. Not endorsed by TMDB.</p>
                <p className="text-muted-foreground pt-6 pb-1">Built by <a href="https://github.com/dulanjayabhanu" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline hover:invert-10">
                    Dulanjaya
                </a></p>
            </div>
        </section>
    )
}

export default Footer