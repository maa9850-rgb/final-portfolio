let cards = document.querySelectorAll(".card");
let learningCards = document.querySelectorAll(".learning-card");

let stampMessages = [
  "Student Me collected!",
  "Cultural Me collected!",
  "Playful Me collected!",
  "Procrastinating Me collected!"
];

let links = [
  "https://maa9850-rgb.github.io/Campus-Quest/index.html",
  "https://rawan-alali.github.io/comic-1/",
  "https://rabeea-ahmed.github.io/mEOWssing/room3/room3.html",
  "https://rbashokov.github.io/comm-lab-project4/"
];

let completedShown = false;

let projectViewer = document.getElementById("project-viewer");
let projectFrame = document.getElementById("project-frame");
let backButton = document.getElementById("back-button");

let introScreen = document.getElementById("intro-screen");
let enterButton = document.getElementById("enter-button");



learningCards.forEach(function(card) {
  card.addEventListener("click", function() {
    card.classList.toggle("open");
  });
});

cards.forEach(function(card, index) {
  let button = card.querySelector("a");

  card.addEventListener("click", function() {
    card.classList.toggle("open");

    let miniStamp = document.getElementById("mini-stamp-" + index);

    if (miniStamp && !miniStamp.classList.contains("collected")) {
      miniStamp.classList.add("collected");
      miniStamp.innerText = "✓";

      showStampPopup(stampMessages[index]);

      let allCollected = document.querySelectorAll(".side-stamps span.collected");

      if (allCollected.length === 4 && !completedShown) {
        completedShown = true;

        setTimeout(function() {
          showFinalPopup();
        }, 1500);
      }
    }
  });

  button.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    projectFrame.src = links[index];
    projectViewer.classList.add("show");
  });
});

backButton.addEventListener("click", function() {
  projectViewer.classList.remove("show");
  projectFrame.src = "";
});

function showStampPopup(message) {
  let popup = document.createElement("div");
  popup.classList.add("stamp-popup");
  popup.innerText = message;

  document.body.appendChild(popup);

  setTimeout(function() {
    popup.remove();
  }, 1400);
}

function showFinalPopup() {
  let popup = document.createElement("div");
  popup.classList.add("final-popup");

  popup.innerHTML = `
    <h2>you collected all sides of me ♡</h2>
    <p>thanks for taking the time to explore my work</p>
  `;

  document.body.appendChild(popup);

  setTimeout(function() {
    popup.remove();
  }, 3000);
}

document.addEventListener("mousedown", () => {
  document.documentElement.classList.add("cursor-closed");
});

document.addEventListener("mouseup", () => {
  document.documentElement.classList.remove("cursor-closed");
});

document.addEventListener("mouseleave", () => {
  document.documentElement.classList.remove("cursor-closed");
});



let cardColors = [
  ["#5f8f89", "#a8cbb7", "#fff7c2"], // Student Me
  ["#00732f", "#ffffff", "#000000", "#ce1126"], // Cultural Me
  ["#e6a6b1", "#c75c74", "#fff0f5"], // Playful Me
  ["#7b6fa6", "#f6d6ff", "#fff7c2"] // Procrastinating Me
];

cards.forEach(function(card, index) {
  card.addEventListener("mousemove", function(event) {
    let sparkle = document.createElement("div");
    sparkle.classList.add("culture-sparkle");

    sparkle.style.left = event.clientX + "px";
    sparkle.style.top = event.clientY + "px";

    let colors = cardColors[index];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    sparkle.style.background = randomColor;

    document.body.appendChild(sparkle);

    setTimeout(function() {
      sparkle.remove();
    }, 700);
  });
});

const enterBtn = document.getElementById("enter-button");
const introScreen = document.getElementById("intro-screen");
const sound = document.getElementById("card-sound");

enterBtn.addEventListener("click", () => {
  // play fold sound
  sound.currentTime = 0;
  sound.play().catch(() => {});

  // fade out intro
  introScreen.classList.add("hide");

  // fully remove after fade
  setTimeout(() => {
    introScreen.style.display = "none";
  }, 800);
});

const enterButton = document.getElementById("enter-button");
const introScreen = document.getElementById("intro-screen");

if (enterButton && introScreen) {
  enterButton.onclick = function () {
    introScreen.classList.add("hide");

    setTimeout(function () {
      introScreen.style.display = "none";
    }, 800);
  };
}