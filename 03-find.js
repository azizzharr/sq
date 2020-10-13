const user = [
    {name:'Asan',age:22},
    {name:'Masan',age:23},
    {name:'Hasan',age:24},
    {name:'Tasan',age:27},
    {name:'Tusan',age:26},
    {name:'Lusan',age:27},
    {name:'Kusan',age:22},
    {name:'Lasan',age:29}
]


const item = user.find((item)=>{
    return item.age === 27
})

console.log(item)