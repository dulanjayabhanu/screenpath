import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog.tsx";
import type {YoutubeVideoPlayerProps} from "@/types/props/YoutubeVideoPlayerProps.ts";
import youtubeVideoIframeDefaultValues from "@/constants/youtubeVideoIframeDefaultValues.ts";

const YoutubeVideoPlayer = (
    {
        watchVideoHookProps,
        youtubeVideoPlayerOpenHookProps,
    }: YoutubeVideoPlayerProps ) => {

    const { basePath, params } = youtubeVideoIframeDefaultValues()
    const videoUrl: string = `${basePath}${watchVideoHookProps.watchVideo.key}?${params}`

    return (
        <Dialog
            open={youtubeVideoPlayerOpenHookProps.youtubeVideoPlayerOpen}
            onOpenChange={youtubeVideoPlayerOpenHookProps.setYoutubeVideoPlayerOpen}
        >
            <form>
                <DialogContent className="w-full max-w-4xl p-4">
                    <DialogHeader>
                        <DialogTitle className="text-start text-sm font-extrabold border-0 mt-1">{watchVideoHookProps.watchVideo.name || "N/A"}</DialogTitle>
                    </DialogHeader>
                    {watchVideoHookProps.watchVideo ? (
                        <div className="relative w-full aspect-video overflow-hidden">
                            <iframe
                                className="absolute inset-0 h-full w-full rounded-xl"
                                src={videoUrl}
                                title={watchVideoHookProps.watchVideo.name}
                                allow={"autoplay; encrypted-media; picture-in-picture"}
                                allowFullScreen={true}
                            />
                        </div>
                    ) : null}
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default YoutubeVideoPlayer