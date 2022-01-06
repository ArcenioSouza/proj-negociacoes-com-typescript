import { Negociacao } from "./negociacao.js";

export class Negociacoes {
   /* private negociacoes: Array<Negociacao> = []; 
   
   Esse código acima pode ser feito assim tbém */
   private negociacoes: Negociacao[] = [];

   public adiciona(negociacao: Negociacao){
      this.negociacoes.push(negociacao);
   }
   
            /* ReadonlyArray torna o array como somente leitura, essa tipagem não permite mudanças no array retornado */

   /* lista(): ReadonlyArray<Negociacao>{
      return this.negociacoes;
   } 
   
   Com a modificação da declaração na linha 7 há uma mudança na declaração do retorno do método lista, que ficará assim:*/
   public lista(): readonly Negociacao[] {
      return this.negociacoes
   }

   
}