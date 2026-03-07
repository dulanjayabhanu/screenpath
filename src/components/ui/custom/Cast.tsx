import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area.tsx";
import CastCard from "@/components/ui/custom/CastCard.tsx";
import type {CastProps} from "@/types/props/CastProps.ts";
import MovieSearchEmpty from "@/components/ui/custom/MovieSearchEmpty.tsx";

const Cast = ( { cast }: CastProps ) => {
    return (
        <section className="flex flex-col gap-4 py-10">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Top Cast</h4>
            <div>
                {cast?.length < 1 ? (
                    <div className="flex flex-col items-center justify-center">
                        <MovieSearchEmpty />
                    </div>
                ) : (
                    <ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex w-max space-x-4 p-4">
                            {cast?.map(castMember => (
                                <CastCard
                                    key={castMember.credit_id}
                                    castMember={castMember || {
                                        adult: false,
                                        gender: 1,
                                        id: 0,
                                        known_for_department: "",
                                        name: "",
                                        original_name: "",
                                        popularity: 0,
                                        profile_path: "",
                                        cast_id: 0,
                                        character: "",
                                        credit_id: "",
                                        order: 0,
                                    }}
                                />
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                )}
            </div>
        </section>
    )
}

export default Cast