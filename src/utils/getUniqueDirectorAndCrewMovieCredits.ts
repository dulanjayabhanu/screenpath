import type {ActorMovie} from "@/types/ActorMovie.ts";
import type {CrewMovie} from "@/types/CrewMovie.ts";

const getUniqueDirectorAndCrewMovieCredits = (movieCredits: {
    cast: ActorMovie[],
    crew: CrewMovie[]
}): CrewMovie[] => {
    const crewMovies: CrewMovie[] = [...movieCredits.crew]
    const uniqueCrewMovies: CrewMovie[] = []

    crewMovies.map((crewMovie) => {
        const foundedMovie = uniqueCrewMovies.find((uniqueMovie) =>
            uniqueMovie.id === crewMovie.id
        )
        if(foundedMovie){
            foundedMovie.job = `${foundedMovie?.job}, ${crewMovie.job}`
        }else{
            uniqueCrewMovies.push(crewMovie)
        }
    })

    return uniqueCrewMovies
}

export default getUniqueDirectorAndCrewMovieCredits