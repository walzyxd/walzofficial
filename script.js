document.addEventListener('DOMContentLoaded', () => {
    const qrisBtn = document.getElementById('open-qris');
    const danaBtn = document.getElementById('open-dana');
    const qrisPopup = document.getElementById('qris-popup');
    const danaPopup = document.getElementById('dana-popup');
    const enlargeQrisBtn = document.getElementById('enlarge-qris');
    const copyDanaBtn = document.getElementById('copy-dana');
    const imageEnlargePopup = document.getElementById('image-enlarge-popup');
    const closeButtons = document.querySelectorAll('.close-button');
    const notification = document.getElementById('copy-notification');
    const qrCodeImg = document.getElementById('qr-code-img');
    const enlargedImg = document.getElementById('enlarged-img');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeText = document.getElementById('theme-text');

    function openPopup(popupElement) {
        popupElement.classList.add('active');
    }

    function closePopups() {
        qrisPopup.classList.remove('active');
        danaPopup.classList.remove('active');
        imageEnlargePopup.classList.remove('active');
    }

    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }

    qrisBtn.addEventListener('click', () => {
        openPopup(qrisPopup);
    });

    danaBtn.addEventListener('click', () => {
        openPopup(danaPopup);
    });

    enlargeQrisBtn.addEventListener('click', () => {
        const qrImgSrc = qrCodeImg.src;
        enlargedImg.src = qrImgSrc;
        openPopup(imageEnlargePopup);
    });

    copyDanaBtn.addEventListener('click', () => {
        const danaNumber = document.getElementById('dana-number').textContent;
        navigator.clipboard.writeText(danaNumber).then(() => {
            showNotification('Nomor Berhasil Disalin!');
        }).catch(err => {
            console.error('Gagal menyalin: ', err);
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', closePopups);
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup')) {
            closePopups();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePopups();
        }
    });

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeText.textContent = "Mode Gelap";
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeText.textContent = "Mode Terang";
        }
    });
});
