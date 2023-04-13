const email = document.querySelector("#input1")
const namee = document.querySelector("#input2")
const number = document.querySelector("#input3")
const discount = document.querySelector("#input4")

const batoni4 = document.querySelector("#batoni4")

email.value = localStorage.getItem("email")
namee.value = localStorage.getItem("name")
number.value = localStorage.getItem("number")
discount.value = localStorage.getItem("discount")

batoni4.click()
