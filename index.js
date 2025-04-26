document.addEventListener('DOMContentLoaded', () => {
    // Fetch working hours from Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbxLgSaK9K4h5cKBmGOQ47I7YD3QLOVn0T_cTDsS3YvuCY_FKMN98cQXFeUoo4FfcGE/exec') // <-- Replace with your Apps Script web app URL
        .then(response => response.json())
        .then(data => {
            // Working Hours
            const hoursList = document.querySelector('#hours ul');
            if (hoursList && data.workingHours) {
                hoursList.innerHTML = '';
                data.workingHours.forEach(row => {
                    const li = document.createElement('li');
                    li.setAttribute('data-en', row.en);
                    li.setAttribute('data-sr', row.sr);
                    li.textContent = row.en; // Default to English; lang.js will handle switching
                    hoursList.appendChild(li);
                });
            }
            // Monthly Liturgies
            const litList = document.querySelector('#liturgies ul');
            if (litList && data.monthlyLiturgies) {
                litList.innerHTML = '';
                data.monthlyLiturgies.forEach(row => {
                    const li = document.createElement('li');
                    li.setAttribute('data-en', row.en);
                    li.setAttribute('data-sr', row.sr);
                    li.textContent = row.en;
                    litList.appendChild(li);
                });
            }
        });

    // You can repeat the above fetch for other sections (e.g. liturgies) if you use separate sheets or tabs

    // Apply custom logo
    const customLogo = localStorage.getItem('customLogo');
    if (customLogo) {
        const logoImg = document.getElementById('logo');
        if (logoImg) logoImg.src = customLogo;
    }
    // Apply custom background color
    const bgColor = localStorage.getItem('bgColor');
    if (bgColor) {
        document.body.style.background = bgColor;
    }
    // Apply custom events banner (chiron)
    const chironText = localStorage.getItem('chironText');
    if (chironText) {
        const banner = document.querySelector('#events-banner span, #events-banner');
        if (banner) banner.textContent = chironText;
    }
});