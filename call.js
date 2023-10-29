let obj={name:'nidhi',age:22,details:function details()
{
    console.log(this.name)
    console.log(this.age)
}}

obj.details()

let objone={name:'monika',age:22}
let objtwo={name:'steve',age:25}
let objthree={name:'rohan',age:20}



obj.details.call(objone)
obj.details.call(objtwo)
obj.details.call(objthree)


function details(skills)
{
    console.log(this.name)
    console.log(this.age)
    console.log(skills)
}

// details()

let skills=['html','css','javascript']

details.call(objone,skills)
details.call(objtwo,skills)
details.call(objthree,skills)