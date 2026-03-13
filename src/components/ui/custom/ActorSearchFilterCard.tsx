import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Funnel, RotateCcw} from "lucide-react";
import {Field, FieldLabel,} from "@/components/ui/field.tsx";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import type {ActorSearchFilterCardProps} from "@/types/props/ActorSearchFilterCardProps.ts";
import getGenderOptions from "@/utils/getGenderOptions.ts";
import type {Gender} from "@/types/Gender.ts";
import getActorSortByOptions from "@/utils/getActorSortByOptions.ts";
import type {SortBy} from "@/types/SortBy.ts";
import actorSearchFilterDefaultValues from "@/constants/actorSearchFilterDefaultValues.ts";

const ActorSearchFilterCard = (
    {
        searchTermHookProps,
        genderHookProps,
        sortByHookProps,
    }: ActorSearchFilterCardProps ) => {
    const genderOptions: Gender[] = getGenderOptions()
    const actorSortByOptions: SortBy[] = getActorSortByOptions()

    const resetFilters = (): void => {
        const { searchTerm, gender, sortBy } = actorSearchFilterDefaultValues()

        searchTermHookProps.setSearchTerm(searchTerm)
        genderHookProps.setSelectedGender(gender)
        sortByHookProps.setSelectedSortBy(sortBy)
    }

    return (
        <Card className="mx-auto w-full relative">
            <div className="flex flex-col absolute top-0 right-0 items-center justify-center px-6 py-5">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" size="icon-xs" onClick={() =>
                            resetFilters()
                        }>
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
                <div className="grid grid-cols-2 gap-5">
                    <Field>
                        <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                            Gender
                        </FieldLabel>
                        <Select value={genderHookProps.selectedGender} onValueChange={(v) =>
                            genderHookProps.setSelectedGender(v)
                        }>
                            <SelectTrigger id="checkout-7j9-exp-year-f59">
                                <SelectValue placeholder={genderOptions[0].name} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {genderOptions.map((gender) => (
                                        <SelectItem
                                            key={gender.value}
                                            value={String(gender.value)}
                                        >
                                            {gender.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                            Sort By
                        </FieldLabel>
                        <Select value={sortByHookProps.selectedSortBy} onValueChange={(v) => sortByHookProps.setSelectedSortBy(v)}>
                            <SelectTrigger id="checkout-7j9-exp-year-f59">
                                <SelectValue placeholder={actorSortByOptions[0].name} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {actorSortByOptions.map((sortBy) => (
                                        <SelectItem
                                            key={sortBy.value}
                                            value={sortBy.value}
                                        >
                                            {sortBy.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                </div>
            </CardContent>
        </Card>
    )
}

export default ActorSearchFilterCard