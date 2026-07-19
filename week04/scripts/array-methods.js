let names = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"];

let namesB = names.filter((name) => name.startsWith("B"));

let namesLength = names.map((name) => name.length);

let averageNameLength =
    names.reduce((total, name) => total + name.length, 0) / names.length;

document.querySelector("#namesOutput").textContent = JSON.stringify(names);
document.querySelector("#filterOutput").textContent = JSON.stringify(namesB);
document.querySelector("#mapOutput").textContent = JSON.stringify(namesLength);
document.querySelector("#reduceOutput").textContent = averageNameLength;
