import type {HumanAge} from "@/types/HumanAge.ts";

const getHumanAge = (birthday: Date, deathDay?: Date ): HumanAge => {
    const currentDate: Date = deathDay ? deathDay : new Date()

    let age: number = currentDate.getFullYear() - birthday.getFullYear()
    const monthDifference: number = currentDate.getMonth() - birthday.getMonth()
    let isTodayBirthday: boolean = false

    if(monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthday.getDate())){
        age --
    }

    if(monthDifference === 0 && (currentDate.getDate() - birthday.getDate() === 0)){
        isTodayBirthday = true
    }

    return {
        age: age,
        isTodayBirthDay: isTodayBirthday,
    }
}

export default getHumanAge