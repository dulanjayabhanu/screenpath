import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import type {MoviePaginationProps} from "@/types/props/MoviePaginationProps.ts";

const MoviePagination = (
    {
        total_results,
        total_pages,
        paginationHookProps,
    }: MoviePaginationProps) => {

    return (
        <div className="flex justify-center items-center pt-2 pb-6 sm:pb-8">
            <Pagination>
                {total_results > 0 ? (
                    <PaginationContent>
                        {paginationHookProps.pagination > 1 ? (
                            <PaginationItem>
                                <PaginationPrevious onClick={() =>
                                    paginationHookProps.setPagination((prevState) => prevState - 1)
                                } />
                            </PaginationItem>
                        ): null}
                        {paginationHookProps.pagination > 1 ? (
                            <PaginationItem>
                                <PaginationLink onClick={() =>
                                    paginationHookProps.setPagination((prevState) => prevState - 1)
                                }>{paginationHookProps.pagination - 1}</PaginationLink>
                            </PaginationItem>
                        ) : null}
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                {paginationHookProps.pagination}
                            </PaginationLink>
                        </PaginationItem>
                        {paginationHookProps.pagination <= (total_pages - 1) ? (
                            <PaginationItem>
                                <PaginationLink onClick={() =>
                                    paginationHookProps.setPagination((prevState) => prevState + 1)
                                }>{paginationHookProps.pagination + 1}</PaginationLink>
                            </PaginationItem>
                        ) : null}
                        {paginationHookProps.pagination < total_pages ? (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        ) : null}
                        {paginationHookProps.pagination < total_pages ? (
                            <PaginationItem>
                                <PaginationNext onClick={() =>
                                    paginationHookProps.setPagination((prevState) => prevState + 1)
                                } />
                            </PaginationItem>
                        ) : null}
                    </PaginationContent>
                ) : null}
            </Pagination>
        </div>
    )
}

export default MoviePagination