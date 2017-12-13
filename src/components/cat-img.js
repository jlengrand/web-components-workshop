class CatImgElement extends HTMLElement {

    constructor(){
        super()
    }    

    connectedCallback(){
        this.innerHTML = `<h1>Hello Meetup !</h1>`;
        console.log("I'm here!");
    }

    disconnectedCallback(){
        console.log("I'm gone!");
    }
}

window.customElements.define(
                'cat-img', 
                    CatImgElement);
