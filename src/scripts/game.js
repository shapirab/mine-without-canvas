export default class Game{
    constructor(container){
        this.container = container;
        this.box =  document.querySelector('.box');      
        this.boxPosition = {
            x: 1,
            y: 1
        }
        this.setBoxPosition();
    }

    setBoxPosition(){
        this.box.setAttribute('style', `grid-column: ${this.boxPosition.x}; grid-row:${this.boxPosition.y}`)
    }

    execute(command){
        switch(command){
            case 'up':
                if(this.boxPosition.y >= 0){
                    this.boxPosition.y--;                 
                }
                else{
                    this.boxPosition.y = 0;
                }
                break;
            case 'down':
                this.boxPosition.y++;
                break;
            case 'left':
                this.boxPosition.x--;
                break;
            case 'right':
                this.boxPosition.x++;
                break;
        }
        this.setBoxPosition();
    }

    update(){}
}