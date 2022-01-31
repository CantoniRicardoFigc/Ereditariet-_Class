class Persona {

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
class Insegnante extends Persona {

    constructor(nome, cognome, eta, genere, interessi, materia) {
        super(nome, cognome, eta, genere, interessi);
        this.materia = materia
    }
    get materia() {
        return this._materia;
    }
    set materia(nuovaMateria) {
        this._materia = nuovaMateria;
    }
    sgridaAlunno(nomeAlunno) {
        console.log( nomeAlunno + ' non si lanciano i petardi in laboratorio!');
    }
    
}

const docente = new Insegnante("riccardo", "cantoni", 16, "maschio", "sport", "matematica");
docente.sgridaAlunno("riccardo");
console.log(docente.materia);
