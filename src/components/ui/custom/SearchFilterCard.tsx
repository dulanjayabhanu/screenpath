import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Funnel, RotateCcw} from "lucide-react";
import {Field, FieldContent, FieldDescription, FieldLabel, FieldTitle} from "@/components/ui/field.tsx";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Switch} from "@/components/ui/switch.tsx";
import languageSort from "@/utils/languageSort.ts";
import {Button} from "@/components/ui/button.tsx";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import searchFilterDefaultValues from "@/constants/searchFilterDefaultValues.ts";
import type {SearchFilterCardProps} from "@/types/props/SearchFilterCardProps.ts";
import type {Language} from "@/types/Language.ts";
import {Badge} from "@/components/ui/badge.tsx";

const SearchFilterCard = (
    {
        movieYears,
        genres,
        sortByOptions,
        providers,
        languages,
        ageRatings,
        searchTermHookProps,
        yearHookProps,
        genreHookProps,
        sortByHookProps,
        providerHookProps,
        languageHookProps,
        ageRatingHookProps,
        adultModeHookProps,
        paginationHookProps,
        tesseractHookProps,
    }: SearchFilterCardProps ) => {

    const sortedLanguages: Language[] = languageSort(languages, "ASC")

    const resetFilters = () => {
        const defaultValues = searchFilterDefaultValues()

        searchTermHookProps.setSearchTerm(defaultValues.searchTerm)
        yearHookProps.setSelectedYear(defaultValues.year)
        genreHookProps.setSelectedGenre(defaultValues.genre)
        sortByHookProps.setSelectedSortBy(defaultValues.sortBy)
        providerHookProps.setSelectedProvider(defaultValues.provider)
        languageHookProps.setSelectedLanguage(defaultValues.language)
        ageRatingHookProps.setSelectedAgeRating(defaultValues.ageRating)
        adultModeHookProps.setSelectedAdultMode(defaultValues.adultMode)
        paginationHookProps.setPagination(defaultValues.page)
    }

    const updateSelectedAdult = (v: boolean): void => {
        adultModeHookProps.setSelectedAdultMode(false)
        tesseractHookProps.setTesseractOpen(v)
    }

    return (
        <Card className="mx-auto w-full relative">
            <div className="flex flex-col absolute top-0 right-0 items-center justify-center px-6 py-5">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" size="icon-xs" onClick={() => resetFilters()}>
                            <RotateCcw />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Reset Filters</p>
                    </TooltipContent>
                </Tooltip>
            </div>
            <CardHeader>
                <CardTitle className="flex gap-2">
                    <Funnel size={16} className="text-muted-foreground"/>
                    Filters
                </CardTitle>
                <CardDescription>
                    Narrow down results to match what you’re looking for.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <Field>
                        <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                            Year
                        </FieldLabel>
                        <Select value={yearHookProps.selectedYear} onValueChange={(v) => yearHookProps.setSelectedYear(v)}>
                            <SelectTrigger id="checkout-7j9-exp-year-f59">
                                <SelectValue placeholder={movieYears[0]} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {movieYears.map((movieYear, index) => (
                                        <SelectItem key={index} value={movieYear}>{movieYear}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="checkout-exp-month-ts6">
                            Genre
                        </FieldLabel>
                        <Select value={genreHookProps.selectedGenre} onValueChange={(v) => genreHookProps.setSelectedGenre(v)}>
                            <SelectTrigger className="w-45">
                                <SelectValue placeholder={genres?.genres[0]?.name || "N/A"} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {genres?.genres?.map((genre) => (
                                        <SelectItem key={genre.id} value={String(genre.id)}>{genre.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="checkout-exp-month-ts6">
                            Sort By
                        </FieldLabel>
                        <Select value={sortByHookProps.selectedSortBy} onValueChange={(v) => sortByHookProps.setSelectedSortBy(v)}>
                            <SelectTrigger className="w-45">
                                <SelectValue placeholder={sortByOptions[0].name || "N/A"} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {sortByOptions.map((sortByOption) => (
                                        <SelectItem key={sortByOption.value} value={sortByOption.value}>{sortByOption.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="checkout-exp-month-ts6">
                            Providers
                        </FieldLabel>
                        <Select value={providerHookProps.selectedProvider} onValueChange={(v) => providerHookProps.setSelectedProvider(v)}>
                            <SelectTrigger className="w-45">
                                <SelectValue placeholder={providers?.results[0]?.provider_name || "N/A"} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {providers?.results.map((provider) => (
                                        <SelectItem key={provider.provider_id} value={String(provider.provider_id)}>{provider.provider_name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="checkout-exp-month-ts6">
                            Language
                        </FieldLabel>
                        <Select value={languageHookProps.selectedLanguage} onValueChange={(v) => languageHookProps.setSelectedLanguage(v)}>
                            <SelectTrigger className="w-45">
                                <SelectValue placeholder={languages[0]?.english_name || "N/A"} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {sortedLanguages?.map((language) => (
                                        <SelectItem key={language.iso_639_1} value={language.iso_639_1}>{language.english_name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="checkout-exp-month-ts6">
                            Age Rating
                        </FieldLabel>
                        <Select value={ageRatingHookProps.selectedAgeRating} onValueChange={(v) => ageRatingHookProps.setSelectedAgeRating(v)}>
                            <SelectTrigger className="w-45">
                                <SelectValue placeholder={ageRatings?.certifications?.US?.filter(ageRating =>
                                    ageRating.certification === "G" || ageRating.certification === "PG" || ageRating.certification === "PG-13"
                                ).slice(0, 1).map(ageRating => ageRating.certification) || "N/A"} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {ageRatings?.certifications?.US?.filter(ageRating =>
                                        ageRating.certification === "G" || ageRating.certification === "PG" || ageRating.certification === "PG-13"
                                    ).map((ageRating) => (
                                        <SelectItem key={ageRating.certification} value={ageRating.certification}>{ageRating.certification}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <FieldLabel htmlFor="switch-share" className="col-span-1 sm:col-span-2 md:col-span-3">
                        <Field orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>
                                    Mature Content
                                    <Badge variant="secondary">18+</Badge>
                                </FieldTitle>
                                <FieldDescription>
                                    Include mature content in search results.
                                </FieldDescription>
                            </FieldContent>
                            <Switch
                                checked={adultModeHookProps.selectedAdultMode}
                                id="switch-share"
                                onCheckedChange={(v) => updateSelectedAdult(v)}/>
                        </Field>
                    </FieldLabel>
                </div>
            </CardContent>
        </Card>
    )
}

export default SearchFilterCard