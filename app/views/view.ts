/* Eu transformo a classe em generics para que o seu tipo seja definido nos filhos, assim eu posso usar os seus métodos recebendo model de diferentes tipos */
export abstract class View<T> {

   /* com o protected as filhas dessa classe podem acessar o atributo mas outras instâncias não */
   protected elemento: HTMLElement

   constructor(seletor: string){
      const elemento = document.querySelector(seletor)
      if(elemento){
         this.elemento = elemento as HTMLElement
      } else {
         throw Error (`Seletor ${seletor} não existe no DOM. Verifique`)
      }
   }

   public update(model: T): void {
      const template = this.template(model)
      this.elemento.innerHTML = template
   }

   /* o abstract passa a responsabilidade da implementação do código para a classe filha, assim se o método template não for implementado o typescript irá retornar um erro antes do código estar em runtime */
   protected abstract template(model: T): string;
}