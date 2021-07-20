function zoomzoom() {
    let imagedog = document.getElementById("laphotoduchien")
    let taille = imagedog.clientWidth;
    if (taille <=2000){
    imagedog.style.width=taille + 100 + "px";
    }
}