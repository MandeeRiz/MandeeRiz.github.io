# MandeeRiz.github.io
Project Week Duck Hunt

My game is Duck Hunt made using HTML, CSS and JS. I chose this game because I knew it was something I could create using what I know (and a bit of what I didn't) and because it was an awesome game from my childhood... nostalgia right? 

Rules and Gameplay
The game begins upon clicking the start button. 10 rounds are played between the user and computer. Each round consists of one duck flying across the screen. The user gets 3 chances (ammo) per round to shoot the duck. If the user suscessfully shoots the duck they recieve points based on how many shots it took for them to hit the duck that round. This is also used to determine how many points the computer gets if the duck escapes. 

Points work as follows:
If the user doesn't shoot a single shot the computer recieves 75 points for that round.
If the user shoots the duck in one shot or only shoots one shot and misses the winner of that round recieves 150 points.
If the user shoots the duck in 2 shots or only shoots two shots and misses the winner of the round recieves 75 points.
If the user shoots the duck after 3 shots or misses all three, the winner of that round receives 50 points. 

The winner of the game is the user that has the highest points at the end of the 10 rounds. 

The functions and methods:
I used gifs and keyframes to animate the ducks flying across the screen. 
Eventlisteners on the screen and ducks determine if a shot was successful.
When ducks are shot their classList is changed to a hidden classlist with display:none. 
Points are awarded dependant on the ammo the user utilizes that round and if they succesfully shot a duck or the computer got it. I acheived this with if statements.
The rounds are run on a for loop.
I used promises async and await to give my keyframes time to run and time for the user to interact with them during the rounds. 
Scores and ammo and rounds were manipulated using textContent and parseInt.
Scores were compared at the end of the game with comparison operators.
The reset button was an onclick button that used a reload method.
The theme song is played with JS using window onload to play the HTML audio file.

Challenges:
My first and one of the most significant challenegs during game production, in regards to being able to make my game fuction and my prior knowledge was finding the right way to pause Java Script during my keyframe animations to give the player time to shoot. I solved this but researching setTimeout and setInterval. It was during this research I discovered promises, async and await and found code that would give me the pause I needed for my game.

My next significant challenge was hiding my ducks off screen to have their flight in and out of screen be as natural as possible. My original code had the game screen look like it was being played on a tube tv (nostalgia). I realized I could not hide my ducks behind that div because changing the z-index of that would affect the z-index of my screen and duck divs and could not achieve my goal that way. To get around that I created 4 divs around my original screen(top,right,left and bottom). I made them black and gave them high z-indexs so that the ducks would be hidden behind them while awaiting their round. ?This worked beautifully if not the exact look I wanted to achieve but gave me the result I wanted. 


Upon creating my onclick shooting functions I realized that my start button being on the screen caused the user to use one shot during the first round starting the game. I solved this easily by moving my start button off screen.

I limited shots each round by creating a varible that tracked ammo. Everytime a shot was fired either on the duck or screen I created code to check that ammo was available and would reduce the ammo when clicked or would not do anything if ammo was 0. I achieved this with if statements. 

Having the score update was a challenege but after research I discovered I needed to turn my html scores from strings to integers to update them in JavaScript correctly. I achieved this using ParseInt.



