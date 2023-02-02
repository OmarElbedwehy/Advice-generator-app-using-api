let dice = document.querySelector(".dice");

function getData(Link){
    fetch(Link).then((result)=>{
        let Data = result.json();
        return Data
    }).then((advice)=>{
        document.querySelector(".advice").textContent = `"${advice.slip.advice}"`
        document.querySelector("#id").textContent = `#${advice.slip.id}`
    })
}

getData("https://api.adviceslip.com/advice");

dice.addEventListener("click", ()=>{
    getData("https://api.adviceslip.com/advice");
    document.querySelector(".dice img").style.animation =  "rotate_dice 0.5s ease-in 1 backwards";
    setTimeout(()=>{
        document.querySelector(".dice img").style.animation = "";
    }, 500)
})