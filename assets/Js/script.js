const operation = document.querySelector("#action");
const buttons = document.querySelectorAll(".btn-main");
const display = operation.querySelector(".display");
// buttons.forEach((item) => {
//     item.addEventListener("click", () => {
//         if(display) {
//             display.classList.add("dp-none");
//         }
//         if(isNaN(parseInt(item.innerHTML)) == false) {
//             operation.innerHTML +=  item.innerHTML;
//             const recipe = operation.innerText;
//             console.log(recipe);
//             // if(recipe.length > 0 && recipe[0] )
//         }
//         else {
//             operation.innerHTML += ` ${item.innerHTML} `;
//         }
//     });
// });
const buttonNumbers = document.querySelectorAll(".container .btn-number");
buttonNumbers.forEach((item) => {
    item.addEventListener("click", () => {
        if(display.classList.length <= 1) {
            display.classList.add("dp-none");
        }
        operation.innerHTML += item.innerHTML;
    })
})
const buttonOperation = document.querySelectorAll(".container .btn-operation");
buttonOperation.forEach((item) => {
    item.addEventListener("click", () => {

        if(display.classList.length <= 1) {
            display.classList.add("dp-none");
            if(operation.innerHTML[2] != "(") {
                
                operation.innerHTML += `${item.innerHTML} `;
            }
            else {
                operation.innerHTML += `0 ${item.innerHTML} `;
            }
        }
        else {
            operation.innerHTML += ` ${item.innerHTML} `;
        }
    });
})
const buttonProcessed = document.querySelector(".container .btn-processed");
buttonProcessed.addEventListener("click", () => {
    const token = operation.innerText.trim().split(" ");
    let result = ""    
    for(let i = 0; i < token.length; i++) {
        if(token[i] == "÷") {
            result += "/";
        }
        else if(token[i] == "×") {
            result += "*";
        }
        else {
            result += token[i];
        }

    }
    operation.innerHTML = eval(result);
});
