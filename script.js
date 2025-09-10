document.addEventListener('DOMContentLoaded', () => {
    const openQrisBtn = document.getElementById('open-qris');
    const openDanaBtn = document.getElementById('open-dana');
    const qrisPopup = document.getElementById('qris-popup');
    const danaPopup = document.getElementById('dana-popup');
    const copyDanaBtn = document.getElementById('copy-dana');
    const copyNotification = document.getElementById('copy-notification');
    const enlargeQrisBtn = document.getElementById('enlarge-qris');
    const imageEnlargePopup = document.getElementById('image-enlarge-popup');
    const enlargedImg = document.getElementById('enlarged-img');
    const qrisImage = document.getElementById('qr-code-img');
    const qrPlaceholder = document.getElementById('qr-placeholder');

    // Buka QRIS dengan shimmer + scale + glow
    if (openQrisBtn) {
        openQrisBtn.addEventListener('click', () => {
            qrisPopup.classList.add('active');
            qrPlaceholder.style.display = 'block';
            qrisImage.style.display = 'none';
            qrisImage.classList.remove('active');

            setTimeout(() => {
                qrPlaceholder.style.display = 'none';
                qrisImage.style.display = 'block';
                setTimeout(() => {
                    qrisImage.classList.add('active');
                    setTimeout(() => {
                        qrisImage.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
                    }, 2000);
                }, 50);
            }, 1000);
        });
    }

    // Buka DANA popup
    if (openDanaBtn) {
        openDanaBtn.addEventListener('click', () => danaPopup.classList.add('active'));
    }

    // Close popup
    window.closePopup = id => {
        const popup = document.getElementById(id);
        if (popup) popup.classList.remove('active');
    };

    // Copy DANA + glow bounce
    if (copyDanaBtn) {
        copyDanaBtn.addEventListener('click', () => {
            const phoneNumber = document.getElementById('dana-number').textContent.trim();
            navigator.clipboard.writeText(phoneNumber).then(() => {
                copyNotification.classList.add('show');
                copyDanaBtn.classList.add('glow-bounce');
                setTimeout(() => copyDanaBtn.classList.remove('glow-bounce'), 600);
                setTimeout(() => copyNotification.classList.remove('show'), 2000);
            }).catch(err => alert('Gagal menyalin nomor.'));
        });
    }

    // Perbesar QR
    if (enlargeQrisBtn) {
        enlargeQrisBtn.addEventListener('click', () => {
            if (qrisImage && enlargedImg) {
                enlargedImg.src = qrisImage.src;
                imageEnlargePopup.classList.add('active');
            }
        });
    }

    // Tutup popup klik luar
    document.querySelectorAll('.popup').forEach(popup => {
        popup.addEventListener('click', e => { if (e.target === popup) popup.classList.remove('active'); });
    });

    // Tutup popup tombol Esc
    document.addEventListener('keydown', e => {
        if (e.key === "Escape") {
            document.querySelectorAll('.popup.active').forEach(popup => popup.classList.remove('active'));
        }
    });
});