import Auto from "./auto.js";

export default class Form
{
    constructor()
    {
        if (document.getElementById("btnLog") != null) {
            document.getElementById("btnLog").addEventListener('click', this.test);
        }
    }
    test() {
        var t=document.getElementById("Targa_txt").value;
        var m=document.getElementById("Marca_txt").value;
        var r=document.getElementById("Ruote_txt").value;
        var v=document.getElementById("Veicolo_txt").value;
    
        const newVeicol = new Auto(r, v, t, m);
        newVeicol.descrizioneAuto();
        newVeicol.guidaAuto(newVeicol.marca);
        newVeicol.casualeKm();
    }
}