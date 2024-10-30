const sites = [
    "https://tmr2.intelbras.com.br/monitoring",
    "https://tmr3.intelbras.com.br/monitoring"
];

let indice = 0;
let timer;

function mudarSite() {
    const siteFrame = document.getElementById('siteFrame');
    siteFrame.src = sites[indice];

    const siteNumber = document.getElementById('siteNumber');
    siteNumber.textContent = `TMR ${indice + 2}`;
}

function proximoSite() {
    indice = (indice + 1) % sites.length;
    mudarSite();
}

function anteriorSite() {
    indice = (indice - 1 + sites.length) % sites.length;
    mudarSite();
}

function iniciarTimer() {
    timer = setInterval(proximoSite, 15000);
}

function toggleTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    } else {
        iniciarTimer();
    }
}

document.getElementById('nextButton').onclick = proximoSite;
document.getElementById('prevButton').onclick = anteriorSite;
document.getElementById('toggleButton').onclick = toggleTimer;

mudarSite();
iniciarTimer();
