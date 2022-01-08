class Ninja {
    constructor(name, health = 100, strength  = 3, speed = 3) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.speed = speed;
    }

    sayName() {
        console.log('My name is '+ this.name);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.name + ' drank the sake.');
    }

    showStats() {
        console.log('Name : '+ this.name + ',', 'Health : ' + this.health + ',', 'Strength : ' + this.strength + ',', 'Speed : ' + this.speed);
    }
}

const ninja1 = new Ninja("Ryu Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
