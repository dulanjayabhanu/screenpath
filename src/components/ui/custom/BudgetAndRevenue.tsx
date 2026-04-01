import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {CircleDollarSign, Landmark} from "lucide-react";
import type {BudgetAndRevenueProps} from "@/types/props/BudgetAndRevenueProps.ts";
import formatNumbers from "@/utils/formatNumbers.ts";

const BudgetAndRevenue = ( { budget, revenue }: BudgetAndRevenueProps ) => {
    const formattedBudget: string = formatNumbers(budget)
    const formattedRevenue: string = formatNumbers(revenue)

    return (
        <section className="flex flex-col sm:flex-row w-full max-w-xl mx-auto gap-4 py-10">
            <Card className="w-full flex flex-col md:flex-row gap-4 md:gap-4 p-4">
                <div className="flex justify-center items-center ps-0 py-2 md:ps-4">
                    <Landmark size="30"/>
                </div>
                <div className="w-full flex flex-row items-center justify-start">
                    <CardHeader className="w-full p-2 justify-center">
                        <CardTitle className="flex justify-center md:justify-start">Budget</CardTitle>
                        <CardDescription className="text-xl font-bold">
                            &#36; {formattedBudget}
                        </CardDescription>
                    </CardHeader>
                </div>
            </Card>
            <Card className="w-full flex flex-col md:flex-row gap-4 md:gap-4 p-4">
                <div className="flex justify-center items-center ps-0 py-2 md:ps-4">
                    <CircleDollarSign size="30"/>
                </div>
                <div className="w-full flex flex-row items-center justify-start">
                    <CardHeader className="w-full p-2 justify-center">
                        <CardTitle className="flex justify-center md:justify-start">Revenue</CardTitle>
                        <CardDescription className="text-xl font-bold">
                            &#36; {formattedRevenue}
                        </CardDescription>
                    </CardHeader>
                </div>
            </Card>
        </section>
    )
}

export default BudgetAndRevenue