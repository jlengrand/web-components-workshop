class CatImgElement extends HTMLElement {
    static get observedAttributes() {return ['name']; }
    
    constructor(){
        super()
    }    

    connectedCallback(){
        this.innerHTML = `<h1>Hello default!</h1>`;        
    }

    attributeChangedCallback(attributeName, oldValue, newValue, namespace){
        if(attributeName === "name"){
            console.log("Attribute name changed!");
            this.innerHTML = `<h1>Hello ${newValue} !</h1>`;            
        }
        else{
            console.log("Unknown attribute " + attributeName + "changed");
        }
    }    

    disconnectedCallback(){
    }
}

window.customElements.define(
                'cat-img', 
                CatImgElement);
