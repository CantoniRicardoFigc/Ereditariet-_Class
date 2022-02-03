import Veicolo from "./veicolo.js";

export default class Auto extends Veicolo {
    constructor(ruote, veicolo, targa, marca) {
        super(ruote, veicolo);
        this.targa=targa;
        this.marca=marca;
    }
    get Ruote() {
        return this._ruote;
    }
    set Ruote(newRuote) {
        this._ruote=newRuote;
    }
    descrizioneAuto() {
        console.log(super.descrizioneVeicolo()+', con targa '+this.targa+' e con marca '+this.marca);
    }
    guidaAuto(marcaAuto) {
        console.log('Stai guidando auto '+marcaAuto);
    }
    casualeKm() {
        let num = Math.round(Math.random() * 100);
        console.log("La tua auto " +this.marca+ " ha totalizzato " +num+ " Km");
    }
}





