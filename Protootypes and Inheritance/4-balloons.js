function balloons(){
    class Balloon{
        constructor(color, gasWeight){
            this.color = color
            this.gasWeight = gasWeight
        }
    }

    class PartyBalloon extends Balloon{
        #ribbonColor
        #ribbonLength
        constructor(color, gasWeight, ribbonColor, ribbonLength){
            super(color, gasWeight)
            this.ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }
        get ribbon(){
            return{
                color: this.#ribbonColor,
                length: this.#ribbonLength
            }
        }
        set ribbon({color, length}){
            this.#ribbonColor = color,
            this.#ribbonLength = length
        }
    }
    class BirthdayBalloon extends PartyBalloon{
        #text
        constructor(color, gasWeight, ribbonColor, ribbonLength, text){
            super(color, gasWeight, ribbonColor, ribbonLength)
            this.#text = text
        }
        get text(){
            return this.#text = text
        }
    }

    return{
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    }
}

let classes = balloons();
let test = new classes.Balloon("Tumno-bqlo", 20.5);

console.log(test.gasWeight)
//.to.be.equal(20.5,
  //          "'Balloon hasWeight' not initialized correctly");