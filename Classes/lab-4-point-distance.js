class Point{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    static distance(a,b){
        let distX = a.x - b.x
        let distY = a.y - b.y
        return Math.sqrt(distX ** 2 + distY ** 2)
    }
}

const p1 = new Point(0,0)
const p2 = new Point (3,4)
let shouldBeFive = Point.distance(p1, p2)
console.log(shouldBeFive)