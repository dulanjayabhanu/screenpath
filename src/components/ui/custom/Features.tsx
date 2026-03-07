import {
    Item,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemHeader,
} from "@/components/ui/item"
import {Brain, Film, ShieldCheck, Sparkle, SunMoon} from "lucide-react";

const Features = () => {
    return (
        <div className="flex w-full max-w-xl flex-col gap-6">
            <ItemGroup className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Item variant="outline">
                    <ItemHeader className="flex flex-row justify-center items-center h-10">
                        <h2 className="text-center text-[28px] border-0 mt-2 font-normal">1M+</h2>
                    </ItemHeader>
                    <ItemContent className="text-center">
                        <ItemDescription>Movies</ItemDescription>
                    </ItemContent>
                </Item>
                <Item variant="outline">
                    <ItemHeader className="flex flex-row justify-center items-center h-10">
                        <Film size={32}/>
                    </ItemHeader>
                    <ItemContent className="text-center">
                        <ItemDescription>Watch Trailers</ItemDescription>
                    </ItemContent>
                </Item>
                <Item variant="outline">
                    <ItemHeader className="flex flex-row justify-center items-center h-10">
                        <Sparkle size={32} />
                    </ItemHeader>
                    <ItemContent className="text-center">
                        <ItemDescription>Advanced Search</ItemDescription>
                    </ItemContent>
                </Item>
                <Item variant="outline">
                    <ItemHeader className="flex flex-row justify-center items-center h-10">
                        <Brain size={32} />
                    </ItemHeader>
                    <ItemContent className="text-center">
                        <ItemDescription>Distraction-Free UI</ItemDescription>
                    </ItemContent>
                </Item>
                <Item variant="outline">
                    <ItemHeader className="flex flex-row justify-center items-center h-10">
                        <ShieldCheck size={32}/>
                    </ItemHeader>
                    <ItemContent className="text-center">
                        <ItemDescription>Ad-Free Experience</ItemDescription>
                    </ItemContent>
                </Item>
                <Item variant="outline">
                    <ItemHeader className="flex flex-row justify-center items-center h-10">
                        <SunMoon size={32} />
                    </ItemHeader>
                    <ItemContent className="text-center">
                        <ItemDescription>Built-In Dark Mode</ItemDescription>
                    </ItemContent>
                </Item>
            </ItemGroup>
        </div>
    )
}

export default Features