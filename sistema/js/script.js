const imgBanner = ['assets/img/c1.png', 'assets/img/c2.png', 'assets/img/c3.png'];
//definimos  as imagens

let fotoInicial = 0;
//index inicial da foto do banner

function slider(){
    //encontrar o banner na pg
    const banner = document.getElementById('banner');
    banner.style.backgroundImage = `url('${imgBanner[fotoInicial]}')`;
    fotoInicial++;
    //mudar para a proxima foto
    if(fotoInicial >= imgBanner.length){
        fotoInicial = 0;
    }
}

setInterval(slider, 5000); //executa a função slider a cada 3 segundos