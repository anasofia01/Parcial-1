class InfoProduct extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        render ["materials", "sizes", "brand", "origin"];
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML() = `
        <link rel = "stylesheet" href = "infoProduct.css">
        <section>
        <h1>${this.materials}</h1>
        <h3>${this.sizes}</h3>
        <h4>${this.brand}</h4>
        <p>${this.origin}</p>
        <button>Más Detalles</button>
        </section>
        `
    }
}

customElements.define("info-product", InfoProduct);
export default InfoProduct;