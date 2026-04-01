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
        <Card className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-auto md:left-5 md:bottom-14 md:translate-x-0 md:translate-y-0 z-50 w-full max-w-58 h-fit pt-0 group select-none transition-all duration-300 ease-out">
            <div className="flex md:hidden justify-center items-center">
                <img
                    src="/feature_guide_mobile.webp"
                    alt="Feature guide poster for mobile"
                    className="object-cover relative aspect-square h-40 w-full rounded-t-xl border brightness-90 group-hover:grayscale-0 group-hover:brightness-95 grayscale dark:brightness-90 dark:group-hover:brightness-90 transition-all duration-300"
                />
            </div>
            <div className="hidden md:flex justify-center items-center">
                <img
                    src="/feature_guide_desktop.webp"
                    alt="Feature guide poster for desktop"
                    className="object-cover relative aspect-square h-40 w-full rounded-t-xl border brightness-90 group-hover:grayscale-0 group-hover:brightness-95 grayscale dark:brightness-90 dark:group-hover:brightness-90 transition-all duration-300"
                />
            </div>
            <Button variant="outline" size="icon-xs" className="absolute top-2 right-2" onClick={() =>
                dismissFeatureCard()
            }>
                <X />
            </Button>
            <CardHeader>
                <CardTitle>Quick Navigation</CardTitle>
                <div className="flex md:hidden">
                    <CardDescription>
                        Touch and hold anywhere to open quick navigation.
                    </CardDescription>
                </div>
                <div className="hidden md:flex">
                    <CardDescription>
                        Right-click anywhere to access instant navigation options.
                    </CardDescription>
                </div>
            </CardHeader>
        </Card>
    )
}

export default FeatureGuideCard