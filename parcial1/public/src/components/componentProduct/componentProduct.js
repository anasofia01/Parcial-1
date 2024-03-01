class ComponentProduct extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        render ["image", "title", "description", "prize", "totalProducts"];
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
    }

    render(){
        this.shadowRoot.innerHTML() = `
        <link rel = "stylesheet" href = "componentProduct.css">
        <section>
        <img src = "${this.image}"></img>
        <h1>${this.title}</h1>
        <p>${this.description}</p>
        <h3>${this.prize}</h3>
        <h4>${this.totalProducts}</h4>
        <button>Más Detalles</button>
        </section>
        `
    }
}

customElements.define("component-product", ComponentProduct);
export default ComponentProduct;