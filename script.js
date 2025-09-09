document.addEventListener('DOMContentLoaded', function() {
    const qrisLink = document.querySelector('.qris-option');
    const danaLink = document.querySelector('.dana-option');
    const qrisPopup = document.getElementById('qris-popup');
    const danaPopup = document.getElementById('dana-popup');
    const copyButton = danaPopup.querySelector('.copy-button');

    qrisLink.addEventListener('click', function(e) {
        e.preventDefault();
        qrisPopup.style.display = 'flex';
    });

    danaLink.addEventListener('click', function(e) {
        e.preventDefault();
        danaPopup.style.display = 'flex';
    });

    window.closePopup = function(id) {
        document.getElementById(id).style.display = 'none';
    };

    if (copyButton) {
        copyButton.addEventListener('click', function() {
            const phoneNumber = document.getElementById('dana-number').textContent;
            navigator.clipboard.writeText(phoneNumber).then(function() {
                alert('Nomor telepon berhasil disalin!');
            }, function(err) {
                alert('Gagal menyalin: ', err);
            });
        });
    }
});
