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

const accessList = user.map((item)=>{
    const newItem = {...item}
    if (item.age >= 25 ){
        newItem.acces = 'kiret'
    } else {
        newItem.acces = 'kirbeit'
    }
    return newItem
})

console.log(accessList)


