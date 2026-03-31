import MovieSearchEmpty from "@/components/ui/custom/MovieSearchEmpty.tsx";
import CrewMovieCreditCard from "@/components/ui/custom/CrewMovieCreditCard.tsx";
import type {DirectorAndCrewMovieCreditsProps} from "@/types/props/DirectorAndCrewMovieCreditsProps.ts";
import getUniqueDirectorAndCrewMovieCredits from "@/utils/getUniqueDirectorAndCrewMovieCredits.ts";

const DirectorAndCrewMovieCredits = (
    {
        movieCredits,
        languageData,
        gender,
        profilePath,
    }: DirectorAndCrewMovieCreditsProps
) => {
    const uniqueMovieCredits = getUniqueDirectorAndCrewMovieCredits(movieCredits)

    return (
        <section className="flex flex-col gap-4 py-10">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Filmography</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 py-5 sm:py-8">
                {uniqueMovieCredits.length < 1 ? (
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 items-center justify-center">
                        <MovieSearchEmpty />
                    </div>
                ) : uniqueMovieCredits.slice(0, 20).map((crewMovie) => {
                    const foundedLanguage = languageData.find((language) =>
                        language.iso_639_1 === crewMovie.original_language
                    )
                    return (
                        <CrewMovieCreditCard
                            key={crewMovie.credit_id}
                            crewMovie={crewMovie}
                            language={foundedLanguage || {
                                iso_639_1: "",
                                english_name: "",
                                name: "",
                            }}
                            gender={gender}
                            profilePath={profilePath}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default DirectorAndCrewMovieCredits