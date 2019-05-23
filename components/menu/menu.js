class Menu{
    constructor(element) {
        this.element = document.querySelector('.menu');
        this.button = document.querySelector('.menu-button');
        this.content = this.element.querySelector('.menu-content');
        this.button.addEventListener('click', () => this.toggleContent())
    }
    toggleContent(){
        this.content.classList.toggle('menu-hidden');
        
    }
}
















let menu = document.querySelector('.menu');
menu = new Menu (menu);