const options = document.querySelectorAll(".wheelContainer div")
let decimala = 27.6923076923
const spin = document.querySelector(".spin")
const batoni3 = document.querySelector("#batoni3")


const mid = document.querySelector(".midDiv")

for(let i=0; i<options.length; i++){
    options[i].style.transform = `rotate(${decimala*i}deg)`
}

const wheel = document.querySelector(".wheelContainer")

wheel.addEventListener("click", ()=>{
    spin.style.opacity="0"
    let number = Math.floor(Math.random()*13)*decimala+720
    let bitenNumber = Math.round(number%360/decimala)
    console.log(number)
    console.log(number%360)
    console.log(number%360/decimala)
    console.log(bitenNumber)
    console.log(options[bitenNumber].innerText)
    wheel.style.transform = `rotate(${-number}deg)`
    wheel.style.pointerEvents = "none"
    setTimeout(()=>{
        
        mid.style.display = "flex"
        mid.innerText = options[bitenNumber].innerText
        localStorage.setItem("discount", options[bitenNumber].innerText)
        window.location.href = "form.html"
    }, 2000)

    setTimeout(()=>{

        window.location.href = "form.html"
    }, 4000)
    
})


batoni3.addEventListener("click", ()=>{
    window.location.href = "form.html"
})
