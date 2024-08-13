
const calculatorWrapper = document.getElementById('calculator-wrapper');
const buttonsWrapperContainer = document.getElementById('buttons-wrapper');

const calculatorButtonsContainer = document.querySelectorAll('#buttons-wrapper div');

const calculatorButtons = document.querySelectorAll('.digit');

const historyBtn = document.getElementById('history-btn');

const period = document.getElementById('period');


/* adding event listeners on the theme bar buttons */


lightThemeBtn.addEventListener('click', () =>{
    themeChange('--text-white-color', '--dark-primary-color', '--text-white-color','--light-primary-color','--light-primary-color','--dark-secondary-color','--dark-secondary-color', '--dark-secondary-color','--dark-secondary-color','--dark-secondary-color');
  
});



darkThemeBtn.addEventListener('click', ()=>{
    themeChange('--dark-primary-color','--text-white-color',  '--dark-primary-color','--dark-secondary-color','--dark-primary-color','--text-white-color','--light-primary-color', '--light-primary-color','--text-white-color','--text-white-color'); 
});

function themeChange(lightThemeBtnColor,darkThemeBtnColor,calculatorWrapperColor, buttonsWrapperColor, calculatorButtonsContainerColor,calculatorButtonsColor,inputBoxColor,resultBoxColor,historyBtnColor,periodColor) {
    lightThemeBtn.style.color = `var(${lightThemeBtnColor})`;
    darkThemeBtn.style.color = `var(${darkThemeBtnColor})`;
    calculatorWrapper.style.backgroundColor = `var(${calculatorWrapperColor})`;
    buttonsWrapperContainer.style.backgroundColor = `var(${buttonsWrapperColor})`;
    calculatorButtonsContainer.forEach((button)=>{
        button.style.backgroundColor = `var(${calculatorButtonsContainerColor})`;
    });
    calculatorButtons.forEach((button)=>{
        button.style.color = `var(${calculatorButtonsColor})`;
    });

    inputBox.style.color = `var(${inputBoxColor})`;
    resultBox.style.color = `var(${resultBoxColor})`
    historyBtn.style.color =  `var(${historyBtnColor})`;
    period.style.color =  `var(${periodColor})`;
   
}