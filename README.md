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
- 🏗️ Modüler ve ölçeklenebilir mimari

## 🛠️ Teknolojiler

### Frontend
- React 19 (Hooks, Custom Hooks)
- Vite 7
- Tailwind CSS 4
- Modern ES Modules
- Modüler Component Yapısı

### Backend
- Express.js 5
- better-sqlite3
- MVC + Service Layer Pattern
- Middleware tabanlı mimari

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
   npm run dev
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
├── client/                    # React Frontend
│   └── src/
│       ├── components/        # UI Bileşenleri
│       │   ├── common/        # Yeniden kullanılabilir bileşenler
│       │   │   ├── Button.jsx
│       │   │   ├── Input.jsx
│       │   │   ├── Card.jsx
│       │   │   ├── Spinner.jsx
│       │   │   ├── Notification.jsx
│       │   │   └── EmptyState.jsx
│       │   ├── AddFilmForm.jsx
│       │   ├── FilmList.jsx
│       │   ├── FilmItem.jsx
│       │   └── StatsCard.jsx
│       ├── hooks/             # Custom React Hooks
│       │   ├── useFilms.js
│       │   ├── useNotification.js
│       │   └── useLocalStorage.js
│       ├── layouts/           # Sayfa Layout'ları
│       │   ├── MainLayout.jsx
│       │   ├── Header.jsx
│       │   └── Footer.jsx
│       ├── services/          # API İletişim Katmanı
│       │   └── filmService.js
│       ├── constants/         # Sabit Değerler
│       │   └── index.js
│       ├── utils/             # Yardımcı Fonksiyonlar
│       │   ├── dateUtils.js
│       │   └── stringUtils.js
│       ├── App.jsx            # Ana Uygulama
│       └── main.jsx           # Giriş Noktası
│
├── server/                    # Express Backend
│   ├── config/                # Yapılandırma
│   │   └── index.js
│   ├── controllers/           # HTTP İstek İşleyicileri
│   │   └── filmController.js
│   ├── middleware/            # Express Middleware'ler
│   │   ├── errorHandler.js
│   │   ├── validateRequest.js
│   │   └── index.js
│   ├── models/                # Veritabanı İşlemleri
│   │   └── filmModel.js
│   ├── routes/                # API Rotaları
│   │   └── filmRoutes.js
│   ├── services/              # İş Mantığı Katmanı
│   │   └── filmService.js
│   ├── utils/                 # Yardımcı Araçlar
│   │   ├── logger.js
│   │   ├── response.js
│   │   └── index.js
│   ├── db.js                  # Veritabanı Bağlantısı
│   └── index.js               # Sunucu Giriş Noktası
│
└── README.md
```

## 🏗️ Mimari

### Backend Katmanları
```
Request → Routes → Middleware → Controller → Service → Model → Database
```

### Frontend Katmanları
```
App → Layouts → Components → Hooks → Services → API
```

## 🔗 API Endpoints

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/api/films` | Tüm filmleri listele |
| GET | `/api/films/:id` | Tek film getir |
| GET | `/api/films/stats` | İstatistikler |
| POST | `/api/films` | Yeni film ekle |
| PUT | `/api/films/:id` | Film güncelle |
| DELETE | `/api/films/:id` | Film sil |
| GET | `/api/health` | Sunucu durumu |

## 🧩 Yeni Özellik Ekleme

### Backend'e yeni endpoint eklemek:
1. `models/` - Veritabanı işlemi ekle
2. `services/` - İş mantığı ekle
3. `controllers/` - HTTP handler ekle
4. `routes/` - Route tanımla
5. `middleware/` - Gerekirse validasyon ekle

### Frontend'e yeni özellik eklemek:
1. `services/` - API çağrısı ekle
2. `hooks/` - Custom hook oluştur
3. `components/` - UI bileşeni oluştur
4. `constants/` - Sabitler ekle

## 👤 Geliştirici

**Habil Yazıcı**

## 📄 Lisans

MIT License