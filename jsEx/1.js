const weatherMap = new Map([
    ['London', 10],
    ['Moscow', 17],
    ['Paris', 14],
]);

const newWeatherMap = new Map;

for (const [key, value] of weatherMap) {
    console.log(`key ${key} > value ${value}`)
    newWeatherMap.set(value, key)
}

console.log(  newWeatherMap)

