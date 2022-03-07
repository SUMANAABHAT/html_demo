let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let message3 = document.getElementById("message3");

    let guessedNumber = Math.floor(Math.random()*20) + 1;
    let no_of_guesses = 0;
    let guessed_numbers = [];

    function play(){
        let user_guess= document.getElementById("guess").
        value;
        if(user_guess < 1 || user_guess >20){
            alert("Please Enter A Number Between 1 and 20"); 
            document.getElementById("guess").
            value = "";          
        }
        else {
            guessed_numbers.push(user_guess);
            no_of_guesses+= 1;

            if(user_guess < guessedNumber){
                message1.textContent =" Your Guess is Too Low!";
                message2.textContent = "No. of Guesses :" + no_of_guesses;
                message3.textContent ="Guessed Numbers Are :" + guessed_numbers;
                document.getElementById("guess").
            value = ""; 
            }
            else if(user_guess >guessedNumber){
                message1.textContent =" Your Guess is Too high!";
                message2.textContent = "No. of Guesses :" + no_of_guesses;
                message3.textContent ="Guessed Numbers Are :" + guessed_numbers;
                document.getElementById("guess").
            value = "";    
            }

            else if (user_guess == guessedNumber){
                message1.textContent =" Your Guess is Right!!!!";
                message2.textContent = "The Number Was " + guessedNumber;
                message3.textContent ="You Guessed It In :" + no_of_guesses + " guesses."; 
            }

        }
    }