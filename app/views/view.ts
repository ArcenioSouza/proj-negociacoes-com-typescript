/* Eu transformo a classe em generics para que o seu tipo seja definido nos filhos, assim eu posso usar os seus métodos recebendo model de diferentes tipos */
export class View<T> {

   /* com o protected as filhas dessa classe podem acessar o atributo mas outras instâncias não */
   protected elemento: HTMLElement

   constructor(seletor: string){
      this.elemento = document.querySelector(seletor)
   }

   update(model: T): void {
      const template = this.template(model)
      this.elemento.innerHTML = template
   }

   template(model: T): string {
      throw Error('Classe filha precisa implementar o método')
   }
}