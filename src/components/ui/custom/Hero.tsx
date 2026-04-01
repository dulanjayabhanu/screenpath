import Features from "@/components/ui/custom/Features.tsx";
import { Badge } from "@/components/ui/badge"
import {ArrowDown} from "lucide-react";
import type {HeroProps} from "@/types/props/HeroProps.ts";

const Hero = ({ searchSectionRef }:  HeroProps) => {
    return (
        <section className="flex flex-col gap-2 items-center justify-center pt-12 md:pt-0 pb-10 md:pb-0 md:h-[calc(100dvh-56px)]">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance sm:text-[min(10vw,60px)]">
                ScreenPath
            </h1>
            <h3 className="scroll-m-20 text-sm sm:text-xl font-medium tracking-tight w-full max-w-xl mt-4">
                Navigate through films, actors, and creators with a smooth, connected experience designed for discovery.
            </h3>
            <div className="pt-12 md:pt-10">
                <Features/>
            </div>
            <div className="pt-12 md:pt-10 hidden md:flex items-center">
                <Badge className="animate-bounce">
                    <a className="flex gap-1 items-center" onClick={() =>
                        searchSectionRef.current?.scrollIntoView(
                            {
                                behavior: "smooth",
                                block: "start",
                            }
                        )
                    }>
                        Let's Go
                        <ArrowDown data-icon="inline-end" size="12" />
                    </a>
                </Badge>
            </div>
        </section>
    )
}

export default Hero