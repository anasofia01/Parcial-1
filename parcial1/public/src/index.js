import * as components from "./components/index.js";
import productsData from "./data/data.js";

class AppContainer extends HTMLElement{
    constructor(){
        super();
    }

    static get observedAttributes(){
        render ["materials", "sizes", "brand", "origin"];
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
    }

    render(){
        productsData.forEach((product) => {
            this.shadowRoot.innerHTML() = `
        <link rel = "stylesheet" href = "infoProduct.css">
        <section>
        <component-product img = "${product.image} title = "${product.title}" description = "${product.description} prize = "${product.value} 
        totalProducts = "${product.inStock}"></component-product>
        </section>
        `
        });
    }
}

customElements.define("app-container", AppContainer);