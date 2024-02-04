const adviceid = document.querySelector("#adviceId")
const adviceText = document.querySelector("#adviceText")
const btn = document.querySelector("#btn")
function getAdvice(){
    
fetch("https://api.adviceslip.com/advice")
.then(Response =>{
    return Response.json()
})
.then(data =>{
    const advice = data.slip.advice
    adviceid.textContent = data.slip.id
    adviceText.innerHTML = `<p> ${advice} </p>`
})
}
window.onload =() =>{
    getAdvice()
}