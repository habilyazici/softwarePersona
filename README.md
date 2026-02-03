# 🎬 Film Koleksiyonu

Modern ve şık bir film yönetim uygulaması. Favori filmlerinizi kaydedin, düzenleyin ve yönetin.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![Express](https://img.shields.io/badge/Express-5-green?logo=express)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-cyan?logo=tailwindcss)

## ✨ Özellikler

- 📝 Film ekleme, düzenleme ve silme
- 🎨 Modern ve responsive tasarım
- 💾 SQLite veritabanı ile kalıcı veri saklama
- ⚡ Hızlı ve optimize edilmiş performans
- 🔔 Anlık bildirimler
- 📊 Film istatistikleri

## 🛠️ Teknolojiler

### Frontend
- React 19
- Vite 7
- Tailwind CSS 4
- Modern ES Modules

### Backend
- Express.js 5
- better-sqlite3
- CORS desteği

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/username/softwarePersona.git
   cd softwarePersona
   ```

2. **Backend kurulumu:**
   ```bash
   cd server
   npm install
   npm start
   ```
   Server `http://localhost:3001` adresinde çalışacaktır.

3. **Frontend kurulumu (yeni terminal):**
   ```bash
   cd client
   npm install
   npm run dev
   ```
   Client `http://localhost:5173` adresinde çalışacaktır.

## 📁 Proje Yapısı

```
softwarePersona/
├── client/                 # React frontend
│   ├── src/
│   │   ├── api/           # API fonksiyonları
│   │   ├── components/    # React bileşenleri
│   │   ├── App.jsx        # Ana uygulama
│   │   └── main.jsx       # Giriş noktası
│   └── package.json
│
├── server/                 # Express backend
│   ├── controllers/       # İstek işleyicileri
│   ├── models/            # Veritabanı işlemleri
│   ├── routes/            # API rotaları
│   ├── db.js              # Veritabanı bağlantısı
│   └── index.js           # Sunucu giriş noktası
│
└── README.md
```

## 🔗 API Endpoints

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/api/films` | Tüm filmleri listele |
| POST | `/api/films` | Yeni film ekle |
| PUT | `/api/films/:id` | Film güncelle |
| DELETE | `/api/films/:id` | Film sil |
| GET | `/api/health` | Sunucu durumu |

## 🎨 Ekran Görüntüleri

Uygulama modern bir gradient tasarımı ve glassmorphism efektleri kullanmaktadır.

## 👤 Geliştirici

**Habil Yazıcı**

## 📄 Lisans

MIT License