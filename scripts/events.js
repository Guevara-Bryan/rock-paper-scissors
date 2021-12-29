let round_state = {
    round_count: 0,
    player_score: 0,
    computer_score: 0,
    round_result: 0,
    player_selection: document.createElement("h2"),
    computer_selection: document.createElement("h2")
}

let playerButtons = document.querySelectorAll("button[class=\"option\"");
let counterArea = document.querySelector("#counter").childNodes;

let match_title = document.querySelector("#match-area > #title");
const title = document.createElement("h2");
match_title.appendChild(title);

let results = document.querySelectorAll("#match > .round-result");
results[0].appendChild(round_state.player_selection);
results[1].appendChild(round_state.computer_selection);

let curtain = document.querySelector("#curtain");
const play_button = document.createElement("button");
play_button.textContent = "Play";
const curtain_text = document.createElement("h2");
curtain_text.textContent = "Press to Start Game";
curtain.appendChild(curtain_text);
curtain.appendChild(play_button);

let audios = document.getElementsByTagName("audio");

play_button.addEventListener("click", ()=>{
    curtain.style.visibility = "hidden";
    for(audio of audios){
        audio.pause();
        audio.currentTime = 0;
    }
});

function display_round(round){
    switch(round.round_result){
        case 0:
            title.textContent = "DRAW"
            break;
        case 1:
            title.textContent = "COMPUTER WINS"
            round.computer_score++;
            break;
        case 2:
            title.textContent = "YOU WIN"
            round.player_score++;
            break;
        case 3:
            round_state.round_count = 0;
            round_state.player_selection.textContent = "";
            round_state.computer_selection.textContent= "";

            if(round_state.player_score === 5){ curtain_text.textContent = "YOU WIN THE GAME"; audios[0].play(); }
            else{ curtain_text.textContent = "COMPUTER WINS THE GAME"; audios[1].play(); }
            curtain_text.textContent += " | PRESS TO PLAY AGAIN!";
            curtain.style.visibility = "visible";
            title.textContent = "Make your Play!";

            round.player_score = 0;
            round.computer_score = 0;
            break;
    }

    counterArea.forEach(obj => {
        if(obj.nodeType != 1) return;

        //Getting the h2 tag from the object.
        h2_tag = [...obj.childNodes].filter(child => child.nodeType == 1)[0];

        //Updating the number
        h2_tag_text = h2_tag.textContent.substring(0, h2_tag.textContent.indexOf(":"));
        h2_tag_text += `: ${round[obj.id]}`;
        //displaying the updated character.
        h2_tag.textContent = h2_tag_text;
    });
}

playerButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        round_state.round_count = round_state.round_count += 1;
        round_state.player_selection.textContent = button.value.toUpperCase();
        round_state.computer_selection.textContent = computerPlay().toUpperCase();
        round_state.round_result = playRound(round_state.computer_selection.textContent.toLowerCase(), round_state.player_selection.textContent.toLowerCase());
        display_round(round_state);

        // Reset Everything
        if(round_state.player_score === 5 || round_state.computer_score === 5){
            round_state.round_result = 3; // end of game
            display_round(round_state);
        }
    });
});
