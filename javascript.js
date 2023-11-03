function countFroyoFlavors(input) {
  const flavors = input.split(",");
  const flavorCount = {};

  for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i].trim();
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
  }

  return flavorCount;
}

function displayFlavorCountsTable(flavorCounts) {
  console.table(flavorCounts);
}

document.getElementById("flavorForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const userInput = document.getElementById("flavorInput").value;
  const flavorCounts = countFroyoFlavors(userInput);
  displayFlavorCountsTable(flavorCounts);
});
