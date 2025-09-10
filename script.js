document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Seleksi Semua Elemen di Awal ---
    const elements = {
        popups: {
            qris: document.getElementById('qris-popup'),
            dana: document.getElementById('dana-popup'),
            enlarge: document.getElementById('image-enlarge-popup'),
        },
        buttons: {
            openQris: document.getElementById('open-qris'),
            openDana: document.getElementById('open-dana'),
            copyDana: document.getElementById('copy-dana'),
            enlargeQris: document.getElementById('enlarge-qris'),
            closeButtons: document.querySelectorAll('.close-button'),
        },
        qris: {
            image: document.getElementById('qr-code-img'),
            placeholder: document.getElementById('qr-placeholder'),
            enlargedImage: document.getElementById('enlarged-img'),
        },
        dana: {
            number: document.getElementById('dana-number'),
        },
        notification: document.getElementById('copy-notification'),
        allPopups: document.querySelectorAll('.popup'),
    };

    // --- 2. Fungsi Helper Terpusat ---
    const showPopup = (popup) => popup.classList.add('active');
    const hidePopup = (popup) => popup.classList.remove('active');
    
    const showNotification = () => {
        elements.notification.classList.add('show');
        setTimeout(() => {
            elements.notification.classList.remove('show');
        }, 2000);
    };
    
    // --- 3. Logika Pemuatan QRIS yang Cerdas ---
    const handleQrisLoading = () => {
        const { image, placeholder } = elements.qris;
        
        placeholder.style.display = 'block';
        image.style.display = 'none';
        image.classList.remove('active');

        image.onload = () => {
            placeholder.style.display = 'none';
            image.style.display = 'block';
            setTimeout(() => image.classList.add('active'), 50); 
        };
        
        if (image.complete) {
            image.onload();
        }
    };
    
    // --- 4. Event Listeners (Penghubung Tombol & Fungsi) ---

    elements.buttons.openQris.addEventListener('click', () => {
        showPopup(elements.popups.qris);
        handleQrisLoading();
    });

    elements.buttons.openDana.addEventListener('click', () => {
        showPopup(elements.popups.dana);
    });

    elements.buttons.enlargeQris.addEventListener('click', () => {
        elements.qris.enlargedImage.src = elements.qris.image.src;
        showPopup(elements.popups.enlarge);
    });

    elements.buttons.copyDana.addEventListener('click', () => {
        const phoneNumber = elements.dana.number.textContent.trim();
        navigator.clipboard.writeText(phoneNumber).then(() => {
            showNotification();
            elements.buttons.copyDana.classList.add('glow-bounce');
            setTimeout(() => elements.buttons.copyDana.classList.remove('glow-bounce'), 600);
        }).catch(err => {
            console.error('Gagal menyalin nomor:', err);
            alert('Gagal menyalin nomor.');
        });
    });

    // --- 5. Logika Menutup Semua Popup ---

    elements.allPopups.forEach(popup => {
        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                hidePopup(popup);
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            elements.allPopups.forEach(popup => hidePopup(popup));
        }
    });
    
    elements.buttons.closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentPopup = button.closest('.popup');
            if (parentPopup) {
                hidePopup(parentPopup);
            }
        });
    });
});
