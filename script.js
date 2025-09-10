function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

function enlargeQR() {
    closePopup('qris-popup');
    openPopup('enlarge-popup');
}

function copyNumber() {
    const number = "0895404969768";
    navigator.clipboard.writeText(number).then(() => {
        alert("Nomor berhasil disalin!");
    }).catch(err => {
        alert("Gagal menyalin nomor: ", err);
    });
}
