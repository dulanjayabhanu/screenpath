import type {YoutubeVideoDefaultValues} from "@/types/YoutubeVideoDefaultValues.ts";

const youtubeVideoIframeDefaultValues = (): YoutubeVideoDefaultValues => {
    const YOUTUBE_VIDEO_BASE_PATH: string = "https://www.youtube.com/embed/"
    const YOUTUBE_VIDEO_PARAMS: string = "autoplay=1&rel=0&modestbranding=1"

    return {
        basePath: YOUTUBE_VIDEO_BASE_PATH,
        params: YOUTUBE_VIDEO_PARAMS,
    }
}

export default youtubeVideoIframeDefaultValues