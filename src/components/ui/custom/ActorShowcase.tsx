import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";
import {ArrowUpRightIcon, Cake, MapPin, PartyPopper} from "lucide-react";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import type {ActorShowcaseProps} from "@/types/props/ActorShowcaseProps.ts";
import getHumanAge from "@/utils/getHumanAge.ts";
import type {HumanAge} from "@/types/HumanAge.ts";
import genderDefaultValues from "@/constants/genderDefaultValues.ts";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";

const ActorShowcase = (
    {
        name,
        gender,
        birthday,
        knownAs,
        biography,
        placeOfBirth,
        deathDay,
        homePage,
        imdbId,
        profilePath,
    }: ActorShowcaseProps ) => {
    const MOVIE_API_BASE_POSTER_URL: string = import.meta.env.VITE_MOVIE_API_BASE_POSTER_URL
    const MOVIE_API_POSTER_W1280: string = import.meta.env.VITE_MOVIE_API_POSTER_W1280

    const { female } = genderDefaultValues()
    const profileUrl = profilePath ?
        `${MOVIE_API_BASE_POSTER_URL}${MOVIE_API_POSTER_W1280}${profilePath}` :
        gender === female ?
            "/default_female_banner.svg" : "/default_male_banner.svg"

    const actorAge: HumanAge = birthday && deathDay ?
        getHumanAge(new Date(birthday), new Date(deathDay)) :
        birthday && !deathDay ?
            getHumanAge(new Date(birthday)) :
            {
                age: 0,
                isTodayBirthDay: false
            }

    return (
        <section className="flex flex-col lg:flex-row gap-8 py-6 sm:py-10 relative">
            <div className="flex justify-center items-center w-full lg:w-5/9 h-full">
                <AspectRatio
                    ratio={9 / 16}
                    className="w-full h-full rounded-lg relative group overflow-hidden">
                    <img
                        src={profileUrl}
                        alt={`${name} poster`}
                        loading="lazy"
                        className="rounded-lg object-cover h-full brightness-60 hover:grayscale-0 hover:brightness-95 grayscale dark:brightness-40 dark:hover:brightness-90 transition-all duration-300"
                    />
                    {deathDay ? (
                        <img
                            src="/flower.webp"
                            alt="Flower image"
                            loading="lazy"
                            className="absolute object-contain aspect-video h-90 bottom-0 brightness-90 dark:brightness-80 inset-x-0 translate-y-15 transition-all group-hover:duration-500 group-hover:ease-out group-hover:translate-y-100" />
                    ) : null}
                </AspectRatio>
            </div>
            <div className="flex flex-col items-center w-full gap-4">
                <div className="w-full flex flex-col items-start justify-start gap-4 pb-4">
                    <h1 className="scroll-m-20 text-center self-center sm:text-start sm:self-start text-4xl font-extrabold tracking-tight text-balance sm:text-[min(10vw,60px)]">
                        {name}
                    </h1>
                    <h3 className="scroll-m-20 pb-2 self-center sm:self-start text-lg sm:text-3xl font-semibold tracking-tight first:mt-0 flex flex-col sm:flex-row items-center gap-3">
                        {actorAge.age < 1 ? "N/A" : actorAge.age} Years Old
                        {actorAge.isTodayBirthDay ? (
                            <Badge variant="secondary" className="flex flex-row justify-center items-baseline select-none animate-pulse text-sm text-muted-foreground opacity-85 px-3">
                                Birthday Today
                                <PartyPopper data-icon="inline-end"/>
                            </Badge>
                        ) : null}
                    </h3>
                    <div className="w-full flex flex-col items-start justify-start gap-4 py-4">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight italic">Known as</h4>
                        <p className="leading-7 not-first:mt-1 text-muted-foreground text-justify italic sm:text-start">
                            {knownAs.length < 1 ? (
                                "N/A"
                            ) : knownAs.map((knownName, index) => (
                                index === 0 ? knownName : `, ${knownName}`
                            ))}
                        </p>
                    </div>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Biography</h4>
                    <ScrollArea className="h-72 scroll-mask">
                        <div className="pt-4 pb-12 pe-4">
                            <p className="leading-7 not-first:mt-1 text-muted-foreground text-justify sm:text-start">
                                {biography}
                            </p>
                        </div>
                    </ScrollArea>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="w- flex flex-col md:flex-row gap-4 md:gap-4 p-4">
                        <div className="flex justify-center items-center ps-0 py-2 md:ps-4">
                            <Cake size={30}/>
                        </div>
                        <div className="w-full flex flex-row items-center justify-start">
                            <CardHeader className="w-full p-2 text-center md:text-start">
                                <CardTitle>BirthDay</CardTitle>
                                <CardDescription>
                                    <span className="scroll-m-20 text-lg font-semibold tracking-tight">{birthday && birthday !== "N/A" ? new Date(birthday).toDateString() : "N/A"}</span>
                                </CardDescription>
                                <div className="flex flex-row justify-center md:justify-start items-center gap-1 text-muted-foreground">
                                    <MapPin size={13} />
                                    <small className="text-xs leading-none font-medium">{placeOfBirth || "N/A"}</small>
                                </div>
                            </CardHeader>
                        </div>
                    </Card>
                    {deathDay ? (
                        <Card className="w-full flex flex-col md:flex-row gap-4 md:gap-4 p-4">
                            <div className="flex justify-center items-center ps-0 py-2 md:ps-4">
                                <img src="/death.svg" alt="death logo" className="aspect-square object-contain w-11 invert-0 dark:invert-100" />
                            </div>
                            <div className="w-full flex flex-row items-center justify-start">
                                <CardHeader className="w-full p-2 text-center md:text-start">
                                    <CardTitle>Died</CardTitle>
                                    <CardDescription>
                                        <span className="scroll-m-20 text-lg font-semibold tracking-tight">{new Date(deathDay).toDateString()}</span>
                                    </CardDescription>
                                    <div className="flex flex-row justify-center md:justify-start items-center gap-1 text-muted-foreground">
                                        <span className="text-xs leading-none font-medium">{getHumanAge(new Date(deathDay)).age} years ago</span>
                                    </div>
                                </CardHeader>
                            </div>
                        </Card>
                    ) : null}
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-4 py-4">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Links</h4>
                    <div className="flex flex-wrap justify-start gap-2">
                        {homePage ? (
                            <Badge variant="secondary" asChild>
                                <a href={homePage} target="_blank" rel="noopener noreferrer">
                                    HomePage <ArrowUpRightIcon data-icon="inline-end" />
                                </a>
                            </Badge>
                        ) : null}
                        {imdbId ? (
                            <Badge variant="secondary" asChild>
                                <a href={`https://www.imdb.com/name/${imdbId}`} target="_blank" rel="noopener noreferrer">
                                    IMDB <ArrowUpRightIcon data-icon="inline-end" />
                                </a>
                            </Badge>
                        ) : null}
                        {!homePage && !imdbId ? (
                            <Badge variant="secondary">
                                N/A
                            </Badge>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ActorShowcase