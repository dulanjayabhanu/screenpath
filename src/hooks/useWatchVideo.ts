import {useState} from "react";
import type {Video} from "@/types/Video.ts";
import watchVideoDefaultValues from "@/constants/watchVideoDefaultValues.ts";

const useWatchVideo = () => {
    const [watchVideo, setWatchVideo] = useState<Video>(watchVideoDefaultValues())
    return {
        watchVideo: watchVideo,
        setWatchVideo: setWatchVideo
    }
}

export default useWatchVideo