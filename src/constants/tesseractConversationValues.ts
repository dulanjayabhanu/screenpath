import type {TesseractChat} from "@/types/TesseractChat.ts";

const tesseractConversationValues = (): TesseractChat[] => {
    return [
        {
            futureUserMessage: "Hey… I thought I could handle this, but I couldn’t. I lost hours and my head wasn’t in a good place after. Please don’t turn this on. 🙏",
            developerMessage: "I’ll turn it off for you."
        },
        {
            futureUserMessage: "I know this looks harmless right now, but it isn’t. I went down a hole and didn’t even notice the time passing. Please stop me before I repeat it.",
            developerMessage: "I hear you. I’ve got this... the switch stays off.👍"
        },
        {
            futureUserMessage: "I’m writing this after a long night of regret. I wish I hadn’t flipped that switch. Please… don’t let me do it again.🙏",
            developerMessage: "Alright. I’ll take care of it for you. Get some rest."
        },
        {
            futureUserMessage: "I thought I was just curious. That curiosity cost me focus and peace. Please don’t let curiosity win this time.",
            developerMessage: "Understood. Curiosity doesn’t get the wheel today."
        },
        {
            futureUserMessage: "I’m calmer now, but yesterday I wasn’t. Turning this on pulled me away from everything that mattered. Please help me stay on track.🧭",
            developerMessage: "You’re not alone in this. I’ll keep it off."
        },
        {
            futureUserMessage: "This is embarrassing to admit… but I couldn’t stop scrolling once I started. Please save me from repeating that mistake.😔",
            developerMessage: "No judgment here. I’ll make sure it stays disabled.🤝"
        },
        {
            futureUserMessage: "I turned this on thinking I was in control. I wasn’t. Please don’t let me fool myself again.😶",
            developerMessage: "Thanks for the honesty. I’ll handle it."
        },
        {
            futureUserMessage: "I wish I had listened to myself earlier. This switch didn’t give me anything good back. Please don’t turn it on.",
            developerMessage: "Message received. I’ll keep things clean and focused.✨"
        },
        {
            futureUserMessage: "Right now it feels optional. Later, it didn’t. Please trust me on this and stop it before it starts.",
            developerMessage: "I trust you. Switching it back off.🔒"
        },
        {
            futureUserMessage: "I lost time I can’t get back. That’s the part that hurts. Please don’t let this happen again.⌛",
            developerMessage: "Time matters. I’ll protect it."
        },
        {
            futureUserMessage: "This is me asking for help before I slip again. That’s all. Please.🙏",
            developerMessage: "You asked. I’ve got you."
        },
        {
            futureUserMessage: "I didn’t expect it to affect my mood this much. But it did. Please don’t turn this on.😕",
            developerMessage: "Thanks for the warning. I’ll keep it off."
        },
        {
            futureUserMessage: "I know myself. If this is on, I’ll stay longer than I should. Please help me.🕰️",
            developerMessage: "You are safe now. I won’t enable it."
        },
        {
            futureUserMessage: "I came back here to undo a small decision that turned into a big distraction. Please don’t repeat it.",
            developerMessage: "Understood. Consider it undone."
        },
        {
            futureUserMessage: "This switch felt small, but the impact wasn’t. Please don’t let me cross that line again.",
            developerMessage: "I’ll keep the boundary in place."
        }
    ]
}

export default tesseractConversationValues