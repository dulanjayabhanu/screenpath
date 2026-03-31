import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Funnel, RotateCcw} from "lucide-react";
import {Field, FieldLabel,} from "@/components/ui/field.tsx";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import getGenderOptions from "@/utils/getGenderOptions.ts";
import type {Gender} from "@/types/Gender.ts";
import getActorSortByOptions from "@/utils/getActorSortByOptions.ts";
import type {SortBy} from "@/types/SortBy.ts";
import getDepartmentOptions from "@/utils/getDepartmentOptions.ts";
import type {DirectorAndCrewSearchFilterCardProps} from "@/types/props/DirectorAndCrewSearchFilterCardProps.ts";
import directorAndCrewSearchFilterDefaultValues from "@/constants/directorAndCrewSearchFilterDefaultValues.ts";

const DirectorAndCrewSearchFilterCard = (
    {
        searchTermHookProps,
        genderHookProps,
        sortByHookProps,
        departmentHookProps,
    }: DirectorAndCrewSearchFilterCardProps ) => {
    const genderOptions: Gender[] = getGenderOptions()
    const actorSortByOptions: SortBy[] = getActorSortByOptions()
    const departmentOptions: string[] = getDepartmentOptions()

    const resetFilters = (): void => {
        const { searchTerm, gender, sortBy, department } = directorAndCrewSearchFilterDefaultValues()

        searchTermHookProps.setSearchTerm(searchTerm)
        genderHookProps.setSelectedGender(gender)
        sortByHookProps.setSelectedSortBy(sortBy)
        departmentHookProps.setSelectedDepartment(department)
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Field>
                        <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                            Department
                        </FieldLabel>
                        <Select value={departmentHookProps.selectedDepartment} onValueChange={(v) =>
                            departmentHookProps.setSelectedDepartment(v)
                        }>
                            <SelectTrigger id="checkout-7j9-exp-year-f59">
                                <SelectValue placeholder={departmentOptions[0]} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {departmentOptions.map((department) => (
                                        <SelectItem
                                            key={department}
                                            value={department}
                                        >
                                            {department}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
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
                    <Field className="sm:col-span-2 lg:col-span-1">
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

export default DirectorAndCrewSearchFilterCard