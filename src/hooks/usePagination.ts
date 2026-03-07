import {useState} from "react";
import searchFilterDefaultValues from "@/constants/searchFilterDefaultValues.ts";

const usePagination = () => {
    const { page } = searchFilterDefaultValues()
    const [ pagination, setPagination ] = useState<number>(page)
    return (
        {
            pagination: pagination,
            setPagination: setPagination
        }
    )
}

export default usePagination