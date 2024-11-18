class MagicShow {
    constructor() {
        this.curtain = document.querySelector('.curtain');
        this.lamp = document.querySelector('.lamp');
        this.hang = document.querySelector('.lampObjects');
        this.content = document.querySelector('.content');
        this.rabbit = document.querySelector('.rabbit');
        this.bird = document.querySelector('.bird'); 

        this.setupEventListeners();
        this.animalToggleState = 0;
    }

    setupEventListeners() {
        this.curtain.addEventListener('click', () => {
            this.curtain.classList.toggle('active');
        });

        this.lamp.addEventListener('mousedown', () => {
            this.hang.style.transform = `translateY(5px)`;
        });

        this.lamp.addEventListener('mouseup', () => {
            this.hang.style.transform = `translateY(0px)`;
        });

        this.lamp.addEventListener('click', () => {
            this.content.classList.toggle('hidden');
            this.changeAnimals(); 
        });
    }

    changeAnimals() {
    if (this.animalToggleState === 0) {
        this.rabbit.classList.remove('outside');
        this.rabbit.classList.add('inside');
        this.bird.classList.remove('inside');
        this.bird.classList.add('outside');
        this.animalToggleState = 1;
    } else {
        this.rabbit.classList.remove('inside');
        this.rabbit.classList.add('outside');
        this.bird.classList.remove('outside');
        this.bird.classList.add('inside');
        this.animalToggleState = 0;
    }
}


}

document.addEventListener('DOMContentLoaded', () => {
    const magicShow = new MagicShow();
});
