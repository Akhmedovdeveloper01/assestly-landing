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
        "f7.title": "Mijozlar Bazasi",
        "f7.desc": "Barcha mijozlaringizni bitta joyda saqlang. Tarix, buyurtmalar va shartnomalarni kuzatib boring.",
        "f8.title": "Mahsulot va Buyurtmalar",
        "f8.desc": "Mahsulot katalogi, kategoriyalar va buyurtmalar tizimi. Bot orqali to'g'ridan-to'g'ri buyurtma olish.",
        "f9.title": "Shartnomalar",
        "f9.desc": "Shartnomalarni raqamli boshqaring. PDF eksport, status kuzatish va xodimlar bo'yicha statistika.",
        "f10.title": "Xodimlar Tizimi",
        "f10.desc": "Xodimlarni lavozimlar bo'yicha boshqaring. Har bir xodimning shartnoma va ish ko'rsatkichlarini kuzating.",
        "f11.title": "Filiallar",
        "f11.desc": "Bir nechta joylashuv va filiallarni boshqaring. Har bir filialning holati va ish vaqtini sozlang.",
        "f12.title": "Operator Paneli",
        "f12.desc": "Operator mijoz bilan bevosita gaplashadi. Bot va operator rejimini bir tugma bilan almashtiring.",
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
        "form.sending": "Yuborilmoqda...",
        "form.sent": "✓ Yuborildi!",
        "form.error": "Xatolik yuz berdi. Qaytadan urinib ko'ring yoki Telegram orqali yozing.",
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
        "f7.title": "База клиентов",
        "f7.desc": "Храните всех клиентов в одном месте. Отслеживайте историю, заказы и договоры.",
        "f8.title": "Товары и заказы",
        "f8.desc": "Каталог товаров, категории и система заказов. Принимайте заказы прямо через бот.",
        "f9.title": "Договоры",
        "f9.desc": "Управляйте договорами цифрово. Экспорт PDF, отслеживание статуса и статистика по сотрудникам.",
        "f10.title": "Система сотрудников",
        "f10.desc": "Управляйте сотрудниками по должностям. Отслеживайте договоры и показатели каждого сотрудника.",
        "f11.title": "Филиалы",
        "f11.desc": "Управляйте несколькими локациями и филиалами. Настройте статус и рабочее время каждого.",
        "f12.title": "Панель оператора",
        "f12.desc": "Оператор общается с клиентом напрямую. Переключайте режим бот/оператор одной кнопкой.",
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
        "form.sending": "Отправка...",
        "form.sent": "✓ Отправлено!",
        "form.error": "Произошла ошибка. Попробуйте снова или напишите в Telegram.",
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
        "f7.title": "Client Database",
        "f7.desc": "Keep all your clients in one place. Track history, orders and contracts.",
        "f8.title": "Products & Orders",
        "f8.desc": "Product catalog, categories and order system. Accept orders directly through the bot.",
        "f9.title": "Contracts",
        "f9.desc": "Manage contracts digitally. PDF export, status tracking and employee statistics.",
        "f10.title": "Employee System",
        "f10.desc": "Manage employees by positions. Track contracts and performance metrics for each employee.",
        "f11.title": "Branches",
        "f11.desc": "Manage multiple locations and branches. Configure the status and working hours of each.",
        "f12.title": "Operator Panel",
        "f12.desc": "Operator chats directly with the client. Switch between bot and operator mode with one button.",
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
        "form.sending": "Sending...",
        "form.sent": "✓ Sent!",
        "form.error": "Something went wrong. Please try again or message us on Telegram.",
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
async function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    const errorEl = form.querySelector('.form-error');
    const t = (key, fallback) => i18n[currentLang][key] || fallback;

    const payload = {
        name: form.elements.name.value.trim(),
        phone: form.elements.phone.value.trim(),
        email: form.elements.email.value.trim(),
        business: form.elements.business.value.trim(),
        message: form.elements.message.value.trim(),
    };

    errorEl.style.display = "none";
    btn.disabled = true;
    const originalBg = btn.style.background;
    btn.textContent = t("form.sending", "Yuborilmoqda...");

    try {
        const res = await fetch("/api/leads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("request failed");

        btn.textContent = t("form.sent", "✓ Yuborildi!");
        btn.style.background = "linear-gradient(135deg, #63D2AA, #4F8EF7)";
        setTimeout(() => {
            btn.textContent = t("form.submit", "Yuborish →");
            btn.style.background = originalBg;
            btn.disabled = false;
            form.reset();
        }, 3000);
    } catch (err) {
        errorEl.textContent = t("form.error", "Xatolik yuz berdi. Qaytadan urinib ko'ring.");
        errorEl.style.display = "block";
        btn.textContent = t("form.submit", "Yuborish →");
        btn.disabled = false;
    }
}

// ─── DYNAMIC PRICING ────────────────────────────────────────
const POPULAR_KEYS = ['pro', 'professional']

function formatFeatures(plan) {
    const lines = []
    const f = plan.features || {}
    const l = plan.limits || {}

    if (l.channels != null) lines.push(l.channels === -1 ? (currentLang === 'ru' ? 'Безлимит каналы' : currentLang === 'en' ? 'Unlimited channels' : 'Cheksiz kanallar') : `${l.channels} ${currentLang === 'ru' ? 'канал' : currentLang === 'en' ? 'channel(s)' : 'ta kanal'}`)
    if (l.messages_per_month != null) lines.push(l.messages_per_month === -1 ? (currentLang === 'ru' ? 'Безлимит сообщения' : currentLang === 'en' ? 'Unlimited messages' : 'Cheksiz xabarlar') : `${l.messages_per_month.toLocaleString()} ${currentLang === 'ru' ? 'сообщ/мес' : currentLang === 'en' ? 'messages/mo' : 'xabar/oy'}`)
    if (f.ai_assistant) lines.push(currentLang === 'ru' ? 'AI Ассистент' : currentLang === 'en' ? 'AI Assistant' : 'AI Yordamchi')
    if (f.appointments) lines.push(currentLang === 'ru' ? 'Система записи' : currentLang === 'en' ? 'Appointment system' : 'Qabul tizimi')
    if (f.analytics) lines.push(currentLang === 'ru' ? 'Аналитика' : currentLang === 'en' ? 'Analytics' : 'Analitika')
    if (f.bot_builder) lines.push('Bot Builder')
    if (f.products) lines.push(currentLang === 'ru' ? 'Товары и заказы' : currentLang === 'en' ? 'Products & orders' : 'Mahsulot va buyurtmalar')
    if (f.employees) lines.push(currentLang === 'ru' ? 'Сотрудники' : currentLang === 'en' ? 'Employees' : 'Xodimlar')
    if (f.contracts) lines.push(currentLang === 'ru' ? 'Договоры' : currentLang === 'en' ? 'Contracts' : 'Shartnomalar')
    if (f.white_label) lines.push('White-label')
    if (f.api_access) lines.push(currentLang === 'ru' ? 'API доступ' : currentLang === 'en' ? 'API access' : 'API kirish')
    if (f.dedicated_support) lines.push(currentLang === 'ru' ? 'Выделенная поддержка' : currentLang === 'en' ? 'Dedicated support' : 'Maxsus qo\'llab-quvvatlash')
    else if (f.priority_support) lines.push(currentLang === 'ru' ? 'Приоритетная поддержка' : currentLang === 'en' ? 'Priority support' : 'Imtiyozli qo\'llab-quvvatlash')
    else lines.push(currentLang === 'ru' ? 'Email поддержка' : currentLang === 'en' ? 'Email support' : 'Email support')

    return lines
}

function renderPricing(plans) {
    const grid = document.getElementById('pricing-grid')
    if (!grid || !plans.length) return

    const chooseLabel = { uz: 'Tanlash', ru: 'Выбрать', en: 'Choose' }
    const perMonth = { uz: '/oy', ru: '/мес', en: '/mo' }
    const popularLabel = { uz: 'Eng mashhur', ru: 'Популярный', en: 'Most popular' }

    grid.innerHTML = plans.map(plan => {
        const isPopular = POPULAR_KEYS.includes(plan.key)
        const price = plan.price_usd != null ? `$${plan.price_usd}` : (plan.price_uzs ? `${plan.price_uzs.toLocaleString()} so'm` : currentLang === 'ru' ? 'Бесплатно' : currentLang === 'en' ? 'Free' : 'Bepul')
        const features = formatFeatures(plan)
        const featuresHtml = features.map(f => `<div class="pricing-feature"><span class="pricing-feature-check">✓</span><span>${f}</span></div>`).join('')
        const btnClass = isPopular ? 'pricing-btn-filled' : 'pricing-btn-outline'
        const description = plan.description || ''

        return `<div class="pricing-card${isPopular ? ' popular' : ''}">
            ${isPopular ? `<div class="pricing-badge">${popularLabel[currentLang]}</div>` : ''}
            <div class="pricing-plan">${plan.name}</div>
            <div class="pricing-price">${price} <span>${perMonth[currentLang]}</span></div>
            ${description ? `<div class="pricing-desc">${description}</div>` : ''}
            <div class="pricing-features">${featuresHtml}</div>
            <a href="#contact" class="pricing-btn ${btnClass}">${chooseLabel[currentLang]}</a>
        </div>`
    }).join('')

    // Re-observe new cards for scroll animation
    grid.querySelectorAll('.pricing-card').forEach(el => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(24px)'
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
        observer.observe(el)
    })
}

async function loadPricing() {
    try {
        const res = await fetch('/api/plans')
        if (!res.ok) return
        const json = await res.json()
        const active = (json.data || []).filter(p => p.is_active !== false && p.key !== 'trial')
        if (active.length) renderPricing(active)
    } catch (e) {
        // fallback to static HTML on error
    }
}

loadPricing()

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
