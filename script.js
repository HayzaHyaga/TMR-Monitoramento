const sites = ["iframe1", "iframe2"];
let indice = 0;
let timer;

function mudarSite() {
    const siteAtual = document.getElementById(sites[indice]);
    
    setTimeout(() => {
        sites.forEach((siteId) => {
            document.getElementById(siteId).classList.remove("active");
        });
        siteAtual.classList.add("active");
    }, 10);

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
    if (!timer) {
        timer = setInterval(proximoSite, 25000);
    }
}

function pararTimer() {
    clearInterval(timer);
    timer = null;
}

function toggleTimer() {
    if (timer) {
        pararTimer();
    } else {
        iniciarTimer();
    }
}

document.getElementById('nextButton').onclick = proximoSite;
document.getElementById('prevButton').onclick = anteriorSite;
document.getElementById('toggleButton').onclick = toggleTimer;

mudarSite();
iniciarTimer();
