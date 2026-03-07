import * as React from "react";

export type MoviePaginationProps = {
    total_results: number
    total_pages: number
    paginationHookProps: {
        pagination: number
        setPagination:  React.Dispatch<React.SetStateAction<number>>
    }
}