import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Button} from "@/components/ui/button.tsx";
import type {MediaCardProps} from "@/types/props/MediaCardProps.ts";
import youtubeThumbnailDefaultValues from "@/constants/youtubeThumbnailDefaultValues.ts";
import type {YoutubeThumbnailDefaultValues} from "@/types/YoutubeThumbnailDefaultValues.ts";
import {Play} from "lucide-react";

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
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <img
                src={maxQualityThumbPath}
                onError={(e) => {
                    e.currentTarget.src = highQualityThumbPath
                }}
                alt={video.name}
                className="relative z-20 aspect-video rounded-t-xl w-full object-cover brightness-60 hover:grayscale-0 hover:brightness-95 grayscale dark:brightness-40 dark:hover:brightness-90"
            />
            <CardHeader>
                <CardTitle className="truncate">{video.name}</CardTitle>
                <CardDescription className="text-xs mt-1">
                    {publishedDate}
                </CardDescription>
                <div className="flex flex-row justify-end">
                    <Badge variant="secondary" className="flex flex-row gap-2">
                        <img src="/youtube.svg" className="aspect-square w-4 h-4 invert-0 dark:invert-100" alt="Youtube logo"/>
                        <span>{video.site}</span>
                    </Badge>
                </div>
            </CardHeader>
            <CardFooter>
                <Button className="w-full flex-flex-row gap-1" onClick={() => {
                    watchVideoHookProps.setWatchVideo(video)
                    youtubeVideoPlayerOpenHookProps.setYoutubeVideoPlayerOpen(true)
                }}>
                    <Play className="w-5 h-5"/>
                    Play Now
                </Button>
            </CardFooter>
        </Card>
    )
}

export default MediaCard