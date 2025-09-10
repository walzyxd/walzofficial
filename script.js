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
    const qrPlaceholder = document.getElementById('qr-placeholder');
    const qrCodeImg = document.getElementById('qr-code-img');
    const enlargedImg = document.getElementById('enlarged-img');

    // Fungsi untuk membuka popup
    function openPopup(popupElement) {
        popupElement.classList.add('active');
    }

    // Fungsi untuk menutup semua popup
    function closePopups() {
        qrisPopup.classList.remove('active');
        danaPopup.classList.remove('active');
        imageEnlargePopup.classList.remove('active');
    }

    // Fungsi untuk menampilkan notifikasi
    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }

    // Event listeners untuk tombol utama
    qrisBtn.addEventListener('click', () => {
        openPopup(qrisPopup);
        // Animasikan loading kode QR
        setTimeout(() => {
            qrPlaceholder.style.display = 'none';
            qrCodeImg.classList.add('active');
        }, 1000);
    });

    danaBtn.addEventListener('click', () => {
        openPopup(danaPopup);
    });

    // Event listener untuk memperbesar kode QR
    enlargeQrisBtn.addEventListener('click', () => {
        const qrImgSrc = qrCodeImg.src;
        enlargedImg.src = qrImgSrc;
        openPopup(imageEnlargePopup);
    });

    // Event listener untuk menyalin nomor DANA
    copyDanaBtn.addEventListener('click', () => {
        const danaNumber = document.getElementById('dana-number').textContent;
        navigator.clipboard.writeText(danaNumber).then(() => {
            showNotification('Nomor Berhasil Disalin!');
        }).catch(err => {
            console.error('Gagal menyalin: ', err);
        });
    });

    // Event listeners untuk menutup popup
    closeButtons.forEach(button => {
        button.addEventListener('click', closePopups);
    });

    // Tutup popup saat mengklik di luar area
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup')) {
            closePopups();
        }
    });

    // Tutup popup dengan tombol 'Escape'
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePopups();
        }
    });
});
