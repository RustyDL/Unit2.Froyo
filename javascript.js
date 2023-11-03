function countFroyoFlavors(input) {
    const flavors = input.split(',');
    const flavorCount = {};

    for (let i = 0; i < flavors.length; i++) {
        const flavor = flavors[i].trim();
        flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
    }

    return flavorCount;
}

const userInput = prompt("Enter a list of froyo flavors:", "Separated each with a comma" );
const flavorCounts = countFroyoFlavors(userInput);

console.log("Froyo Flavor Counts:");
console.table(flavorCounts);
