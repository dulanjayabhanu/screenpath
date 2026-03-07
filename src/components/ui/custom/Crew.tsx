import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area.tsx";
import CrewCard from "@/components/ui/custom/CrewCard.tsx";
import type {CrewProps} from "@/types/props/CrewProps.ts";
import MovieSearchEmpty from "@/components/ui/custom/MovieSearchEmpty.tsx";

const Crew = ( { crew }: CrewProps ) => {
    return (
        <section className="flex flex-col gap-4 py-10">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Crew</h4>
            {crew?.length < 1 ? (
                <div className="flex flex-col items-center justify-center">
                    <MovieSearchEmpty />
                </div>
            ) : (
                <div>
                    <ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex w-max space-x-4 p-4">
                            {crew?.map(crewMember => (
                                <CrewCard
                                    key={crewMember.credit_id}
                                    crewMember={crewMember}
                                />
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            )}
        </section>
    )
}

export default Crew