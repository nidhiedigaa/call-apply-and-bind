let obj={name:'nidhi',age:22,details:function()
{
    console.log(this.name)
    console.log(this.age)
}}


obj.details()

let objone={name:'stephen',age:27}
let objtwo={name:'hannah',age:25}
let objthree={name:'harsh',age:24}

obj.details.apply(objone)
obj.details.apply(objtwo)
obj.details.apply(objthree)


function details(skills)
{
    return this.name+' '+this.age+' '+skills
}

let skills=['html','css','javascript']

// let result=details(skills)
// console.log(result)

let dataone=details.apply(objone,[skills])
let datatwo=details.apply(objtwo,[skills])
let datathree=details.apply(objthree,[skills])


console.log(dataone)
console.log(datatwo)
console.log(datathree)