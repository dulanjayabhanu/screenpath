import Features from "@/components/ui/custom/Features.tsx";
import { Badge } from "@/components/ui/badge"
import {ArrowDown} from "lucide-react";
import type {HeroProps} from "@/types/props/HeroProps.ts";

const Hero = ({ searchSectionRef }:  HeroProps) => {
    return (
        <section className="flex flex-col gap-2 items-center justify-center pt-12 pb-10 sm:pt-10 sm:pb-20">
            <h1 className="scroll-m-20 text-center text-6xl font-extrabold tracking-tight text-balance sm:text-[min(10vw,95px)]">
                ScreenPath
            </h1>
            <h3 className="pt-4">
                Your calm path to the perfect movie
            </h3>
            <div className="pt-12 sm:pt-16">
                <Features/>
            </div>
            <div className="pt-12 sm:pt-16">
                <Badge>
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