class CatImgFastElement extends CatImgElement {

    constructor(){
        super();
    }            

    render(){
        console.log(`rendering with ${this.xsize} ${this.ysize}`);
        const shadowRoot = this.attachShadow({mode: 'open'});     
        
        shadowRoot.innerHTML = `
        <style>
        div {
            background-color: white;
        }
        
        h1 {
            color: blue;
            margin-left: 60px;
        } 
        </style>
        
        <h1>Here comes a better image</h1>
        <img height=${this.ysize} width=${this.xsize}
            src="http://lorempixel.com/${this.xsize}/${this.ysize}/cats"
            style="background: no-repeat center/90% url('src/img/cat-loading.gif');"
        </img>`;
    }    
}

window.customElements.define(
                'cat-img-fast',
                CatImgFastElement);
