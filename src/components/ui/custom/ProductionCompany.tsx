import {Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemTitle} from "@/components/ui/item.tsx";
import {Globe} from "lucide-react";
import type {ProductionCompanyProps} from "@/types/props/ProductionCompanyProps.ts";
import MovieSearchEmpty from "@/components/ui/custom/MovieSearchEmpty.tsx";

const ProductionCompony = ( { productionCompany }: ProductionCompanyProps ) => {

    const controlledClassName: string = productionCompany.length >= 4 ? "mx-auto" : ""
    const finalClassName: string = `flex w-full max-w-xl ${controlledClassName} flex-col gap-6 py-6`

    return (
        <section className="flex flex-col gap-4 py-10">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Production Companies</h4>
            {productionCompany?.length < 1 ? (
                <div className="flex flex-col items-center justify-center">
                    <MovieSearchEmpty />
                </div>
                ) : (
                <div className={finalClassName}>
                    <ItemGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {productionCompany?.map(company => {
                            const MOVIE_API_BASE_POSTER_URL: string = import.meta.env.VITE_MOVIE_API_BASE_POSTER_URL
                            const MOVIE_API_POSTER_W500: string = import.meta.env.VITE_MOVIE_API_POSTER_W500
                            const logoUrl = company.logo_path ?
                                `${MOVIE_API_BASE_POSTER_URL}${MOVIE_API_POSTER_W500}${company.logo_path}` :
                                "/default_company_banner.svg"

                            return (
                                <Item key={company.id} variant="outline" className="relative mx-auto w-full max-w-sm group">
                                    <ItemHeader>
                                        <img
                                            src={logoUrl}
                                            alt={company.name}
                                            loading="lazy"
                                            className="aspect-square w-full rounded-sm object-contain invert-25 brightness-60 group-hover:grayscale-0 group-hover:brightness-95 grayscale dark:brightness-40 dark:group-hover:brightness-90 transition-all duration-300"
                                        />
                                    </ItemHeader>
                                    <ItemContent className="flex flex-col items-center gap-2">
                                        <ItemTitle className="text-center">{company.name}</ItemTitle>
                                        <ItemDescription className="flex flex-row justify-start items-center gap-1 overflow-x-hidden">
                                            <Globe size={12}/>
                                            <span className="lowercase truncate">{company.origin_country}</span>
                                        </ItemDescription>
                                    </ItemContent>
                                </Item>
                            )
                        })}
                    </ItemGroup>
                </div>
            )}
        </section>
    )
}

export default ProductionCompony