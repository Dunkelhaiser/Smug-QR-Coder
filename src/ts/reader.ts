/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Html5QrcodeScanner } from "html5-qrcode";

const scannerSection = document.querySelector("#reader") as HTMLDivElement;

const scanner = new Html5QrcodeScanner(
    "reader",
    {
        qrbox: {
            width: 250,
            height: 250,
        },
        fps: 30,
    },
    false
);

const success = (result: string) => {
    scanner.clear();
    scannerSection.innerHTML = `<p class="result-text">${result}</p>`;
    const results = document.querySelector(".result-text") as HTMLParagraphElement;

    results.addEventListener("click", () => {
        navigator.clipboard.writeText(results.textContent!);
    });
};
const error = () => {
    scanner.clear();
    scannerSection.innerHTML = `<p class="result-error-text">No code was detected.</p>`;
};
scanner.render(success, error);

document.querySelector("#reader > div img")?.remove();
document.querySelector("canvas")?.remove();
document.querySelector("#reader__dashboard_section")!.className = "container-layout";
document.querySelector<HTMLAnchorElement>("#html5-qrcode-anchor-scan-type-change")!.style.textDecoration = "";
document.querySelector<HTMLAnchorElement>("#html5-qrcode-anchor-scan-type-change")!.style.cursor = "pointer";
scannerSection.style.border = "";
scannerSection.style.padding = "";
