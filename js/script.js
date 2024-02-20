// Importera ordlistan från en separat fil
import {wordList} from "./word-list.js";

const hangmanImage=document.querySelector(".hangman-box img");
const wordDisplay=document.querySelector(".word-display");
const guessesText=document.querySelector(".guesses-text b");
const keyboardDiv=document.querySelector(".keyboard");
const modelBox = document.querySelector(".modelbox");

const playAgainBtn = document.querySelector(".play-again");

let currentWord ,correctLetters, wrongGuesscount;
const maxGuesses = 6;

// Återställning av spelet
const resetGame = () =>  {
    correctLetters=[];
    wrongGuesscount=0;
    hangmanImage.src = `images/h${wrongGuesscount}.png`
    guessesText.innerText = `${wrongGuesscount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled=false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    modelBox.classList.remove("show");
}

// Funktion för att hämta ett slumpmässigt ord
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];

    currentWord = word;
    console.log(word);
    document.querySelector(".hint-text b").innerText = hint;

    resetGame();

}
// Funktion för att visa Game Over-meddelande (vinst eller förlust)
const gameOver=(isVictory)=> {
    setTimeout(()=>{
        const modelText = isVictory ? `You found the word!`: `The correct word was: `;
        modelBox.querySelector("img").src=`images/${isVictory ? 'victory': 'lost'}.gif`;
        modelBox.querySelector("h4").innerText=`${isVictory ? 'Congratulations': 'Game Over!'}`;
        modelBox.querySelector("p").innerHTML= `${modelText} <b>${currentWord}</b>`;

        modelBox.classList.add("show");
    },300)
}



// Funktion för att hantera varje gissning
const initGame=(button, clickedLetter) =>{
   if(currentWord.includes(clickedLetter)){
    [...currentWord].forEach((letter, index) => {
        if(letter === clickedLetter){
            correctLetters.push(letter);
            wordDisplay.querySelectorAll("li")[index].innerText = letter;
            wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
        }
    })
   }
   else {
    wrongGuesscount ++;
hangmanImage.src=`images/h${wrongGuesscount}.png`
   }
   button.disabled=true;
   guessesText.innerText = `${wrongGuesscount} / ${maxGuesses}`;

   if(wrongGuesscount===maxGuesses) return gameOver(false);
   if(correctLetters.length===currentWord.length) return gameOver(true);
}
// Skapar Engelskt tangentbord (A-Z)
for(let i = 97; i <= 122; i++) {
    const button=document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click",e=> initGame(e.target, String.fromCharCode(i)));
}
// Hämta ett slumpmässigt ord vid start
getRandomWord();
// Lyssnare för att börja om spelet
playAgainBtn.addEventListener("click", getRandomWord);