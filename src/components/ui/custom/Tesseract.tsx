import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import AvatarBadge from "@/components/ui/custom/AvatarBadge.tsx";
import type {TesseractProps} from "@/types/props/TesseractProps.ts";
import getRandomTesseractChat from "@/utils/getRandomTesseractChat.ts";
import {PhoneOff} from "lucide-react";
import getTesseractChatTimes from "@/utils/getTesseractChatTimes.ts";

const Tesseract = ( { tesseractHookProps }: TesseractProps ) => {
    const { futureUserMessage, developerMessage } = getRandomTesseractChat()
    const { currentTime, minuteBeforeTime } = getTesseractChatTimes()

    return (
        <Drawer
            open={
                tesseractHookProps.tesseractOpen
            }
            onOpenChange={(v) => {
                if (!v && !tesseractHookProps.tesseractOpen)
                    return
                tesseractHookProps.setTesseractOpen(v)
            }}
            autoFocus={true}
        >
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm flex flex-col">
                    <DrawerHeader>
                        <DrawerTitle>A Call From the Future</DrawerTitle>
                        <DrawerDescription>A short conversation between your future self and the developer.</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex flex-col gap-3 border rounded-xl p-3">
                        <div className="flex flex-row-reverse gap-2">
                            <div className="relative h-fit inline-flex">
                                <Avatar>
                                    <AvatarImage
                                        src="/user_avatar.webp"
                                        alt="User avatar"
                                    />
                                    <AvatarFallback>FU</AvatarFallback>
                                </Avatar>
                                <AvatarBadge />
                            </div>
                            <Card className="w-full max-w-sm py-3">
                                <CardHeader>
                                    <CardTitle className="text-xs">Future You</CardTitle>
                                    <CardDescription className="text-sm">
                                        {futureUserMessage}
                                        <p className="text-[10px] text-end text-muted-foreground pt-1">{minuteBeforeTime}</p>
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="relative w-fit h-fit inline-flex">
                                <Avatar>
                                    <AvatarImage
                                        src="/developer_avatar.webp"
                                        alt="Developer avatar"
                                    />
                                    <AvatarFallback>TD</AvatarFallback>
                                </Avatar>
                                <AvatarBadge />
                            </div>
                            <Card className="w-full max-w-sm py-3">
                                <CardHeader>
                                    <CardTitle className="text-xs">The Developer</CardTitle>
                                    <CardDescription className="text-sm">
                                        {developerMessage}
                                        <p className="text-[10px] text-end text-muted-foreground pt-1">{currentTime}</p>
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="destructive">
                                <PhoneOff />
                                End Call
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default Tesseract