(function stringExtension(){
    String.prototype.ensureStart = function(string){
        return this.startsWith(string) ? `${this}` : `${string}${this}`
    }

    String.prototype.ensureEnd = function(string){
        return this.endsWith(string) ?  `${this}` : `${this + string}`
    }
    
    String.prototype.isEmpty = function(){
        return (this == '')
    }

    String.format = function (string, ...params) {
        let replaceRegex = /{(\d+)}/g;
        let replaced = string.replace(replaceRegex, (match, group1) => {
            let index = Number(group1);
            if (params[index] !== undefined) {
                return params[index];
            }

            return match;
        });

        return replaced;
    };
    
    String.prototype.truncate = function(number){
                let truncated = this.slice(0, number-3)
                let lastSpace = truncated.indexOf(' ')
                let result = truncated + '...'
                if(number < 3){
                    result = ''
                    for(let i=1; i<number; i++){
                        result += '.'
                    }
                }
                else if(this.length <= number){
                    result = `${this}`
                }
                else if(this[number-3] === ' '){
                    result = `${truncated.trim}...`
                }
                else if(lastSpace !== -1){
                    result = `${truncated.slice(0, lastSpace)}...`
                }
                
                return result
    }
})()

var testString = 'quick brown fox jumps over the lazy dog';
console.log(String.prototype.hasOwnProperty('ensureStart'))//.to.equal(true, "Couldn't find ensureStart() function");
var answer = testString.ensureStart('the ');
console.log((answer))//.to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect ensureStart() functionality');
answer = answer.ensureStart('the ');
console.log((answer))//.to.equal('the quick brown fox jumps over the lazy dog', 'Ignored existing start of string');