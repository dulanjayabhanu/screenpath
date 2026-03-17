import MovieSearchEmpty from "@/components/ui/custom/MovieSearchEmpty.tsx";
import type {ActorMovieCreditsProps} from "@/types/props/ActorMovieCreditsProps.ts";
import ActorMovieCreditCard from "@/components/ui/custom/ActorMovieCreditCard.tsx";
const ActorMovieCredits = (
    {
        movieCredits,
        languageData,
    }: ActorMovieCreditsProps ) => {
    return (
        <section className="flex flex-col gap-4 py-10">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Filmography</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 py-5 sm:py-8">
                {movieCredits.cast.length < 1 ? (
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 items-center justify-center">
                        <MovieSearchEmpty />
                    </div>
                ) : movieCredits.cast.slice(0, 20).map((actorMovie) => {
                    const foundedLanguage = languageData.find((language) =>
                        language.iso_639_1 === actorMovie.original_language
                    )
                    return (
                        <ActorMovieCreditCard
                            key={actorMovie.id}
                            actorMovie={actorMovie}
                            language={foundedLanguage || {
                                iso_639_1: "",
                                english_name: "",
                                name: "",
                            }}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default ActorMovieCredits