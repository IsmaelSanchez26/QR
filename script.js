let qr;

function generarQR() {
    const texto = document.getElementById("qrText").value;
    const contenedorQR = document.getElementById("qr");

    contenedorQR.innerHTML = "";

    if (texto.trim() === "") {
        alert("Por favor escribe un texto o URL");
        return;
    }

    qr = new QRCode(contenedorQR, {
        text: texto,
        width: 200,
        height: 200
    });
}
