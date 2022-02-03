export default class Veicolo {
    constructor(ruote, veicolo) {
        this.ruote=ruote;
        this.veicolo=veicolo;
    }
    descrizioneVeicolo() {
        return ('Questo è un veicolo '+this.veicolo+', con '+this.ruote+' ruote');
    }
}