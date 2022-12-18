const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let keysList = [];
let audio = new Audio("../tunes/a.wav");
// methods

const playTune = (key) => {
  audio.src = `../tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");

  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  keysList.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};
const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};
const pressedKey = (e) => {
  if (keysList.includes(e.key)) playTune(e.key);
};
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
