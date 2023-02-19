function extensibleObject(){
    let extensibleObject = {
        extend: function(templateObject){
            for(let property in templateObject){
                if(typeof templateObject[property] == 'function'){
                    Object.getPrototypeOf(this)[property] = templateObject[property]
                }
                else{
                    this[property] = templateObject[property]
                }
            }
        }
    }
    return extensibleObject
}

var template = {
    extensionMethod: function () {
        console.log("From extension method")
    }
};

var testObject = extensibleObject();
testObject.extend(template);
console.log(Object.getPrototypeOf(testObject).hasOwnProperty('extensionMethod'))//
//.to.equal(true, "Object's prototype was not extended");