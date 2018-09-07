

import Person from "./person";

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);

        this.klass = klass;
    }

    introduce(){
        var a= `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. `;
        var b = this.klass===undefined?`I teach No Class.`:`I teach Class ${this.klass.number}.`;
        return a+b;
    }

    introduceWith(student){
        var a= `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. `;
        var b =student.klass===this.klass?`I teach ${student.name}.`:`I don't teach ${student.name}.`;
        return a+b;
    }
}

export default Teacher;
