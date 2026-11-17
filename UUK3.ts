const pekerja = document.getElementById("pekerja") as HTMLInputElement;
const jamKerja = document.getElementById("jamKerja") as HTMLInputElement;
const upahJam = document.getElementById("upahJam") as HTMLInputElement;
const btnSimpan = document.getElementById("btnSimpan") as HTMLButtonElement;
const hasil = document.getElementById("hasil") as HTMLParagraphElement;

const daftarPekerja: string[] = [];
const daftarJam: number[] = [];
const daftarUpahJam: number[] = [];
const daftarUpah: number[] = [];

function hitungUpah(jam: number, upah: number): number {
    return jam * upah;
}

function simpanData(): void {
    daftarPekerja.push(pekerja.value);
    daftarJam.push(Number(jamKerja.value));
    daftarUpahJam.push(Number(upahJam.value));

    const idx: number = daftarPekerja.length - 1;
    daftarUpah.push(hitungUpah(daftarJam[idx], daftarUpahJam[idx]));

    let teks: string = "";
    let total: number = 0;

    for (let i: number = 0; i < daftarPekerja.length; i++) {
        total += daftarUpah[i];
        teks += `Nama Pekerja: ${daftarPekerja[i]}<br>Jam Kerja: ${daftarJam[i]}<br>Upah per Jam: ${daftarUpahJam[i]}<br>Total Upah: ${daftarUpah[i]}<br><br>`;
    }

    hasil.innerHTML = `${teks}Total Pengeluaran Upah: Rp${total}`;
    pekerja.value = jamKerja.value = upahJam.value = "";
}

btnSimpan.addEventListener("click", simpanData);