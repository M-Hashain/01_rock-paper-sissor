let computerscore = 0;
let userscorenum = 0;

let comscore = document.querySelector("#score2")
let userscore = document.querySelector("#score1")
let images = document.querySelectorAll(".image");
let resultofjs = document.querySelector("#result")

function compchoice(){
let compchoice = ['rock' , 'paper' , 'scissor'];
let comrandomchoice = Math.floor(Math.random() * 3)
return compchoice[comrandomchoice]
}

function playgame(choiceofyour){
let compchoiceforgame = compchoice();
if(compchoiceforgame == choiceofyour){
     result.innerHTML = "its a draw plz try again !"
}
else if(choiceofyour === 'rock' && compchoiceforgame === 'paper'){
result.innerHTML = `${compchoiceforgame} beats ${choiceofyour}  computer wins`
 computerscore++
 comscore.innerHTML = computerscore;

}
else if(choiceofyour === 'rock' && compchoiceforgame === 'scissor'){
    result.innerHTML = `${choiceofyour} beats ${compchoiceforgame} You wins`
    userscorenum++
    userscore.innerHTML = userscorenum
}
else if(choiceofyour === 'paper' && compchoiceforgame === 'rock'){
    result.innerHTML = `${choiceofyour} beats ${compchoiceforgame} You wins`
       userscorenum++
    userscore.innerHTML = userscorenum
}
else if(choiceofyour === 'paper' && compchoiceforgame === 'scissor'){
result.innerHTML = `${compchoiceforgame} beats ${choiceofyour} computer wins`
 computerscore++
  comscore.innerHTML = computerscore
}
else if(choiceofyour === 'scissor' && compchoiceforgame === 'rock'){
result.innerHTML = `${compchoiceforgame} beats ${choiceofyour} computer wins`
computerscore++
 comscore.innerHTML = computerscore
}
else if(choiceofyour === 'scissor' && compchoiceforgame === 'paper'){
    result.innerHTML = `${choiceofyour} beats ${compchoiceforgame} You wins`
       userscorenum++
    userscorenum.innerHTML = userscorenum

}
else if(choiceofyour === 'paper' && compchoiceforgame === 'rock'){
    result.innerHTML = `${choiceofyour} beats ${compchoiceforgame} You wins`
       userscorenum++
    userscore.innerHTML = userscorenum

}
else if(choiceofyour === 'scissor' && compchoiceforgame === 'rock'){
result.innerHTML = `${compchoiceforgame} beats ${choiceofyour} computer wins`
computerscore++
 comscore.innerHTML = computerscore
}
else if(choiceofyour === 'rock' && compchoiceforgame === 'paper'){
result.innerHTML = `${compchoiceforgame} beats ${choiceofyour} computer wins`
computerscore++
 comscore.innerHTML = computerscore
}
else if(choiceofyour === 'scissor' && compchoiceforgame === 'paper'){
    
result.innerHTML = `${choiceofyour} beats ${compchoiceforgame} You wins`
   userscorenum++
    userscore.innerHTML = userscorenum
}
else if(choiceofyour === 'rock' && compchoiceforgame === 'scissor'){
result.innerHTML = `${choiceofyour} beats ${compchoiceforgame} You wins`
   userscore++
    userscorenum.innerHTML = userscorenum
}
else if(choiceofyour === 'paper' && compchoiceforgame === 'scissor'){
result.innerHTML = `${compchoiceforgame} beats ${choiceofyour} computer wins`
computerscore++
 comscore.innerHTML = computerscore
}
else{
    alert("something went wrong!")
}


}


let result = document.querySelector("#result")
images.forEach(function(imageDiv) {
    imageDiv.addEventListener("click", function(){
let choiceofyour = imageDiv.querySelector("img").getAttribute("id")


playgame(choiceofyour)

    })
});

//hey im hasnain if some one watching my code Thanks man !

