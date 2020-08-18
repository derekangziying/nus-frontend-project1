//Variable for "Enter custom name" text field
const customName = document.getElementById("customname");

//Variable for "Generate random story" button
const randomize = document.querySelector(".randomize");

//Variable for <p> element at the bottom of the HTML body that the story will be copied into (story)
const story = document.querySelector(".story");

//Takes an array, and returns one of the items stored inside the array at random
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);

  return array[random];
}

//Raw Text Srings
var storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

var insertY = ["the soup kitchen", "Disneyland", "the White House"];

var insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

//create a  new random story each time the button is pressed and the function is run.
//If we made changes directly to storyText, we'd only be able to generate a new story once.

//adds a event listener so that when you click, it runs result() function

function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = ((fTemp - 32) * 5) / 9;
  return fToCel;
}

function weightConverter(valNum) {
  return valNum * 0.071429;
}

randomize.addEventListener("click", result);

function result() {
  var newStory = storyText;
  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if (customName.value !== "") {
    let name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    //stones = lb*0.071429
    //centigrade

    let weight = Math.round(weightConverter(300)) + " stone";
    let temperature = Math.round(fToC(94)) + " centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }

  story.textContent = newStory;

  story.style.visibility = "visible";
}
