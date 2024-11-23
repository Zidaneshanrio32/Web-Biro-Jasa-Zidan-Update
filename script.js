// Handle form submission (simple validation)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Terima kasih! Pesan Anda telah dikirim.");
        // You can implement further functionality like sending the data to the server here
    } else {
        alert("Harap isi semua kolom!");
    }
});
