



import Person from "./person";

class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);

        this.klasses = klasses;
    }

    introduce(){
        var a= `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. `;
        var b = this.klasses===undefined?`I teach No Class.`:`I teach Class ${this.klasses.map(klass => klass.number).join(', ')}.`;
        return a+b;
    }

    introduceWith(student){
        var a= `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. `;
        var b = student.klass.number===this.klass.number?`I teach ${student.name}.`:`I don't teach ${student.name}.`;
        return a+b;
    }

    reactAssignLeader(student){
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
    }

    reactJoin(student){
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.klass.number}.`);
    }
}

export default Teacher;

