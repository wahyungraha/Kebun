function toggleRelay(device) {
    alert(`Toggling relay for ${device}`);
    // Tambahkan logika untuk mengirim perintah ke perangkat IoT di sini
}

// Simulasi data sensor
setInterval(() => {
    document.getElementById('kelembapan').textContent = Math.floor(Math.random() * 101);
    document.getElementById('ph').textContent = (Math.random() * 2 + 5).toFixed(2);
    document.getElementById('suhu').textContent = (Math.random() * 15 + 20).toFixed(1);
}, 3000);
