import tesseractConversationValues from "@/constants/tesseractConversationValues.ts";
import type {TesseractChat} from "@/types/TesseractChat.ts";

const getRandomTesseractChat = () => {
    const tesseractConversations: TesseractChat[] = tesseractConversationValues()

    const minValue: number = 0
    const maxValue: number = tesseractConversations.length
    let randomPosition: number = Math.floor(Math.random() * (maxValue - minValue) + minValue)

    if(randomPosition < 0 || randomPosition > (tesseractConversations.length - 1)){
        randomPosition = 0
    }

    return tesseractConversations[randomPosition]
}

export default getRandomTesseractChat