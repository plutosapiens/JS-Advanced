class Stringer{
    constructor(string, length){
        this.innerString = string
        this.innerLength = length
    }
    increase(incr){
        this.innerLength += incr
    }
    decrease(decr){
        if(this.innerLength - decr <0){
            this.innerLength=0
        }
        else{
            this.innerLength -= decr
        }
    }
    toString(){
        if(this.innerLength<this.innerString.length){
            return this.innerString.substring(0, this.innerLength) + '...'
        }
        else{
            return this.innerString
        }
    }
}
 let str = new Stringer('asdfghj', 10)
 str.decrease(7)
 console.log(str.innerString)