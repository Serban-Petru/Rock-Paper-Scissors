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
        adaugare_log(getHumanChoice,getComputerChoice,1)
        return humanScore++;
    }
    if(getComputerChoice == "btn_scissors" && getHumanChoice == "btn_rock"){ 
        adaugare_log(getHumanChoice,getComputerChoice,1)
        return humanScore++;
    }
    if(getComputerChoice == "btn_rock" && getHumanChoice == "btn_paper"){
        adaugare_log(getHumanChoice,getComputerChoice,1) 
        return humanScore++;
    }
    /////
    if(getComputerChoice == "btn_scissors" && getHumanChoice == "btn_paper"){ 
        adaugare_log(getHumanChoice,getComputerChoice,0)
        return computerScore++;
    }
    if(getComputerChoice == "btn_rock" && getHumanChoice == "btn_scissors"){ 
        adaugare_log(getHumanChoice,getComputerChoice,0)
        return computerScore++;
    }
    if(getComputerChoice == "btn_paper" && getHumanChoice == "btn_rock"){
        adaugare_log(getHumanChoice,getComputerChoice,0)
        return computerScore++;
    }
    for(let i= 0; i<=2; i++)
        if(getComputerChoice == selectii[i] && getHumanChoice == selectii[i]){
            adaugare_log(getHumanChoice,getComputerChoice,2)
            return console.log("remiza");
        }

}

const container =  document.querySelector("container");
const buttons = document.querySelectorAll("button");
const round_numbers = document.querySelector("#round-numbers")
const scor_om_id= document.querySelector("#scor-om-id")
const scor_pc_id = document.querySelector("#scor-pc-id")
const list = document.querySelector("ul");
const input_box = document.querySelector("input");
const body = document.querySelector("body");

const runde_afisare = document.createElement("span"); //creăm un obiect pentru round_numbers sa afisam numerele
round_numbers.appendChild(runde_afisare);


const scor_om_afisare = document.createElement("span"); //creăm un obiect pentru round_numbers sa afisam numerele
scor_om_id.appendChild(scor_om_afisare);

const scor_pc_afisare = document.createElement("span"); //creăm un obiect pentru round_numbers sa afisam numerele
scor_pc_id.appendChild(scor_pc_afisare);

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
 
    function adaugare_log(human,pc,castig){
        const list_element = document.createElement("li");
        if(castig == 1) list_element.style.background = '#4ade45';
        if(castig == 2) list_element.style.background = '#c850e6';
        list_element.textContent = "Ai ales " + human + " pe cand PC " + pc;
        list.appendChild(list_element);
        list_element.scrollIntoView({ behavior: 'smooth' });
    }
    function alegere_castig(){
        if(computerScore > humanScore){
            const list_element = document.createElement("li")
            list_element.style.background = '#b00201';
            body.style.background = '#b00201';
            list_element.textContent = "PC a castigat cu " + (computerScore-humanScore) + " diferenta.";
            list.appendChild(list_element);
            list_element.scrollIntoView({ behavior: 'smooth' });
        }
        if(computerScore < humanScore){
            const list_element = document.createElement("li");
            list_element.style.background = '#00b501';
            body.style.background = '#00b501';
            list_element.textContent = "Tu ai castigat cu " + (humanScore-computerScore) + " diferenta.";
            list.appendChild(list_element);
            list_element.scrollIntoView({ behavior: 'smooth' });
        }
        if(computerScore == humanScore){
            const list_element = document.createElement("li");
            list_element.style.background = '#7a837e';
            body.style.background = '#7a837e';
            list_element.textContent = "Remiza.";
            list.appendChild(list_element);
            list_element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Apelăm funcția care așteaptă
    async function start() {
        //input_rutine();
        while(1){
            let runde = 5;
            for (let i = 1; i <= runde; i++) {

                let human_selection = await asteaptaApasareaButonului();
                let computer_selection = getComputerChoice();

                playRound(human_selection, computer_selection);

                round_numbers.textContent = i + "/" + runde;
                scor_om_afisare.textContent = "Scor om:" + humanScore;
                scor_pc_afisare.textContent = "Scor pc:" + computerScore;
                
            }
            alegere_castig();
            runde = 0;
            humanScore=0;
            computerScore=0;
            // element.removeProperty('container');
            break;
        }
    }
    
start();    

// 0 - hartie   btn_paper
// 1 - foarfeca btn_scissors
// 2 - piatra - btn_rock