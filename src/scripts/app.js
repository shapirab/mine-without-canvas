import InputHandler from "./input.js";
import Game from "./game.js";

const container = document.querySelector('.container');
let action = document.getElementById('btnAction');
let commands = document.querySelector('.commands');

let game = new Game(container);
let input = new InputHandler();

// action.addEventListener('click', () => {
//     input.commands.forEach((command) => {
//        game.execute(command);
//     });
// });
action.addEventListener('click', () => {   
    let executeCommands = () => {
        if (input.commands.length > 0) {
            game.execute(input.commands[0]);
            input.commands.splice(0, 1);
            setTimeout(executeCommands, 1000);
        };       
    }
    executeCommands();
});

function animate(){
    requestAnimationFrame(animate);
    commands.innerHTML = '';
    input.commands.forEach(command => {
        let newDiv = document.createElement("div");
        newDiv.classList.add('command');
        newDiv.innerText = command;

        commands.appendChild(newDiv);
    });
}

animate();