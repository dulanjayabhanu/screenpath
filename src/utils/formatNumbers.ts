const formatNumbers = (number: number): string => {
    return new Intl.NumberFormat("en-us")
        .format(number)
}

export default formatNumbers