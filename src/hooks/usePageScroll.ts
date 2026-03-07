import {useState} from "react";
import type {PageScrollHookProps} from "@/types/props/PageScrollHookProps.ts";

const usePageScroll = (): PageScrollHookProps => {
    const [pageScrolled, setPageScrolled] = useState<boolean>(false)
    return {
        pageScrolled: pageScrolled,
        setPageScrolled: setPageScrolled
    }
}

export default usePageScroll