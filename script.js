
let qr_code = document.getElementById("qr-code");
let qrtext = document.getElementById("qrtext");
function generateQR() {
  qr_code.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
}
document.getElementById("generate").addEventListener("click", generateQR);