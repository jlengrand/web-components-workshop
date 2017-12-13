class CatImgElement extends HTMLElement {
    static get observedAttributes() {return ['xsize', 'ysize']; }
    
    constructor(){
        super();

        this.xsize = '400';
        this.ysize = '200';
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(attributeName, oldValue, newValue, namespace){
        this.render();        
    }    

    disconnectedCallback(){
    }

    render(){
        console.log(`rendering with size ${this.xsize} ${this.ysize}`);
        this.innerHTML = `
        <h1>Here comes an image of a cat</h1>
        <img src="http://lorempixel.com/${this.xsize}/${this.ysize}/cats"</img>`;
    }

    get xsize(){
        return this.getAttribute('xsize');            
    }

    set xsize(xSize){
        this.setAttribute('xsize', xSize);
    }

    get ysize(){
        return this.getAttribute('ysize');            
    }

    set ysize(ySize){
        this.setAttribute('ysize', ySize);
    }
}

window.customElements.define(
                'cat-img', 
                CatImgElement);
