let numere_runde_total = 5;
let runde = 1;
let humanScore = 0;
let computerScore = 0;
let human_selection;

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}
function playRound(getHumanChoice, getComputerChoice){
    if(getComputerChoice == 0 && getHumanChoice == 1)
        return humanScore++;
    if(getComputerChoice == 1 && getHumanChoice == 2)
        return humanScore++;
    if(getComputerChoice == 2 && getHumanChoice == 0)
        return humanScore++;
    /////
    if(getComputerChoice == 1 && getHumanChoice == 0)
        return computerScore++;
    if(getComputerChoice == 2 && getHumanChoice == 1)
        return computerScore++;
    if(getComputerChoice == 0 && getHumanChoice == 2)
        return computerScore++;
    for(let i= 0; i<=2; i++)
        if(getComputerChoice == i && getHumanChoice == i)
            return console.log("remiza");
}

const buttons = document.querySelectorAll("button");
const round_numbers = document.querySelector("#round-numbers")
const scor_om_id= document.querySelector("#scor-om-id")
const scor_pc_id = document.querySelector("#scor-pc-id")

const runde_afisare = document.createElement("span"); //creăm un obiect pentru round_numbers sa afisam numerele
round_numbers.appendChild(runde_afisare);
round_numbers.textContent = runde + "/" + numere_runde_total;   

const scor_om_afisare = document.createElement("span"); //creăm un obiect pentru round_numbers sa afisam numerele
scor_om_id.appendChild(scor_om_afisare);
scor_om_afisare.textContent = "Scor om:" + humanScore;

const scor_pc_afisare = document.createElement("span"); //creăm un obiect pentru round_numbers sa afisam numerele
scor_pc_id.appendChild(scor_pc_afisare);
scor_pc_afisare.textContent = "Scor pc:" + computerScore;

    //Funcția care așteaptă apăsarea unui buton
    function asteaptaApasareaButonului() {
        return new Promise((rezolva) => {
            function handler(event) {
                const idButon = event.target.id; // Obține ID-ul butonului apăsat
                console.log(idButon);
                // Eliminăm evenimentele pentru toate butoanele
                buttons.forEach(buton => buton.removeEventListener('click', handler));
                // Rezolvăm promisiunea
                rezolva(idButon);
            }
            // Adăugăm evenimentul de click pentru fiecare buton
            buttons.forEach(buton => buton.addEventListener('click', handler));
        });
    }

    // Apelăm funcția care așteaptă
    async function start() {
        while(1){
            let runde =prompt("How many rounds would you like to play?");
            for (let i = 0; i < runde; i++) {
                const human_selection = await asteaptaApasareaButonului();
                let computer_selection = getComputerChoice();
                playRound(human_selection, computer_selection);
            }
        }
    }

start();