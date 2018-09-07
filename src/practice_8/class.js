import Student from "./student";

class Klass{
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return `Class ${this.number}`;
    }

    assignLeader(student){
        if(this.number===student.klass.number){
            this.leader = student;
        }else {
            console.log(`It is not one of us.`);
        }
    }
}

export default Klass;

