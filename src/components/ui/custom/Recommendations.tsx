import RecommendationCard from "@/components/ui/custom/RecommendationCard.tsx";
import type {RecommendationProps} from "@/types/props/RecommendationProps.ts";
import MovieSearchEmpty from "@/components/ui/custom/MovieSearchEmpty.tsx";

const Recommendations = ( { recommendations }: RecommendationProps ) => {
    return (
        <section className="flex flex-col gap-4 py-10">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Recommendations</h4>
            {recommendations.total_results < 1 ? (
                <div className="w-full flex flex-col items-center justify-center">
                    <MovieSearchEmpty />
                </div>
            ): (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 py-5 sm:py-8">
                    {recommendations?.results.slice(0, 4).map(movie => (
                        <RecommendationCard
                            key={movie.id}
                            movie={movie}
                        />))}
                </div>
            )}
        </section>
    )
}

export default Recommendations