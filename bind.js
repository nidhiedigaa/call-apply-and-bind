let obj={name:'nidhi',age:22,details:function()
{
    console.log(this.name)
    console.log(this.age)
}}


obj.details()

let objone={name:'harry',age:22}
let objtwo={name:'ganga',age:21}
let objthree={name:'james',age:24}


let dataone=obj.details.bind(objone)
let datatwo=obj.details.bind(objtwo)
let datathree=obj.details.bind(objthree)


dataone()
datatwo()
datathree()



function details(skill1,skill2,skill3='cyber security')
{
    console.log(this.name)
    console.log(this.age)
    console.log(skill1,skill2,skill3)
}

let skill1='html'
let skill2='css'
let skill3='javascript'

let res1=details.bind(objone,skill1,skill2,skill3)
let res2=details.bind(objtwo,skill1,skill2,skill3)
let res3=details.bind(objthree,skill1,skill2)

res1()
res2()
res3()


class Student
{
    constructor (subject,section)
    {
        this.subject=subject
        this.section=section
    }
    details()
    {
        console.log(this.subject)
        console.log(this.section)
    }
}


let studentone=new Student('biology','A')
let studenttwo=new Student('chemistry','B')
let studentThree=new Student('maths','A')

studentone.details()
studenttwo.details()
studentThree.details()

