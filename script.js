// JavaScript code for interactivity (optional, e.g., form validation, animations)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan berhasil dikirim!');
});

// JavaScript untuk menangani pengiriman form dan membuka WhatsApp dengan data yang diisi
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Menghentikan pengiriman form secara default
    
    // Ambil nilai input form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Format pesan untuk WhatsApp
    var whatsappMessage = encodeURIComponent("Nama: " + name + "\nEmail: " + email + "\nPesan: " + message);

    // Nomor WhatsApp Anda (pastikan dalam format internasional tanpa tanda +)
    var whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp CV Anda

    // URL WhatsApp
    var whatsappUrl = "https://wa.me/" + 6285320134569 + "?text=" + whatsappMessage;

    // Redirect ke WhatsApp
    window.location.href = whatsappUrl;
});