console.log("scripted");
var textarea = document.querySelector(".textarea")
var button = document.querySelector(".button")
var selected = [];

button.addEventListener("click", ()=> {
    var input = textarea.value 
    var splited = input.split(" ")
    splited.forEach((element,index) => {
        var chars = element.split("")
        for(let i = 0;i < chars.length;i++){
            let repeatQuantity = 0;
            for(let j = 0;j < chars.length;j++){
                if(i === j){
                    continue;
                }
                if (chars[j] === chars[i]){
                    repeatQuantity += 1;
                }
            }
            if(repeatQuantity === 1){
              if(selected.indexOf(element) === -1){
                    selected.push(element)
              } 
            }
        }
    })
    alert(selected);
})


