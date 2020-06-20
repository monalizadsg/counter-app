const counter = () => {
    let counterValue = 0;
    const counter = document.querySelector('.value');
    // const decrease = document.querySelector('.decrease-button');
    // const reset = document.querySelector('.reset-button');
    // const increase = document.querySelector('.increase-button');
    const buttons = document.querySelectorAll('.btn');

    //MY FIRST CODE
    // // increment value when increase button is clicked
    //     increase.addEventListener('click', function() {
    //         counterValue = counterValue + 1;
    //         counter.textContent = counterValue;
    //         // console.log(counterValue);
    //         if(counterValue > 0) {  
    //             counter.style.color = '#4e82b4';
    //         }
    //     })

    // // decrement value when decrease button is clicked
    //     decrease.addEventListener('click', function() {
    //         counterValue = counterValue - 1;
    //         counter.textContent = counterValue;
    //         // console.log(counterValue);
    //         if(counterValue < 0) {
    //             counter.style.color = '#D31A38';
    //         }
    //     })

    // // reset value when reset button is clicked
    //     reset.addEventListener('click', function() {
    //         counterValue = 0;
    //         counter.textContent = counterValue;
    //         // console.log(counterValue);
    //         counter.style.color = '#373737';
    //     })

    //REFACTOR CODE 
    //loop through buttons
    buttons.forEach(function(btn) {
        // console.log(btn);
        btn.addEventListener('click', function(e) {
            let style = e.currentTarget.classList;
            //set counterValue when a btn is clicked
            if(style.contains('decrease-button')) {
                counterValue--;
            } else if(style.contains('increase-button')) {
                counterValue++;
            } else {
                counterValue = 0;
            }
            //change color of the value when btn is clicked
            if(counterValue > 0) {
                counter.style.color = '#4e82b4';
            } else if(counterValue < 0) {
                counter.style.color = '#D31A38';
            } else {
                counter.style.color = '#373737';
            }
            counter.textContent = counterValue;
        })
    })

}

counter();