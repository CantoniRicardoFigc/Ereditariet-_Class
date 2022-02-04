export default class Animale{
    constructor(tipo,razza,nzampe,img_url,verso){
        this.tipo= tipo;
        this.razza = razza;
        this.nzampe= nzampe;
        this.img_url=img_url;
        this.verso=verso;
        this.timer = setInterval(this.render, 5000);
    }
    render =() => {
        alert(this.verso);
    }
  }