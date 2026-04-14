// ─── TRANSLATIONS ─────────────────────────────────────────
const i18n = {
    uz: {
        "nav.features": "Imkoniyatlar",
        "nav.how": "Qanday ishlaydi",
        "nav.pricing": "Narxlar",
        "nav.contact": "Bog'lanish",
        "nav.login": "Kirish",
        "nav.start": "Boshlash →",
        "hero.badge": "Yangi: Instagram DM integratsiyasi",
        "hero.title": "Biznesingiz uchun<br/><span>Aqlli Yordamchi</span>",
        "hero.desc":
            "Telegram, Instagram, WhatsApp va saytingiz uchun AI yordamchi. Mijozlaringizga 24/7 avtomatik javob bering.",
        "hero.cta": "Bepul boshlash →",
        "hero.demo": "Qanday ishlaydi",
        "stats.clients": "Faol klientlar",
        "stats.messages": "Javob berilgan xabarlar",
        "stats.satisfaction": "Mijozlar mamnuniyati",
        "stats.support": "Uzluksiz xizmat",
        "features.badge": "✦ Imkoniyatlar",
        "features.title": "Biznesingizni <span>avtomatlashtiring</span>",
        "features.desc": "Har qanday soha uchun tayyor yechim.",
        "f1.title": "AI Yordamchi",
        "f1.desc": "GPT-4 va Claude AI asosida aqlli javoblar.",
        "f2.title": "Qabul Tizimi",
        "f2.desc": "Mijozlar bot orqali qabulga yoziladi.",
        "f3.title": "Ish Vaqtlari",
        "f3.desc": "Bot faqat kerakli vaqtda javob beradi.",
        "f4.title": "Analitika",
        "f4.desc": "Batafsil statistika va hisobotlar.",
        "f5.title": "Bot Builder",
        "f5.desc": "Kod yozmasdan bot yarating.",
        "f6.title": "Ko'p Kanal",
        "f6.desc": "Barcha kanallarni bir joydan boshqaring.",
        "how.badge": "✦ Jarayon",
        "how.title": "4 qadamda <span>ishga tushiring</span>",
        "how.desc": "O'rnatish 10 daqiqa. Texnik bilim shart emas.",
        "step1.title": "Ro'yxatdan o'ting",
        "step1.desc": "Bepul hisob yarating.",
        "step2.title": "Kanal ulang",
        "step2.desc": "Telegram yoki Instagram ulang.",
        "step3.title": "Bot sozlang",
        "step3.desc": "Templateni tanlang va sozlang.",
        "step4.title": "Ishga tushiring",
        "step4.desc": "Bot 24/7 javob beradi.",
        "pricing.badge": "✦ Narxlar",
        "pricing.title": "Oddiy va <span>shaffof narxlar</span>",
        "pricing.desc": "Yashirin to'lovlar yo'q.",
        "pricing.popular": "Eng mashhur",
        "pricing.choose": "Tanlash",
        "p1.desc": "Kichik biznes uchun",
        "p1.f1": "1 ta kanal",
        "p1.f2": "500 xabar/oy",
        "p1.f3": "Asosiy AI",
        "p1.f4": "Email support",
        "p2.desc": "O'sib borayotgan biznes",
        "p2.f1": "4 ta kanal",
        "p2.f2": "10,000 xabar/oy",
        "p2.f3": "Kuchli AI (GPT-4)",
        "p2.f4": "Priority support",
        "p2.f5": "Analitika",
        "p2.f6": "Qabul tizimi",
        "p3.desc": "Katta kompaniyalar uchun",
        "p3.f1": "Cheksiz kanallar",
        "p3.f2": "Cheksiz xabarlar",
        "p3.f3": "Custom AI",
        "p3.f4": "Dedicated support",
        "p3.f5": "White-label",
        "p3.f6": "API kirish",
        "t.badge": "✦ Mijozlar fikri",
        "t.title": "Ular allaqachon <span>ishlatmoqda</span>",
        "t1.text":
            '"Assistly orqali kuniga 200+ xabarga javob beramiz. Operator ish yukini 70% kamaytirdi!"',
        "t1.role": "MedLine Klinika — Direktor",
        "t2.text":
            "\"30 daqiqada klinikamiz uchun to'liq bot sozladim. Qabul tizimi zo'r!\"",
        "t2.role": "DentaCare — Bosh shifokor",
        "t3.text":
            '"Telegram va Instagram ni bir joydan boshqarish juda qulay. Savdo 40% oshdi!"',
        "t3.role": "TechStore — Marketing",
        "faq.title": "Ko'p so'raladigan <span>savollar</span>",
        "faq1.q": "Bepul sinab ko'rish mumkinmi?",
        "faq1.a": "Ha! 14 kunlik bepul sinov. Karta kerak emas.",
        "faq2.q": "Telegram bot tokenini qayerdan olaman?",
        "faq2.a": "@BotFather ga /newbot yuboring.",
        "faq3.q": "Bir nechta biznes boshqarish mumkinmi?",
        "faq3.a": "Ha, bir nechta biznes qo'shib boshqarish mumkin.",
        "faq4.q": "AI qanday tilda javob beradi?",
        "faq4.a": "O'zbek, Rus va Ingliz tillarida.",
        "faq5.q": "Operator ham xabar yoza oladimi?",
        "faq5.a": "Ha! Bot o'chiq bo'lganda operator gaplashadi.",
        "contact.badge": "✦ Bog'lanish",
        "contact.title": "Savollaringiz <span>bormi?</span>",
        "contact.desc": "24 soat ichida javob beramiz.",
        "contact.phone": "Telefon",
        "contact.address": "Manzil",
        "contact.address.val": "Toshkent, O'zbekiston",
        "form.name": "Ismingiz",
        "form.phone": "Telefon",
        "form.business": "Biznesingiz turi",
        "form.message": "Xabaringiz...",
        "form.submit": "Yuborish →",
        "cta.title": "Bugunoq boshlang",
        "cta.desc": "14 kunlik bepul sinov. Karta kerak emas.",
        "cta.btn": "Bepul boshlash →",
        "cta.contact": "Bog'lanish",
        "footer.rights": "Barcha huquqlar himoyalangan.",
    },
    ru: {
        "nav.features": "Возможности",
        "nav.how": "Как работает",
        "nav.pricing": "Цены",
        "nav.contact": "Контакты",
        "nav.login": "Войти",
        "nav.start": "Начать →",
        "hero.badge": "Новое: Интеграция Instagram DM",
        "hero.title": "Умный помощник<br/>для <span>вашего бизнеса</span>",
        "hero.desc":
            "AI-ассистент для Telegram, Instagram, WhatsApp и сайта. Отвечайте клиентам 24/7 автоматически.",
        "hero.cta": "Начать бесплатно →",
        "hero.demo": "Как работает",
        "stats.clients": "Активных клиентов",
        "stats.messages": "Отвеченных сообщений",
        "stats.satisfaction": "Удовлетворённость",
        "stats.support": "Круглосуточно",
        "features.badge": "✦ Возможности",
        "features.title": "<span>Автоматизируйте</span> бизнес",
        "features.desc": "Готовое решение для любой сферы.",
        "f1.title": "AI Ассистент",
        "f1.desc": "Умные ответы на базе GPT-4 и Claude AI.",
        "f2.title": "Запись на приём",
        "f2.desc": "Клиенты записываются через бот.",
        "f3.title": "Рабочие часы",
        "f3.desc": "Бот отвечает только в рабочее время.",
        "f4.title": "Аналитика",
        "f4.desc": "Детальная статистика и отчёты.",
        "f5.title": "Bot Builder",
        "f5.desc": "Создайте бот без программирования.",
        "f6.title": "Мультиканал",
        "f6.desc": "Управляйте всеми каналами из одного места.",
        "how.badge": "✦ Процесс",
        "how.title": "Запустите за <span>4 шага</span>",
        "how.desc": "Установка 10 минут. Технические знания не нужны.",
        "step1.title": "Регистрация",
        "step1.desc": "Создайте бесплатный аккаунт.",
        "step2.title": "Подключите канал",
        "step2.desc": "Telegram или Instagram.",
        "step3.title": "Настройте бот",
        "step3.desc": "Выберите шаблон под вашу сферу.",
        "step4.title": "Запустите",
        "step4.desc": "Бот отвечает 24/7.",
        "pricing.badge": "✦ Цены",
        "pricing.title": "Простые и <span>прозрачные цены</span>",
        "pricing.desc": "Никаких скрытых платежей.",
        "pricing.popular": "Популярный",
        "pricing.choose": "Выбрать",
        "p1.desc": "Для малого бизнеса",
        "p1.f1": "1 канал",
        "p1.f2": "500 сообщ/мес",
        "p1.f3": "Базовый AI",
        "p1.f4": "Email поддержка",
        "p2.desc": "Для растущего бизнеса",
        "p2.f1": "4 канала",
        "p2.f2": "10,000 сообщ/мес",
        "p2.f3": "Мощный AI (GPT-4)",
        "p2.f4": "Приоритетная поддержка",
        "p2.f5": "Аналитика",
        "p2.f6": "Система записи",
        "p3.desc": "Для крупных компаний",
        "p3.f1": "Безлимит каналы",
        "p3.f2": "Безлимит сообщения",
        "p3.f3": "Custom AI",
        "p3.f4": "Выделенная поддержка",
        "p3.f5": "White-label",
        "p3.f6": "API доступ",
        "t.badge": "✦ Отзывы",
        "t.title": "Они уже <span>используют</span>",
        "t1.text":
            '"Через Assistly отвечаем на 200+ сообщений в день. Нагрузка на оператора снизилась на 70%!"',
        "t1.role": "MedLine Клиника — Директор",
        "t2.text":
            '"За 30 минут настроил полноценного бота для клиники. Система записи работает отлично!"',
        "t2.role": "DentaCare — Главный врач",
        "t3.text":
            '"Управлять Telegram и Instagram из одного места очень удобно. Продажи выросли на 40%!"',
        "t3.role": "TechStore — Маркетинг",
        "faq.title": "Часто задаваемые <span>вопросы</span>",
        "faq1.q": "Можно ли попробовать бесплатно?",
        "faq1.a": "Да! 14-дневный бесплатный период. Карта не нужна.",
        "faq2.q": "Где получить токен Telegram бота?",
        "faq2.a": "Отправьте /newbot в @BotFather.",
        "faq3.q": "Можно управлять несколькими бизнесами?",
        "faq3.a": "Да, можно добавить несколько бизнесов.",
        "faq4.q": "На каком языке отвечает AI?",
        "faq4.a": "На узбекском, русском и английском.",
        "faq5.q": "Может ли оператор тоже писать?",
        "faq5.a": "Да! Когда бот выключен — оператор общается.",
        "contact.badge": "✦ Контакты",
        "contact.title": "Есть <span>вопросы?</span>",
        "contact.desc": "Ответим в течение 24 часов.",
        "contact.phone": "Телефон",
        "contact.address": "Адрес",
        "contact.address.val": "Ташкент, Узбекистан",
        "form.name": "Ваше имя",
        "form.phone": "Телефон",
        "form.business": "Тип бизнеса",
        "form.message": "Ваше сообщение...",
        "form.submit": "Отправить →",
        "cta.title": "Начните сегодня",
        "cta.desc": "14 дней бесплатно. Карта не нужна.",
        "cta.btn": "Начать бесплатно →",
        "cta.contact": "Связаться",
        "footer.rights": "Все права защищены.",
    },
    en: {
        "nav.features": "Features",
        "nav.how": "How it works",
        "nav.pricing": "Pricing",
        "nav.contact": "Contact",
        "nav.login": "Login",
        "nav.start": "Get started →",
        "hero.badge": "New: Instagram DM integration",
        "hero.title": "Smart Assistant for<br/><span>Your Business</span>",
        "hero.desc":
            "AI assistant for Telegram, Instagram, WhatsApp and your website. Reply to customers 24/7 automatically.",
        "hero.cta": "Start for free →",
        "hero.demo": "How it works",
        "stats.clients": "Active clients",
        "stats.messages": "Messages answered",
        "stats.satisfaction": "Customer satisfaction",
        "stats.support": "24/7 service",
        "features.badge": "✦ Features",
        "features.title": "<span>Automate</span> your business",
        "features.desc": "Ready solution for any industry.",
        "f1.title": "AI Assistant",
        "f1.desc": "Smart responses powered by GPT-4 and Claude AI.",
        "f2.title": "Appointment System",
        "f2.desc": "Customers book appointments through the bot.",
        "f3.title": "Working Hours",
        "f3.desc": "Bot responds only during working hours.",
        "f4.title": "Analytics",
        "f4.desc": "Detailed statistics and reports.",
        "f5.title": "Bot Builder",
        "f5.desc": "Create a bot without coding.",
        "f6.title": "Multi-channel",
        "f6.desc": "Manage all channels from one place.",
        "how.badge": "✦ Process",
        "how.title": "Launch in <span>4 steps</span>",
        "how.desc": "Setup takes 10 minutes. No technical skills needed.",
        "step1.title": "Register",
        "step1.desc": "Create a free account.",
        "step2.title": "Connect channel",
        "step2.desc": "Connect Telegram or Instagram.",
        "step3.title": "Configure bot",
        "step3.desc": "Choose a template for your industry.",
        "step4.title": "Launch",
        "step4.desc": "Bot answers 24/7.",
        "pricing.badge": "✦ Pricing",
        "pricing.title": "Simple and <span>transparent pricing</span>",
        "pricing.desc": "No hidden fees. Cancel anytime.",
        "pricing.popular": "Most popular",
        "pricing.choose": "Choose",
        "p1.desc": "Perfect for small business",
        "p1.f1": "1 channel",
        "p1.f2": "500 messages/mo",
        "p1.f3": "Basic AI",
        "p1.f4": "Email support",
        "p2.desc": "For growing business",
        "p2.f1": "4 channels",
        "p2.f2": "10,000 messages/mo",
        "p2.f3": "Powerful AI (GPT-4)",
        "p2.f4": "Priority support",
        "p2.f5": "Analytics",
        "p2.f6": "Appointment system",
        "p3.desc": "For large companies",
        "p3.f1": "Unlimited channels",
        "p3.f2": "Unlimited messages",
        "p3.f3": "Custom AI",
        "p3.f4": "Dedicated support",
        "p3.f5": "White-label",
        "p3.f6": "API access",
        "t.badge": "✦ Testimonials",
        "t.title": "They're already <span>using it</span>",
        "t1.text":
            '"We answer 200+ messages per day through Assistly. Operator workload reduced by 70%!"',
        "t1.role": "MedLine Clinic — Director",
        "t2.text":
            '"Set up a full bot for our clinic in 30 minutes. Appointment system works great!"',
        "t2.role": "DentaCare — Chief Physician",
        "t3.text":
            '"Managing Telegram and Instagram from one place is very convenient. Sales grew 40%!"',
        "t3.role": "TechStore — Marketing",
        "faq.title": "Frequently asked <span>questions</span>",
        "faq1.q": "Can I try for free?",
        "faq1.a": "Yes! 14-day free trial. No card required.",
        "faq2.q": "How do I get a Telegram bot token?",
        "faq2.a": "Send /newbot to @BotFather.",
        "faq3.q": "Can I manage multiple businesses?",
        "faq3.a": "Yes, you can add multiple businesses.",
        "faq4.q": "What language does the AI respond in?",
        "faq4.a": "Uzbek, Russian and English.",
        "faq5.q": "Can operators also send messages?",
        "faq5.a": "Yes! When bot is off — operator chats.",
        "contact.badge": "✦ Contact",
        "contact.title": "Have <span>questions?</span>",
        "contact.desc": "We'll respond within 24 hours.",
        "contact.phone": "Phone",
        "contact.address": "Address",
        "contact.address.val": "Tashkent, Uzbekistan",
        "form.name": "Your name",
        "form.phone": "Phone",
        "form.business": "Business type",
        "form.message": "Your message...",
        "form.submit": "Send →",
        "cta.title": "Start today",
        "cta.desc": "14 days free. No card required.",
        "cta.btn": "Start for free →",
        "cta.contact": "Contact us",
        "footer.rights": "All rights reserved.",
    },
};

let currentLang = "uz";

function setLang(lang) {
    currentLang = lang;
    document
        .querySelectorAll(".lang-btn")
        .forEach((btn) => btn.classList.remove("active"));
    document
        .querySelector(`.lang-btn[onclick="setLang('${lang}')"]`)
        .classList.add("active");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (i18n[lang][key]) el.placeholder = i18n[lang][key];
    });

    document.documentElement.lang = lang;
}

// FAQ toggle
function toggleFaq(el) {
    const item = el.parentElement;
    const isOpen = item.classList.contains("open");
    document
        .querySelectorAll(".faq-item")
        .forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
}

// Form submit
function submitForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = "✓ Yuborildi!";
    btn.style.background = "linear-gradient(135deg, #63D2AA, #4F8EF7)";
    setTimeout(() => {
        btn.textContent = i18n[currentLang]["form.submit"] || "Yuborish →";
        e.target.reset();
    }, 3000);
}

// Scroll animations
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: 0.1 }
);

document
    .querySelectorAll(
        ".feature-card, .step-card, .pricing-card, .testimonial-card"
    )
    .forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(el);
    });
