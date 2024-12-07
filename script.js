// let humanScore = 0;
// let computerScore = 0;

// function getComputerChoice(){
//     return Math.floor(Math.random() * 3);
// }

// function getHumanChoice(){
//     let human_choice = prompt("Time to pick?")
//     return humanScore;
// }

// function playRound(getHumanChoice, getComputerChoice){
//     if(getComputerChoice == 0 && getHumanChoice == 1)
//         return humanScore++;
//     if(getComputerChoice == 1 && getHumanChoice == 2)
//         return humanScore++;
//     if(getComputerChoice == 2 && getHumanChoice == 0)
//         return humanScore++;
//     /////
//     if(getComputerChoice == 1 && getHumanChoice == 0)
//         return computerScore++;
//     if(getComputerChoice == 2 && getHumanChoice == 1)
//         return computerScore++;
//     if(getComputerChoice == 0 && getHumanChoice == 2)
//         return computerScore++;
//     for(let i= 0; i<=2; i++)
//         if(getComputerChoice == i && getHumanChoice == i)
//             return console.log("remiza");
// }

// // 0 - hartie
// // 1 - foarfeca
// // 2 - piatra

// while(1){
//     let runde =prompt("How many rounds would you like to play?");
//     for (let i = 0; i < runde; i++) {
//         let human_selection = getHumanChoice();
//         let computer_selection = getComputerChoice();
//         playRound(humanScore, computer_selection);
//         console.log("H:" +humanScore + ", C:" + computerScore);
//     }
//     if(humanScore > computerScore)
//         console.log("Ai castigat!");
//     else if(humanScore < computerScore)
//         console.log("Ai pierdut!");
//     else
//         console.log("Remiza!");
//     if(prompt("Continue with another round?") == 'yes')
//         continue;
//     else
//         break;
// }



const butoane = document.querySelectorAll('button');

    // 2️⃣ Funcția care așteaptă apăsarea unui buton
    function asteaptaApasareaButonului() {
        return new Promise((rezolva) => {
            function handler(event) {
                const idButon = event.target.id; // Obține ID-ul butonului apăsat
                alert(`Buton apăsat: ${idButon}`); // Alerta cu mesajul
                // Eliminăm evenimentele pentru toate butoanele
                butoane.forEach(buton => buton.removeEventListener('click', handler));
                // Rezolvăm promisiunea
                rezolva(idButon);
            }
            // Adăugăm evenimentul de click pentru fiecare buton
            butoane.forEach(buton => buton.addEventListener('click', handler));
        });
    }

    // 3️⃣ Apelăm funcția care așteaptă
    async function start() {
        console.log('Așteptăm să fie apăsat un buton...');
        const butonApasat = await asteaptaApasareaButonului();
        console.log(`A fost apăsat butonul cu id: ${butonApasat}`);
    }

    // Pornim logica
    start();