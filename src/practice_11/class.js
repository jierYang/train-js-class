class Klass {
    constructor(number) {
        this.number = number;
        this.teacher = '';
        this.member = [];
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        if (this.number === student.klass.number) {
            this.leader = student;
            if(this.teacher) {this.teacher.reactAssignLeader(student);}
        } else {
            console.log(`It is not one of us.`);
        }
    }

    appendMember(student) {
        this.member.push(student);
        this.member = [...new Set(this.member)];
        student.klass = this;
        if(this.teacher){this.teacher.reactJoin(student);}
    }

    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;
    }

    registerJoinListener(teacher) {
        this.teacher = teacher;
    }
}

export default Klass;




