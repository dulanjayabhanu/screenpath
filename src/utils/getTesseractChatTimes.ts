import type {TesseractChatTime} from "@/types/TesseractChatTime.ts";

const getTesseractChatTimes = (): TesseractChatTime => {
    const currentTime = new Date()
    const minuteBeforeTime = new Date(currentTime)
    minuteBeforeTime.setMinutes(currentTime.getMinutes() - 1)

    const formattedCurrentTime: string = currentTime.toLocaleString("en-Us", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    })
    const formattedMinuteBeforeTime: string = minuteBeforeTime.toLocaleString("en-Us", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    })

    return {
        currentTime: formattedCurrentTime.toLowerCase(),
        minuteBeforeTime: formattedMinuteBeforeTime.toLowerCase(),
    }
}

export default getTesseractChatTimes