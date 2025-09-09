document.addEventListener('DOMContentLoaded', function() {
    const qrisLink = document.querySelector('.qris-option');
    const danaLink = document.querySelector('.dana-option');
    const qrisPopup = document.getElementById('qris-popup');
    const danaPopup = document.getElementById('dana-popup');
    const copyDanaButton = document.getElementById('copy-dana');
    const copyNotification = document.getElementById('copy-notification');
    const enlargeQrisButton = document.getElementById('enlarge-qris');
    const imageEnlargePopup = document.getElementById('image-enlarge-popup');
    const enlargedImg = document.getElementById('enlarged-img');
    const qrisImage = document.getElementById('qris-image');

    qrisLink.addEventListener('click', function(e) {
        e.preventDefault();
        qrisPopup.classList.add('active');
    });

    danaLink.addEventListener('click', function(e) {
        e.preventDefault();
        danaPopup.classList.add('active');
    });

    window.closePopup = function(id) {
        const popup = document.getElementById(id);
        popup.classList.remove('active');
    };

    if (copyDanaButton) {
        copyDanaButton.addEventListener('click', function() {
            const phoneNumber = document.getElementById('dana-number').textContent;
            navigator.clipboard.writeText(phoneNumber).then(function() {
                copyNotification.classList.add('show');
                setTimeout(() => {
                    copyNotification.classList.remove('show');
                }, 2000);
            }, function(err) {
                alert('Gagal menyalin nomor telepon: ', err);
            });
        });
    }

    if (enlargeQrisButton) {
        enlargeQrisButton.addEventListener('click', function() {
            enlargedImg.src = qrisImage.src;
            imageEnlargePopup.classList.add('active');
        });
    }
});
