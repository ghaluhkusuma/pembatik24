// Dapatkan elemen form
const form = document.getElementById("umpan-balik-form");

// Tambahkan event listener pada pengiriman form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Dapatkan data form
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const umpanBalik = document.getElementById("umpan-balik").value;

  // Buat objek JSON untuk dikirim ke server
  const data = {
    nama: nama,
    kelas: kelas,
    umpanBalik: umpanBalik,
  };

  // Kirim data ke server menggunakan Google Forms API
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://script.google.com/macros/d/AKfycbypmXUDgVPD48UuHY7e-V6rHmTaXwMOwGMHIOykRGQNdLAuFD_v820s8OYa8MjDM63IEg/exec", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));

  // Tampilkan pesan sukses
  alert("Umpan balik refleksi diri berhasil dikirim!");
  document.getElementById("form-umpan-balik").reset();
});
