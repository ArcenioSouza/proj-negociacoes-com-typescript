/* Eu transformo a classe em generics para que o seu tipo seja definido nos filhos, assim eu posso usar os seus métodos recebendo model de diferentes tipos */
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
