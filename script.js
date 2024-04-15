
let json = {}
async function getData() {
    let data = await fetch("./Data/answers.json")
    json = await data.json()
    console.log(json)
// This Fetches/Links the JSON File^^^^^^^^^^^^^
}

getData()




const answerQuestion = () => {
    let input = document.getElementById("input").value
    console.log(input) // we gucci - input == input from use

    
    let ball8 = document.getElementById("ball8") // Accesses the ball8 Element
    let answer = document.getElementById("answer") // Accesses the answer Element
    let newAnswer = document.getElementById("newAnswer") // Accesses the newAnswer Element
    answer.style.display = 'none' // Removes The 8 to Display Answer
    ball8.style.animation = "shake .9s" // Shakes The Entire 8-Ball
    if ( input.toUpperCase().includes("VALLES") ||input.toUpperCase().includes("VAZQUEZ")  ){
        newAnswer.innerHTML = "hahahahaa yaa ok lmao NAH FAM FOH MY BOIIIII " // Bullies the Sr Devs
        
    } else if ( input.toUpperCase().includes("BIGGS") || input.toUpperCase().includes("LEE") || input.toUpperCase().includes("GOBEA")  ) {
        newAnswer.innerHTML = "Yes, of course! It is certain to be so! "// or tell the truth

    } else {
        newAnswer.innerHTML = json[Math.floor(Math.random() * json.length)].answer // or gives Random Answers

    }
    newAnswer.style.animation = "answer 3s" // Time Answer Is Visible
    newAnswer.style.animationDelay = "1s" // Delay For Answer to Show
    newAnswer.style.animationFillMode = "forwards" // Needed???????????
    innerBall.style.backgroundColor = "#06066f" // Transition Color

setTimeout(() => ball8.style.animation = "none", 2500 ) // Resets the Shake for New Question 
setTimeout(() => newAnswer.style.animation = "none", 5000 ) // Resets Answer Field


    document.getElementById("input").value = "" // Resets Question Field
}
console.log(json)