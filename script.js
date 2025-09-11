document.addEventListener('DOMContentLoaded', function () {

    // --- Pemilihan Elemen ---
    const openQrisBtn = document.getElementById('open-qris');
    const openDanaBtn = document.getElementById('open-dana');
    const copyDanaBtn = document.getElementById('copy-dana');
    const enlargeQrisBtn = document.getElementById('enlarge-qris');

    const qrisPopup = document.getElementById('qris-popup');
    const danaPopup = document.getElementById('dana-popup');
    const imageEnlargePopup = document.getElementById('image-enlarge-popup');

    const danaNumber = document.getElementById('dana-number');
    const notification = document.getElementById('copy-notification');

    const qrPlaceholder = document.getElementById('qr-placeholder');
    const qrImage = document.getElementById('qr-code-img');
    const enlargedImage = document.getElementById('enlarged-img');

    const closeButtons = document.querySelectorAll('.close-button');
    const allPopups = document.querySelectorAll('.popup');

    // --- Fungsi Bantuan ---
    const showPopup = (popupEl) => popupEl.classList.add('active');
    const hidePopup = (popupEl) => popupEl.classList.remove('active');

    const showCopyNotification = () => {
        notification.classList.add('show');
        setTimeout(() => notification.classList.remove('show'), 3000);
    };

    // --- Event: Buka popup QRIS ---
    openQrisBtn.addEventListener('click', () => {
        showPopup(qrisPopup);

        if (qrImage.complete) {
            qrPlaceholder.style.display = 'none';
            qrImage.classList.add('active');
        } else {
            qrPlaceholder.style.display = 'block';
            qrImage.classList.remove('active');

            qrImage.onload = () => {
                qrPlaceholder.style.display = 'none';
                qrImage.classList.add('active');
            };
        }
    });

    // --- Event: Buka popup DANA ---
    openDanaBtn.addEventListener('click', () => showPopup(danaPopup));

    // --- Event: Salin nomor DANA ---
    copyDanaBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(danaNumber.innerText.trim())
            .then(showCopyNotification)
            .catch(err => console.error('Gagal menyalin:', err));
    });

    // --- Event: Perbesar QRIS ---
    enlargeQrisBtn.addEventListener('click', () => {
        enlargedImage.src = qrImage.src;
        showPopup(imageEnlargePopup);
    });

    // --- Event: Tutup popup dengan tombol close ---
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentPopup = button.closest('.popup');
            if (parentPopup) hidePopup(parentPopup);
        });
    });

    // --- Event: Tutup popup dengan klik luar ---
    allPopups.forEach(popup => {
        popup.addEventListener('click', (event) => {
            if (event.target === popup) hidePopup(popup);
        });
    });

});