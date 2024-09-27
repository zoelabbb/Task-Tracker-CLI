# Task-Tracker-CLI

Project challenge from https://roadmap.sh/projects/task-tracker/solutions?u=6504f7538dfc79db2ffbadb0

Task Tracker CLI adalah aplikasi command line yang dirancang untuk membantu pengguna dalam melacak dan mengelola tugas-tugas mereka secara efisien. Dengan menggunakan aplikasi ini, Anda dapat dengan mudah menambah, memperbarui, dan menghapus tugas, serta melihat status tugas yang sedang dikerjakan.

## Fitur

- **Menambah Tugas**: Tambahkan tugas baru dengan deskripsi singkat.
- **Memperbarui Tugas**: Ubah deskripsi tugas yang sudah ada.
- **Menghapus Tugas**: Hapus tugas yang tidak lagi diperlukan.
- **Menandai Status Tugas**: Tandai tugas sebagai "sedang dikerjakan" atau "selesai".
- **Daftar Semua Tugas**: Lihat semua tugas yang telah ditambahkan.
- **Daftar Tugas Berdasarkan Status**: Lihat tugas berdasarkan statusnya, seperti selesai, belum selesai, atau sedang dikerjakan.

## Persyaratan

- Node.js (versi 12 atau lebih tinggi)
- NPM (Node Package Manager)

## Instalasi

1. **Clone repositori ini** atau unduh sebagai ZIP.

   ```bash
   git clone https://github.com/zoelabbb/Task-Tracker-CLI.git
   ```

2. **Navigasi ke direktori proyek**:

   ```bash
   cd Task-Tracker-CLI
   ```

3. **Inisialisasi proyek**:

   ```bash
   npm init -y
   ```

## Penggunaan

Aplikasi ini dijalankan dari command line. Berikut adalah daftar perintah yang tersedia dan cara menggunakannya:

### 1. Menambah Tugas

Untuk menambahkan tugas baru, gunakan perintah berikut:

```bash
node taskTracker.js add "Mandi sore"
```

**Contoh**:

```bash
node taskTracker.js add "Beli bahan makanan"
```

### 2. Memperbarui Tugas

Untuk memperbarui deskripsi tugas yang ada, gunakan perintah ini:

```bash
node taskTracker.js update ID "Deskripsi baru"
```

**Contoh**:

```bash
node taskTracker.js update 1 "Beli bahan makanan dan masak malam ini"
```

### 3. Menghapus Tugas

Jika Anda ingin menghapus tugas tertentu, gunakan perintah berikut:

```bash
node taskTracker.js delete ID
```

**Contoh**:

```bash
node taskTracker.js delete 1
```

### 4. Menandai Tugas sebagai Sedang Dikerjakan

Tandai tugas tertentu sebagai "sedang dikerjakan" dengan perintah:

```bash
node taskTracker.js mark-in-progress ID
```

**Contoh**:

```bash
node taskTracker.js mark-in-progress 1
```

### 5. Menandai Tugas sebagai Selesai

Untuk menandai tugas sebagai selesai, gunakan:

```bash
node taskTracker.js mark-done ID
```

**Contoh**:

```bash
node taskTracker.js mark-done 1
```

### 6. Daftar Semua Tugas

Untuk melihat semua tugas yang telah ditambahkan, gunakan perintah:

```bash
node taskTracker.js list
```

### 7. Daftar Tugas Berdasarkan Status

Anda dapat melihat tugas berdasarkan statusnya:

- Untuk tugas selesai:

  ```bash
  node taskTracker.js list done
  ```

- Untuk tugas belum selesai:

  ```bash
  node taskTracker.js list todo
  ```

- Untuk tugas yang sedang dikerjakan:

  ```bash
  node taskTracker.js list in-progress
  ```

## Struktur Data Tugas

Setiap tugas disimpan dalam format JSON dengan properti berikut:

- **id**: Identifikasi unik untuk tugas
- **description**: Deskripsi singkat tentang tugas
- **status**: Status tugas (todo, in-progress, done)
- **createdAt**: Tanggal dan waktu saat tugas dibuat
- **updatedAt**: Tanggal dan waktu saat tugas terakhir diperbarui

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan buat fork repositori ini dan kirim pull request.

## Kontak

Jika Anda memiliki pertanyaan atau umpan balik, jangan ragu untuk menghubungi saya.
