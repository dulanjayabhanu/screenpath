import type {Crew} from "@/types/Crew.ts";

const getDirectorsAndWriters = (crew: Crew[]): Crew[] => {
    const filteredCew: Crew[] = []

    crew?.map(member => {
        if(member.job.toLowerCase() === "director" ||
            member.job.toLowerCase() === "writer" ||
            member.job.toLowerCase() === "story"){
            filteredCew.push(member)
        }
    })
    return filteredCew
}

export default getDirectorsAndWriters