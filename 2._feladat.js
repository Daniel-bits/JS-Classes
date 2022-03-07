class Pont {
    #x;
    #y;
    constructor(x=0, y=0) {
        this.#x = x;
        this.#y = y;
    }
    getX(){
        return this.#x;
    }
    getY(){
        return this.#y;
    }
    setX(x){
        if (x < 0) {
            alert("Csak a számtengely jobb felső részében lévő pontokat tudjuk tárolni.")
        } else{
            this.#x = x;
        }
    }
    setY(y){
        if (y < 0) {
            alert("Csak a számtengely jobb felső részében lévő pontokat tudjuk tárolni.")
        } else {
            this.#y = y;
        }
    }
    tavolsagAzOrigotol() {
        return Math.sqrt(this.#x ** 2 + this.#y ** 2);
    }

    static ketPontTavolsag(p1,p2) {
        let xKoordTav = (p2.#x-p1.#x) ** 2;
        let yKoordTav = (p2.#y-p1.#y) ** 2;
        return Math.sqrt(xKoordTav + yKoordTav).toFixed(4);
    }

    toString(){
        return `Pont: x = ${this.#x}, y = ${this.#y}`;
    }
}

let pont1 = new Pont(4,8);
let pont2 = new Pont(6,2);
console.log(pont1);
console.log(pont1.tavolsagAzOrigotol());

console.log(Pont.ketPontTavolsag(pont1,pont2));