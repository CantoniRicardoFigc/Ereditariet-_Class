export default class Insegnante extends Persona {
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
        console.log('${nomeAlunno} non si lanciano i petardi in laboratorio!');
    }
}