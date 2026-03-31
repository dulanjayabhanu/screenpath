import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {X} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import type {FeatureGuideCardProps} from "@/types/props/FeatureGuideCardProps.ts";

const FeatureGuideCard = (
    {
        featureGuideCardHookProps
    }: FeatureGuideCardProps ) => {

    const dismissFeatureCard = () => {
        const FEATURE_CARD_VISIBLE_STATUS: string = import.meta.env.VITE_FEATURE_CARD_VISIBLE_STATUS
        featureGuideCardHookProps.setFeatureCardVisibleStatus(false)
        localStorage.setItem(FEATURE_CARD_VISIBLE_STATUS, "true")
    }

    return (
        <Card className="fixed bottom-14 left-5 z-50 mx-auto w-full max-w-58 pt-0 group select-none transition-all duration-300 ease-out">
            <img
                src="/feature_guide.webp"
                alt="Event cover"
                className="object-cover relative aspect-square h-40 rounded-t-xl border brightness-90 group-hover:grayscale-0 group-hover:brightness-95 grayscale dark:brightness-90 dark:group-hover:brightness-90 transition-all duration-300"
            />
            <Button variant="outline" size="icon-xs" className="absolute top-2 right-2" onClick={() =>
                dismissFeatureCard()
            }>
                <X />
            </Button>
            <CardHeader>
                <CardTitle>Quick Navigation</CardTitle>
                <CardDescription>
                    Right-click anywhere to access instant navigation options.
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default FeatureGuideCard