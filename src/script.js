function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Ihe emebiela!",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#igbo-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
