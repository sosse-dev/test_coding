# 🧩 Aplikasi Manajemen Pengguna

Sebuah sistem manajemen pengguna full-stack yang dibangun menggunakan **React + Express**, dengan dukungan **TypeScript**, **MySQL**, **Drizzle ORM**, serta teknologi modern seperti **Zod**, **React Hook Form**, **ShadCN UI**, dan **TailwindCSS**.

---

## ✨ Fitur

### ✅ Frontend (React)
- Dibuat menggunakan **Vite + TypeScript**
- Validasi form dengan **Zod + React Hook Form**
- Tampilan UI menggunakan **ShadCN UI** dan **Tailwind CSS**
- Halaman yang tersedia:
  - Beranda
  - Tambah Pengguna Baru
  - Daftar Pengguna
  - Edit Pengguna

### ✅ Backend (Express.js)
- Dikembangkan dengan **TypeScript**
- Menggunakan **Drizzle ORM** untuk interaksi database
- API RESTful untuk manajemen data pengguna
- Terhubung ke database **MySQL**

---

## 🛠️ Pengembangan Lokal

### ⚙️ Prasyarat
- Node.js (versi 18 atau lebih tinggi)
- MySQL (berjalan secara lokal atau remote)
- [Vercel CLI](https://vercel.com/docs/cli) (opsional, untuk proses deployment)
  
---

### 📁 Struktur Proyek
```
.
├── client/        # Frontend React (Vite + Tailwind + ShadCN)
├── server/        # Backend Express (TypeScript + Drizzle ORM)
```

### 📦 Install Dependencies

```
(Server)
cd server
npm install

(Client)
cd client
npm install
```

### ⚙️ Environment Variables
```
(Server)
DATABASE_URL=
PORT=

(client)
VITE_API_URL=
```


### 🧪 Menjalankan Secara Lokal
```
(Server)
cd server
npm run dev

(Client)
cd client
npm run dev
```
Frontend berjalan di http://localhost:5173  
Backend API di http://localhost:3000

### 🌐 Deployment (Vercel)
```
📦 Langkah-langkah
1. Push ke GitHub
2. Frontend: langsung deploy folder /client ke Vercel (dengan tambahan file vercel.json)
3. Backend: https://vercel.com/guides/using-express-with-vercel
```

### 📡 API Documentation
| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| GET    | `/users`           | Get all users |
| GET    | `/users/search/:q` | Search users  |
| POST   | `/users`           | Add new user  |
| PUT    | `/users/:id`       | Update user   |
| DELETE | `/users/:id`       | Delete user   |
