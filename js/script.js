'use strict';
 scoreEl.innerText = ` 💯 Score: ${score}`;

 formEl.addEventListener('submit', (e) => {
     e.preventDefault();

   if(!inputEl.value) displayMessage("No number")
     else if(parseInt(inputEl.value) === guessNumber) {
        
         secretNumber.textContent = guessNumber;
         guess.style.background = "green"
         secretNumber.style.color = "white";
         displayMessage(`<span>You win the game</span>`);
         inputEl.setAttribute('disabled', true);
         if(score > highscore){
            highscore = score;
            highScoreEl.textContent = highscore;
         }
     }
     else if(parseInt(inputEl.value) !== guessNumber){
        if(score > 1){
            score--; 
            parseInt(inputEl.value) > guessNumber ? displayMessage(`<span>📈 Too high</span>`) : displayMessage(`<span> 📉 Too low</span>`); 
            scoreEl.textContent = `💯 Score: ${score}`
         }else{
            displayMessage("You lost the game");
            scoreEl.innerText = ` 💯 Score: ${0}`
            inputEl.setAttribute('disabled', true);
        }
     }  
})

changeBtn.addEventListener('click', (e) => {
   guessNumber = setRange(Number(rangeInput.value))
   count.textContent =  `(${Number(rangeInput.value)})`;
 });


resetBtn.addEventListener('click', () => {

   highscore = 0;
   score = 20;
   guessNumber = setRange(Number(rangeInput.value))
   
   scoreEl.innerText = ` 💯 Score: ${score}`;
   inputEl.removeAttribute('disabled');
   inputEl.value = '';
   inputEl.focus();
   guess.style.background = "crimson";
   secretNumber.style.color = "white";
   secretNumber.textContent = "?";
   displayMessage('');
});











