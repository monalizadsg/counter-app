const counter = () => {
    let counterValue = 0;
    const counter = document.querySelector('.value');
    const decrease = document.querySelector('.decrease-button');
    const reset = document.querySelector('.reset-button');
    const increase = document.querySelector('.increase-button');

    
    // increment value when increase button is clicked
        increase.addEventListener('click', function() {
            counterValue = counterValue + 1;
            counter.textContent = counterValue;
            // console.log(counterValue);
            if(counterValue > 0) {  
                counter.style.color = '#4e82b4';
            }
        })

    // decrement value when decrease button is clicked
        decrease.addEventListener('click', function() {
            counterValue = counterValue - 1;
            counter.textContent = counterValue;
            // console.log(counterValue);
            if(counterValue < 0) {
                counter.style.color = '#D31A38';
            }
        })

    // reset value when reset button is clicked
        reset.addEventListener('click', function() {
            counterValue = 0;
            counter.textContent = counterValue;
            // console.log(counterValue);
            counter.style.color = '#373737';
        })

}

counter();