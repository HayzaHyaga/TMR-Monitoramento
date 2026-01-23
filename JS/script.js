let sites = JSON.parse(localStorage.getItem('tmrSites')) || [];
let iframeIds = [];
let indice = 0;
let timer;
let timerInterval = JSON.parse(localStorage.getItem('tmrTimer')) || 25000;

function mudarSite() {
    if (sites.length === 0) return;
    const siteAtual = document.getElementById(iframeIds[indice]);
    
    setTimeout(() => {
        iframeIds.forEach((id) => {
            document.getElementById(id).classList.remove("active");
        });
        siteAtual.classList.add("active");
    }, 10);

    const siteNumber = document.getElementById('siteNumber');
    const hostname = new URL(sites[indice]).hostname;
    siteNumber.textContent = hostname.replace(/\.com\.br$/, '');
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
        timer = setInterval(proximoSite, timerInterval);
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
document.getElementById('selectButton').onclick = function() {
    const button = this;
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 100);

    document.body.classList.add('fade-out');
    setTimeout(() => window.location.href = 'select.html', 1000);
};

if (sites.length > 0) {
    const container = document.querySelector('.iframe-container');
    sites.forEach((site, i) => {
        const iframe = document.createElement('iframe');
        iframe.id = `site${i}`;
        iframe.src = site;
        iframe.className = i === 0 ? 'active' : '';
        container.appendChild(iframe);
        iframeIds.push(`site${i}`);
    });
    document.querySelector('.controls').style.display = 'flex';
    mudarSite();
    iniciarTimer();
    setTimeout(() => document.body.style.opacity = '1', 100);
} else {
    window.location.href = 'select.html';
}
