/* =========================================================
   TECHNOVA
   Большой каталог + корзина + избранное + аккаунт +
   поддержка + оформление заказа
========================================================= */


/* =========================================================
   КАТЕГОРИИ
========================================================= */

const categories = [

  {
    id: "all",
    name: "Все товары",
    icon: "🛍️"
  },

  {
    id: "smartphones",
    name: "Смартфоны",
    icon: "📱"
  },

  {
    id: "laptops",
    name: "Ноутбуки",
    icon: "💻"
  },

  {
    id: "tvs",
    name: "Телевизоры",
    icon: "📺"
  },

  {
    id: "audio",
    name: "Наушники и аудио",
    icon: "🎧"
  },

  {
    id: "gaming",
    name: "Игровые приставки",
    icon: "🎮"
  },

  {
    id: "computers",
    name: "Компьютеры",
    icon: "🖥️"
  },

  {
    id: "appliances",
    name: "Бытовая техника",
    icon: "🏠"
  },

  {
    id: "tablets",
    name: "Планшеты",
    icon: "📲"
  },

  {
    id: "watches",
    name: "Смарт-часы",
    icon: "⌚"
  },

  {
    id: "accessories",
    name: "Аксессуары",
    icon: "🔌"
  }

];


/* =========================================================
   БРЕНДЫ
========================================================= */

const brands = [

  "Apple",
  "Samsung",
  "Xiaomi",
  "ASUS",
  "Lenovo",
  "HP",
  "Acer",
  "LG",
  "Sony",
  "JBL",
  "Huawei",
  "Nintendo",
  "Microsoft",
  "Bosch",
  "Dyson",
  "Philips",
  "Logitech",
  "MSI"

];


/* =========================================================
   ТОВАРЫ
========================================================= */

const products = [

/* ================= SMARTPHONES ================= */

 {
    id: 1,
    name: "Apple iPhone 16",
    category: "smartphones",
    brand: "Apple",
    price: 349990, // Базовая цена (для 128 ГБ)
    oldPrice: 379990,
    rating: 4.9,
    badge: "Хит продаж",
    image: "https://pi.mdev.kz/b12b3783-7714-11ef-a269-005056b6e990?type=webp&w=610&h=610", // Основное изображение по умолчанию
    specs: { "Экран": "6.1 дюйма", "Связь": "5G" },
    options: {
      memory: [
        { size: "128 ГБ", price: 349990, oldPrice: 379990 },
        { size: "256 ГБ", price: 399990, oldPrice: 429990 },
        { size: "512 ГБ", price: 469990, oldPrice: 499990 }
      ],
      colors: [
        { name: "Белый", hex: "#f8f9fa", image: "https://pi.mdev.kz/b12b37c0-7714-11ef-a269-005056b6e990?type=webp&w=610&h=610" },
        { name: "Розовый", hex: "#ffb6c1", image: "https://pi.mdev.kz/b12b3793-7714-11ef-a269-005056b6e990?type=webp&w=610&h=610" },
        { name: "Синий", hex: "#87ceeb", image: "https://pi.mdev.kz/b12b37b1-7714-11ef-a269-005056b6e990?type=webp&w=610&h=610" },
        { name: "Зеленый", hex: "#98fb98", image: "https://pi.mdev.kz/b12b37a2-7714-11ef-a269-005056b6e990?type=webp&w=120&h=120" }
      ]
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S25",
    category: "smartphones",
    brand: "Samsung",
    price: 399990,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
    specs: { "Память": "256 ГБ", "Экран": "AMOLED", "Связь": "5G" }
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 14",
    category: "smartphones",
    brand: "Xiaomi",
    price: 99990,
    rating: 4.7,
    image: "https://pi.mdev.kz/2d4b284a-db73-11ee-a265-005056b6e990?type=webp&w=610&h=610",
    specs: { "Память": "256 ГБ", "Экран": "AMOLED", "Связь": "4G" }
  },
  {
    id: 4,
    name: "Samsung Galaxy A56",
    category: "smartphones",
    brand: "Samsung",
    price: 189990,
    rating: 4.8,
    image: "https://pi.mdev.kz/23dd71a0-ffe0-4936-a424-001724aa3062?type=webp&w=610&h=610",
    specs: { "Память": "256 ГБ", "Экран": "6.7 дюйма", "Связь": "5G" }
  },
  {
    id: 5,
    name: "Apple iPhone 15 128GB",
    category: "smartphones",
    brand: "Apple",
    price: 299990,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
    specs: { "Память": "128 ГБ", "Камера": "48 Мп", "Связь": "5G" }
  },
  {
    id: 6,
    name: "Xiaomi Redmi 13",
    category: "smartphones",
    brand: "Xiaomi",
    price: 69990,
    rating: 4.6,
    image: "https://pi.mdev.kz/9e725756-b421-11ee-a264-005056b6dbd7?type=webp&w=610&h=610",
    specs: { "Память": "128 ГБ", "Экран": "6.79 дюйма", "Батарея": "5030 мА·ч" }
  },
  {
    id: 7,
    name: "Samsung Galaxy Z Flip",
    category: "smartphones",
    brand: "Samsung",
    price: 449990,
    rating: 4.7,
    image: "https://pi.mdev.kz/5916125a-c614-4016-85cb-2748d4f4a541?type=webp&w=610&h=610",
    specs: { "Тип": "Складной", "Экран": "AMOLED", "Связь": "5G" }
  },
  {
    id: 8,
    name: "Google Pixel 9",
    category: "smartphones",
    brand: "Google",
    price: 329990,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
    specs: { "Память": "128 ГБ", "Камера": "50 Мп", "Связь": "5G" }
  },
  {
    id: 9,
    name: "HONOR X9c",
    category: "smartphones",
    brand: "HONOR",
    price: 159990,
    rating: 4.7,
    image: "https://pi.mdev.kz/6af0f802-b2c3-11ef-a26e-005056b6e990?type=webp&w=610&h=610",
    specs: { "Память": "256 ГБ", "Экран": "AMOLED", "Связь": "5G" }
  },
  {
    id: 10,
    name: "OnePlus 13",
    category: "smartphones",
    brand: "OnePlus",
    price: 429990,
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIA17KevtXqMi0MH2wTabIXvSv5oQdCzLiTvnC7u1Q2A&s=10",
    specs: { "Память": "512 ГБ", "Экран": "AMOLED", "Связь": "5G" }
  },

/* ================= LAPTOPS ================= */

{
  id: 8,
  name: "Apple MacBook Air 13 M2 8/256GB",
  category: "laptops",
  brand: "Apple",
  price: 529990,
  oldPrice: 579990,
  rating: 4.9,
  badge: "ХИТ",
  image: "https://assets.getmobil.com/uploads/77174/getmobil-apple-macbook-pro-136-inc-2022-gece-yarisi-1-.webp",
  specs: {
    "Экран": '13.6" Liquid Retina',
    "Процессор": "Apple M2",
    "ОЗУ": "8 ГБ",
    "SSD": "256 ГБ",
    "Вес": "1.24 кг"
  }
},

{
  id: 9,
  name: "ASUS ROG Strix G16 RTX 4060",
  category: "laptops",
  brand: "ASUS",
  price: 749990,
  oldPrice: 819990,
  rating: 4.9,
  badge: "ИГРОВОЙ",
  image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=700&q=85",
  specs: {
    "Экран": '16" QHD+ 240 Гц',
    "Процессор": "Intel Core i7",
    "ОЗУ": "16 ГБ DDR5",
    "SSD": "1 ТБ",
    "Видеокарта": "RTX 4060"
  }
},

{
  id: 10,
  name: "Lenovo IdeaPad Slim 3 15",
  category: "laptops",
  brand: "Lenovo",
  price: 249990,
  oldPrice: 279990,
  rating: 4.6,
  badge: "ВЫГОДНО",
  image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&q=85",
  specs: {
    "Экран": '15.6" Full HD',
    "Процессор": "Intel Core i5",
    "ОЗУ": "8 ГБ",
    "SSD": "512 ГБ",
    "ОС": "Windows 11"
  }
},

{
  id: 11,
  name: "HP Pavilion 15 Core i5",
  category: "laptops",
  brand: "HP",
  price: 299990,
  oldPrice: 329990,
  rating: 4.5,
  badge: "SALE",
  image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=700&q=85",
  specs: {
    "Экран": '15.6" IPS',
    "Процессор": "Intel Core i5",
    "ОЗУ": "16 ГБ",
    "SSD": "512 ГБ",
    "Графика": "Intel Iris Xe"
  }
},

{
  id: 12,
  name: "Acer Nitro V 15 RTX 4050",
  category: "laptops",
  brand: "Acer",
  price: 449990,
  oldPrice: 499990,
  rating: 4.7,
  badge: "GAMING",
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=700&q=85",
  specs: {
    "Экран": '15.6" 144 Гц',
    "Процессор": "Intel Core i5",
    "ОЗУ": "16 ГБ",
    "SSD": "512 ГБ",
    "Видеокарта": "RTX 4050"
  }
},

/* ================= TV ================= */

{
  id: 13,
  name: 'LG OLED 55" C3 4K Smart TV',
  category: "tvs",
  brand: "LG",
  price: 689990,
  oldPrice: 759990,
  rating: 4.9,
  badge: "OLED",
  image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=900&q=85",
  specs: {
    "Диагональ": '55"',
    "Разрешение": "4K Ultra HD",
    "Матрица": "OLED",
    "Частота": "120 Гц",
    "ОС": "webOS"
  }
},

{
  id: 14,
  name: 'Samsung QLED 65" Q80C',
  category: "tvs",
  brand: "Samsung",
  price: 599990,
  oldPrice: 649990,
  rating: 4.8,
  badge: "QLED",
  image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=900&q=85",
  specs: {
    "Диагональ": '65"',
    "Разрешение": "4K",
    "Матрица": "QLED",
    "Частота": "120 Гц",
    "ОС": "Tizen"
  }
},

{
  id: 15,
  name: 'Xiaomi TV A Pro 43" 4K',
  category: "tvs",
  brand: "Xiaomi",
  price: 159990,
  oldPrice: 179990,
  rating: 4.6,
  badge: "SALE",
  image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=900&q=85",
  specs: {
    "Диагональ": '43"',
    "Разрешение": "4K",
    "Тип": "QLED",
    "ОС": "Google TV"
  }
},

{
  id: 16,
  name: 'LG 50" NanoCell 4K',
  category: "tvs",
  brand: "LG",
  price: 249990,
  oldPrice: 279990,
  rating: 4.7,
  badge: "ХИТ",
  image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=900&q=85",
  specs: {
    "Диагональ": '50"',
    "Разрешение": "4K",
    "Матрица": "NanoCell",
    "ОС": "webOS"
  }
},

/* ================= AUDIO ================= */

{
  id: 17,
  name: "Sony WH-1000XM5 Black",
  category: "audio",
  brand: "Sony",
  price: 169990,
  oldPrice: 189990,
  rating: 4.9,
  badge: "ТОП ЗВУК",
  image: "https://i.ebayimg.com/images/g/fv0AAeSwumNpiqP6/s-l1200.jpg",
  specs: {
    "Тип": "Полноразмерные",
    "ANC": "Активное шумоподавление",
    "Bluetooth": "5.2",
    "Автономность": "До 30 часов",
    "Кодеки": "LDAC"
  }
},

{
  id: 18,
  name: "Apple AirPods Pro 2 USB-C",
  category: "audio",
  brand: "Apple",
  price: 119990,
  oldPrice: 134990,
  rating: 4.9,
  badge: "ХИТ",
  image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=700&q=85",
  specs: {
    "Чип": "Apple H2",
    "ANC": "Активное",
    "Разъем": "USB-C",
    "Защита": "IP54",
    "Автономность": "До 30 часов с кейсом"
  }
},

{
  id: 19,
  name: "JBL Tune 770NC",
  category: "audio",
  brand: "JBL",
  price: 49990,
  oldPrice: 59990,
  rating: 4.7,
  badge: "SALE",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=85",
  specs: {
    "Тип": "Накладные",
    "ANC": "Есть",
    "Bluetooth": "5.3",
    "Автономность": "До 70 часов"
  }
},

{
  id: 20,
  name: "Samsung Galaxy Buds2 Pro",
  category: "audio",
  brand: "Samsung",
  price: 79990,
  oldPrice: 94990,
  rating: 4.7,
  badge: "TOP",
  image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700&q=85",
  specs: {
    "Тип": "TWS",
    "ANC": "Есть",
    "Bluetooth": "5.3",
    "Защита": "IPX7"
  }
},

/* ================= GAMING ================= */

{
  id: 21,
  name: "Sony PlayStation 5 Slim",
  category: "gaming",
  brand: "Sony",
  price: 299990,
  oldPrice: 329990,
  rating: 4.9,
  badge: "ХИТ",
  image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=700&q=85",
  specs: {
    "Память": "1 ТБ SSD",
    "Разрешение": "До 4K",
    "HDR": "Есть",
    "Комплект": "DualSense"
  }
},

{
  id: 22,
  name: "Xbox Series X 1TB",
  category: "gaming",
  brand: "Microsoft",
  price: 289990,
  oldPrice: 319990,
  rating: 4.8,
  badge: "TOP",
  image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=700&q=85",
  specs: {
    "SSD": "1 ТБ",
    "Разрешение": "До 4K",
    "FPS": "До 120 FPS",
    "HDR": "Есть"
  }
},

{
  id: 23,
  name: "Nintendo Switch OLED",
  category: "gaming",
  brand: "Nintendo",
  price: 189990,
  oldPrice: 209990,
  rating: 4.8,
  badge: "ХИТ",
  image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=700&q=85",
  specs: {
    "Экран": '7" OLED',
    "Память": "64 ГБ",
    "Режим": "Портативный / ТВ",
    "Контроллер": "Joy-Con"
  }
},

/* ================= COMPUTERS ================= */

{
  id: 24,
  name: "Игровой ПК MECHTA Ryzen 5 RTX 4060",
  category: "computers",
  brand: "MSI",
  price: 599990,
  oldPrice: 649990,
  rating: 4.8,
  badge: "GAMING",
  image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=700&q=85",
  specs: {
    "Процессор": "Ryzen 5",
    "Видеокарта": "RTX 4060",
    "ОЗУ": "16 ГБ",
    "SSD": "1 ТБ",
    "Питание": "650 Вт"
  }
},

{
  id: 25,
  name: "ASUS ROG Gaming Desktop",
  category: "computers",
  brand: "ASUS",
  price: 899990,
  oldPrice: 949990,
  rating: 4.9,
  badge: "PRO",
  image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=700&q=85",
  specs: {
    "Процессор": "Intel Core i7",
    "Видеокарта": "RTX 4070",
    "ОЗУ": "32 ГБ",
    "SSD": "1 ТБ"
  }
},

/* ================= APPLIANCES ================= */

{
  id: 26,
  name: "Dyson V15 Detect Absolute",
  category: "appliances",
  brand: "Dyson",
  price: 389990,
  oldPrice: 429990,
  rating: 4.9,
  badge: "ХИТ",
  image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=700&q=85",
  specs: {
    "Тип": "Беспроводной",
    "Мощность": "Высокая",
    "Фильтр": "HEPA",
    "Работа": "До 60 минут"
  }
},

{
  id: 27,
  name: "Bosch Serie 6 стиральная машина",
  category: "appliances",
  brand: "Bosch",
  price: 299990,
  oldPrice: 329990,
  rating: 4.8,
  badge: "BEST",
  image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=700&q=85",
  specs: {
    "Загрузка": "9 кг",
    "Отжим": "1400 об/мин",
    "Мотор": "Инверторный",
    "Класс": "A+++"
  }
},

{
  id: 28,
  name: "Philips Airfryer XXL",
  category: "appliances",
  brand: "Philips",
  price: 89990,
  oldPrice: 109990,
  rating: 4.7,
  badge: "SALE",
  image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=700&q=85",
  specs: {
    "Объем": "7.3 л",
    "Мощность": "2225 Вт",
    "Управление": "Электронное"
  }
},

/* ================= TABLETS ================= */

{
  id: 29,
  name: "Apple iPad Air 11 M2 128GB",
  category: "tablets",
  brand: "Apple",
  price: 299990,
  oldPrice: 329990,
  rating: 4.9,
  badge: "NEW",
  image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=700&q=85",
  specs: {
    "Экран": '11" Liquid Retina',
    "Процессор": "Apple M2",
    "Память": "128 ГБ",
    "Связь": "Wi-Fi"
  }
},

{
  id: 30,
  name: "Samsung Galaxy Tab S9 FE",
  category: "tablets",
  brand: "Samsung",
  price: 229990,
  oldPrice: 259990,
  rating: 4.8,
  badge: "TOP",
  image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=700&q=85",
  specs: {
    "Экран": '10.9"',
    "Память": "128 ГБ",
    "ОЗУ": "6 ГБ",
    "Стилус": "S Pen"
  }
},

/* ================= WATCHES ================= */

{
  id: 31,
  name: "Apple Watch Series 9 45mm",
  category: "watches",
  brand: "Apple",
  price: 189990,
  oldPrice: 219990,
  rating: 4.9,
  badge: "ХИТ",
  image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=700&q=85",
  specs: {
    "Экран": "Always-On Retina",
    "Чип": "S9",
    "Защита": "WR50",
    "GPS": "Есть"
  }
},

{
  id: 32,
  name: "Samsung Galaxy Watch6 Classic",
  category: "watches",
  brand: "Samsung",
  price: 139990,
  oldPrice: 169990,
  rating: 4.8,
  badge: "SALE",
  image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=85",
  specs: {
    "Экран": "Super AMOLED",
    "GPS": "Есть",
    "NFC": "Есть",
    "Защита": "5ATM"
  }
},

/* ================= ACCESSORIES ================= */

{
  id: 33,
  name: "Logitech MX Master 3S",
  category: "accessories",
  brand: "Logitech",
  price: 39990,
  oldPrice: 45990,
  rating: 4.9,
  badge: "TOP",
  image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=700&q=85",
  specs: {
    "Тип": "Беспроводная мышь",
    "DPI": "8000",
    "Подключение": "Bluetooth / USB",
    "Кнопки": "7"
  }
},

{
  id: 34,
  name: "Logitech G Pro Keyboard",
  category: "accessories",
  brand: "Logitech",
  price: 59990,
  oldPrice: 69990,
  rating: 4.8,
  badge: "GAMING",
  image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700&q=85",
  specs: {
    "Тип": "Механическая",
    "Подсветка": "RGB",
    "Подключение": "USB",
    "Переключатели": "GX"
  }
},

{
  id: 35,
  name: "Samsung 2TB Portable SSD",
  category: "accessories",
  brand: "Samsung",
  price: 119990,
  oldPrice: 139990,
  rating: 4.9,
  badge: "FAST",
  image: "https://images.samsung.com/is/image/samsung/kz-ru-portable-ssd-t7-mu-pc2t0t-ww-frontgray-319159972?$1164_776_PNG$",
  specs: {
    "Объем": "2 ТБ",
    "Интерфейс": "USB-C",
    "Скорость": "До 1050 МБ/с"
  }
},

{
  id: 36,
  name: "Apple MagSafe Charger",
  category: "accessories",
  brand: "Apple",
  price: 19990,
  oldPrice: 22990,
  rating: 4.7,
  badge: "ORIGINAL",
  image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=700&q=85",
  specs: {
    "Тип": "Беспроводная зарядка",
    "Мощность": "15 Вт",
    "Разъем": "USB-C"
  }
}

];
/* =========================================================
   АВТОМАТИЧЕСКОЕ ДОБАВЛЕНИЕ 100 УНИКАЛЬНЫХ ТЕЛЕФОНОВ 
   (С правильными брендами, картинками и рабочей сменой цветов)
========================================================= */

// База реальных картинок, строго распределенная по брендам
const brandImagesMap = {
  "Apple": [
    "https://pi.mdev.kz/b12b3783-7714-11ef-a269-005056b6e990?type=webp&w=610&h=610",
    "https://pi.mdev.kz/b12b37c0-7714-11ef-a269-005056b6e990?type=webp&w=610&h=610",
    "https://pi.mdev.kz/b12b3793-7714-11ef-a269-005056b6e990?type=webp&w=610&h=610",
    "https://pi.mdev.kz/b12b37b1-7714-11ef-a269-005056b6e990?type=webp&w=610&h=610"
  ],
  "Samsung": [
    "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
    "https://pi.mdev.kz/23dd71a0-ffe0-4936-a424-001724aa3062?type=webp&w=610&h=610",
    "https://pi.mdev.kz/5916125a-c614-4016-85cb-2748d4f4a541?type=webp&w=610&h=610"
  ],
  "Xiaomi": [
    "https://pi.mdev.kz/2d4b284a-db73-11ee-a265-005056b6e990?type=webp&w=610&h=610",
    "https://pi.mdev.kz/9e725756-b421-11ee-a264-005056b6dbd7?type=webp&w=610&h=610"
  ],
  "HONOR": [
    "https://pi.mdev.kz/6af0f802-b2c3-11ef-a26e-005056b6e990?type=webp&w=610&h=610"
  ],
  "Huawei": [
    "https://pi.mdev.kz/6af0f802-b2c3-11ef-a26e-005056b6e990?type=webp&w=610&h=610"
  ],
  "Google": [
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600"
  ],
  "OnePlus": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIA17KevtXqMi0MH2wTabIXvSv5oQdCzLiTvnC7u1Q2A&s=10"
  ],
  "Realme": [
    "https://pi.mdev.kz/9e725756-b421-11ee-a264-005056b6dbd7?type=webp&w=610&h=610"
  ],
  "Vivo": [
    "https://pi.mdev.kz/23dd71a0-ffe0-4936-a424-001724aa3062?type=webp&w=610&h=610"
  ],
  "OPPO": [
    "https://pi.mdev.kz/2d4b284a-db73-11ee-a265-005056b6e990?type=webp&w=610&h=610"
  ]
};

const phoneBrandsList = Object.keys(brandImagesMap);
const modelPrefixes = ["Pro", "Ultra", "Max", "Prime", "Neo", "Plus", "SE", "Note", "GT", "Slim"];

for (let i = 37; i <= 136; i++) {
  const brand = phoneBrandsList[i % phoneBrandsList.length];
  const prefix = modelPrefixes[(i * 3) % modelPrefixes.length];
  const seriesNum = (i * 17) % 90 + 10;
  
  // Берем массив картинок конкретно для этого бренда
  const imgs = brandImagesMap[brand];
  const img1 = imgs[i % imgs.length];
  const img2 = imgs[(i + 1) % imgs.length];
  const img3 = imgs[(i + 2) % imgs.length];

  const dynPrice = 89990 + (i * 3200) % 310000;
  const dynOldPrice = dynPrice + 40000;

  products.push({
    id: i,
    name: `${brand} ${prefix} ${seriesNum} Edition`,
    category: "smartphones",
    brand: brand,
    price: dynPrice,
    oldPrice: dynOldPrice,
    rating: +(4.4 + ((i * 2) % 6) * 0.1).toFixed(1),
    badge: i % 4 === 0 ? "ХИТ" : i % 3 === 0 ? "SALE" : "NEW",
    image: img1, // Главное фото в каталоге
    specs: { 
      "Экран": "6.7\" AMOLED", 
      "Связь": "5G", 
      "Аккумулятор": "5000 мА·ч" 
    },
    options: {
      memory: [
        { size: "128 ГБ", price: dynPrice, oldPrice: dynOldPrice },
        { size: "256 ГБ", price: dynPrice + 30000, oldPrice: dynOldPrice + 30000 },
        { size: "512 ГБ", price: dynPrice + 65000, oldPrice: dynOldPrice + 65000 }
      ],
      colors: [
        { name: "Черный", hex: "#222222", image: img1 },
        { name: "Синий", hex: "#4169e1", image: img2 },
        { name: "Серебристый", hex: "#c0c0c0", image: img3 }
      ]
    }
  });
}
/* =========================================================
   СОСТОЯНИЕ
========================================================= */

let currentCategory = "all";

let selectedBrands = [];

let cart = JSON.parse(
  localStorage.getItem("mechtaCart") || "[]"
);

let favorites = JSON.parse(
  localStorage.getItem("mechtaFavorites") || "[]"
);

let currentUser = JSON.parse(
  localStorage.getItem("mechtaUser") || "null"
);
let selectedMemoryIndex = 0;
let selectedColorIndex = 0;

/* =========================================================
   ЗАПУСК
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderCategories();

    renderBrands();

    filterProducts();

    updateCounters();

    updateAccountButton();

  }
);


/* =========================================================
   CATEGORIES
========================================================= */

function renderCategories() {

  const menu =
    document.getElementById("categoryMenu");

  menu.innerHTML = categories.map(
    category => {

      const count =
        category.id === "all"
          ? products.length
          : products.filter(
              p => p.category === category.id
            ).length;

      return `
        <button
          class="cat-item ${category.id === currentCategory ? "active" : ""}"
          onclick="selectCategory('${category.id}')">

          <span>
            ${category.icon}
            ${category.name}
          </span>

          <span>
            ${count}
          </span>

        </button>
      `;

    }
  ).join("");

}


/* =========================================================
   BRANDS
========================================================= */

function renderBrands() {

  const container =
    document.getElementById("brandFilters");

  container.innerHTML =
    brands.map(
      brand => `

        <label class="brand-item">

          <input
            type="checkbox"
            value="${brand}"
            onchange="toggleBrand('${brand}')"
            ${selectedBrands.includes(brand) ? "checked" : ""}>

          <span>
            ${brand}
          </span>

        </label>

      `
    ).join("");

}


/* =========================================================
   CATEGORY
========================================================= */

function selectCategory(catId) {

  currentCategory = catId;

  const category =
    categories.find(
      c => c.id === catId
    );

  document.getElementById(
    "categoryTitle"
  ).innerText =
    category
      ? category.name
      : "Все товары";

  renderCategories();

  filterProducts();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   BRAND FILTER
========================================================= */

function toggleBrand(brand) {

  if (
    selectedBrands.includes(brand)
  ) {

    selectedBrands =
      selectedBrands.filter(
        b => b !== brand
      );

  } else {

    selectedBrands.push(brand);

  }

  filterProducts();

}


/* =========================================================
   FILTER
========================================================= */

function filterProducts() {

  const searchInput =
    document.getElementById("searchInput");

  const minInput =
    document.getElementById("minPrice");

  const maxInput =
    document.getElementById("maxPrice");

  const sortSelect =
    document.getElementById("sortSelect");

  const query =
    searchInput.value
      .trim()
      .toLowerCase();

  const minPrice =
    Number(minInput.value) || 0;

  const maxPrice =
    Number(maxInput.value) || Infinity;

  const sort =
    sortSelect.value;


  const ratingElement =
    document.querySelector(
      'input[name="rating"]:checked'
    );

  const minRating =
    ratingElement
      ? Number(ratingElement.value)
      : 0;


  let list =
    products.filter(
      product => {

        const categoryMatch =
          currentCategory === "all" ||
          product.category === currentCategory;

        const searchMatch =
          product.name
            .toLowerCase()
            .includes(query) ||

          product.brand
            .toLowerCase()
            .includes(query);

        const priceMatch =
          product.price >= minPrice &&
          product.price <= maxPrice;

        const brandMatch =
          selectedBrands.length === 0 ||
          selectedBrands.includes(product.brand);

        const ratingMatch =
          product.rating >= minRating;

        return (
          categoryMatch &&
          searchMatch &&
          priceMatch &&
          brandMatch &&
          ratingMatch
        );

      }
    );


  if (sort === "price-asc") {

    list.sort(
      (a,b) => a.price - b.price
    );

  }


  if (sort === "price-desc") {

    list.sort(
      (a,b) => b.price - a.price
    );

  }


  if (sort === "rating") {

    list.sort(
      (a,b) => b.rating - a.rating
    );

  }


  if (sort === "discount") {

    list.sort(
      (a,b) => {

        const discountA =
          a.oldPrice
            ? a.oldPrice - a.price
            : 0;

        const discountB =
          b.oldPrice
            ? b.oldPrice - b.price
            : 0;

        return discountB - discountA;

      }
    );

  }


  document.getElementById(
    "productCounter"
  ).innerText =
    `${list.length} товаров`;


  renderProducts(list);

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts(items) {

  const grid =
    document.getElementById(
      "productsGrid"
    );


  if (items.length === 0) {

    grid.innerHTML = `

      <div style="
        grid-column:1/-1;
        background:#fff;
        border-radius:12px;
        padding:70px 20px;
        text-align:center;
      ">

        <div style="font-size:50px;">
          🔍
        </div>

        <h2 style="margin:15px 0;">
          Товары не найдены
        </h2>

        <p style="color:#777;">
          Попробуйте изменить поиск или фильтры.
        </p>

      </div>

    `;

    return;

  }


  grid.innerHTML =
    items.map(
      product => {

        const isFavorite =
          favorites.includes(product.id);

        return `

          <article
            class="product-card"
            onclick="openProductModal(${product.id})">

            ${
              product.badge
                ? `
                  <span class="card-badge">
                    ${product.badge}
                  </span>
                `
                : ""
            }


            <button
              class="favorite-btn ${isFavorite ? "active" : ""}"
              onclick="event.stopPropagation(); toggleFavorite(${product.id})">

              ${isFavorite ? "♥" : "♡"}

            </button>


            <div class="product-img-wrapper">

              <img
                class="product-img"
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
                onerror="imageError(this)"
              >

            </div>


            <div class="product-brand">
              ${product.brand}
            </div>


            <div class="product-title">
              ${product.name}
            </div>


            <div class="product-rating">
              ★ ${product.rating}
              <span style="color:#999;">
                · отзывы
              </span>
            </div>


            <div class="price-block">

              <span class="current-price">
                ${formatPrice(product.price)} ₸
              </span>

              ${
                product.oldPrice
                  ? `
                    <span class="old-price">
                      ${formatPrice(product.oldPrice)} ₸
                    </span>
                  `
                  : ""
              }

            </div>


            <div class="card-actions">

              <button
                class="add-cart-btn"
                onclick="
                  event.stopPropagation();
                  addToCart(${product.id});
                ">

                🛒 В корзину

              </button>

            </div>

          </article>

        `;

      }
    ).join("");

}



     /* =========================================================
   PRODUCT MODAL (С выбором памяти, цвета и отзывами)
========================================================= */

function openProductModal(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  // Сбрасываем к дефолтным значениям при открытии
  selectedMemoryIndex = 0;
  selectedColorIndex = 0;

  renderProductModalContent(product);
  openModal("productModal");
}

function renderProductModalContent(product) {
  const hasOptions = product.options && product.options.memory;
  
  const currentPrice = hasOptions ? product.options.memory[selectedMemoryIndex].price : product.price;
  const currentOldPrice = hasOptions ? product.options.memory[selectedMemoryIndex].oldPrice : product.oldPrice;
  const currentImage = (hasOptions && product.options.colors && product.options.colors[selectedColorIndex].image) 
    ? product.options.colors[selectedColorIndex].image 
    : product.image;

  let memoryHtml = "";
  if (hasOptions && product.options.memory) {
    memoryHtml = `
      <div class="option-group" style="margin: 15px 0;">
        <span class="option-title" style="display:block; font-weight:700; margin-bottom:8px;">Объем памяти:</span>
        <div class="memory-options" style="display:flex; gap:10px; flex-wrap:wrap;">
          ${product.options.memory.map((mem, idx) => `
            <button class="memory-btn ${idx === selectedMemoryIndex ? 'active' : ''}" 
                    style="border:1px solid var(--border); background:${idx === selectedMemoryIndex ? 'var(--red)' : 'var(--white)'}; color:${idx === selectedMemoryIndex ? '#fff' : 'inherit'}; padding:8px 16px; border-radius:8px; font-weight:600; cursor:pointer;"
                    onclick="selectMemory(${product.id},${idx})">
              ${mem.size}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  let colorHtml = "";
  if (hasOptions && product.options.colors) {
    colorHtml = `
      <div class="option-group" style="margin: 15px 0;">
        <span class="option-title" style="display:block; font-weight:700; margin-bottom:8px;">Цвет: ${product.options.colors[selectedColorIndex].name}</span>
        <div class="color-options" style="display:flex; gap:12px; flex-wrap:wrap;">
          ${product.options.colors.map((col, idx) => `
            <button class="color-btn ${idx === selectedColorIndex ? 'active' : ''}" 
                    style="width:36px; height:36px; border-radius:50%; background-color:${col.hex}; border:2px solid${idx === selectedColorIndex ? 'var(--red)' : 'var(--border)'}; cursor:pointer;"
                    title="${col.name}"
                    onclick="selectColor(${product.id},${idx})">
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  const specs = Object.entries(product.specs).map(([key, value]) => `
    <tr><td>${key}</td><td>${value}</td></tr>
  `).join("");

  const isFavorite = favorites.includes(product.id);

  // Вставляем разметку карточки и добавляем вызов renderReviewsSection в самом низу
  document.getElementById("productDetailBody").innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div class="detail-img-box">
        <img src="${currentImage}" alt="${product.name}" onerror="imageError(this)">
      </div>

      <div class="detail-info">
        <div class="detail-brand">${product.brand}</div>
        <h2>${product.name}</h2>
        <div class="product-rating">★ ${product.rating}</div>
        
        <div class="detail-price">
          ${formatPrice(currentPrice)} ₸
          ${currentOldPrice ? `<span class="old-price">${formatPrice(currentOldPrice)} ₸</span>` : ""}
        </div>
        <div class="installment-badge" style="background: rgba(235, 87, 87, 0.08); border: 1px dashed var(--red); padding: 10px 14px; border-radius: 8px; margin: 12px 0; font-size: 14px; color: var(--text);">
          ⚡ В рассрочку: <strong style="color: var(--red);">${getInstallmentPrice(currentPrice, 12)} ₸</strong> / мес (на 12 месяцев)
        </div>
        ${memoryHtml}
        ${colorHtml}

        <button class="add-cart-btn" style="padding:14px;font-size:16px;margin-top:15px;"
          onclick="addConfiguredToCart(${product.id}); closeModal('productModal');">
          🛒 Добавить в корзину
        </button>

        <button class="favorite-modal-button" onclick="toggleFavorite(${product.id})" style="margin-top:10px; width:100%; padding:10px; border:1px solid var(--border); background:transparent; border-radius:8px; font-weight:600;">
          ${isFavorite ? "♥ Убрать из понравившихся" : "♡ Добавить в понравившиеся"}
        </button>

        <h3 style="margin-top:20px;">Характеристики</h3>
        <table class="specs-table"><tbody>${specs}</tbody></table>
      </div>
    </div>

    <!-- БЛОК ОТЗЫВОВ И ФОРМА -->
    ${renderReviewsSection(product)}
  `;
}

function selectMemory(productId, index) {
  selectedMemoryIndex = index;
  const product = products.find(p => p.id === productId);
  if (product) renderProductModalContent(product);
}

function selectColor(productId, index) {
  selectedColorIndex = index;
  const product = products.find(p => p.id === productId);
  if (product) renderProductModalContent(product);
}

function addConfiguredToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const hasOptions = product.options && product.options.memory;
  const memoryObj = hasOptions ? product.options.memory[selectedMemoryIndex] : null;
  const colorObj = (hasOptions && product.options.colors) ? product.options.colors[selectedColorIndex] : null;

  const cartItem = {
    id: product.id,
    name: product.name,
    price: memoryObj ? memoryObj.price : product.price,
    image: colorObj && colorObj.image ? colorObj.image : product.image,
    memory: memoryObj ? memoryObj.size : "",
    color: colorObj ? colorObj.name : ""
  };

  cart.push(cartItem);
  saveCart();
  updateCounters();
  showToast(`🛒 ${product.name} (${cartItem.memory}, ${cartItem.color}) добавлен в корзину`);
}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id) {

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(
        item => item !== id
      );

    showToast(
      "Товар убран из понравившихся"
    );

  } else {

    favorites.push(id);

    showToast(
      "❤️ Товар добавлен в понравившиеся"
    );

  }


  localStorage.setItem(
    "mechtaFavorites",
    JSON.stringify(favorites)
  );


  updateCounters();

  filterProducts();

}


/* =========================================================
   FAVORITES WINDOW
========================================================= */

function openFavorites() {

  const container =
    document.getElementById(
      "favoritesItems"
    );


  const favoriteProducts =
    products.filter(
      p => favorites.includes(p.id)
    );


  if (favoriteProducts.length === 0) {

    container.innerHTML = `

      <div style="
        text-align:center;
        padding:50px 10px;
      ">

        <div style="font-size:55px;">
          ♡
        </div>

        <h3>
          Пока ничего нет
        </h3>

        <p style="color:#777;margin-top:8px;">
          Нажимайте ♡ на товарах,
          которые хотите сохранить.
        </p>

      </div>

    `;

  } else {

    container.innerHTML =
      favoriteProducts.map(
        product => `

          <div class="favorite-item">

            <img
              src="${product.image}"
              alt=""
              onerror="imageError(this)"
            >

            <div class="favorite-info">

              <div class="favorite-title">
                ${product.name}
              </div>

              <div class="favorite-price">
                ${formatPrice(product.price)} ₸
              </div>

            </div>

            <button
              class="add-cart-btn"
              style="width:auto;padding:9px 12px;"
              onclick="
                addToCart(${product.id})
              ">

              В корзину

            </button>

          </div>

        `
      ).join("");

  }


  openModal(
    "favoritesModal"
  );

}


/* =========================================================
   CART
========================================================= */

function addToCart(id) {

  const product =
    products.find(
      p => p.id === id
    );

  if (!product) {
    return;
  }


  cart.push(product);


  saveCart();

  updateCounters();


  showToast(
    `🛒 ${product.name} добавлен в корзину`
  );

}


function removeFromCart(index) {

  cart.splice(index,1);

  saveCart();

  updateCounters();

  openCart();

}


function openCart() {
  const container = document.getElementById("cartItems");

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:50px;">
        <div style="font-size:55px;">🛒</div>
        <h3>Корзина пуста</h3>
        <p style="color:#777;margin-top:8px;">Добавьте товары из каталога.</p>
      </div>
    `;
  } else {
    container.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="" onerror="imageError(this)">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div style="font-size: 12px; color: #777; margin: 3px 0;">
            ${item.memory ? `Память: ${item.memory}` : ""} 
            ${item.color ? `· Цвет: ${item.color}` : ""}
          </div>
          <div class="cart-item-price">${formatPrice(item.price)} ₸</div>
        </div>
        <button class="remove-cart" onclick="removeFromCart(${index})">🗑️</button>
      </div>
    `).join("");
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("cartTotal").innerText = `${formatPrice(total)} ₸`;
  openModal("cartModal");
}


/* =========================================================
   ВЫЧИСЛЕНИЕ РАССРОЧКИ (ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ)
========================================================= */
function getInstallmentPrice(price, months = 12) {
  if (!months || months === 0) return formatPrice(price);
  return formatPrice(Math.round(price / months));
}

function updateInstallmentTotal() {
  const select = document.getElementById("installmentSelect");
  if (!select) return;

  const months = select.value;
  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  if (months === "0") {
    showToast(`Выбрана оплата сразу: ${formatPrice(total)} ₸`);
  } else {
    const monthlyPayment = getInstallmentPrice(total, Number(months));
    showToast(`Выбрана рассрочка на ${months} мес. (~${monthlyPayment} ₸/мес)`);
  }
}

/* =========================================================
   ОТКРЫТИЕ ОКНА ОФОРМЛЕНИЯ ЗАКАЗА (С ВИДИМЫМ ТЕКСТОМ И ЦЕНАМИ)
========================================================= */
function openCheckout() {
  if (!cart || cart.length === 0) {
    showToast("Сначала добавьте товар в корзину");
    return;
  }

  // Заполняем список товаров с явно заданным темным цветом текста
  const container = document.getElementById("checkoutItems");
  if (container) {
    container.innerHTML = cart.map(item => `
      <div class="checkout-line" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #eaeaea;">
        <span style="color: #111111 !important; font-weight: 600; font-size: 14px; line-height: 1.3;">
          ${item.name} 
          <small style="color: #666666 !important; display: block; font-weight: 400; font-size: 12px; margin-top: 2px;">
            ${item.memory || ''} ${item.color ? '· ' + item.color : ''}
          </small>
        </span>
        <strong style="color: #111111 !important; font-weight: 700; font-size: 14px; white-space: nowrap; margin-left: 10px;">
          ${formatPrice(item.price)} ₸
        </strong>
      </div>
    `).join("");
  }

  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);
  
  // Делаем итоговую цену четкой и видимой
  const checkoutTotalEl = document.getElementById("checkoutTotal");
  if (checkoutTotalEl) {
    checkoutTotalEl.innerText = `${formatPrice(total)} ₸`;
    checkoutTotalEl.style.color = "#111111";
    checkoutTotalEl.style.fontWeight = "800";
    checkoutTotalEl.style.fontSize = "18px";
  }

  // Безопасно обновляем или добавляем блок выбора рассрочки
  const existingSelectContainer = document.getElementById("installmentSelectContainer");
  if (existingSelectContainer) {
    existingSelectContainer.remove();
  }

  const installmentHtml = `
    <div id="installmentSelectContainer" style="margin: 15px 0; background: #f8f9fa; border: 1px solid #e0e0e0; padding: 12px; border-radius: 8px;">
      <label style="display:block; font-weight:700; margin-bottom:6px; font-size:13px; color: #333333;">Способ оплаты и рассрочки:</label>
      <select id="installmentSelect" onchange="updateInstallmentTotal()" style="width:100%; padding:10px; border-radius:8px; border:1px solid #ccc; background: #ffffff; color: #111111; font-weight:600; cursor:pointer;">
        <option value="0" style="background: #fff; color: #111;">Оплатить сразу (${formatPrice(total)} ₸)</option>
        <option value="3" style="background: #fff; color: #111;">Рассрочка на 3 месяца (~${getInstallmentPrice(total, 3)} ₸/мес)</option>
        <option value="6" style="background: #fff; color: #111;">Рассрочка на 6 месяцев (~${getInstallmentPrice(total, 6)} ₸/мес)</option>
        <option value="12" selected style="background: #fff; color: #111;">Рассрочка 0-0-12 (~${getInstallmentPrice(total, 12)} ₸/мес)</option>
        <option value="24" style="background: #fff; color: #111;">Рассрочка на 24 месяца (~${getInstallmentPrice(total, 24)} ₸/мес)</option>
      </select>
    </div>
  `;

  if (checkoutTotalEl && checkoutTotalEl.parentElement) {
    checkoutTotalEl.parentElement.insertAdjacentHTML("beforebegin", installmentHtml);
  }

  closeModal("cartModal");
  openModal("checkoutModal");
}
/* =========================================================
   ЗАВЕРШЕНИЕ И СОХРАНЕНИЕ ЗАКАЗА
========================================================= */
function finishOrder() {
  const nameInput = document.getElementById("customerName");
  const phoneInput = document.getElementById("customerPhone");
  const addressInput = document.getElementById("customerAddress");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const address = addressInput ? addressInput.value.trim() : "";

  if (!name || !phone || !address) {
    showToast("Заполните данные покупателя");
    return;
  }

  if (!cart || !cart.length) {
    showToast("Корзина пуста");
    return;
  }

  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  const installmentSelect = document.getElementById("installmentSelect");
  const installmentMonths = installmentSelect ? installmentSelect.value : "0";
  const installmentText = installmentMonths === "0" ? "Оплата сразу" : `Рассрочка на ${installmentMonths} мес.`;

  // Создаем заказ через встроенную функцию
  const order = typeof createDemoOrder === "function" ? createDemoOrder(
    cart.map(item => ({
      name: item.name,
      price: Number(item.price || 0),
      quantity: 1
    })),
    total
  ) : null;

  if (order) {
    const orders = typeof getSavedOrders === "function" ? getSavedOrders() : [];
    const savedOrder = orders.find(item => item.id === order.id);

    if (savedOrder) {
      savedOrder.customerName = name;
      savedOrder.phone = phone;
      savedOrder.address = address;
      savedOrder.installment = installmentText;
      localStorage.setItem("shopOrders", JSON.stringify(orders));
    }
  }

  cart = [];
  if (typeof saveCart === "function") saveCart();
  if (typeof updateCounters === "function") updateCounters();
  
  closeModal("checkoutModal");

  ["customerName", "customerPhone", "customerAddress",
   "cardNumber", "cardName", "cardDate", "cardCvv"].forEach(id => {
    const field = document.getElementById(id);
    if (field) field.value = "";
  });

  showToast("Заказ успешно оформлен!");

  if (typeof openOrders === "function") {
    openOrders();
  }
}
/* =========================================================
   ОБНОВЛЕНИЕ РАСЧЕТА РАССРОЧКИ ПРИ СМЕНЕ МЕСЯЦЕВ
========================================================= */
function updateInstallmentTotal() {
  const select = document.getElementById("installmentSelect");
  if (!select) return;

  const months = select.value;
  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  if (months === "0") {
    showToast(`Выбрана оплата сразу: ${formatPrice(total)} ₸`);
  } else {
    const monthlyPayment = getInstallmentPrice(total, Number(months));
    showToast(`Выбрана рассрочка на ${months} мес. (~${monthlyPayment} ₸/мес)`);
  }
}
/* =========================================================
   AUTH
========================================================= */

function openAccount() {

  const container =
    document.getElementById(
      "accountContent"
    );


  if (currentUser) {

    container.innerHTML = `

      <div style="
        text-align:center;
        padding:20px;
      ">

        <div style="font-size:60px;">
          👤
        </div>

        <h2 style="margin:10px 0;">
          ${currentUser.name}
        </h2>

        <p style="color:#777;">
          ${currentUser.email}
        </p>

        <p style="
          margin-top:15px;
          color:#777;
        ">
          Вы вошли в аккаунт.
        </p>

        <button
          class="logout-button"
          onclick="logout()">

          Выйти из аккаунта

        </button>

      </div>

    `;

  } else {

    showLoginForm();

  }


  openModal(
    "accountModal"
  );

}


function showLoginForm() {

  const container =
    document.getElementById(
      "accountContent"
    );


  container.innerHTML = `

    <h2 style="margin-bottom:18px;">
      Вход в аккаунт
    </h2>

    <div class="auth-tabs">

      <button
        class="active"
        onclick="showLoginForm()">

        Вход

      </button>

      <button
        onclick="showRegisterForm()">

        Регистрация

      </button>

    </div>


    <div class="auth-form">

      <input
        type="email"
        id="loginEmail"
        placeholder="Email"
      >

      <input
        type="password"
        id="loginPassword"
        placeholder="Пароль"
      >

      <button
        class="auth-button"
        onclick="loginUser()">

        Войти

      </button>

    </div>

  `;

}


function showRegisterForm() {

  const container =
    document.getElementById(
      "accountContent"
    );


  container.innerHTML = `

    <h2 style="margin-bottom:18px;">
      Создание аккаунта
    </h2>

    <div class="auth-tabs">

      <button
        onclick="showLoginForm()">

        Вход

      </button>

      <button
        class="active"
        onclick="showRegisterForm()">

        Регистрация

      </button>

    </div>


    <div class="auth-form">

      <input
        type="text"
        id="registerName"
        placeholder="Ваше имя"
      >

      <input
        type="email"
        id="registerEmail"
        placeholder="Email"
      >

      <input
        type="password"
        id="registerPassword"
        placeholder="Пароль"
      >

      <button
        class="auth-button"
        onclick="registerUser()">

        Зарегистрироваться

      </button>

    </div>

  `;

}


function registerUser() {

  const name =
    document.getElementById(
      "registerName"
    ).value.trim();

  const email =
    document.getElementById(
      "registerEmail"
    ).value.trim();

  const password =
    document.getElementById(
      "registerPassword"
    ).value.trim();


  if (!name || !email || !password) {

    showToast(
      "Заполните все поля"
    );

    return;

  }


  currentUser = {
    name: name,
    email: email
  };


  localStorage.setItem(
    "mechtaUser",
    JSON.stringify(currentUser)
  );


  updateAccountButton();

  closeModal("accountModal");

  showToast(
    `👤 Добро пожаловать, ${name}!`
  );

}


function loginUser() {

  const email =
    document.getElementById(
      "loginEmail"
    ).value.trim();


  const password =
    document.getElementById(
      "loginPassword"
    ).value.trim();


  if (!email || !password) {

    showToast(
      "Введите email и пароль"
    );

    return;

  }


  currentUser = {
    name: email.split("@")[0],
    email: email
  };


  localStorage.setItem(
    "mechtaUser",
    JSON.stringify(currentUser)
  );


  updateAccountButton();

  closeModal("accountModal");

  showToast(
    "👤 Вы успешно вошли"
  );

}


function logout() {

  currentUser = null;

  localStorage.removeItem(
    "mechtaUser"
  );

  updateAccountButton();

  closeModal("accountModal");

  showToast(
    "Вы вышли из аккаунта"
  );

}


function updateAccountButton() {

  const buttons =
    document.querySelectorAll(
      ".header-actions .action-btn"
    );


  if (buttons.length < 2) {
    return;
  }


  const accountButton =
    buttons[1];


  if (currentUser) {

    accountButton.innerHTML = `
      <span class="icon">👤</span>
      <span class="action-text">
        ${currentUser.name}
      </span>
    `;

  } else {

    accountButton.innerHTML = `
      <span class="icon">👤</span>
      <span class="action-text">
        Войти
      </span>
    `;

  }

}


/* =========================================================
   SUPPORT
========================================================= */

function openSupport() {

  openModal(
    "supportModal"
  );

}


/* =========================================================
   INFO
========================================================= */

function openInfoModal(
  title,
  body
) {

  document.getElementById(
    "infoTitle"
  ).innerText =
    title;


  document.getElementById(
    "infoBody"
  ).innerHTML = `

    <div style="
      font-size:45px;
      margin-bottom:10px;
    ">
      ℹ️
    </div>

    <p>
      ${body}
    </p>

  `;


  openModal(
    "infoModal"
  );

}


/* =========================================================
   MODALS
========================================================= */

function openModal(id) {

  const modal =
    document.getElementById(id);

  if (modal) {

    modal.style.display =
      "flex";

  }

}


function closeModal(id) {

  const modal =
    document.getElementById(id);

  if (modal) {

    modal.style.display =
      "none";

  }

}


/* Закрытие кликом по фону */

document.addEventListener(
  "click",
  function(event) {

    if (
      event.target.classList.contains(
        "modal"
      )
    ) {

      event.target.style.display =
        "none";

    }

  }
);


/* =========================================================
   SIDEBAR
========================================================= */

function toggleSidebar() {

  const sidebar =
    document.getElementById(
      "sidebar"
    );

  sidebar.classList.toggle(
    "open"
  );

}


/* =========================================================
   RESET
========================================================= */

function resetCatalog() {

  currentCategory = "all";

  selectedBrands = [];

  document.getElementById(
    "searchInput"
  ).value = "";

  document.getElementById(
    "minPrice"
  ).value = "";

  document.getElementById(
    "maxPrice"
  ).value = "";


  document.querySelectorAll(
    'input[name="rating"]'
  ).forEach(
    radio => radio.checked = false
  );


  renderBrands();

  selectCategory("all");

}


/* =========================================================
   HELPERS
========================================================= */

function formatPrice(price) {

  return Number(price)
    .toLocaleString("ru-RU");

}


function updateCounters() {

  document.getElementById(
    "cartCount"
  ).innerText =
    cart.length;


  document.getElementById(
    "favoriteCount"
  ).innerText =
    favorites.length;

}


function saveCart() {

  localStorage.setItem(
    "mechtaCart",
    JSON.stringify(cart)
  );

}


function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );


  toast.innerText =
    message;


  toast.style.display =
    "block";


  clearTimeout(
    window.toastTimer
  );


  window.toastTimer =
    setTimeout(
      function() {

        toast.style.display =
          "none";

      },
      2800
    );

}
/* =========================================================
   РАСЧЕТ РАССРОЧКИ
========================================================= */
function getInstallmentPrice(price, months = 12) {
  return formatPrice(Math.round(price / months));
}

/* =========================================================
   IMAGE FALLBACK
========================================================= */

function imageError(img) {

  img.onerror = null;

  img.src =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="600"
        height="500"
        viewBox="0 0 600 500">

        <rect
          width="600"
          height="500"
          fill="#f3f4f7"
        />

        <text
          x="300"
          y="230"
          text-anchor="middle"
          font-size="80">

          📦

        </text>

        <text
          x="300"
          y="310"
          text-anchor="middle"
          font-family="Arial"
          font-size="22"
          fill="#777">

          TECHNOVA

        </text>

      </svg>

    `);

}


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      document
        .querySelectorAll(".modal")
        .forEach(
          modal => {
            modal.style.display =
              "none";
          }
        );

    }

  }
);
/* =====================================
   НАСТРОЙКИ: ТЕМА И ЯЗЫК
===================================== */

const translations = {
  ru: {
    myOrders: "Мои заказы",
    support: "Поддержка",
    darkTheme: "Тёмная тема",
    lightTheme: "Светлая тема",
    cart: "Корзина",
    favorites: "Избранное",
    catalog: "Каталог товаров",
    searchPlaceholder: "Поиск товаров, брендов и моделей...",
    tracking: "Отслеживание заказа",
    supportDescription: "Напишите вопрос — сообщение появится в демо-чате.",
    demoSupport: "Демо-чат: оператор пока не подключён.",
    send: "Отправить",
    noOrders: "У вас пока нет заказов.",
    order: "Заказ",
    date: "Дата",
    total: "Сумма",
    status: "Статус",
    details: "Отслеживать",
    stages: [
      "Заказ принят",
      "Заказ собирается",
      "Передан в доставку",
      "Доставлен"
    ],
    sent: "Сообщение добавлено в демо-чат."
  },
  kk: {
    myOrders: "Менің тапсырыстарым",
    support: "Қолдау қызметі",
    darkTheme: "Қараңғы тақырып",
    lightTheme: "Ашық тақырып",
    cart: "Себет",
    favorites: "Таңдаулылар",
    catalog: "Тауарлар каталогы",
    searchPlaceholder: "Тауарларды, брендтерді іздеу...",
    tracking: "Тапсырысты бақылау",
    supportDescription: "Сұрағыңызды жазыңыз — хабарлама демо-чатта көрсетіледі.",
    demoSupport: "Демо-чат: оператор әлі қосылмаған.",
    send: "Жіберу",
    noOrders: "Сізде әзірге тапсырыстар жоқ.",
    order: "Тапсырыс",
    date: "Күні",
    total: "Сомасы",
    status: "Күйі",
    details: "Бақылау",
    stages: [
      "Тапсырыс қабылданды",
      "Тапсырыс дайындалып жатыр",
      "Жеткізуге берілді",
      "Жеткізілді"
    ],
    sent: "Хабарлама демо-чатқа қосылды."
  }
};

let currentLanguage = localStorage.getItem("shopLanguage") || "ru";

function translate(key) {
  return translations[currentLanguage]?.[key] || translations.ru[key] || key;
}

function changeLanguage(language) {
  currentLanguage = language === "kk" ? "kk" : "ru";
  localStorage.setItem("shopLanguage", currentLanguage);

  document.documentElement.lang = currentLanguage;
  const select = document.getElementById("languageSelect");
  if (select) select.value = currentLanguage;

  // Переводим все элементы с атрибутом data-i18n
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  // Переводим плейсхолдеры поиска
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });

  // Обновляем текст кнопки темы
  const themeButton = document.getElementById("themeBtn");
  if (themeButton) {
    const isDark = document.body.classList.contains("dark-theme");
    const themeKey = isDark ? "lightTheme" : "darkTheme";
    const icon = isDark ? "☀️ " : "🌙 ";
    const span = themeButton.querySelector("[data-i18n]");
    if (span) {
      span.textContent = translations[currentLanguage][themeKey];
    } else {
      themeButton.textContent = icon + translations[currentLanguage][themeKey];
    }
  }

  if (document.getElementById("ordersModal")?.style.display === "flex") {
    openOrders();
  }
}
function toggleTheme() {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("shopTheme", isDark ? "dark" : "light");

  const button = document.getElementById("themeBtn");
  if (button) {
    button.textContent = (isDark ? "☀️ " : "🌙 ") +
      translate(isDark ? "lightTheme" : "darkTheme");
  }
}

/* =====================================
   ХРАНЕНИЕ ЗАКАЗОВ В БРАУЗЕРЕ
===================================== */

function getSavedOrders() {
  try {
    const orders = JSON.parse(localStorage.getItem("shopOrders") || "[]");
    return Array.isArray(orders) ? orders : [];
  } catch {
    return [];
  }
}

function saveOrder(order) {
  const orders = getSavedOrders();
  orders.unshift(order);
  localStorage.setItem("shopOrders", JSON.stringify(orders));
}

function formatMoney(amount) {
  return Number(amount || 0).toLocaleString(
    currentLanguage === "kk" ? "kk-KZ" : "ru-RU"
  ) + " ₸";
}

function escapeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

/*
  Вызывай createDemoOrder() после успешного подтверждения
  демонстрационного оформления заказа.
  Передавай массив товаров из корзины.
*/
function createDemoOrder(items, total) {
  if (!Array.isArray(items) || items.length === 0) {
    showToast("Сначала добавьте товары в корзину");
    return null;
  }

  const order = {
    id: "MT-" + Date.now().toString().slice(-8),
    date: new Date().toLocaleString(
      currentLanguage === "kk" ? "kk-KZ" : "ru-RU"
    ),
    items: items.map(item => ({
      title: `${String(item.title || item.name || "Товар")} ${item.memory ? '(' + item.memory + ')' : ''} ${item.color ? '[' + item.color + ']' : ''}`,
      price: Number(item.price || 0),
      quantity: Number(item.quantity || item.qty || 1)
    })),
    total: Number(total || items.reduce(
      (sum, item) => sum +
        Number(item.price || 0) * Number(item.quantity || item.qty || 1),
      0
    )),
    stage: 0
  };

  saveOrder(order);
  showToast("Демо-заказ " + order.id + " создан");
  return order;
}
/* =====================================
   МОИ ЗАКАЗЫ И ОТСЛЕЖИВАНИЕ
===================================== */

function openOrders() {
  const modal = document.getElementById("ordersModal");
  const container = document.getElementById("ordersList");

  if (!modal) {
    alert("Не найдено окно ordersModal. Проверь index.html");
    return;
  }

  if (!container) {
    alert("Не найден блок ordersList. Проверь index.html");
    return;
  }

  // Закрываем другие окна
  document.querySelectorAll(".modal").forEach(function (item) {
    item.style.display = "none";
  });

  const orders = getSavedOrders();

  if (!orders.length) {
    container.innerHTML = "<p>У вас пока нет заказов.</p>";
  } else {
    container.innerHTML = orders.map(function (order) {
      return `
        <div class="order-card">
          <h3>Заказ №${escapeText(order.id)}</h3>
          <p>Дата: ${escapeText(order.date || "")}</p>
          <p>Сумма: ${formatMoney(order.total)}</p>
          <button class="add-cart-btn"
            onclick="openTracking('${escapeText(order.id)}')">
            Подробнее
          </button>
        </div>
      `;
    }).join("");
  }

  modal.style.display = "flex";
}

function openTracking(orderId) {
  const order = getSavedOrders().find(item => item.id === orderId);
  const container = document.getElementById("trackingBody");

  if (!order || !container) {
    showToast("Заказ не найден");
    return;
  }

  const stages = translate("stages");
  const stage = Math.max(0, Math.min(Number(order.stage || 0), 3));

  const stepsHtml = stages.map((name, index) => {
    let className = "tracking-step";
    if (index < stage) className += " done";
    if (index === stage) className += " current";

    return `
      <div class="${className}">
        ${index < stage ? "✓" : index === stage ? "●" : "○"}
        ${escapeText(name)}
      </div>
    `;
  }).join("");

  const itemsHtml = (order.items || []).map(item => `
    <li>${escapeText(item.title)} × ${Number(item.quantity || 1)}</li>
  `).join("");

  container.innerHTML = `
    <h3>#${escapeText(order.id)}</h3>
    <p class="order-meta">${escapeText(translate("date"))}: ${escapeText(order.date)}</p>
    <div class="tracking-steps">${stepsHtml}</div>
    <h3>Товары</h3>
    <ul>${itemsHtml}</ul>
    <p style="margin-top:12px">
      <strong>${escapeText(translate("total"))}: ${formatMoney(order.total)}</strong>
    </p>
    <p class="demo-note">
      Это демонстрационное отслеживание. Реальный статус доставки требует подключения сервера.
    </p>
  `;

  openModal("trackingModal");
}

/* =====================================
   ПОДДЕРЖКА: ДЕМО-ЧАТ
===================================== */


/* ===== РАБОЧАЯ ДЕМО-ПОДДЕРЖКА ===== */

function getSupportHistory() {
  try {
    const data = JSON.parse(
      localStorage.getItem("shopSupportMessages") || "[]"
    );
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function renderSupportMessages() {
  const box = document.getElementById("supportMessages");
  if (!box) return;

  const messages = getSupportHistory();

  box.innerHTML = messages.map(function (msg) {
    const safeText = String(msg.text || "").replace(
      /[&<>"']/g,
      function (char) {
        return {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        }[char];
      }
    );

    return `
      <div class="support-message ${msg.mine ? "mine" : ""}">
        <small>${msg.mine ? "Вы" : "TECHNOVAБОТ"} · ${msg.time || ""}</small>
        <div>${safeText}</div>
      </div>
    `;
  }).join("");

  box.scrollTop = box.scrollHeight;
}

function openSupport() {
  const modal = document.getElementById("supportModal");

  if (!modal) {
    alert("Не найдено окно supportModal в index.html");
    return;
  }

  renderSupportMessages();
  modal.style.display = "flex";
}

function getBotReply(message) {
  const text = message.toLowerCase();
  const kk = typeof currentLanguage !== "undefined" &&
    currentLanguage === "kk";

  if (/привет|здравствуй|сәлем|салем/.test(text)) {
    return kk
      ? "Сәлеметсіз бе! 😊 Қалай көмектесе аламын?"
      : "Здравствуйте! 😊 Я виртуальный помощник TECHNOVA. Чем помочь?";
  }

  if (/заказ|тапсырыс/.test(text)) {
    return kk
      ? "📦 Тапсырыстарыңызды «Менің тапсырыстарым» бөлімінен тексеріңіз."
      : "📦 Откройте раздел «Мои заказы», чтобы посмотреть статус заказа.";
  }

  if (/достав|курьер|жеткізу/.test(text)) {
    return kk
      ? "🚚 Жеткізу шарттары тапсырысқа байланысты. Бұл сайтта жеткізу демо режимінде."
      : "🚚 Условия доставки зависят от заказа. Сейчас доставка работает в демо-режиме.";
  }

  if (/оплат|карт|төлем/.test(text)) {
    return kk
      ? "💳 Төлем тек демо режимінде жұмыс істейді. Нақты карта деректерін енгізбеңіз."
      : "💳 Оплата демонстрационная. Не вводите настоящие данные банковской карты.";
  }

  if (/гарант|ремонт|сервис|кепілдік/.test(text)) {
    return kk
      ? "🛠️ Кепілдік шарттары тауар мен сатушыға байланысты."
      : "🛠️ Условия гарантии зависят от товара и продавца.";
  }

  if (/возврат|қайтар/.test(text)) {
    return kk
      ? "↩️ Тауарды қайтару шарттарын сатушыдан нақтылаңыз."
      : "↩️ Условия возврата нужно уточнить у продавца.";
  }

  if (/спасибо|рахмет/.test(text)) {
    return kk ? "😊 Оқасы жоқ!" : "😊 Пожалуйста! Рад помочь.";
  }

  return kk
    ? "🤖 Сұрағыңызды толық түсінбедім. Тапсырыс, жеткізу, төлем немесе кепілдік туралы сұрап көріңіз."
    : "🤖 Пока не знаю ответа. Спросите про заказ, доставку, оплату, возврат или гарантию.";
}

function sendSupportMessage(event) {
  event.preventDefault();

  const input = document.getElementById("supportInput");
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  const messages = getSupportHistory();

  function getTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  messages.push({
    mine: true,
    text: text,
    time: getTime()
  });

  messages.push({
    mine: false,
    text: getBotReply(text),
    time: getTime()
  });

  try {
    localStorage.setItem(
      "shopSupportMessages",
      JSON.stringify(messages.slice(-100))
    );
  } catch (error) {
    console.warn("Не удалось сохранить историю чата", error);
  }

  input.value = "";
  renderSupportMessages();
}
/* =====================================
   ИНИЦИАЛИЗАЦИЯ
===================================== */

(function initializeShopPreferences() {
  if (localStorage.getItem("shopTheme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) languageSelect.value = currentLanguage;

  changeLanguage(currentLanguage);
})();

function openSupportChat() {
  const area = document.getElementById("supportChatArea");
  const input = document.getElementById("supportInput");

  if (!area) {
    alert("Не найден элемент supportChatArea. Проверь HTML.");
    return;
  }

  // Открываем только чат поддержки
  area.style.display = "block";

  if (typeof renderSupportMessages === "function") {
    renderSupportMessages();
  }

  if (input) {
    input.focus();
  }
}
/* =========================================================
   БЛОК ОТЗЫВОВ И РЕЙТИНГОВ ДЛЯ ТОВАРОВ
========================================================= */

// Функция генерации HTML-блока отзывов для модального окна товара
function renderReviewsSection(product) {
  // Если у товара еще нет массива отзывов, создаем демо-отзывы
  if (!product.reviews) {
    product.reviews = [
      { name: "Тимур", text: "Брал в рассрочку 0-0-12, оформление быстрое, телефон оригинал!", rating: 5, date: "02.05.2026" },
      { name: "Дильназ", text: "Камера супер, картинка полностью совпадает с реальностью.", rating: 5, date: "05.05.2026" }
    ];
  }

  const reviewsHtml = product.reviews.map(r => `
    <div style="background: #1e1e1e; border: 1px solid #333; padding: 10px 12px; border-radius: 8px; margin-bottom: 8px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
        <strong style="font-size: 13px; color: #fff;">${r.name}</strong>
        <span style="color: #ffaa00; font-size: 12px;">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
      </div>
      <p style="font-size: 13px; color: #ccc; margin: 0 0 4px 0;">${r.text}</p>
      <small style="font-size: 11px; color: #888;">${r.date}</small>
    </div>
  `).join("");

  return `
    <div style="margin-top: 20px; border-top: 1px solid #333; padding-top: 15px;">
      <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 10px; color: #fff;">Отзывы покупателей (${product.reviews.length})</h4>
      
      <div style="max-height: 180px; overflow-y: auto; margin-bottom: 15px; padding-right: 5px;">
        ${reviewsHtml}
      </div>

      <div style="background: #252525; padding: 12px; border-radius: 8px; border: 1px solid #383838;">
        <h5 style="font-size: 13px; font-weight: 700; margin-bottom: 8px; color: #fff;">Оставить свой отзыв</h5>
        <input type="text" id="reviewName_${product.id}" placeholder="Ваше имя" style="width: 100%; padding: 8px; margin-bottom: 6px; border-radius: 6px; border: 1px solid #444; background: #1a1a1a; color: #fff; font-size: 12px;">
        
        <select id="reviewRating_${product.id}" style="width: 100%; padding: 8px; margin-bottom: 6px; border-radius: 6px; border: 1px solid #444; background: #1a1a1a; color: #fff; font-size: 12px; cursor: pointer;">
          <option value="5">⭐⭐⭐⭐⭐ (5 - Отлично)</option>
          <option value="4">⭐⭐⭐⭐ (4 - Хорошо)</option>
          <option value="3">⭐⭐⭐ (3 - Нормально)</option>
          <option value="2">⭐⭐ (2 - Плохо)</option>
          <option value="1">⭐ (1 - Ужасно)</option>
        </select>
        
        <textarea id="reviewText_${product.id}" placeholder="Ваш отзыв о товаре..." style="width: 100%; padding: 8px; margin-bottom: 6px; border-radius: 6px; border: 1px solid #444; background: #1a1a1a; color: #fff; font-size: 12px; resize: none; height: 50px;"></textarea>
        
        <button onclick="addReview(${product.id})" style="background: var(--red, #e53935); color: #fff; border: none; padding: 8px 12px; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 12px; width: 100%;">Отправить отзыв</button>
      </div>
    </div>
  `;
}

// Функция обработки отправки отзыва
function addReview(productId) {
  const nameInput = document.getElementById(`reviewName_${productId}`);
  const textInput = document.getElementById(`reviewText_${productId}`);
  const ratingSelect = document.getElementById(`reviewRating_${productId}`);

  if (!nameInput || !textInput || !ratingSelect) return;

  const name = nameInput.value.trim();
  const text = textInput.value.trim();
  const rating = Number(ratingSelect.value);

  if (!name || !text) {
    showToast("Заполните имя и текст отзыва");
    return;
  }

  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (!product.reviews) {
    product.reviews = [];
  }

  // Добавляем новый отзыв в начало списка
  product.reviews.unshift({
    name: name,
    text: text,
    rating: rating,
    date: new Date().toLocaleDateString()
  });

  // Пересчитываем средний рейтинг продукта
  const totalRating = product.reviews.reduce((acc, r) => acc + r.rating, 0);
  product.rating = +(totalRating / product.reviews.length).toFixed(1);

  showToast("Спасибо! Отзыв успешно добавлен");

  // Переоткрываем модальное окно товара, чтобы обновить список
  if (typeof openProductModal === "function") {
    openProductModal(productId);
  }
}

