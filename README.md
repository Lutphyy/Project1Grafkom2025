# Project1Grafkom2025

Visualisasi data nilai mahasiswa dalam bentuk Radar Chart menggunakan HTML dan Chart.js. Proyek ini dibuat sebagai bagian dari tugas mata kuliah **Grafika Komputer** semester ganjil 2024/2025.

## 🔹 Deskripsi Proyek

Proyek ini menampilkan grafik radar interaktif yang merepresentasikan nilai **Tugas**, **UTS**, dan **UAS** dari setiap mahasiswa. Selain itu, proyek ini juga dilengkapi dengan:
- Dropdown untuk memilih kelompok mahasiswa (pagination)
- Analisis otomatis keunggulan dan kelemahan tiap mahasiswa berdasarkan nilai tertinggi dan terendah

## 🔹 Fitur Utama

- ⭐ Menampilkan Radar Chart untuk maksimal 10 mahasiswa per halaman
- ⭐ Warna garis acak agar setiap mahasiswa tampil unik
- ⭐ Analisis otomatis yang menampilkan:
  > "NIM 2101020014 unggul di 'UAS', lemah di 'UTS'"
- ⭐ Navigasi halaman mahasiswa melalui dropdown
- ⭐ Semua data ditulis inline tanpa file eksternal

## 📂 Struktur Data

Data mahasiswa disimpan dalam array JavaScript dengan format:
```js
const allMahasiswa = [
  { label: "2101020014", data: [56, 50, 70] },
  // ...
];
```

Setiap `data` berisi 3 angka yang mewakili nilai:
1. Tugas
2. UTS
3. UAS

## 🔧 Teknologi yang Digunakan

- HTML5 + CSS3
- [Chart.js](https://www.chartjs.org/) untuk visualisasi grafik radar
- Vanilla JavaScript (tanpa framework tambahan)

## 🔢 Cara Menjalankan

1. Simpan file `.html` dan buka di browser modern (Chrome, Firefox, Edge)
2. Tidak memerlukan server lokal karena data disimpan secara inline

## ✅ Contoh Output

- Tampilan Radar Chart berisi maksimal 10 mahasiswa
- Analisis nilai per mahasiswa ditampilkan di bawah chart secara dinamis saat dropdown diubah

## 📍 Catatan

- Total mahasiswa dapat mencapai 53 orang atau lebih
- Jika ingin menambahkan data, cukup tambahkan entri baru di array `allMahasiswa`
- Pastikan setiap entri memiliki 3 nilai agar grafik tidak error

## 🎓 Kontribusi

Proyek ini dibuat oleh Aidil Baihaqi dengan NIM 2301020006 untuk memenuhi tugas visualisasi data dalam mata kuliah Grafika Komputer di **Universitas Maritim Raja Ali Haji**, tahun ajaran 2024/2025.

Dosen Pengampu: Tekad Matulatan

---

🚀 Happy Coding & Visualizing!

