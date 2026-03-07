import * as React from "react";

export type TesseractProps = {
    tesseractHookProps: {
        tesseractOpen: boolean
        setTesseractOpen: React.Dispatch<React.SetStateAction<boolean>>
    }
}