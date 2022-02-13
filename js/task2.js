
let inputWord = document.querySelector('.input');
let buttonText = document.querySelector(".button_text");
let isTime = false;
inputWord.addEventListener("input", function (event) {
    if (isTime) {
        return;
    }
    
    else {
        isTime = true;
        setTimeout(function () {
            buttonText.innerHTML = event.target.value;
            isTime = false;
        }, 1000);
    }

})