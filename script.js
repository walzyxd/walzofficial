document.addEventListener('DOMContentLoaded', function() {
    const qrisLink = document.querySelector('.qris-option');
    const danaLink = document.querySelector('.dana-option');
    const qrisPopup = document.getElementById('qris-popup');
    const danaPopup = document.getElementById('dana-popup');
    const copyDanaButton = document.getElementById('copy-dana'); // Menggunakan ID yang spesifik
    const copyNotification = document.getElementById('copy-notification');
    const enlargeQrisButton = document.getElementById('enlarge-qris');
    const imageEnlargePopup = document.getElementById('image-enlarge-popup');
    const enlargedImg = document.getElementById('enlarged-img');
    const qrisImage = document.getElementById('qris-image');

    // Pastikan jalur gambar QRIS sudah benar saat dimuat
    // qrisImage.src = 'qris.png'; // Baris ini mungkin tidak perlu jika src sudah di HTML, tapi bagus untuk memastikan

    qrisLink.addEventListener('click', function(e) {
        e.preventDefault();
        qrisPopup.classList.add('active'); // Menambahkan kelas 'active' untuk animasi
    });

    danaLink.addEventListener('click', function(e) {
        e.preventDefault();
        danaPopup.classList.add('active');
    });

    // Fungsi untuk menutup popup
    window.closePopup = function(id) {
        const popup = document.getElementById(id);
        popup.classList.remove('active'); // Menghapus kelas 'active' untuk animasi
    };

    // Fungsionalitas Copy DANA
    if (copyDanaButton) {
        copyDanaButton.addEventListener('click', function() {
            const phoneNumber = document.getElementById('dana-number').textContent;
            navigator.clipboard.writeText(phoneNumber).then(function() {
                // Tampilkan notifikasi kustom
                copyNotification.classList.add('show');
                setTimeout(() => {
                    copyNotification.classList.remove('show');
                }, 2000); // Notifikasi akan hilang setelah 2 detik

            }, function(err) {
                alert('Gagal menyalin nomor telepon: ', err);
            });
        });
    }

    // Fungsionalitas Perbesar Gambar QRIS
    if (enlargeQrisButton) {
        enlargeQrisButton.addEventListener('click', function() {
            enlargedImg.src = qrisImage.src; // Setel sumber gambar yang diperbesar
            imageEnlargePopup.classList.add('active'); // Tampilkan pop-up perbesar
        });
    }
});
