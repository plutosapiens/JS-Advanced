function listProcessor (array){
    let commands = function(){
        let collection = []
        return{
            add: (str) => collection.push(str),
            remove: (str) => {
                collection = collection.filter((x)=> x!==str)
            },
            print: () => console.log(collection.join(','))
        }
    }()
    commands.add('j')
    for(let element of array){
        let [command, str] = element.split(' ')
        commands[command](str)
    }
    commands.add('AAAAAAAAAAA')
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])