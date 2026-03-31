import type {SubPageHeroProps} from "@/types/props/SubPageHeroProps.ts";

const SubPageHero = (
    {
        title,
        tagline
    }: SubPageHeroProps) => {
    return (
        <section className="flex flex-col items-center justify-center gap-4 pt-12 sm:pt-15 pb-8 sm:pb-10">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                {title}
            </h1>
            <p className="leading-7 text-muted-foreground text-center">
                {tagline}
            </p>
        </section>
    )
}

export default SubPageHero