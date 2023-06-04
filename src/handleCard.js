document.addEventListener('DOMContentLoaded', function() {
    var btnPengajuan = document.getElementById('btn-pengajuan');
    var btnClose = document.getElementById('close-btn');
    var cardSection = document.getElementById('card-section');

    // Mengatur click listener untuk tombol "Buat Pengajuan"
    btnPengajuan.addEventListener('click', function() {
      cardSection.classList.remove('hidden'); // Menghapus kelas "hidden" untuk menampilkan card
      cardSection.classList.add('flex'); // Menghapus kelas "hidden" untuk menampilkan card
    });

    // Mengatur click listener untuk tombol "Tutup"
    btnClose.addEventListener('click', function() {
      cardSection.classList.add('hidden'); // Menambahkan kelas "hidden" untuk menyembunyikan card
    });
  });