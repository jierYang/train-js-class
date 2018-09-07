


import Person from "./person";

class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);

        this.klasses = klasses;
    }

    introduce(){
        var a= `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. `;
        var b = this.klasses===undefined?`I teach No Class.`:`I teach Class ${this.klasses[0].number}, ${this.klasses[1].number}.`;
        return a+b;
    }

    introduceWith(student){
        var a= `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. `;
        var b = student.klass.number===this.klass.number?`I teach ${student.name}.`:`I don't teach ${student.name}.`;
        return a+b;
    }
}

export default Teacher;

