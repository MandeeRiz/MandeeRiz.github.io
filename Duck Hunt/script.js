

// User object (points:, Ammo,)
const user={
    points: 0,
    ammo: 3,
}

const quack = {
    shot: false,
}

//computer object(points,)
const computer = {
    points: 0,
}

let ammoNum = document.querySelector(".ammoNum");
let duck = document.querySelector(".duck");
let duck2 = document.querySelector(".duck2");
let duck3 = document.querySelector(".duck3");
let duck4 = document.querySelector(".duck4");
let duck5 = document.querySelector(".duck5");
let duck6 = document.querySelector(".duck6");
let duck7 = document.querySelector(".duck7");
let duck8 = document.querySelector(".duck8");
let duck9 = document.querySelector(".duck9");
let duck10 = document.querySelector(".duck10");
let roundNumber = document.querySelector(".roundNumber")
let roundCounters;

// wait function
const wait = (ms) => new Promise (resolve => setTimeout(resolve, ms))
//start game function
//rounds on a for loop (initiated by clicking start)
const startGame = async () => {
    screen.classList.remove("openingtvScreen");
    for(let roundCounter=1; roundCounter <11; roundCounter++){
        roundCounters = roundCounter;
        //reset duck visability
        duck.classList = "duck";
        duck2.classList = "duck2";
        duck3.classList = "duck3";
        duck4.classList = "duck4";
        duck5.classList = "duck5";
        duck6.classList = "duck6";
        duck7.classList = "duck7";
        duck8.classList = "duck8";
        duck9.classList = "duck9";
        duck10.classList = "duck10";
        //reset quack.shot
        quack.shot = false;
        // reset ammo
        resetAmmo();
        //update reset ammo
        ammoNum.textContent = user.ammo;
        // change textcontent for round
        roundNumber.textContent = roundCounter;
        await wait(2000);
        //send duck keyframe
        //duckKeyframe();
        if(roundCounter === 1){
            duck.classList.add("duckToggle")
        } else if (roundCounter === 2){
            duck10.classList.add("duck10Toggle")
        } else if(roundCounter === 3){
            duck3.classList.add("duck3Toggle")
        } else if(roundCounter === 4){
            duck8.classList.add("duck8Toggle")
        } else if(roundCounter === 5){
            duck5.classList.add("duck5Toggle")
        } else if(roundCounter === 6){
            duck6.classList.add("duck6Toggle")
        } else if(roundCounter === 7){
            duck4.classList.add("duck4Toggle")
        } else if(roundCounter === 8){
            duck7.classList.add("duck7Toggle")
        } else if(roundCounter === 9){
            duck2.classList.add("duck2Toggle")
        } else if(roundCounter === 10){
            duck9.classList.add("duck9Toggle")
        }
        //wait for keyframe to complete
        await wait (7000);
        //determine points allocation
        if(quack.shot === false){
            duckPoints();
            let cScore = document.querySelector(".compScoreNum");
            let stringNum = cScore.innerText;
            let number = parseInt(stringNum);
            let total = number += score;
            cScore.innerText = total;
            computer.points = total;
            console.log("The Duck got away!")
        }

        }
        if (user.points > computer.points){
        console.log("Winner"); //winner function goes here
        } else if (user.points < computer.points){
            console.log("loser")
        } else if (user.points === computer.points){
            console.log("TIE");
        }else{
            console.log("error")
        }
    }


//-ammo=3
const resetAmmo = () => {
    user.ammo = 3;
}


//-wait a few seconds

//-duck keyframe
/*
const duckKeyframe = () => {
duck.classList.add("duckToggle")
}*/
// out of ammo (if ammo <=0 disable onclick function for screen and duck re enable at start of round)

// onclick screen (-player1 ammo, )
const shotScreen = () => {
    if(user.ammo > 0){
    user.ammo -= 1;
    ammoNum.textContent = user.ammo;
    } else if (user.ammo <= 0){
        console.log("out of ammo")
    }
}
let tvScreen = document.querySelector(".tvScreen");
tvScreen.addEventListener("click", shotScreen);


//onclick duck (duck disappears, points displayed on screen temporarily, player gets points, -ammo, round finishes, innerhtml for round changes +1, reset ammo)
const shotDuck = () => {
    if(user.ammo == 0){
        console.log("Out of Ammo")
    } else if (user.ammo > 0){
    quack.shot = true;
    if (roundCounters === 1){
    duck.classList.add("hidden");
    } else if(roundCounters === 2){
        duck10.classList.add("hidden");
    }else if(roundCounters === 3){
        duck3.classList.add("hidden");
    }else if (roundCounters === 4){
        duck8.classList.add("hidden");
    } else if (roundCounters === 5){
        duck5.classList.add("hidden");
    } else if (roundCounters === 6){
        duck6.classList.add("hidden");
    } else if (roundCounters === 7){
        duck4.classList.add("hidden");
    } else if (roundCounters === 8){
        duck7.classList.add("hidden");
    } else if (roundCounters === 9){
        duck2.classList.add("hidden")
    } else if (roundCounters === 10) {
        duck9.classList.add("hidden")
    }
    console.log("I shot him!");
    user.ammo -= 1;
    ammoNum.textContent = user.ammo;
    duckPoints();
    let uScore = document.querySelector(".userScoreNum");
    let stringNum = uScore.innerText;
    let number = parseInt(stringNum);
    let total = number += score;
    uScore.innerText = total;
    user.points = total;
    }
}
duck.addEventListener("click", shotDuck);
duck2.addEventListener("click", shotDuck);
duck3.addEventListener("click", shotDuck);
duck4.addEventListener("click", shotDuck);
duck5.addEventListener("click", shotDuck);
duck6.addEventListener("click", shotDuck);
duck7.addEventListener("click", shotDuck);
duck8.addEventListener("click", shotDuck);
duck9.addEventListener("click", shotDuck);
duck10.addEventListener("click", shotDuck);
//duck flies away (computer +points, computer got him!, points for duck displayed by ducks exit, round finishes, innerhtml for round changes +1, reset ammo)
//duck exits = end of round

//calculate winner at the end of round 10. (if user points is greater than computer points screen displays "winner" otherwise screen displays "practice your skills and try again")

//round starts onclick button (wait a few seconds, start keyframe,)
const start = document.querySelector(".startButton");
start.addEventListener("click", startGame);
let score;
//duck points
const duckPoints= () => {
    if (user.ammo == 3){
        score = 75;
    } else if (user.ammo == 2) {
        score = 150;
    }else if (user.ammo == 1){
        score = 75;
    } else if (user.ammo == 0){
        score = 50;
    }
}

let screen = document.querySelector(".tvScreen")
screen.classList.add("openingtvScreen")

//dog retrives duck
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-FTevg2-RRzYiFWiBDMSvR6vee7lmKQTNDg&usqp=CAU

//refresh button
const resetButton = document.querySelector(".resetButton");

const resetPage = () =>{
    location.reload();
}

resetButton.addEventListener("click",resetPage);