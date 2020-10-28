const scoreEl = document.querySelector('.score');
const output = document.querySelector('.output');
const formEl = document.querySelector('form');
const inputEl = document.querySelector('form input');
const secretNumber = document.querySelector('.secret-number');
const guess = document.querySelector('.guess');
const resetBtn = document.querySelector('.btn');
let score = 20;
const range = document.querySelector('.range');
const rangeInput = document.querySelector('.range input')
const changeBtn = document.querySelector('button');
let guessNumber = setRange(Number(rangeInput.value = 20));
const count = document.querySelector('.count');
let highscore = 0
const highScoreEl = document.querySelector('.highscore span:nth-child(2)')