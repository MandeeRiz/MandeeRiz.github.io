

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
let duck = document.querySelector(".duck")


// wait function
const wait = (ms) => new Promise (resolve => setTimeout(resolve, ms))
//start game function
//rounds on a for loop (initiated by clicking start)
const startGame = async () => {
    screen.classList.remove("openingtvScreen");
    for(let roundCounter=1; roundCounter <11; roundCounter++){
        //reset duck visability
        duck.classList = "duck";
        //reset quack.shot
        quack.shot = false;
        // reset ammo
        resetAmmo();
        //update reset ammo
        ammoNum.textContent = user.ammo;
        // change textcontent for round
        let roundNumber = document.querySelector(".roundNumber")
        roundNumber.textContent = roundCounter;
        await wait(2000);
        //send duck keyframe
        duckKeyframe();
        await wait (9000);
        if(quack.shot === false){
            duckPoints();
            let cScore = document.querySelector(".compScoreNum");
            let stringNum = cScore.innerText;
            let number = parseInt(stringNum);
            let total = number += score;
            cScore.innerText = total;
            console.log("The Duck got away!")
        }
        }
        if (user.points > computer.points){
        console.log("Winner"); //winner function goes here
        } else if (user.points < computer.points){
            console.log("loser")
        } else if (user.points == computer.points){
            console.log("TIE");
        }
    }


//-ammo=3
const resetAmmo = () => {
    user.ammo = 3;
}


//-wait a few seconds

//-duck keyframe
const duckKeyframe = () => {
duck.classList.add("duckToggle")
}
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
    duck.classList.add("hidden");
    console.log("I shot him!");
    user.ammo -= 1;
    ammoNum.textContent = user.ammo;
    duckPoints();
    let uScore = document.querySelector(".userScoreNum");
    let stringNum = uScore.innerText;
    let number = parseInt(stringNum);
    let total = number += score;
    uScore.innerText = total;
    }
}
duck.addEventListener("click", shotDuck)
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

