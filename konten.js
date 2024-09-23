// Get the elements
const cp = document.querySelector("#objectives .col-md-4:nth-child(1)");
const tp = document.querySelector("#objectives .col-md-4:nth-child(2)");
const atp = document.querySelector("#objectives .col-md-4:nth-child(3)");

// Get the maximum height of the three elements
const maxHeight = Math.max(cp.offsetHeight, tp.offsetHeight, atp.offsetHeight);

// Set the height of each element to the maximum height
cp.style.height = `${maxHeight}px`;
tp.style.height = `${maxHeight}px`;
atp.style.height = `${maxHeight}px`;
