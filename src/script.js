function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ca84b50945053937af3t3beb98o11a3c";
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4-line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' which should be placed inside a <strong> element at the end of the poem and NOT at the beginning. Remove the word, 'html' and any unnecessary back ticks from your final response";
  let prompt = `User Instructions: Generate an Igbo poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#igbo-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
