class Veicolo {

    constructor(ruote, motore) {
        this.ruote=ruote;
        this.motore=motore;
    }
    descrizioneVeicolo() {
        return ('Questo è un veicolo con motore '+this.motore+', con '+this.ruote+' ruote');
    }

}
class Auto extends Veicolo {

    constructor(ruote, motore, targa, marca) {
        super(ruote, motore);
        this.targa=targa;
        this.marca=marca;
    }
    descrizioneAuto() {
        console.log(super.descrizioneVeicolo()+', con targa '+this.targa+' e con marca '+this.marca);
    }
    guidaAuto(nuovaAuto) {
        console.log('Stai guidando questa auto: '+nuovaAuto);
    }
    get Motore() {
        return this._motore;
    }
    set Motore(nuovoMotore) {
        this._motore=nuovoMotore;
    }

}

const polo = new Auto(4, 'scoppio', 'EF46NFT', 'VW');
polo.descrizioneAuto();
polo.guidaAuto('Golf');
console.log(polo.marca);
console.log(polo.targa);