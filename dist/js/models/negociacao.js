export class Negociacao {
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    private _data: Date;
    private _quantidade: number;
    private _valor: number;
 
    constructor(data: Date, quantidade: number, valor: number){
       this._data = data;
       this._quantidade = quantidade;
       this._valor = valor;
    }
    
    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
    //Para o código acima ficar menos verboso o typescript permite fazer assim:
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    constructor(
       private _data: Date,
       private _quantidade: number,
       private _valor: number
    ){}
 
    get data(): Date {
       return this._data
    }
 
    get quantidade(): number {
       return this._quantidade
    }
 
    get valor(): number {
       return this._valor
    }
 
    get volume(): number {
       return this._quantidade * this._valor
    }
    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    */
    //Outra forma de fazer para substituir os metodos geters:
    constructor(
    //aqui eu deixo como public mas torno os atributos somente leitura, assim eles não podem ser modificados mas podem ser acessados.
    _data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    /* Criei esse get para que ninguém possa alterar a data original através do método setDate */
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
