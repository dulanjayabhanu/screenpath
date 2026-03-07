type SortBy = {
    name: string
    value: string
}

const getSortByOptions = (): SortBy[] => {
    return [
        { name: "Popularity ↓", value: "popularity.desc" },
        { name: "Popularity ↑", value: "popularity.asc" },
        { name: "Release Date ↓", value: "release_date.desc" },
        { name: "Rating ↓", value: "vote_average.desc" }
    ]
}

export default getSortByOptions