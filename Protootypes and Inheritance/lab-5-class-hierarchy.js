function classHierarchy(){
    class Figure{
        constructor(){
            this.units = 'cm'
        }
        changeUnits(unit){
            this.units = unit
        }
        toString(){
            return `Figures units: ${this.units}`
        }
    }

    class Circle extends Figure{
        #radius;
        constructor(radius, units){
            super(units)
            this.#radius = radius
        }
        get area(){
            return (Math.PI*this.#radius*this.#radius)
        }
        get radius(){
            let radius = this.#radius
            switch(this.units){
                case 'mm':
                    radius *= 10
                    break
                case 'm':
                    radius /= 10
                    break
                default:
                    break
            }
            return radius
        }
        toString(){
            return `${super.toString()} Area:${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure{
        #width
        #height
        constructor(width, height, units){
            super(units)
            this.#width = Number(width)
            this.#height = Number(height)
        }
        get area(){
            return this.#width * this.#height
        }
        get width(){
            let width = this.#width
            switch(this.units){
                case 'mm':
                    width *= 10
                    break
                case 'm':
                    width /= 10
                    break
                default:
                    break
            }
            return width
        }
        get height(){
            let height = this.#height
            switch(this.units){
                case 'mm':
                    height *= 10
                    break
                case 'm':
                    height /= 10
                    break
                default:
                    break
            }
            return height
        }
        toString(){
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }
    return{
        Figure,
        Circle,
        Rectangle
    }
}


let classes = classHierarchy();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

    let c = new Circle(5);
    console.log(c.area)//,78.53981633974483, "1");
    console.log(c.toString())//,"Figures units: cm Area: 78.53981633974483 - radius: 5","2"); 
    let r = new Rectangle(3, 4, 'mm');
    console.log(r.area)//,1200,"3");
    // // assert.equal(r.toString(),"Figures units: mm Area: 1200 - width: 30, height: 40", "4");
    r.changeUnits('cm');
    // // assert.equal(r.area,12,"5");
    // // assert.equal(r.toString(),"Figures units: cm Area: 12 - width: 3, height: 4","5");

    c.changeUnits('mm');
    // console.log(c.area); // 7853.981633974483
    // console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50