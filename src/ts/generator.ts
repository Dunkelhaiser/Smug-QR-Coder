/* eslint-disable @typescript-eslint/no-non-null-assertion */
import QRCode from "qrcode";

const generateBtn = document.querySelector("#generate-btn") as HTMLButtonElement;
const input = document.querySelector("#input") as HTMLButtonElement;
const qrCodeCanvas = document.querySelector("#qrcode") as HTMLDivElement;

const generateQr = () => {
    QRCode.toCanvas(input.value, (error, canvas) => {
        if (error) return;
        while (qrCodeCanvas.firstChild) qrCodeCanvas.removeChild(qrCodeCanvas.firstChild);
        qrCodeCanvas.appendChild(canvas);
    });
};

generateBtn.addEventListener("click", generateQr);
