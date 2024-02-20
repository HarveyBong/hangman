// Importera ordlistan från en separat fil


//import {wordList} from "./word-list.js";



const wordList = [
    {
        word: "flower",
        hint: "A colorful and fragrant bloom found in gardens."
    },
    {
        word: "happy",
        hint: "Feeling or showing pleasure and contentment."
    },
    {
        word: "book",
        hint: "A written or printed work consisting of pages."
    },
    {
        word: "friend",
        hint: "A person whom one knows and has a bond of mutual affection with."
    },
    {
        word: "sunshine",
        hint: "Bright and warm sunlight."
    },
    {
        word: "playful",
        hint: "Full of fun and high spirits; lively."
    },
    {
        word: "smile",
        hint: "A pleased, kind, or amused facial expression."
    },
    {
        word: "ocean",
        hint: "A large body of saltwater that covers most of the Earth's surface."
    },
    {
        word: "colorful",
        hint: "Having bright or varied colors."
    },
    {
        word: "jump",
        hint: "To spring off the ground or other base by muscular force."
    },
    {
        word: "soft",
        hint: "Gentle to the touch; not hard or rough."
    },
    {
        word: "sweet",
        hint: "Having the pleasant taste characteristic of sugar or honey."
    },
    {
        word: "kindness",
        hint: "The quality of being friendly, generous, and considerate."
    },
    {
        word: "laughter",
        hint: "The action or sound of laughing."
    },
    {
        word: "puppy",
        hint: "A young dog, typically one less than a year old."
    },
    {
        word: "music",
        hint: "The art of arranging sounds in time to produce a composition."
    },
    {
        word: "garden",
        hint: "A piece of ground, often near a house, used for growing flowers or vegetables."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "family",
        hint: "A group consisting of parents and children living together in a household."
    },
    {
        word: "candy",
        hint: "Sweet food made with sugar or syrup, often flavored and colored."
    },
    {
        word: "holiday",
        hint: "A day of festivity or recreation when no work is done."
    },
    {
        word: "book",
        hint: "A written or printed work consisting of pages."
    },
    {
        word: "heart",
        hint: "A muscular organ that pumps blood through the circulatory system."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunrise",
        hint: "The daily appearance of the sun above the horizon."
    },
    {
        word: "cookie",
        hint: "A sweet baked food typically containing flour, sugar, and eggs."
    },
    {
        word: "happy",
        hint: "Feeling or showing pleasure and contentment."
    },
    {
        word: "forest",
        hint: "A large area covered chiefly with trees and undergrowth."
    },
    {
        word: "baby",
        hint: "A very young child, typically one that is still an infant."
    },
    {
        word: "playground",
        hint: "An outdoor area with equipment for children to play on."
    },
    {
        word: "star",
        hint: "A celestial body that emits light and is visible in the night sky."
    },
    {
        word: "moon",
        hint: "The natural satellite of the Earth, visible at night by reflected sunlight."
    },
    {
        word: "joyful",
        hint: "Feeling, expressing, or causing great pleasure and happiness."
    },
    {
        word: "breeze",
        hint: "A gentle and pleasant wind."
    },
    {
        word: "cupcake",
        hint: "A small cake baked in a cup-shaped container and typically iced or decorated."
    },
    {
        word: "playmate",
        hint: "A friend or companion with whom one plays and spends time."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "daisy",
        hint: "A common type of flower with a yellow disk and white rays."
    },
    {
        word: "snuggle",
        hint: "To settle or move into a warm, comfortable position closely."
    },
    {
        word: "giggle",
        hint: "A light, happy laugh."
    },
    {
        word: "balloon",
        hint: "A brightly colored bag filled with hot air or gas, used as decoration or in children's games."
    },
    {
        word: "picnic",
        hint: "An outing or occasion that involves taking a packed meal to be eaten outdoors."
    },
    {
        word: "raindrop",
        hint: "A single drop of rain falling from the sky."
    },
    {
        word: "cuddle",
        hint: "To hold close in one's arms as a way of showing love or affection."
    },
    {
        word: "garden",
        hint: "A piece of ground, often near a house, used for growing flowers or vegetables."
    },
    {
        word: "giggly",
        hint: "Inclined to laugh in a light, silly, or bubbly way."
    },
    {
        word: "treasure",
        hint: "A quantity of precious metals, gems, or other valuable objects."
    },
    {
        word: "dolphin",
        hint: "A marine mammal known for its playful behavior and high intelligence."
    },
    {
        word: "candy",
        hint: "Sweet food made with sugar or syrup, often flavored and colored."
    },
    {
        word: "cheerful",
        hint: "Noticeably happy and optimistic."
    },
    {
        word: "lullaby",
        hint: "A soothing song sung to children to help them fall asleep."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "magic",
        hint: "The use of supernatural powers to produce effects that cannot be explained by natural laws."
    },
    {
        word: "snowflake",
        hint: "A single ice crystal that falls as snow."
    },
    {
        word: "cookie",
        hint: "A sweet baked food typically containing flour, sugar, and eggs."
    },
    {
        word: "candle",
        hint: "A cylinder of wax with a central wick that is lit to produce light."
    },
    {
        word: "laugh",
        hint: "To express mirth, pleasure, or derision by a series of spontaneous, usually unarticulated sounds."
    },
    {
        word: "dream",
        hint: "A series of thoughts, images, or emotions occurring during sleep."
    },
];

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