import {z} from "zod";

const movieSearchPropSchema = z.object({
    searchTerm: z.string(),
    year: z.string(),
    genre: z.string(),
    sortBy: z.string(),
    provider: z.string(),
    language: z.string(),
    ageRating: z.string(),
    adultMode: z.boolean(),
    page: z.number()
})
type MovieSearchProp = z.infer<typeof movieSearchPropSchema>

const getSearchUrl = (movieSearchProp: MovieSearchProp) => {
    const MOVIE_API_BASE_URL: string = import.meta.env.VITE_MOVIE_API_BASE_URL
    const MOVIE_API_DISCOVER_END_POINT: string = import.meta.env.VITE_MOVIE_API_DISCOVER_END_POINT
    const MOVIE_API_SEARCH_END_POINT: string = import.meta.env.VITE_MOVIE_API_SEARCH_END_POINT
    const MOVIE_API_DEFAULT_REGION: string = import.meta.env.VITE_MOVIE_API_DEFAULT_REGION

    let url: URL = new URL(MOVIE_API_DISCOVER_END_POINT, MOVIE_API_BASE_URL)
    const { data, success } = movieSearchPropSchema.safeParse(movieSearchProp)

    if(success){
        if(data.searchTerm && data.searchTerm.length > 0) {
            url = new URL(MOVIE_API_SEARCH_END_POINT, MOVIE_API_BASE_URL)
            url.searchParams.set("query", data.searchTerm)
        }
        if(data.year) {
            let fromYear: string
            let toYear: string

            if(data.year.includes("-")) {
                const yearRangeArray: string[] = data.year.split("-")
                fromYear = yearRangeArray[0]
                toYear = yearRangeArray[1]
            }else{
                fromYear = data.year
                toYear = data.year
            }

            url.searchParams.set("primary_release_date.gte", `${fromYear}-01-01`)
            url.searchParams.set("primary_release_date.lte", `${toYear}-12-31`)
        }
        if(data.genre)
            url.searchParams.set("with_genres", data.genre)
        if(data.sortBy)
            url.searchParams.set("sort_by", data.sortBy)
        if(data.provider)
            url.searchParams.set("with_watch_providers", data.provider)
        if(data.language)
            url.searchParams.set("with_original_language", data.language)
        if(data.ageRating)
            url.searchParams.set("certification", data.ageRating)
        if(data.adultMode)
            url.searchParams.set("include_adult", String(data.adultMode))
        else
            url.searchParams.set("include_adult", String(false))
        if(data.page)
            url.searchParams.set("page", String(data.page))
    }

    url.searchParams.set("region", MOVIE_API_DEFAULT_REGION.toUpperCase())
    url.searchParams.set("certification_country", MOVIE_API_DEFAULT_REGION.toUpperCase())

    return url.toString()
}

export default getSearchUrl