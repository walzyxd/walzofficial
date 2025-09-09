document.addEventListener('DOMContentLoaded', function() {
    const openQrisBtn = document.getElementById('open-qris');
    const openDanaBtn = document.getElementById('open-dana');
    const qrisPopup = document.getElementById('qris-popup');
    const danaPopup = document.getElementById('dana-popup');
    const copyDanaBtn = document.getElementById('copy-dana');
    const copyNotification = document.getElementById('copy-notification');
    const enlargeQrisBtn = document.getElementById('enlarge-qris');
    const imageEnlargePopup = document.getElementById('image-enlarge-popup');
    const enlargedImg = document.getElementById('enlarged-img');
    const qrisImage = document.querySelector('.qr-code-img');

    // Membuka pop-up QRIS
    if (openQrisBtn) {
        openQrisBtn.addEventListener('click', function() {
            qrisPopup.classList.add('active');
        });
    }

    // Membuka pop-up DANA
    if (openDanaBtn) {
        openDanaBtn.addEventListener('click', function() {
            danaPopup.classList.add('active');
        });
    }

    // Fungsi untuk menutup pop-up
    window.closePopup = function(id) {
        const popup = document.getElementById(id);
        if (popup) {
            popup.classList.remove('active');
        }
    };

    // Fungsionalitas Copy DANA
    if (copyDanaBtn) {
        copyDanaBtn.addEventListener('click', function() {
            const phoneNumber = document.getElementById('dana-number').textContent;
            navigator.clipboard.writeText(phoneNumber).then(function() {
                copyNotification.classList.add('show');
                setTimeout(() => {
                    copyNotification.classList.remove('show');
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy text: ', err);
                alert('Gagal menyalin nomor telepon.');
            });
        });
    }

    // Fungsionalitas Perbesar QRIS
    if (enlargeQrisBtn) {
        enlargeQrisBtn.addEventListener('click', function() {
            if (qrisImage && enlargedImg) {
                enlargedImg.src = qrisImage.src;
                imageEnlargePopup.classList.add('active');
            }
        });
    }
});
