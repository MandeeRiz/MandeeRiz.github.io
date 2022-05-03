// User object (points:, Ammo,)
const user={
    points: 0,
    ammo: 3
}

let ammoNum = document.querySelector(".ammoNum");
ammoNum.textContent = user.ammo;
//computer object(points,)
const computer = {
    points: 0,
}

// wait function
const wait = (ms) => new Promise (resolve => setTimeout(resolve, ms))
//start game function
//rounds on a for loop (initiated by clicking start)
const startGame = async () => {
    for(let roundCounter=1; roundCounter <11; roundCounter++){
        // reset ammo
        resetAmmo();
        //update reset ammo
        ammoNum.textContent = user.ammo;
        // change textcontent for round
        let roundNumber = document.querySelector(".roundNumber")
        roundNumber.textContent = roundCounter;
        console.log(roundCounter); //take this out once devlopment is complete
        await wait(2000);
        //send duck keyframe
        duckKeyframe();
        await wait (9000);
        }
        console.log("hello"); //winner function goes here
    }


//-ammo=3

const resetAmmo = () => {
    user.ammo = 3;

}
//-wait a few seconds

//-duck keyframe
const duckKeyframe = () =>{
let duck = document.querySelector(".duck")
duck.classList.toggle("duckToggle")
}
// out of ammo (if ammo <=0 disable onclick function for screen and duck re enable at start of round)

// onclick screen (-player1 ammo, )
const shotScreen = () => {
    user.ammo -= 1;
    ammoNum.textContent = user.ammo;
}
let tvScreen = document.querySelector(".tvScreen");
tvScreen.addEventListener("click", shotScreen);


//onclick duck (duck disappears, points displayed on screen temporarily, player gets points, -ammo, round finishes, innerhtml for round changes +1, reset ammo)
const shotDuck = () => {
    duck.classList.add("hidden");
    console.log("I shot him!");
    user.ammo -= 1;
    ammoNum.textContent = user.ammo;
}
let duck = document.querySelector(".duck")
duck.addEventListener("click", shotDuck)
//duck flies away (computer +points, computer got him!, points for duck displayed by ducks exit, round finishes, innerhtml for round changes +1, reset ammo)
//duck exits = end of round

//calculate winner at the end of round 10. (if user points is greater than computer points screen displays "winner" otherwise screen displays "practice your skills and try again")

//round starts onclick button (wait a few seconds, start keyframe,)
const start = document.querySelector(".startButton");
start.addEventListener("click", startGame);