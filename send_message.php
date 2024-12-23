<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email penerima
    $to = "your-email@example.com";
    $subject = "Pesan Kontak dari $name";
    $body = "Nama: $name\nEmail: $email\nPesan: $message";

    // Mengirim email
    if (mail($to, $subject, $body)) {
        echo "Pesan berhasil dikirim!";
    } else {
        echo "Gagal mengirim pesan.";
    }
}
?>