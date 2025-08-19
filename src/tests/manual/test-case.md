# Manual Test Cases — Calis Fun Web

## A. Global & Navigasi
1. **Menu & Routing**
   - Buka Home → klik semua link navbar/footer → pastikan URL & konten benar.
   - **Expected:** Tidak ada 404/500; tampilan sesuai desain.
2. **Responsiveness**
   - Cek min. 3 breakpoint: 375px, 768px, 1280px.
   - **Expected:** Layout tidak patah; komponen shadcn (Dialog, Sheet) tampil proporsional.
3. **Tema & Aksesibilitas**
   - Toggle dark mode (bila ada). Tab-navigation, fokus ring terlihat.
   - **Expected:** Kontras OK; semua tombol bisa di-operasikan keyboard.

## B. Auth (bila ada)
1. **Login Valid**
   - Input email & password valid → submit.
   - **Expected:** Redirect ke dashboard, token tersimpan aman (httpOnly cookie/secure storage).
2. **Login Invalid**
   - Input format salah / kredensial salah.
   - **Expected:** Error toast jelas; tidak ada redirect.
3. **Logout**
   - Klik logout.
   - **Expected:** Kembali ke halaman publik; state user ter-reset.

## C. Halaman Questions
1. **Load Data**
   - Masuk /questions saat jaringan normal.
   - **Expected:** Skeleton/loading muncul, lalu list tampil.
2. **Create/Update**
   - Tambah pertanyaan baru; edit pertanyaan existing via Dialog shadcn.
   - **Expected:** Validasi form, toast sukses, list ter-update.
3. **Delete**
   - Hapus item; konfirmasi.
   - **Expected:** Item hilang, toast sukses.
4. **Network Error**
   - Simulasi offline/500 (DevTools → Network offline).
   - **Expected:** Error state/empty state sesuai desain & bisa retry.

## D. Performance & Stability
1. **Reload/Deep-link**
   - Akses langsung URL nested (mis. /questions/123/edit).
   - **Expected:** Tidak blank; data ke-fetch ulang bila perlu.
2. **Form Validation**
   - Kosongkan field yang required; masukkan input tidak valid.
   - **Expected:** Pesan error jelas, tidak crash.

## E. Browser Support
- **Latest Chrome, Edge, Firefox** minimal.  
  **Expected:** Tidak ada error di console; UI konsisten.
