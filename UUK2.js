"use strict";
const inputNama = document.getElementById("nama");
const inputGajiPokok = document.getElementById("gajiPokok");
const inputJamLembur = document.getElementById("jamLembur");
const inputHariAbsen = document.getElementById("hariAbsen");
const btnHitung = document.getElementById("btnHitung");
const hasilGaji = document.getElementById("hasilGaji");
function hitungGaji() {
    const nama = inputNama.value;
    const gajiPokok = Number(inputGajiPokok.value);
    const jamLembur = Number(inputJamLembur.value);
    const hariAbsen = Number(inputHariAbsen.value);
    const UPAH_LEMBUR = 25000;
    const POTONGAN_ABSEN = 100000;
    if (gajiPokok < 0 || jamLembur < 0 || hariAbsen < 0) {
        hasilGaji.innerHTML = "Error: Data tidak valid.";
        return;
    }
    const gajiBersih = gajiPokok + (jamLembur * UPAH_LEMBUR) - (hariAbsen * POTONGAN_ABSEN);
    let statusKedisiplinan = "";
    if (hariAbsen === 0) {
        statusKedisiplinan = "Sangat Disiplin";
    }
    else if (hariAbsen >= 1 && hariAbsen <= 2) {
        statusKedisiplinan = "Disiplin";
    }
    else if (hariAbsen >= 3 && hariAbsen <= 4) {
        statusKedisiplinan = "Cukup Disiplin";
    }
    else if (hariAbsen >= 5 && hariAbsen <= 6) {
        statusKedisiplinan = "Kurang Disiplin";
    }
    else {
        statusKedisiplinan = "Perlu Pembinaan";
    }
    hasilGaji.innerHTML = `
        Nama: ${nama}<br>
        Gaji bersih: Rp${gajiBersih}<br>
        Kedisiplinan: ${statusKedisiplinan}
    `;
}
btnHitung.addEventListener("click", hitungGaji);
