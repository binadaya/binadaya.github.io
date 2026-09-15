# Website PT. Binadaya Inti Dinamika — GitHub Pages

Versi ini adalah website statis berbasis Jekyll. Halaman dan konten disimpan dalam format Markdown agar mudah dikelola dan kompatibel dengan GitHub Pages.

## Struktur konten

- `index.md` — Beranda
- `tentang.md` — Profil perusahaan, tim, dan sertifikasi
- `layanan.md` — Daftar layanan
- `proyek.md` — Portofolio dengan pencarian dan pagination
- `kontak.md` — Kontak statis
- `_projects/*.md` — Data proyek
- `_services/*.md` — Data layanan
- `_team/*.md` — Direksi dan tim
- `_clients/*.md` — Klien/pemberi kerja
- `_certificates/*.md` — Legalitas dan sertifikasi

## Publikasi ke GitHub Pages

1. Buat repository baru di GitHub.
2. Ekstrak seluruh isi ZIP ini ke root repository.
3. Jika nama repository bukan `username.github.io`, buka `_config.yml` dan ubah `baseurl: ""` menjadi `baseurl: "/nama-repository"`.
4. Commit dan push ke branch `main`.
5. Buka **Settings → Pages**.
6. Pada **Build and deployment**, pilih **Deploy from a branch**.
7. Pilih branch `main` dan folder `/ (root)`, lalu simpan.
8. Tunggu proses build selesai. Alamat website akan tampil pada halaman Pages.

Untuk repository bernama `username.github.io`, biarkan `baseurl: ""`.

## Catatan

GitHub Pages tidak menjalankan backend. CMS admin, login, database, dan formulir kontak server dari versi dinamis tidak tersedia. Edit konten melalui file Markdown, lalu commit/push kembali ke GitHub.
