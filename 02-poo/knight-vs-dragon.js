// Dragon & Knight
class Player {
    constructor (name, life = 100, force = 10) {
        this._name = name;
        this._life = life;
        this._force = force;
        this._shot = 0;
        this._hit_logs = [];
        this._dammage = 0;
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

    removeLife (dammage) {
        this._life = this._life - dammage;
    }

    hit (player) {
        // remove random life to other
        this._dammage = Math.floor( Math.random() * this._force );
        this._hit_logs.push(this._dammage);
        player.removeLife(this._dammage)
    }
}

class Game {
    constructor () {
        this._player1 = new Dragon("dragon")
        this._player2 = new Knight("master")
        this.run()
    }

    run () {

        // test turn 1
        while (this._player1._life > 0 && this._player2._life > 0 ) {
            
            if(Math.random() > 0.5) {
                // _player2 turn
                this._player2.hit(this._player1)
                console.log("_player2 turn and hit with "+ this._player2._dammage)
    
            } else {
                // _player1 turn
                this._player1.hit(this._player2)
                console.log("_player1 turn and hit with "+ this._player1._dammage)
    
            }
        }
        console.log(this._player1.stats());
        console.log(this._player2.stats());
        if (this._player1._life <= 0 ) { 
            console.log( 'player 1 lost' ) 
        } else {  
            console.log( 'player 2 lost' ) 
        };
    }
}

class Dragon extends Player {constructor (name, life, force) {super(name, life, force)}}

class Knight extends Player {constructor (name, life, force) {super(name, life, force)}}

game = new Game();
console.log(game)