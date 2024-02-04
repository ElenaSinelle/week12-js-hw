'use strict'
const ALPHABET = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

function getWord() {
  let wordArr = [];
  let i = 0;

  while(i < 4) {
    let index = Math.round(Math.random() * (ALPHABET.length - 1));
    let letter = ALPHABET[index];
    wordArr.push(letter);
    i++;
  }

  let word = wordArr.join('')[0].toUpperCase() + wordArr.join('').slice(1);

  const wordContainer = document.getElementById('word');
  wordContainer.innerText = word;
}

document.getElementById('btn').addEventListener('click', getWord);
