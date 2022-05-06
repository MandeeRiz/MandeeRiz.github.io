# MandeeRiz.github.io
Project Week Duck Hunt

My game is Duck Hunt made using HTML, CSS and JS. I chose this game beacsue it was something I could create using these languages and because it was an awesome game from my childhood... nostaglia right? 

Rules and Gameplay
The game starts upon clicking the start button. 10 rounds are played between the user and computer. each round consists of one duck flying through the screen. The user gets 3 chances (ammo) per round to shoot the duck. If the user suscessfully shoots the duck they recieve points based on how many rounds it took for them to hit the duck. This is also used to determine how many points the computer gets if the duck escapes. 

Points work as follows:
If the user doesn't shoot a single shot the computer recieves 75 points for that round.
If the user shoots the duck in one shot or only shoots one shot and misses the winner of that round recieves 150 points.
If the user shoots the duck in 2 shots or only shoots two shots and misses the winner recieves 75 points.
If the user shoots the duck after 3 shots or misses all three the winner of that round recieves 50 points. 

The winner of the game is the user that has the highest points.

The functions and methods:
I used gifs and keyframes to animate the ducks flying across the screen. 
eventlisteners on the screen and ducks determine if a shot was successful.
when ducks are shot their classList is changed to a hidden classlist with display:none. 
Points are awarded dependant on the ammo the user utilizes that round and if they succesfully shot a duck or the computer got it. I acheived this with if statements.
The rounds are run on a for loop.
I used promises async and await to give my keyframes time to run and time for the user to interact with them during the rounds. 
Scores and ammo and rounds were manipulated using textContent and parseInt.
Scores were compared at the end of the game with comparison operators.
The reset button was an onclick button that used a reload method.
The theme song is played with JS using window onload to play the HTML audio file.
