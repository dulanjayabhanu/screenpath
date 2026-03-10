import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import type {MediaCardProps} from "@/types/props/MediaCardProps.ts";
import youtubeThumbnailDefaultValues from "@/constants/youtubeThumbnailDefaultValues.ts";
import type {YoutubeThumbnailDefaultValues} from "@/types/YoutubeThumbnailDefaultValues.ts";
import {MousePointerClick} from "lucide-react";

const MediaCard = (
    {
        video,
        watchVideoHookProps,
        youtubeVideoPlayerOpenHookProps,
    }: MediaCardProps ) => {

    const youtubeThumbnailValues: YoutubeThumbnailDefaultValues = youtubeThumbnailDefaultValues()

    const maxQualityThumbPath: string = `${youtubeThumbnailValues.basePath}${video.key}${youtubeThumbnailValues.maxQualityDefault}`
    const highQualityThumbPath: string = `${youtubeThumbnailValues.basePath}${video.key}${youtubeThumbnailValues.highQualityDefault}`

    const publishedDate: string = video.published_at ?
        `${new Date(video.published_at).toDateString().split(" ")[1]} 
        ${new Date(video.published_at).toDateString().split(" ")[2]} 
        ${new Date(video.published_at).toDateString().split(" ")[3]}` : "N/A"

    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 group" onClick={() => {
            watchVideoHookProps.setWatchVideo(video)
            youtubeVideoPlayerOpenHookProps.setYoutubeVideoPlayerOpen(true)
        }}>
            <img
                src={maxQualityThumbPath}
                onError={(e) => {
                    e.currentTarget.src = highQualityThumbPath
                }}
                alt={video.name}
                loading="lazy"
                className="relative z-20 aspect-video rounded-t-xl w-full object-cover brightness-60 group-hover:grayscale-0 group-hover:brightness-95 grayscale dark:brightness-40 dark:group-hover:brightness-90 transition-all duration-300"
            />
            <CardHeader>
                <CardTitle className="truncate">{video.name}</CardTitle>
                <div className="flex flex-row justify-between mt-1">
                    <CardDescription className="text-xs mt-1">
                        {publishedDate}
                    </CardDescription>
                    <Badge variant="secondary" className="flex flex-row gap-2">
                        <img src="/youtube.svg" loading="lazy" className="aspect-square w-4 h-4 invert-0 dark:invert-100" alt="Youtube logo"/>
                        <span>{video.site}</span>
                    </Badge>
                </div>
            </CardHeader>
            <CardFooter>
                <small className="text-xs text-muted-foreground flex flex-row gap-1 mx-auto opacity-50 select-none">
                    <MousePointerClick size={16}/>
                    click anywhere to play
                </small>
            </CardFooter>
        </Card>
    )
}

export default MediaCard