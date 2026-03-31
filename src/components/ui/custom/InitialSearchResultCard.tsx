import {Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle} from "@/components/ui/empty.tsx";
import {Search} from "lucide-react";

const InitialSearchResultCard = () => {
    return (
        <Empty className="border border-dashed">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <Search />
                </EmptyMedia>
                <EmptyTitle>Start with a Search</EmptyTitle>
                <EmptyDescription>
                    Start by searching for a name to view directors and crew.
                </EmptyDescription>
            </EmptyHeader>
        </Empty>
    )
}

export default InitialSearchResultCard