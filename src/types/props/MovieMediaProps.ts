import type {Video} from "@/types/Video.ts";
import * as React from "react";

export type MovieMediaProps = {
    videos: {
        results: Video[]
    }
    watchVideoHookProps: {
        watchVideo: Video
        setWatchVideo:  React.Dispatch<React.SetStateAction<Video>>
    }
    youtubeVideoPlayerOpenHookProps: {
        youtubeVideoPlayerOpen: boolean
        setYoutubeVideoPlayerOpen:  React.Dispatch<React.SetStateAction<boolean>>
    }
}