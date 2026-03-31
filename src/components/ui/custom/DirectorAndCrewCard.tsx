import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {ChartSpline} from "lucide-react";
import type {GenderDefaultValues} from "@/types/GenderDefaultValues.ts";
import genderDefaultValues from "@/constants/genderDefaultValues.ts";
import {useNavigate} from "react-router";
import type {DirectorAndCrewCardProps} from "@/types/props/DirectorAndCrewCardProps.ts";

const DirectorAndCrewCard = ( { crew }: DirectorAndCrewCardProps ) => {
    const { female }: GenderDefaultValues = genderDefaultValues()

    const MOVIE_API_BASE_POSTER_URL: string = import.meta.env.VITE_MOVIE_API_BASE_POSTER_URL
    const MOVIE_API_POSTER_W1280: string = import.meta.env.VITE_MOVIE_API_POSTER_W1280
    const posterUrl: string = crew?.profile_path ?
        `${MOVIE_API_BASE_POSTER_URL}${MOVIE_API_POSTER_W1280}${crew?.profile_path}` :
        crew?.gender === female ? "/default_female_banner.svg" : "/default_male_banner.svg"

    const navigate = useNavigate()

    return (
        <Card className="relative w-full pt-0 group" onClick={() =>
            navigate(`/crew/${crew.id}`)
        }>
            <img
                src={posterUrl}
                alt={crew?.name || "N/A"}
                className="relative z-20 aspect-square h-75 w-full object-cover brightness-60 group-hover:grayscale-0 group-hover:brightness-95 grayscale dark:brightness-40 dark:group-hover:brightness-90 transition-all duration-300 rounded-t-lg"
            />
            <CardHeader>
                <CardTitle className="flex flex-row justify-start items-baseline gap-2 overflow-x-hidden">
                    <span className="w-auto max-w-60 truncate">{crew?.name || "N/A"}</span>
                </CardTitle>
                <CardDescription className="overflow-x-hidden pt-1">
                    <p className="leading-7 text-muted-foreground text-justify sm:text-start text-xs truncate">{crew.known_for_department} Department</p>
                    <div className="flex justify-end mt-3">
                        <Badge variant="secondary" className="flex gap-2">
                            <ChartSpline />
                            <p>{crew?.popularity.toFixed(1)}</p>
                        </Badge>
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default DirectorAndCrewCard