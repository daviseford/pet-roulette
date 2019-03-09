export default (argObj: { [key: string]: string | number }) => {
    return Object.keys(argObj).reduce((str, key) => {
        return `${str}&${key}=${argObj[key]}`
    }, `?`)
}