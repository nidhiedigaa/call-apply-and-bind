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
    skills(skills)
    {
        console.log(this.subject)
        console.log(this.section)
        console.log(skills)
    }
}


let studentone=new Student('biology','A')
let studenttwo=new Student('chemistry','B')
let studentThree=new Student('maths','A')

studentone.details()
studenttwo.details()
studentThree.details()

let skills=['html','css','javascript']
studentone.details.call(studenttwo)
studentThree.details.apply(studentone,[skills])

let resultone=studentone.details.bind(studentThree)
let resulttwo=studentone.skills.bind(studenttwo,['html','css','javascript'])
resultone()
resulttwo()