class Company{
    constructor(){
        this.departments = {}
    }
    addEmployee(name, salary, position, department){
        if(!this.departments.hasOwnProperty(department)){
            this.departments[department] = {}
        }
        //time to add expetions and throw errors
        if(name == '' || position == '' || department == '' || salary < 0 || salary == ''){
            throw new Error('Invalid input!')
        }
        else if(name === undefined || position === undefined || department === undefined || salary === undefined){
            throw new Error('Invalid input!')
        }
        else if(name === null || position === null || department === null || salary === null){
            throw new Error('Invalid input!')
        }
        
        this.departments[department][name] = {
            name: name,
            salary: salary,
            position: position,
            department: department,
        }
        return (`New employee is hired. Name: ${name}. Position: ${position}`)
    }
    bestDepartment(){
        let bestDepartment = ['currentBestDep', 0]
        for(let dep in this.departments){
            let AverageSalary = 0
            let workerCount = 0
            for(let worker in (this.departments[dep])){
                let currentWorker = (this.departments[dep][worker])
                AverageSalary = AverageSalary + (currentWorker.salary)
                workerCount++
            }
            AverageSalary = (AverageSalary/workerCount).toFixed(2)
            if(AverageSalary>bestDepartment[1]){
                bestDepartment = [dep, AverageSalary]
            }
        }
        let bestWorkers = []
        for(let worker in this.departments[bestDepartment[0]]){
            bestWorkers.push([worker, (this.departments[bestDepartment[0]][worker].salary), (this.departments[bestDepartment[0]][worker].position)])
        }
        
        let sortedWorkers = bestWorkers.sort((a,b) => (b[1] - a[1]) || (a[2].localeCompare(b[2])))
        let result = [(`Best Department is: ${bestDepartment[0]}`), (`Average salary: ${bestDepartment[1]}`)]
        for(let entry of sortedWorkers){
            result.push(entry.join(' '))
        }

        return  result.join('\n')
    }
}


let c = new Company();
c.addEmployee(undefinedsjhgt, 0, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"))
console.log(c.bestDepartment());


// Unexpected error: not equal: expected 
// 'Best Department is: Construction\nAverage salary: 1500.00\nStanimir 2000 engineer\nStan 2000 architect\nPesho 1500 electrical engineer\nSlavi 500 dyer' to equal 
// 'Best Department is: Construction\nAverage salary: 1500.00\nStan 2000 architect\nStanimir 2000 engineer\nPesho 1500 electrical engineer\nSlavi 500 dyer'