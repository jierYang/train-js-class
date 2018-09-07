
import Person from "./person";


class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);

        this.klass = klass;
    }

    introduce(){
        var a = `My name is ${this.name}. I am ${this.age} years old. I am a Student. `;
        var b = this.klass.leader ===this?`I am Leader of Class ${this.klass.number}.` : `I am at Class ${this.klass.number}.`
        return a+b;
    }
}

export default Student;

