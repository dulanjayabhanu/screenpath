import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {PencilLine, Scroll, Video} from "lucide-react";
import type {DirectorAndWriterProps} from "@/types/props/DirectorAndWriterProps.ts";
import getDirectorsAndWriters from "@/utils/getDirectorsAndWriters.ts";
import type {Crew} from "@/types/Crew.ts";
import MovieSearchEmpty from "@/components/ui/custom/MovieSearchEmpty.tsx";

const DirectorAndWriter = ( { crew }: DirectorAndWriterProps ) => {
    const filteredCrew: Crew[] = getDirectorsAndWriters(crew)

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
            {filteredCrew.length < 1 ? (
                <div className="col-span-2 md:col-span-3 lg:col-span-4 items-center justify-center">
                    <MovieSearchEmpty />
                </div>
            ) : (
                filteredCrew?.map(filteredCrew => (
                <Card key={filteredCrew.credit_id} className="flex flex-col md:flex-row gap-4 md:gap-4 p-4">
                    <div className="hidden md:flex justify-center items-center ps-0 py-2 md:ps-4">
                        {filteredCrew.job.toLowerCase() === "director" ? (
                            <Video size={20}/>
                        ) : filteredCrew.job.toLowerCase() == "story" ? (
                            <Scroll size={20} />
                        ) : (
                            <PencilLine size={20}/>
                        )}
                    </div>
                    <div className="w-full flex flex-row items-center justify-start">
                        <CardHeader className="w-full p-2">
                            <CardTitle>{filteredCrew.name}</CardTitle>
                            <CardDescription>
                                {filteredCrew.job}
                            </CardDescription>
                        </CardHeader>
                    </div>
                </Card>
                ))
            )}
        </section>
    )
}

export default DirectorAndWriter