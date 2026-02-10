# Card Game - Hafıza Oyunu

React ve **Redux** ile geliştirilmiş hafıza (eşleştirme) kart oyunu. Kartları çevir, aynı sembolleri eşleştir.

---

## Özellikler

- **Redux** ile tüm oyun state’i (kartlar, açık kartlar, hamle sayısı, kazanma) yönetilir
- **5x5 matris** — 24 kart (12 çift) + 1 boş hücre, karma dağılım
- Eşleşmezse: kartlar kapanır, **-10 puan**; eşleşirse: açık kalır, **+50 puan**
- Hamle sayacı ve “Yeniden Başla” butonu
- Kazanınca tebrik + Yeniden Oyna ile kartlar kapanıp karıştırılır

---

## Proje yapısı

```
CardGame/
├── index.html              # Giriş HTML (sadece root ve script)
├── src/
│   ├── main.jsx            # React + Provider(store) girişi
│   ├── App.jsx             # Ana uygulama (Header + GameBoard)
│   ├── App.css
│   ├── index.css            # Global stiller
│   ├── store/
│   │   ├── store.js         # Redux store
│   │   └── slices/
│   │       └── gameSlice.js # Oyun state ve aksiyonlar
│   └── components/
│       ├── Header.jsx       # Başlık, hamle, yeniden başla, kazanma mesajı
│       ├── Header.module.css
│       ├── GameBoard.jsx    # Kart grid + eşleşme zamanlayıcı
│       ├── GameBoard.module.css
│       ├── Card.jsx         # Tek kart (çevirme, tıklama)
│       └── Card.module.css
├── package.json
├── vite.config.js
└── README.md
```

Tüm iş mantığı index üzerinden değil; **Redux (gameSlice)** ve **bileşenler** ile ayrılmıştır.

---

## Kurulum ve çalıştırma

**Önce bağımlılıkları yükleyin, sonra dev sunucusunu başlatın:**

```bash
cd /Users/ahmetarifyildirim/Documents/CardGame
npm install
npm run dev
```

Tarayıcıda **http://localhost:5173** adresini açın.

**Sayfa boş görünüyorsa:**
1. `index.html` dosyasını **doğrudan çift tıklayarak açmayın** (file:// ile modül yüklenmez).
2. Mutlaka **CardGame klasöründe** `npm install` ve ardından `npm run dev` çalıştırın.
3. Açılan adres **http://localhost:5173** olmalı (Vite bunu yazacaktır).

Build almak için: `npm run build`

---

## Kullanılan teknolojiler

- **React 18**
- **Redux Toolkit** (createSlice, configureStore)
- **react-redux** (Provider, useSelector, useDispatch)
- **Vite** (derleme ve dev sunucu)
