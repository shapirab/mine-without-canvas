export default class InputHandler{
    constructor(){
        this.keys = {
            right: {
                pressed: false
            },
            left: {
                pressed: false
            },
            up: {
                pressed: false
            },
            down: {
                pressed: false
            },
        }
        this.commands = [];

        document.addEventListener('keydown', (e) => {
            switch (e.key){
                case 'ArrowRight':
                    this.keys.right.pressed = true;
                    this.commands.push('right');
                    this.generateCommandDiv();
                    break;
                case 'ArrowLeft':
                    this.keys.left.pressed = true;
                    this.commands.push('left');
                    this.generateCommandDiv();
                    break;
                case 'ArrowUp':
                    this.keys.up.pressed = true;
                    this.commands.push('up');
                    this.generateCommandDiv();
                    break;
                case 'ArrowDown':
                    this.keys.down.pressed = true;
                    this.commands.push('down');
                    this.generateCommandDiv();
                    break;
            }
        });
        document.addEventListener('keyup', (e) => {
            switch (e.key){
                case 'ArrowRight':
                    this.keys.right.pressed = false;
                    break;
                case 'ArrowLeft':
                    this.keys.left.pressed = false;
                    break;
                case 'ArrowUp':
                    this.keys.up.pressed = false;
                    break;
                case 'ArrowDown':
                    this.keys.down.pressed = false;
                    break;
            }
        });
    }

    generateCommandDiv(){
        let commandsContainer = document.querySelector('.commands');
        commandsContainer.innerHTML = '';
        this.commands.forEach((command, index) => {
            let newDiv = document.createElement("div");
            newDiv.classList.add('command');
            newDiv.innerText = command;

            commandsContainer.appendChild(newDiv);
            newDiv.addEventListener('click', () => {
                if (index > -1) {
                    this.commands.splice(index, 1);
                }
                commandsContainer.removeChild(newDiv);
            });
        });
    }
}