

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
let navBar = document.querySelector(".navBar")


// wait function
const wait = (ms) => new Promise (resolve => setTimeout(resolve, ms))
//start game function
const startGame = async () => {
    //remove the duck hunt screen logo
    screen.classList.remove("openingtvScreen");
    //change nav bar display to visible
    navBar.style.display="block";
    //rounds on a for loop (initiated by clicking start)
    for(let roundCounter=1; roundCounter <11; roundCounter++){
        //updates roundCounters for determining which duck to apply hidden to
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
        //update onscreen ammo
        ammoNum.textContent = user.ammo;
        // change textcontent for round
        roundNumber.textContent = roundCounter;
        //wait 2 seconds before deploying ducks
        await wait(2000);
        //send duck keyframe dependant on round number
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
        await wait (6000);
        //determine points allocation for when the duck escapes 
        if(quack.shot === false){
            //determine computer points based on number of user shots taken
            duckPoints();
            let cScore = document.querySelector(".compScoreNum");
            //update onscreen computer score
            let stringNum = cScore.innerText;
            let number = parseInt(stringNum);
            let total = number += score;
            cScore.innerText = total;
            computer.points = total;
            //inform player computer got the escaped duck
            console.log("The Duck got away!")
        }
        //determine winner after 10 rounds by comparing user points and computer points
        }
        if(user.points === 1500){
            console.log("Perfect Score!!!")
        } else if (user.points > computer.points){
        console.log("Winner");
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


// out of ammo (if ammo <=0 disable onclick function for screen and duck re enable at start of round)

// onclick screen 
const shotScreen = () => {
    //if user has ammo take one ammo away 
    if(user.ammo > 0){
    user.ammo -= 1;
    //update screen ammo number 
    ammoNum.textContent = user.ammo;
    } else if (user.ammo <= 0){
      //  or if ammo is empty inform user they are out of ammo
        console.log("out of ammo")
    }
}

let tvScreen = document.querySelector(".tvScreen");
//determine when user clicks on screen
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

//round starts onclick start button
const start = document.querySelector(".startButton");
start.addEventListener("click", startGame);
let score;
//duck points
const duckPoints= () => {
    //comp gets 75 points for flyaway duck if you didnt get a shot in
    if (user.ammo == 3){
        score = 75;
        //you get 150 points for getting the duck on your first shot or comp gets it if you only got one shot in
    } else if (user.ammo == 2) {
        score = 150;
        //you get 75 pts if you get duck on your second shot or comp gets the same if you only took 2 shots and he got away
    }else if (user.ammo == 1){
        score = 75;
        //comp gets 50 points if you missed all three shots but he still got away
    } else if (user.ammo == 0){
        score = 50;
    }
}

//opening screen
let screen = document.querySelector(".tvScreen")
screen.classList.add("openingtvScreen")

//refresh button
const resetButton = document.querySelector(".resetButton");
const resetPage = () =>{
    location.reload();
}
resetButton.addEventListener("click",resetPage);