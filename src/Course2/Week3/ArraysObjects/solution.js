// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

    for (var product of dairy) {
        console.log(product)
    }
}

logDairy();
// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (trait of Object.keys(bird)) {
        console.log(`${trait}: ${bird[trait]}`)
    }
}

birdCan();
// Task 3
function animalCan() {
    for (trait in bird) {
        console.log(`${trait}: ${bird[trait]}`)
    }
}

animalCan();