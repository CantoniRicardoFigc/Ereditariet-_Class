import Animale from "./animale.js"

export default class Fattoria {

    constructor() {

        if (document.getElementById("btnGallo") != null) {
            document.getElementById("btnGallo").addEventListener('click', this.cGallo);
        }

        if (document.getElementById("btnMaiale") != null) {
            document.getElementById("btnMaiale").addEventListener('click', this.cMaiale);
        }

        if (document.getElementById("btnMucca") != null) {
            document.getElementById("btnMucca").addEventListener('click', this.cMucca);
        }

    }

    cGallo() {
        var gallo = new Animale("Gallo", "Andalusa", "2 zampe", "/farm/img/gallo_farm.jpg")
        document.getElementById("iGa").src = gallo.img_url;
        document.getElementById("tGa").innerHTML = gallo.tipo;
        document.getElementById("rGa").innerHTML = gallo.razza;
        document.getElementById("nzGa").innerHTML = gallo.nzampe;
    }

    cMaiale() {
        var maiale = new Animale("Maiale", "Europeo", "4 zampe", "/farm/img/piggy_farm.jpg")
        document.getElementById("iMa").src = maiale.img_url;
        document.getElementById("tMa").innerHTML = maiale.tipo;
        document.getElementById("rMa").innerHTML = maiale.razza;
        document.getElementById("nzMa").innerHTML = maiale.nzampe;
    }
    
    cMucca() {
        var mucca = new Animale("Mucca", "Italiana", "4 zampe", "/farm/img/cow_farm.jpg")
        document.getElementById("iMu").src = mucca.img_url;
        document.getElementById("tMu").innerHTML = mucca.tipo;
        document.getElementById("rMu").innerHTML = mucca.razza;
        document.getElementById("nzMu").innerHTML = mucca.nzampe;
    }
}