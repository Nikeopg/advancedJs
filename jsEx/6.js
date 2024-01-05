"use strict";

class Enemy {
    #health;
    constructor(health) {
        this.health = health;
    }

    recieveDamage(damage) {
        this.health = this.health - damage;
        console.log(this.health);
    }
}

class Sword {
    #damage;
    constructor(damage) {
        this.#damage = damage;
    }

    strike(enemy) {
        enemy.recieveDamage(this.#damage);
    }
}

class Ork extends Enemy {
    constructor(health) {
        super(health);
    }


    recieveDamage(damage) {
        if (Math.random() > 0.5) {
            this.health = this.health - damage;
        };
        console.log(this.health);
    }
}

const enemy = new Enemy(100);
const sword = new Sword(3);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);

const orc = new Ork(100);
orc.recieveDamage(5); 
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);

