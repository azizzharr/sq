const func = (a) => (b) => {
        return a*b
}
const times = func(5)
console.log(times(3))