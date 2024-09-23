// const userScore=0;
// const compScore=0;
// const userScore=0;

const btnText=document.querySelector("button");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

const win=()=>{
    console.log("You win");
    userScore.innerText++;
    btnText.innerText="You Win";
}
const lose=()=>{
    console.log("You Lose");
    compScore.innerText++;
    btnText.innerText="You Lose";
}

const compchoice=(userChoice)=>{
    options=["Stone","Paper","Scissor"];
    index=Math.floor(Math.random()*3);
    return options[index];
}



function playGame(userChoice,compChoice){
    if(userChoice==compChoice){
        console.log("Draw!");
        btnText.innerText="Draw!";
     }
    
    else if(userChoice=="Stone"){
         (compChoice=="Scissor")?win():lose()
    }
    else if(userChoice=="Paper"){
       
        (compChoice=="Stone")?win():lose();
    }
    else if(userChoice=="Scissor"){
        (compChoice=="Stone")?win():lose();
        
    }
}

choices=document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        const compChoice=compchoice(userChoice)
        console.log(userChoice);
        console.log(compChoice);
        playGame(userChoice,compChoice);
    });
});



