class List{
    constructor(list = []){
        this.list = list.sort((a,b)=> a-b)
        this.size = list.length
    }
    add(num){
        this.list.push(num)
        this.list = this.list.sort((a,b)=>a-b)
        this.size = this.list.length
    }
    remove(index){
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`);
        } else {
            this.list.splice(index,1)
            this.size = this.list.length
        }
    }
    get(index){
        if(this.list[index] == undefined){
            throw new Error('Index doesn\'t exist')
        }
        else{
            return this.list[index]
        }
    }
    // get size(){
    //     return this.list.length
    // }
}

let list = new List();
list.add(5)
list.add(3)
list.remove(0)
console.log(list.size)
console.log(list.get(5))
