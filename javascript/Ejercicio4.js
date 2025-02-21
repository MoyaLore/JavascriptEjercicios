const apiUrl = "https://random-word-api.herokuapp.com/word?number=1";
let palabra = "";
let displayedWord = [];
let attemptsLeft = 6;
let guessedLetters = [];
let wrongLetters = [];

const wordDisplay = document.getElementById("wordDisplay");
const letterInput = document.getElementById("letterInput");
const guessButton = document.getElementById("guessButton");
const attemptsSpan = document.getElementById("attempts");
const guessedLettersSpan = document.getElementById("guessedLetters");
const wrongLettersSpan = document.getElementById("wrongLetters");
const messageDiv = document.getElementById("message");

// Inicializa el juego obteniendo la palabra de la API
function initGame() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      palabra = data[0].toLowerCase();
      console.log("Palabra:", palabra); // Para depuración
      displayedWord = Array(palabra.length).fill("_");
      updateDisplay();
    })
    .catch(error => {
      console.error("Error al obtener la palabra:", error);
      wordDisplay.textContent = "Error al cargar la palabra.";
    });
}

// Actualiza la interfaz de usuario
function updateDisplay() {
  wordDisplay.textContent = displayedWord.join(" ");
  attemptsSpan.textContent = attemptsLeft;
  guessedLettersSpan.textContent = guessedLetters.join(", ");
  wrongLettersSpan.textContent = wrongLetters.join(", ");
}

// Comprueba si se ha ganado o perdido el juego
function checkGameOver() {
  if (!displayedWord.includes("_")) {
    messageDiv.textContent = "¡Felicidades! Has adivinado la palabra.";
    guessButton.disabled = true;
    letterInput.disabled = true;
  }
  if (attemptsLeft <= 0) {
    messageDiv.textContent = `Has perdido. La palabra era: ${palabra}`;
    guessButton.disabled = true;
    letterInput.disabled = true;
  }
}

// Función para adivinar una letra
function guessLetter() {
  const letter = letterInput.value.toLowerCase();
  letterInput.value = "";
  if (!letter || !/^[a-z]$/.test(letter)) {
    alert("Por favor, ingresa una letra válida (a-z).");
    return;
  }
  if (guessedLetters.includes(letter)) {
    alert("Ya has probado esa letra.");
    return;
  }
  guessedLetters.push(letter);

  if (palabra.includes(letter)) {
    // Revela la letra en todas sus posiciones
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === letter) {
        displayedWord[i] = letter;
      }
    }
  } else {
    wrongLetters.push(letter);
    attemptsLeft--;
  }

  updateDisplay();
  checkGameOver();
}

guessButton.addEventListener("click", guessLetter);
letterInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    guessLetter();
  }
});

initGame();
