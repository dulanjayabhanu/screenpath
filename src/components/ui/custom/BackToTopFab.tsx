import {Button} from "@/components/ui/button.tsx";
import {ArrowUpIcon} from "lucide-react";
import {useEffect, useState} from "react";

const BackToTopFab = () => {
    const [pageScrolled, setPageScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handlePageScroll = () => {
            setPageScrolled(window.scrollY > 200)
        }
        window.addEventListener("scroll", handlePageScroll)
        return () => window.removeEventListener("scroll", handlePageScroll)
    }, [])

    return pageScrolled ? (
        <Button variant="default" size="icon" className="fixed z-50 bottom-14 right-5" onClick={() => (
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        )}>
            <ArrowUpIcon />
        </Button>
    ) : null
}

export default BackToTopFab