const container = document.getElementById("Container");
let n = 16;
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
    if(event.target.classList.contains("done")){
        return; //skip frm coloring this
    }
    if (target.classList.contains("opa-100")) {
    return; // Stop here! It's already full.
  }
  
  if (event.target.classList.contains("sqr")) {
    console.log(event.target);
    event.target.style.backgroundColor = getRandomColor();
    event.target.classList.add("done")
  }
});
console.log("linked");

