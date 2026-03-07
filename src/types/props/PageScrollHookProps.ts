import * as React from "react";

export type PageScrollHookProps = {
    pageScrolled: boolean
    setPageScrolled: React.Dispatch<React.SetStateAction<boolean>>
}