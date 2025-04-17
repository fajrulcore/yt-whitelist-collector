#  yt-whitelist-collector

**yt-whitelist-collector** adalah sebuah **script Tampermonkey** sederhana yang berfungsi untuk **mengumpulkan link video YouTube dari playlist whitelist**. Script ini secara otomatis menangkap link saat kamu klik tombol **Download URL WL** yang muncul di pojok kanan bawah halaman playlist, lalu mengunduhnya dalam format **.txt**.

---

##  Instalasi

### 📌 Prasyarat:
- Browser yang sudah terpasang **[Tampermonkey](https://www.tampermonkey.net/)** extension.

###  Pilihan Cara Install:

####  Opsi 1 — Install Otomatis (Langsung Klik)
Klik link berikut untuk langsung menginstall script:
- [Install yt-whitelist-collector](https://raw.githubusercontent.com/fajrulcore/yt-whitelist-collector/refs/heads/main/collector.js)

> Pastikan browser kamu sudah terpasang **Tampermonkey**, lalu klik **Install** saat diminta.

---

#### Opsi 2 — Install Manual via Tampermonkey Dashboard
1. Buka **Tampermonkey Dashboard**.
2. Klik menu **Utilities**.
3. Di bagian **Import from URL**, masukkan link berikut:

https://raw.githubusercontent.com/fajrulcore/yt-whitelist-collector/refs/heads/main/collector.js


4. Klik **Install**.
5. Buka halaman **YouTube Whitelist** — script akan aktif otomatis.

---

##  Cara Menggunakan

1. Buka halaman playlist whitelist YouTube:
https://www.youtube.com/playlist?list=WL

2. **Refresh** halaman tersebut dan tunggu sekitar **3 detik** sampai tombol **Download URL WL** muncul di pojok kanan bawah.
3. Klik tombol tersebut.
4. Daftar link video akan otomatis diunduh dalam file **.txt**.

---

## Catatan

- Jika tombol **Download URL WL** tidak muncul selama 3 detik, **refresh** halaman playlist hingga tombolnya muncul.
- Pastikan playlist whitelist kamu berisi video agar link dapat dikumpulkan dengan benar.

---
