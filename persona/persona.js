export default class Persona {
    constructor(nome, cognome, eta, genere, interessi) {
        this.nome=nome;
        this.cognome=cognome;
        this.eta=eta;
        this.genere=genere;
        this.interessi=interessi;
    }
    saluta() {
        console.log('Ciao sono ${this.nome}');
    }
}
