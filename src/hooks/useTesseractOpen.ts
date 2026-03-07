import {useState} from "react";
import type {TesseractHookProps} from "@/types/props/TesseractHookProps.ts";

const useTesseractOpen = (): TesseractHookProps => {
    const [tesseractOpen, setTesseractOpen] = useState<boolean>(false)
    return (
        {
            tesseractOpen: tesseractOpen,
            setTesseractOpen: setTesseractOpen,
        }
    )
}

export default useTesseractOpen