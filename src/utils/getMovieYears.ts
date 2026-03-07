const getMovieYears = (): string[] => {

    const cutOffYear: number = import.meta.env.VITE_MOVIE_COMPUTE_CUTOFF_YEAR
    const currentYear: number = new Date().getFullYear()
    const length: number = (currentYear - cutOffYear) + 1

    const movieYears: string[] = Array.from(
        { length },
        (_, index) => String(currentYear - index)
    )
    movieYears.push("2000-2009")
    movieYears.push("1990-1999")
    movieYears.push("1980-1989")
    movieYears.push("1970-1979")
    movieYears.push("1950-1969")

    return movieYears
}

export default getMovieYears