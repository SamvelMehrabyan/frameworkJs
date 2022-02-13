

let wordInp = document.querySelector(".input_text");
let wordInp1 = document.querySelector(".input_text_1");
let btnResult = document.querySelector(".btn_result");


btnResult.addEventListener("click", function(){
    let inpWordValue = wordInp.value.split("").sort();
    let inpWordValue1 = wordInp1.value.split("").sort();
    
    if (inpWordValue.length === inpWordValue1.length){
        for (let i = 0; i < inpWordValue.length; i++){
            if (inpWordValue[i] !== inpWordValue1[i]){
                alert("'these are not anagrams'");
                break;
            }

            if(inpWordValue.length - 1 === i){
                if (inpWordValue[i] === inpWordValue1[i]){
                    alert("'these are anagrams'");
                }
            }
        }
    }

    else {
        alert('these are not anagrams');
    }
   

   
    console.log(inpWordValue);
    console.log(inpWordValue1);
   
})

