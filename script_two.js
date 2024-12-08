let humanScore = 0;
let computerScore = 0;
let human_selection;
let selectii = ["btn_paper", "btn_scissors", "btn_rock"];
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    if(random == 0)
        return selectii[0]
    if(random == 1)
        return selectii[1];
    if(random ==2)
        return selectii[2];
}
function playRound(getHumanChoice, getComputerChoice){
    
    if(getComputerChoice == "btn_paper" && getHumanChoice == "btn_scissors"){
        list_element.textContent = "salut!";
        return humanScore++;
    }
    if(getComputerChoice == "btn_scissors" && getHumanChoice == "btn_rock"){ 
        list_element.textContent = "salut!";
        return humanScore++;
    }
    if(getComputerChoice == "btn_rock" && getHumanChoice == "btn_paper")
        return humanScore++;
    /////
    if(getComputerChoice == "btn_scissors" && getHumanChoice == "btn_paper")
        return computerScore++;
    if(getComputerChoice == "btn_rock" && getHumanChoice == "btn_scissors")
        return computerScore++;
    if(getComputerChoice == "btn_paper" && getHumanChoice == "btn_rock")
        return computerScore++;
    for(let i= 0; i<=2; i++)
        if(getComputerChoice == selectii[i] && getHumanChoice == selectii[i])
            return console.log("remiza");

}

const buttons = document.querySelectorAll("button");
const round_numbers = document.querySelector("#round-numbers")
const scor_om_id= document.querySelector("#scor-om-id")
const scor_pc_id = document.querySelector("#scor-pc-id")
const list = document.querySelector("ul");

const runde_afisare = document.createElement("span"); //creăm un obiect pentru round_numbers sa afisam numerele
round_numbers.appendChild(runde_afisare);


const scor_om_afisare = document.createElement("span"); //creăm un obiect pentru round_numbers sa afisam numerele
scor_om_id.appendChild(scor_om_afisare);

const scor_pc_afisare = document.createElement("span"); //creăm un obiect pentru round_numbers sa afisam numerele
scor_pc_id.appendChild(scor_pc_afisare);

const list_element = document.createElement("li");


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
    function update_UI(scor_om,scor_pc,runde_actual,runde_total){
        round_numbers.textContent = runde_actual + "/" + runde_total;
        scor_om_afisare.textContent = "Scor om:" + scor_om;
        scor_pc_afisare.textContent = "Scor pc:" + scor_pc;   
    }
    // Apelăm funcția care așteaptă
    async function start() {
        while(1){
            let runde =prompt("How many rounds would you like to play?");
            for (let i = 1; i <= runde; i++) {

                let human_selection = await asteaptaApasareaButonului();
                let computer_selection = getComputerChoice();

                playRound(human_selection, computer_selection);

                round_numbers.textContent = i + "/" + runde;
                scor_om_afisare.textContent = "Scor om:" + humanScore;
                scor_pc_afisare.textContent = "Scor pc:" + computerScore;
                list.appendChild(list_element);
            }
            runde = 0;
            humanScore=0;
            computerScore=0;
            break;
        }
    }

start();    

// 0 - hartie   btn_paper
// 1 - foarfeca btn_scissors
// 2 - piatra - btn_rock