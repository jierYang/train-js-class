import Student from "./student";

class Klass{
    constructor(number){
        this.number = number;

        this.member = [];
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

    appendMember(student){
        this.member.push(student);
        student.klass = this;
    }
}

export default Klass;



