const closedFace = document.querySelector("#closed");
const openFace = document.querySelector("#open");

addGlobalEventListener("click", "#closed", (e) => {
  console.log("uwu");
});

addGlobalEventListener("click", "#open", (e) => {
  console.log("n'aww");
});

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}
//add event listener
closedFace.addEventListener("click", () => {
  if (openFace.classList.contains("open")) {
    openFace.classList.add("active");
    closedFace.classList.remove("active");
  }
});
openFace.addEventListener("click", () => {
  if (closedFace.classList.contains("closed")) {
    closedFace.classList.add("active");
    openFace.classList.remove("active");
  }
});

closedFace.addEventListener("mouseenter", () => {
  if (!closedFace.classList.contains("hover")) {
    closedFace.classList.add("hover");
  }
});

openFace.addEventListener("mouseenter", () => {
  if (!openFace.classList.contains("hover")) {
    openFace.classList.add("hover");
  }
});

closedFace.addEventListener("mouseleave", () => {
  if (closedFace.classList.contains("hover")) {
    closedFace.classList.remove("hover");
  }
});

openFace.addEventListener("mouseleave", () => {
  if (openFace.classList.contains("hover")) {
    openFace.classList.remove("hover");
  }
});
