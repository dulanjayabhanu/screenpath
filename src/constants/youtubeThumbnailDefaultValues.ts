import type {YoutubeThumbnailDefaultValues} from "@/types/YoutubeThumbnailDefaultValues.ts";

const youtubeThumbnailDefaultValues = (): YoutubeThumbnailDefaultValues => {
    const YOUTUBE_THUMBNAIL_BASE_PATH: string = "https://img.youtube.com/vi/"
    const YOUTUBE_THUMBNAIL_MAX_QUALITY_DEFAULT: string = "/mqdefault.jpg"
    const YOUTUBE_THUMBNAIL_HIGH_QUALITY_DEFAULT: string = "/hqdefault.jpg"

    return {
        basePath: YOUTUBE_THUMBNAIL_BASE_PATH,
        highQualityDefault: YOUTUBE_THUMBNAIL_HIGH_QUALITY_DEFAULT,
        maxQualityDefault: YOUTUBE_THUMBNAIL_MAX_QUALITY_DEFAULT,
    }
}

export default youtubeThumbnailDefaultValues