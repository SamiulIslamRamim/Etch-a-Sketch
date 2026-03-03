const container = document.getElementById("Container");
let n = 16;



n= parseInt(prompt("Enter the number of squares per side (max 50):", "16"));

console.log('now n is', n);
if (isNaN(n) || n < 1 || n > 50) {
  alert("Invalid input. Please enter a number between 1 and 50.");
  n = 16; 
}

function clearInput() {

  location.reload();
}
let size = 560 / n;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const child = document.createElement("div");
    child.classList.add("sqr");
    child.style.width = `${size}px`;
    child.style.height = `${size}px`;
    container.appendChild(child);
  }
}

container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("opa20")) {
    event.target.classList.remove("opa20");
    event.target.classList.add("opa40");
  } else if (event.target.classList.contains("opa40")) {
    event.target.classList.remove("opa40");
    event.target.classList.add("opa60");
  } else if (event.target.classList.contains("opa60")) {
    event.target.classList.remove("opa60");
    event.target.classList.add("opa80");
  } else if (event.target.classList.contains("opa80")) {
    event.target.classList.remove("opa80");
    event.target.classList.add("opa100");
  }

  if (event.target.classList.contains("done")) {
    return; //skip frm coloring this
  }

  if (event.target.classList.contains("sqr")) {
    console.log(event.target);
    event.target.style.backgroundColor = getRandomColor();
    event.target.classList.add("done");
    event.target.classList.add("opa20");
  }
});
console.log("linked");
