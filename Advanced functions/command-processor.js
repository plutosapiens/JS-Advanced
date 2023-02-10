function solution(){
    let string = ''
    return{
        append: (s) => string += s,
        removeStart: (start) => string = string.substring(start),
        removeEnd: (end) => string = string.substring(0, string.length - end),
        print: () => console.log(string)
    }
}
let secondZeroTest = solution();

secondZeroTest.append('123');

secondZeroTest.append('45');

secondZeroTest.removeStart(2);

secondZeroTest.removeEnd(1);

secondZeroTest.print();