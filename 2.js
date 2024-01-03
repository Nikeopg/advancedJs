function random(min, max) {
    let x = Math.random();
    console.log(x);
    return Math.floor(x * (max - min + 1) + min)
    // return Math.random()
}

console.log(random(1, 30))