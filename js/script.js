const screen = document.querySelector(".screen");
const button = document.querySelectorAll(".button");

button.forEach(boton =>{
    boton.addEventListener("click",()=>{
        // console.log(boton.textContent);"""
        const buttonOn = boton.textContent;
        if(boton.id === "delete"){
            if(screen.textContent.length === 1 || screen.textContent === "!ERROR¡"){
                screen.textContent = "0";
            }else{
            screen.textContent = screen.textContent.slice(0,-1);
            }
            return;
        }
        if(boton.id === "equal"){
            try{
                screen.textContent = eval(screen.textContent);
            }catch{
                screen.textContent = "!ERROR¡";
            }
            return;
        }else if (screen.textContent === "//"){
            screen.textContent = "!ERROR¡";
            return;
        }


        if(screen.textContent ==="0" || screen.textContent === "!ERROR¡"){
            screen.textContent = buttonOn;
        } else {
        screen.textContent += buttonOn;
        }
        if(boton.id === "clean"){
            screen.textContent = "0";
            return;
        }
    })
})