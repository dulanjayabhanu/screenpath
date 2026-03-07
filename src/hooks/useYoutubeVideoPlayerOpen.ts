import {useState} from "react";

const useYoutubeVideoPlayerOpen = () => {
    const [youtubeVideoPlayerOpen, setYoutubeVideoPlayerOpen] = useState<boolean>(false)
    return {
        youtubeVideoPlayerOpen: youtubeVideoPlayerOpen,
        setYoutubeVideoPlayerOpen: setYoutubeVideoPlayerOpen
    }
}

export default useYoutubeVideoPlayerOpen