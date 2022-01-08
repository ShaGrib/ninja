class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 10;
        this.strength = 3;
        this.speed = 3;
    }

    sayName() {
        console.log(this.name);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.name + ' drank the sake.');
    }

    showStats() {
        console.log('Name is '+ this.name + ',', 'Health is ' + this.health + ',', 'Strength is ' + this.strength + ',', 'Speed is ' + this.speed);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
