import * as React from "react";

export type FeatureGuideCardProps = {
    featureGuideCardHookProps: {
        featureCardVisibleStatus: boolean
        setFeatureCardVisibleStatus: React.Dispatch<React.SetStateAction<boolean>>
    }
}