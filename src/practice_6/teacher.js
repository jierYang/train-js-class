
import Person from "./person";

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);

        this.klass = klass;
    }

    introduce(){
        var a= `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. `;
        var b = this.klass===undefined?`I teach No Class.`:`I teach Class ${this.klass}.`;
        return a+b;
    }
}

export default Teacher;
