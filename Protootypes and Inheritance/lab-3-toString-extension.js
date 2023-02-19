function toStringExtension(){
    class Person{
        constructor(name, email){
            this.name = name
            this.email = email
        }
        toString(){
            return `Person (name: ${this.name}, email: ${this.email})`
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name, email)
            this.course = course
        }
        toString(){return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`}
    }
    
    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email)
            this.subject = subject
        }
        toString(){return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`}
    }

    return{
        Person,
        Teacher,
        Student,
    }
}

let classes = toStringExtension();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

const person = new Person('John Doe', 'johndoe@example.com');
console.log(person.toString()); // "Person (name: John Doe, email: johndoe@example.com)"

const teacher = new Teacher('Jane Smith', 'janesmith@example.com', 'Math');
console.log(teacher.toString()); // "Teacher (name: Jane Smith, email: janesmith@example.com, subject: Math)"

const student = new Student('Sarah Johnson', 'sarahjohnson@example.com', 'English');
console.log(student.toString()); // "Student (name: Sarah Johnson, email: sarahjohnson@example.com, course: English)"


Unexpected error: expected 
'Teacher (name: Ivan, email: ivan@ivan.com, subject: undefined)' to equal 
'Teacher (name: Ivan, email: ivan@ivan.com, subject: Graphics)'