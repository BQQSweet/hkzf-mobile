export function format(arr) {
    let obj = {}
    arr.map(v => {
        const s = v.short[0]
        if (obj[s]) {
            obj[s].push(v)
        } else {
            obj[s] = [v]
        }
    })
    return{
        cityList:obj,
        cityIndex:Object.keys(obj).sort()
    }
}