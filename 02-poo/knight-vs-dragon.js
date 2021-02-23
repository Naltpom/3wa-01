// Dragon & Knight
class Player {
    constructor (name, life = 100, force = 10) {
        this._name = name;
        this._life = life;
        this._force = force;
        this._shot = 0;
        this._hit_logs = [];
    }

    stats () {
        return {
            "Name" : this._name,
            "Life" : this._life,
            "Force" : this._force,
            "Shot" : this._shot,
            "Hit logs" : this._hit_logs,
        };
    }

    get life () {
        return this._life;
    }

    get name () {
        return this._name;
    }

    removeLife (dammage) {
        this._life = this._life - dammage;
    }

    hit (player) {
        // remove random life to other
        let dammage = Math.ceil( Math.random() * this._force );
        this._hit_logs.push(dammage);
        player.removeLife(dammage);
        this._shot ++;
        return dammage;
    }
}

class Game {
    constructor (player1, player2) {
        this._p1 = player1
        this._p2 = player2

        this.run()
    }

    run () {

        // test turn 1
        while (this._p1.life > 0 && this._p2.life > 0 ) {
            
            const [assaillant, victim] = (Math.random() > 0.5) ? [this._p1, this._p2] : [this._p2, this._p1]

            
            console.log(`${assaillant.name} turn and hit with ${assaillant.hit(victim)}`)
        }
        console.log(this._p1.stats());
        console.log(this._p2.stats());
        (this._p1.life <= 0 ) ? console.log( `${this._p1.name} lost` ) : console.log( `${this._p2.name} lost` );
    }
}

class Dragon extends Player {}

class Knight extends Player {constructor (name, life, force) {super(name, life, force)}}


const dragon = new Dragon("Smaug", 150, 10)
const knight = new Knight("Master", 110, 12)
new Game(dragon, knight); 