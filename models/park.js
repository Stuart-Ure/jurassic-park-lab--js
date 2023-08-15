const Dinosaur = require("./dinosaur")

class Park {

    constructor (name, ticketPrice, dinosaurs = []) {
        this.name= name
        this.ticketPrice= ticketPrice
        this.dinosaurs= dinosaurs
    };

    addDino (Dinosaur){
        this.dinosaurs.push (Dinosaur)
    }

    removeDino (Dinosaur){
        let index = this.dinosaurs.indexOf(Dinosaur);
        this.dinosaurs.splice(index, 1);
    }
    mostViewed (){
        let highest = 0
        let highestDino 
        for (let i = 0; i < this.dinosaurs.length; i++){
            let dino = this.dinosaurs[i]
            if (dino["guestsAttractedPerDay"] > highest){
                highest = dino["guestsAttractedPerDay"]
                highestDino = dino
            }
        }
        return `The most viewed dinosaur is a ${highestDino.species} `

    }

    findSpecies (species){
        let foundDino = []
        for (let i = 0; i < this.dinosaurs.length; i++){
            if (this.dinosaurs[i]["species"] ==species){
                foundDino.push(this.dinosaurs[i])
            }
        }
        return `there are ${foundDino.length} ${species}'s`
        
    }

    totalVisitors (){

    let totalVisitors = 0;
    for (const dinosaur of this.dinosaurs) {
        totalVisitors += dinosaur.guestsAttractedPerDay;
    }
    return `There are ${totalVisitors} per day`
    }

    visitorsPerYear(){
    let totalVisitors = 0;
    for (const dinosaur of this.dinosaurs) {
            totalVisitors += dinosaur.guestsAttractedPerDay;

    let visitorsPerYear = (totalVisitors * 365)
    return `There have been ${visitorsPerYear} this year`
    }
}

}
const jurrasicPark =  new Park("danger island", 100)
// console.log (jurrasicPark)

const catasaur = new Dinosaur ("big ol cat", "carnivore", 900)
const fishasaur = new Dinosaur ("big ol fish", "watervore", 500)
const mouseasaur = new Dinosaur ("big ol mouse", "herbivore", 100)
const tigerasaur = new Dinosaur ("big ol cat", "carnivore", 1000)
const sharkasaur = new Dinosaur ("big ol fish", "wartervore", 5000)
const ratasaur = new Dinosaur ("big ol mouse", "carnivore", 400)
const kittenasaur = new Dinosaur ("big ol cat", "carnivore", 600)
const dogasaur = new Dinosaur ("big ol dog", "carnivore", 1000)


// console.log (dogasaur)

jurrasicPark.addDino(dogasaur)
jurrasicPark.addDino(catasaur)
jurrasicPark.addDino(fishasaur)
jurrasicPark.addDino(tigerasaur)
jurrasicPark.addDino(mouseasaur)
jurrasicPark.addDino(sharkasaur)
jurrasicPark.addDino(ratasaur)
jurrasicPark.addDino(kittenasaur)

console.log (jurrasicPark)

jurrasicPark.removeDino(dogasaur)

console.log (jurrasicPark)

console.log (jurrasicPark.mostViewed())

console.log (jurrasicPark.findSpecies("big ol cat"))

console.log (jurrasicPark.totalVisitors())

console.log(jurrasicPark.visitorsPerYear())



// Calculate the total revenue from ticket sales for one year