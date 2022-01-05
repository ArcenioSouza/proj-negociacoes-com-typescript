export class Negociacoes {
    constructor() {
        /* private negociacoes: Array<Negociacao> = [];
        
        Esse código acima pode ser feito assim tbém */
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    /* ReadonlyArray torna o array como somente leitura, essa tipagem não permite mudanças no array retornado */
    /* lista(): ReadonlyArray<Negociacao>{
       return this.negociacoes;
    }
    
    Com a modificação da declaração na linha 7 há uma mudança na declaração do retorno do método lista, que ficará assim:*/
    lista() {
        return this.negociacoes;
    }
}
