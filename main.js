function reconocerSonido (){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/oY9h3yP6J/model.json", modeloListo)
}
function modeloListo() {
    classifier.classify(obtenerResultado);
}
function obtenerResultado(error, resultado) {
    if (!error) {
        document.getElementById("sonido").innerHTML = "Escucho: " + resultado[0].label;
        document.getElementById("precision").innerHTML = "Presición: " + resultado[0].confidence;

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");

        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
        if (resultado[0].label == "aplausos") {
            img1.src = "aliens-01.gif";
        } else if (resultado[0].label == "chasquidos") {
            img2.src = "aliens-02.gif";
        } else if (resultado[0].label == "campana") {
            img3.src = "aliens-03.gif";
        } else {
            img4.src = "aliens-04.gif";
        }
    }
}