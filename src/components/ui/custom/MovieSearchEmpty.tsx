import {Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle} from "@/components/ui/empty.tsx";
import {Info} from "lucide-react";

const MovieSearchEmpty = () => {
    return (
        <Empty className="h-full">
            <EmptyHeader>
                <EmptyMedia variant="icon" className="w-8 h-8">
                    <Info />
                </EmptyMedia>
                <EmptyTitle>Nothing to Show</EmptyTitle>
                <EmptyDescription className="max-w-xs text-pretty">
                    We couldn&apos;t find any information for this section right now.
                </EmptyDescription>
            </EmptyHeader>
        </Empty>
    )
}

export default MovieSearchEmpty