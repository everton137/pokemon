class Pokemon {
    constructor(name, health, ap, skills) {
        this._name = name;
        this._health = health;
        this._ap = ap;
        this._skills = [];
    }

    learnAttack(attack) {
        this._skills.push(attack);
    }

    getStatus() {
        console.log(`Pokemon: ${this._name}, health/magic: ${this._health}/${this._ap}`);
    }

    attack(id, enemy) {
        if (this._ap > this._skills[id]._ap) {
            enemy._health -= this._skills[id]._damage;
            this._ap -= this._skills[id]._ap;
            if (enemy._health > 0) {
                console.log(`${enemy._name} took ${this._skills[id]._damage} of damage. Actual health is ${enemy._health} (-${this._skills[id]._damage} APs).`);
            } else {
                console.log(`${enemy._name} is dead.`);
            }
        } else {
            console.log("You don't have enough AP")
        }
    }

    getMagic(magic) {
        this._ap += magic;
        console.log(`${this._name} got ${magic} APs.`);
    }


}

class AttackSkill {
    constructor(attack, damage, ap) {
        this._attack = attack;
        this._damage = damage;
        this._ap = ap;
    }
}

const pikachu = new Pokemon("Pikachu", 100, 70);
const bulbasaur = new Pokemon("Bulbasaur", 95, 30);
const thunderstorm = new AttackSkill('Thunderstorm', 10, 5);
const razorleaf = new AttackSkill('Razor Leaf', 50, 15);

pikachu.learnAttack(thunderstorm);
bulbasaur.learnAttack(razorleaf);

pikachu.getStatus();



