const batoni = document.querySelector("#batoni")

const email = document.querySelector("#input1")
const name = document.querySelector("#input2")
const number = document.querySelector("#input3")

batoni.addEventListener("click", ()=>{
    window.location.href = "secondpage.html"

    localStorage.setItem("name", name.value)
	localStorage.setItem("email", email.value)
	localStorage.setItem("number", number.value)
})