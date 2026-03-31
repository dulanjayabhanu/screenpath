import genderDefaultValues from "@/constants/genderDefaultValues.ts";
import type {Gender} from "@/types/Gender.ts";

const getGenderOptions = (): Gender[] => {
    const { male, female } = genderDefaultValues()

    return [
        {
            name: "Male",
            value: male
        },
        {
            name: "Female",
            value: female
        }
    ]
}

export default getGenderOptions