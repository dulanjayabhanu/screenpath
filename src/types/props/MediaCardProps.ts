import type {Video} from "@/types/Video.ts";
import * as React from "react";

export type MediaCardProps = {
    video: Video
    watchVideoHookProps: {
        watchVideo: Video
        setWatchVideo:  React.Dispatch<React.SetStateAction<Video>>
    }
    youtubeVideoPlayerOpenHookProps: {
        youtubeVideoPlayerOpen: boolean
        setYoutubeVideoPlayerOpen:  React.Dispatch<React.SetStateAction<boolean>>
    }
}