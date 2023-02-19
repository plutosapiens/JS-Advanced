function people(){
    class Employee{
        constructor(name, age, salary){
            this.name = name
            this.age  = age
            this.salary = (salary == undefined) ? 0 : salary
            this.tasks = []
            this.currentTask = 0
        }
        work(){
            console.log(`${this.name} is working on ${this.tasks[this.currentTask]}.`)
            this.currentTask = (this.currentTask + 1) % this.tasks.length
        }
        collectSalary(){
            console.log(`${this.name} received ${this.salary} this month.`)
        }
    }

    class Junior extends Employee{
        constructor(name, age, salary){
            super(name, age, salary)
            this.tasks = ['a simple task', 'a complicated task', 'taking time off work']
        }
    }

    class Senior extends Employee{
        constructor(name, age, salary){
            super(name, age, salary)
            this.tasks = ['a complicated task', 'taking time off work', 'supervising junior workers']
        }
    }

    class Manager extends Employee{
        constructor(name, age, salary, dividend){
            super(name, age, salary)
            this.dividend = (dividend == undefined) ? 0 : dividend
            this.tasks = ['scheduled a meeting', 'is preparing a quarterly report']
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
          }
    }

    return{
        Employee,
        Junior,
        Senior,
        Manager
    }
}

result = people();

var guy1 = new result.Junior('pesho', 20);
var guy2 = new result.Senior('gosho', 21);
var guy3 = new result.Manager('ivan', 22);

console.log(guy1.hasOwnProperty('name'))//.to.equal(true, "Name property not found on Junior instance.");
console.log(guy1.hasOwnProperty('age'))//.to.equal(true, "Age property not found on Junior instance.");
console.log(guy1.hasOwnProperty('salary'))//.to.equal(true, "Salary property not found on Junior instance.");

console.log(guy2.hasOwnProperty('name'))//.to.equal(true, "Name property not found on Senior instance.");
console.log(guy2.hasOwnProperty('age'))//.to.equal(true, "Age property not found on Senior instance.");
console.log(guy2.hasOwnProperty('salary'))//.to.equal(true, "Salary property not found on Senior instance.");

console.log(guy3.hasOwnProperty('name'))//.to.equal(true, "Name property not found on Manager instance.");
console.log(guy3.hasOwnProperty('age'))//.to.equal(true, "Age property not found on Manager instance.");
console.log(guy3.hasOwnProperty('salary'))//.to.equal(true, "Salary property not found on Manager instance.");
console.log(guy3.hasOwnProperty('dividend'))//.to.equal(true, "Salary property not found on Manager instance.");imple task. 
//  Ivan is working on a simple task. 
 
//  Ivan received 5811 this month. 
 
 
//  Alex is working on a complicated task. 
//  Alex is taking time off work. 
//  Alex is supervising junior workers. 
//  Alex is working on a complicated task. 
 
 
//  Alex received 12050 this month. 
 
 
//  Tom received 15000 this month. 
 
//  Tom received 17500 this month. 
 

