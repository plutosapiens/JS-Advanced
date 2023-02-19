


(function arrayExtension(){

    Array.prototype.last = function(){
        return(this[this.length-1])
    }    
    
    Array.prototype.skip = function(number){
            return this.slice(number)
        }

    Array.prototype.take = function(number){
            return this.slice(0, number)
        }

    Array.prototype.sum = function(){
        return this.reduce((acc, val)=> acc + val, 0)
    }

    Array.prototype.average = function(){
        return this.sum()/this.length
    }
 })()



const arr = [1, 2, 3];
console.log(arr.last())
console.log(arr.skip(1));