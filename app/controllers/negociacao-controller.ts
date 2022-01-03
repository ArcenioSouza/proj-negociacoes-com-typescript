import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
   private inputData: HTMLInputElement;
   private inputQuantidade: HTMLInputElement;
   private inputValor: HTMLInputElement;

   constructor(){
      this.inputData = document.querySelector("#data")
      this.inputQuantidade = document.querySelector("#quantidade")
      this.inputValor = document.querySelector("#valor")
   }

   adiciona(): void {
      const negociacao = this.criaNegociacao();
      console.log(negociacao)
      this.limparFormulario()
   }

   criaNegociacao(): Negociacao {
      const exp = /-/g; /* expressão regular que identifica todos os - de uma string */
      const date = new Date(this.inputData.value.replace(exp, ',')) /* aqui o replace subtitui tudo o que for achado através da expressão para virgula */
      const quantidade = parseInt(this.inputQuantidade.value);
      const valor = parseFloat(this.inputValor.value);
      return new Negociacao(date, quantidade, valor);
   }

   limparFormulario(): void {
      this.inputData.value = '';
      this.inputQuantidade.value = '';
      this.inputValor.value = '';
      this.inputData.focus()
   }
}