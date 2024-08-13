const inputBox = document.getElementById("input-box");
const resultBox = document.getElementById("result");

const buttonsWrapper = document.querySelectorAll("#buttons-wrapper div");

const resultBtn = document.getElementById('result-btn');

const allClearBtn = document.getElementById('all-clear-btn');
const deleteBtn = document.getElementById('delete-btn');

const darkThemeBtn = document.getElementById('dark-theme-btn');

const lightThemeBtn = document.getElementById('light-theme-btn');

const historyBt = document.getElementById('history-btn');


const clearHistoryBtn = document.getElementById('clear-user-history');
/* declaring variables */

let numbers = [];
let operators = [];
let lightTheme=false;
let darkTheme = false;
let done =  false;
let history = [];

/* defining the function to write input into inputBox */

const writeInput = (input) => {
  if (input === "=" || input === "AC" || input === "DEL" || input === "↻") {
    return;
  } else {
    done=false;
    inputBox.textContent += input;
  }
};

/* writing the function to change the color of buttons */
const buttonStyling = (button) => {
  if (button.className == "operator" || button.textContent === "=") {
    button.style.color = `var(--text-red-color) `;
  } else if (
    button.className !== "operator" &&
    button.className !== "digit" &&
    button.textContent !== "↻" &&
    button.textContent !== "."
  ) {
    button.style.color = `var(--text-green-color) `;
  }
};

/* function to :  extracting the values from the expression */

const extractValues = () => {
    let temp = [];
    
    temp = inputBox.textContent.split(/([÷%×−+])/);
    
   for(let char of temp)
   {
    if(!isNaN(char) && char !== '')
    {
        numbers.push(Number(char));
    } else if (/[÷%×−+]/.test(char)){
        operators.push(char);
    }
   }

//    console.log(numbers);
//    console.log(operators);

}


/* function to calculate the aggregate result */
const calculateResult =  () => 
{
    let i=0;
    let firstNumber;
    let secondNumber;
    let res;
    history = [];
   

    while(numbers.length > 0 && operators.length > 0)
        {
        firstNumber = numbers[i];
        secondNumber = numbers[i+1];
        if(operators[i] === '÷')
        {

            res = (parseFloat(firstNumber) / parseFloat(secondNumber)).toFixed(2);
            history.push(`${firstNumber} ÷ ${secondNumber} = ${res}`);
        }
        else if (operators[i] === '×')
        {
            

            res = parseInt(firstNumber) * parseInt(secondNumber);
            history.push(`${firstNumber} × ${secondNumber} = ${res}`);

           

        }
        else if(operators[i] === '−')
        {
            res = parseInt(firstNumber) - parseInt(secondNumber);
            history.push(`${firstNumber} - ${secondNumber} = ${res}`);

        }
        else if (operators[i]==='+')
        {
            res = parseInt(firstNumber) + parseInt(secondNumber);
            history.push(`${firstNumber} + ${secondNumber} = ${res}`);


        }
        else if(operators[i] === '%')
        {
            res = parseInt(firstNumber) % parseInt(secondNumber);
            history.push(`${firstNumber} % ${secondNumber} = ${res}`);


        }
        
        numbers.splice(0,2,res);
        operators.shift(operators[i]);
        // console.log('result is : ',res);
        // console.log(numbers);
        // console.log(operators);
    }
    numbers.shift();
    resultBox.textContent = res;
    done=true;
    console.log(history);
}

/* defining the result function */
const result = ()=>{
    // console.log('expression',inputBox.textContent);
    extractValues();
    calculateResult();
}

/* defining the function to clear the input */
const clearInput = ()=>{
    done=false;
    inputBox.textContent = '';
    resultBox.textContent = '';
}

/* defining the function to delete single input */

const deleteInput = () => {
    done=false;
    let length = inputBox.textContent.length;
    inputBox.textContent = inputBox.textContent.substring(0, length-1);
}

let button = document.createElement('button');

/* defining the function to show history of user */
const userHistory = () => {
    button.textContent = 'clear history';
    button.id = 'clear-user-history';
    resultBox.textContent='';
    for(let index = 0; index < history.length; index++ ) {
        let li = document.createElement('li');
        li.textContent = history[index];
        inputBox.style.display = 'none';
        resultBox.appendChild(li);
        // resultBox.style.width = '100%';
        resultBox.style.height = '50%';
        resultBox.style.overflowY = 'scroll';
        resultBox.style.fontSize = '1rem';
        resultBox.style.paddingRight = '1rem';
    }
    button.style.marginTop = '1rem';
    resultBox.appendChild(button);
}


/* function to clear user History */

const clearHistory = ()=>{
    inputBox.style.display = 'block';
    resultBox.textContent = '';
    resultBox.style.overflowY = 'none';
}



/* event listeners */

/* user history clear event listener */
button.addEventListener('click', clearHistory);
/* history btn event listener */
// historyBt.addEventListener('click', userHistory);

/* resultBtn click listener */
resultBtn.addEventListener('click', ()=>{
    inputBox.textContent = resultBox.textContent;
    resultBox.textContent = '';
});

/* button event listeners */
buttonsWrapper.forEach((button) => {
  buttonStyling(button);
  button.addEventListener("click", writeInput.bind(this, button.textContent));
});

deleteBtn.addEventListener('click', deleteInput);
allClearBtn.addEventListener('click', clearInput);


setInterval(()=>{
   if(done){
    return;
   }
    if(inputBox.textContent==='')
    {
        return;
    }
    if(inputBox.textContent.endsWith('+')||inputBox.textContent.endsWith('−')||inputBox.textContent.endsWith('×')||inputBox.textContent.endsWith('÷')||inputBox.textContent.endsWith('%')){
        resultBox.textContent = '';
        return;
    }
    else {
        result();
    }
},1)


