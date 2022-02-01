class Veicolo {

    constructor(ruote, veicolo) {
        this.ruote=ruote;
        this.veicolo=veicolo;
    }

    descrizioneVeicolo() {
        return ('Questo è un veicolo '+this.veicolo+', con '+this.ruote+' ruote');
    }

}

class Auto extends Veicolo {

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

if (document.getElementById("btnLog") != null) {
    document.getElementById("btnLog").addEventListener('click', test);
}

function test() {
    var t=document.getElementById("Targa_txt").value;
    var m=document.getElementById("Marca_txt").value;
    var r=document.getElementById("Ruote_txt").value;
    var v=document.getElementById("Veicolo_txt").value;

    const newVeicol = new Auto(r, v, t, m);
    newVeicol.descrizioneAuto();
    newVeicol.guidaAuto(newVeicol.marca);
    newVeicol.casualeKm();
}



