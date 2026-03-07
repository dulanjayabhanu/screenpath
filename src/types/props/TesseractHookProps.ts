import * as React from "react";

export type TesseractHookProps = {
    tesseractOpen: boolean
    setTesseractOpen:  React.Dispatch<React.SetStateAction<boolean>>
}