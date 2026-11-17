"use strict";
const pekerja = document.getElementById("pekerja");
const jamKerja = document.getElementById("jamKerja");
const upahJam = document.getElementById("upahJam");
const btnSimpan = document.getElementById("btnSimpan");
const hasil = document.getElementById("hasil");
const daftarPekerja = [];
const daftarJam = [];
const daftarUpahJam = [];
const daftarUpah = [];
function hitungUpah(jam, upah) {
    return jam * upah;
}
function simpanData() {
    daftarPekerja.push(pekerja.value);
    daftarJam.push(Number(jamKerja.value));
    daftarUpahJam.push(Number(upahJam.value));
    const idx = daftarPekerja.length - 1;
    daftarUpah.push(hitungUpah(daftarJam[idx], daftarUpahJam[idx]));
    let teks = "";
    let total = 0;
    for (let i = 0; i < daftarPekerja.length; i++) {
        total += daftarUpah[i];
        teks += `Nama Pekerja: ${daftarPekerja[i]}<br>Jam Kerja: ${daftarJam[i]}<br>Upah per Jam: ${daftarUpahJam[i]}<br>Total Upah: ${daftarUpah[i]}<br><br>`;
    }
    hasil.innerHTML = `${teks}Total Pengeluaran Upah: Rp${total}`;
    pekerja.value = jamKerja.value = upahJam.value = "";
}
btnSimpan.addEventListener("click", simpanData);
