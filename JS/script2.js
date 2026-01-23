        document.getElementById('startButton').onclick = function() {
            const button = this;
            button.classList.add('clicked');
            setTimeout(() => button.classList.remove('clicked'), 100);
            
            const inputValue = document.getElementById('siteInput').value;
            if (inputValue) {
                const sites = inputValue.split(',').map(site => site.trim()).filter(site => site);
                if (sites.length >= 1) {
                    localStorage.setItem('tmrSites', JSON.stringify(sites));
                    const timerValue = document.getElementById('timerInput').value;
                    if (timerValue && timerValue > 0) {
                        localStorage.setItem('tmrTimer', timerValue * 1000);
                    } else {
                        localStorage.removeItem('tmrTimer');
                    }
                    document.body.classList.add('fade-out');
                    setTimeout(() => window.location.href = 'index.html', 1000);
                } else {
                    alert('Por favor, insira pelo menos 1 site.');
                }
            } else {
                alert('Por favor, insira os sites.');
            }
        };

setTimeout(() => document.body.style.opacity = '1', 100);