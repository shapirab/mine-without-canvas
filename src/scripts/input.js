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
                    break;
                case 'ArrowLeft':
                    this.keys.left.pressed = true;
                    this.commands.push('left');
                    break;
                case 'ArrowUp':
                    this.keys.up.pressed = true;
                    this.commands.push('up');
                    break;
                case 'ArrowDown':
                    this.keys.down.pressed = true;
                    this.commands.push('down');
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
}