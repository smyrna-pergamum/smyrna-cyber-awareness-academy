/* ============================================================
   Siber Farkındalık Akademisi — veri katmanı
   Arayüz metinleri, eğitimler, quizler, rozetler, seviyeler
   ============================================================ */

const UI = {
  tr: {
    brandName: "Smyrna Cyber",
    brandSub: "Academy",
    heroEyebrow: "Farkındalık programı",
    heroTitle1: "İnsan, siber savunmanın",
    heroTitle2: "en güçlü katmanıdır.",
    heroLead: "Oltalama, parola hijyeni, sosyal mühendislik ve veri sorumluluğu üzerine 28 kısa eğitim. Her eğitimi bir quizle pekiştirin, XP toplayın, rozetleri açın.",
    heroCta: "Eğitimlere göz at",
    visualCaption: "Dağıtılmış bilgi · kolektif savunma",
    statTrainings: "Eğitim",
    statTotalTime: "Toplam süre",
    statCompleted: "Tamamlanan",
    yourProgress: "İlerlemen",
    playerAria: "İlerleme ve rozetler",
    filtersAria: "Eğitim filtreleri",
    streakUnit: "gün",
    streakUnitOne: "gün",
    pcDone: "Eğitim",
    pcQuiz: "Quiz",
    pcBadges: "Rozet",
    badgesTitle: "Rozetler",
    catalogEyebrow: "Katalog",
    catalogTitle: "28 eğitimle savunmanı güçlendir.",
    searchAria: "Eğitim ara",
    searchPlaceholder: "Eğitim, konu veya etiket ara…",
    filterDuration: "Süreye göre filtrele",
    allDurations: "Tüm süreler",
    durShort: "10 dk ve altı",
    durMedium: "11–20 dk",
    durLong: "20 dk üzeri",
    sortLabel: "Sıralama",
    sortDefault: "Önerilen sıra",
    sortShort: "Süre: kısa → uzun",
    sortLong: "Süre: uzun → kısa",
    sortLevel: "Seviyeye göre",
    sortDone: "Tamamlananlar önce",
    filterTopic: "Konu",
    filterLevel: "Seviye",
    filterAll: "Tümü",
    filterAllLevels: "Tüm seviyeler",
    clearFilters: "Tüm filtreleri temizle",
    unitHour: " sa ",
    unitMinute: " dk",
    pageTitle: "Siber Farkındalık Akademisi",
    metaDescription: "Siber güvenlik farkındalığı eğitim platformu: 28 eğitim, quizler, rozetler ve isim bazlı ilerleme. Yedi dilde, açık ve koyu tema.",
    badgeLocked: "kilitli",
    langLabel: "Dil",
    orgName: "Smyrna Cyber Academy",
    certTitle: "Başarı Sertifikası",
    certReady: "Tüm eğitimleri bitirdiniz ve quizleri başarıyla tamamladınız. Sertifikanızı açabilirsiniz.",
    certSub: "Siber Güvenlik Farkındlığı Eğitim Programı",
    certBy: "Bu sertifika",
    certCompleted: "adlı kişiye başarıyla verilir.",
    certLevel: "Seviye",
    certXp: "XP",
    certTrainings: "Eğitim",
    certBadges: "Rozet",
    certDate: "Tarih",
    certPrint: "Yazdırmak için tıklayın",
    certClose: "Kapat",
    toastCertLocked: "Sertifikayı açmak için 28 eğitimin tamamını bitirin ve tüm quizlerde %100 alın.",
    detailLesson: "Eğitim içeriği",
    lessonCase: "Vaka çalışması",
    lessonResponse: "Uygun yanıt",
    lessonReason: "Neden",
    detailObjectives: "Neler öğreneceksiniz",
    detailModules: "İçerik akışı",
    detailStartQuiz: "Quizi başlat",
    profileTitle: "Profiller",
    profileText: "Her isim kendi ilerlemesini, XP'sini ve rozetlerini taşır. Aynı tarayıcıda birden fazla kişi kullanabilir.",
    profileAddPlaceholder: "Yeni profil adı",
    profileCreate: "Profil oluştur",
    welcomeTitle: "Hoş geldiniz",
    welcomeText: "İlerlemeniz adınıza kaydedilsin. Profili istediğiniz zaman değiştirebilirsiniz.",
    welcomeNameLabel: "Tam İsim",
    welcomeNamePlaceholder: "Örn. Ayşe Yılmaz",
    welcomeStart: "Başla",
    welcomeGuest: "Misafir olarak devam et",
    close: "Kapat",
    themeToggle: "Temayı değiştir",
    footerNote: "Bu içerik genel farkındalık amaçlıdır; kurumunuzun politikaları ve yasal yükümlülüklerinin yerine geçmez.",
    footerLocal: "Tüm ilerleme yalnızca bu tarayıcıda saklanır.",
    emptyTitle: "Sonuç bulunamadı",
    emptyText: "Arama terimini veya filtreleri değiştirmeyi deneyin.",
    emptyClear: "Filtreleri temizle",
    minutesShort: "dk",
    cardComplete: "Tamamla",
    cardDone: "Tamamlandı",
    detailComplete: "Tamamlandı olarak işaretle",
    detailUncomplete: "Tamamlandı işaretini kaldır",
    detailDone: "Tamamlandı",
    detailQuizBest: "En iyi quiz sonucu: {score}/{total}",
    levelPrefix: "Seviye",
    levelSeparator: " · ",
    xpNext: "/ {xp} XP",
    maxLevel: "Maksimum seviye",
    resultsAll: "Tüm {n} eğitim listeleniyor",
    resultsFiltered: "{shown} / {total} eğitim gösteriliyor",
    quizStep: "Soru {i} / {n}",
    quizCorrect: "Doğru",
    quizWrong: "Yanlış",
    quizNext: "Sonraki soru",
    quizFinish: "Sonucu gör",
    quizClose: "Kapat",
    quizRetry: "Tekrar dene",
    quizResultPerfect: "Kusursuz!",
    quizResultGood: "İyi iş!",
    quizResultLow: "Tekrar deneyelim",
    quizResultText: "{correct} / {total} doğru cevap",
    quizXp: "+{xp} XP kazandın",
    quizBestLine: "En iyi sonucun: {score}/{total}",
    quizNoXp: "Bu quizden alabileceğin tüm XP'yi zaten kazandın.",
    profileStats: "{done} eğitim · {xp} XP",
    profileActive: "Aktif",
    profileSwitch: "Geç",
    profileDelete: "Sil",
    profileSwitchAria: "{name} profiline geç",
    profileDeleteAria: "{name} profilini sil",
    profileDeleteConfirm: "{name} profili ve tüm ilerlemesi silinecek. Emin misiniz?",
    guestName: "Misafir",
    toastTrainingDone: "+{xp} XP · {title}",
    toastTrainingUndo: "{title} tekrar açıldı",
    toastQuizDone: "Quiz tamamlandı · +{xp} XP",
    toastBadge: "Yeni rozet: {name}",
    toastProfileCreated: "Profil oluşturuldu: {name}",
    toastProfileSwitched: "Profil: {name}",
    toastProfileDeleted: "Profil silindi",
    badgeUnlockedTitle: "Rozet kazanıldı"
  },
  en: {
    brandName: "Smyrna Cyber",
    brandSub: "Academy",
    heroEyebrow: "Awareness programme",
    heroTitle1: "People are the strongest",
    heroTitle2: "layer of cyber defence.",
    heroLead: "28 short trainings on phishing, password hygiene, social engineering and data responsibility. Reinforce each one with a quiz, earn XP and unlock badges.",
    heroCta: "Browse trainings",
    visualCaption: "Distributed knowledge · collective defence",
    statTrainings: "Trainings",
    statTotalTime: "Total time",
    statCompleted: "Completed",
    yourProgress: "Your progress",
    playerAria: "Progress and badges",
    filtersAria: "Training filters",
    streakUnit: "days",
    streakUnitOne: "day",
    pcDone: "Trainings",
    pcQuiz: "Quizzes",
    pcBadges: "Badges",
    badgesTitle: "Badges",
    catalogEyebrow: "Catalog",
    catalogTitle: "Strengthen your defence with 28 trainings.",
    searchAria: "Search trainings",
    searchPlaceholder: "Search a training, topic or tag…",
    filterDuration: "Filter by duration",
    allDurations: "All durations",
    durShort: "10 min or less",
    durMedium: "11–20 min",
    durLong: "Over 20 min",
    sortLabel: "Sort",
    sortDefault: "Recommended",
    sortShort: "Duration: short → long",
    sortLong: "Duration: long → short",
    sortLevel: "By level",
    sortDone: "Completed first",
    filterTopic: "Topic",
    filterLevel: "Level",
    filterAll: "All",
    filterAllLevels: "All levels",
    clearFilters: "Clear all filters",
    unitHour: "h ",
    unitMinute: "m",
    pageTitle: "Cyber Awareness Academy",
    metaDescription: "Cybersecurity awareness training platform: 28 trainings, quizzes, badges and name-based progress. Available in seven languages, light and dark themes.",
    badgeLocked: "locked",
    langLabel: "Language",
    orgName: "Smyrna Cyber Academy",
    certTitle: "Certificate of Completion",
    certReady: "You completed every training and passed every quiz. Your certificate is ready.",
    certSub: "Cyber Security Awareness Training Program",
    certBy: "This certificate is awarded to",
    certCompleted: "for successfully completing the program.",
    certLevel: "Level",
    certXp: "XP",
    certTrainings: "Trainings",
    certBadges: "Badges",
    certDate: "Date",
    certPrint: "Click to print",
    certClose: "Close",
    toastCertLocked: "Complete all 28 trainings and score 100% on every quiz to unlock your certificate.",
    detailLesson: "Training content",
    lessonCase: "Case study",
    lessonResponse: "Recommended response",
    lessonReason: "Why",
    detailObjectives: "What you will learn",
    detailModules: "Content outline",
    detailStartQuiz: "Start quiz",
    profileTitle: "Profiles",
    profileText: "Each name carries its own progress, XP and badges. Several people can share the same browser.",
    profileAddPlaceholder: "New profile name",
    profileCreate: "Create profile",
    welcomeTitle: "Welcome",
    welcomeText: "Save your progress under your name. You can switch profiles at any time.",
    welcomeNameLabel: "Full Name",
    welcomeNamePlaceholder: "e.g. Alex Smith",
    welcomeStart: "Start",
    welcomeGuest: "Continue as guest",
    close: "Close",
    themeToggle: "Toggle theme",
    footerNote: "This content is for general awareness only; it does not replace your organisation's policies or legal obligations.",
    footerLocal: "All progress is stored in this browser only.",
    emptyTitle: "No results",
    emptyText: "Try a different search term or clear the filters.",
    emptyClear: "Clear filters",
    minutesShort: "min",
    cardComplete: "Complete",
    cardDone: "Completed",
    detailComplete: "Mark as complete",
    detailUncomplete: "Unmark as complete",
    detailDone: "Completed",
    detailQuizBest: "Best quiz score: {score}/{total}",
    levelPrefix: "Level",
    levelSeparator: " · ",
    xpNext: "/ {xp} XP",
    maxLevel: "Maximum level",
    resultsAll: "All {n} trainings listed",
    resultsFiltered: "{shown} / {total} trainings shown",
    quizStep: "Question {i} / {n}",
    quizCorrect: "Correct",
    quizWrong: "Not quite",
    quizNext: "Next question",
    quizFinish: "See result",
    quizClose: "Close",
    quizRetry: "Try again",
    quizResultPerfect: "Flawless!",
    quizResultGood: "Well done!",
    quizResultLow: "Let's try again",
    quizResultText: "{correct} / {total} correct",
    quizXp: "+{xp} XP earned",
    quizBestLine: "Your best: {score}/{total}",
    quizNoXp: "You have already earned all XP available from this quiz.",
    profileStats: "{done} trainings · {xp} XP",
    profileActive: "Active",
    profileSwitch: "Switch",
    profileDelete: "Delete",
    profileSwitchAria: "Switch to {name}",
    profileDeleteAria: "Delete {name}",
    profileDeleteConfirm: "This deletes {name} and all of its progress. Are you sure?",
    guestName: "Guest",
    toastTrainingDone: "+{xp} XP · {title}",
    toastTrainingUndo: "{title} reopened",
    toastQuizDone: "Quiz complete · +{xp} XP",
    toastBadge: "New badge: {name}",
    toastProfileCreated: "Profile created: {name}",
    toastProfileSwitched: "Profile: {name}",
    toastProfileDeleted: "Profile deleted",
    badgeUnlockedTitle: "Badge unlocked"
  }
};

const CATEGORIES = {
  phishing: { color: "#8052ff", light: "#6d3bf5", tr: "Oltalama", en: "Phishing" },
  auth:     { color: "#3dbd9c", light: "#0f6b58", tr: "Parola & Kimlik", en: "Password & Identity" },
  social:   { color: "#ffb829", light: "#8a5a00", tr: "Sosyal Mühendislik", en: "Social Engineering" },
  data:     { color: "#c084fc", light: "#7c3aed", tr: "Veri & Gizlilik", en: "Data & Privacy" },
  device:   { color: "#38bdf8", light: "#0369a1", tr: "Cihaz & Ağ", en: "Device & Network" },
  culture:  { color: "#f472b6", light: "#be185d", tr: "Uyum & Kültür", en: "Compliance & Culture" }
};

const LEVELS = [
  { min: 0,    tr: "Çaylak",          en: "Rookie" },
  { min: 250,  tr: "Gözlemci",        en: "Watcher" },
  { min: 600,  tr: "Koruyucu",        en: "Defender" },
  { min: 1050, tr: "Kalkan",          en: "Shield" },
  { min: 1600, tr: "Muhafız",         en: "Guardian" },
  { min: 2250, tr: "Uzman",           en: "Expert" },
  { min: 3000, tr: "Stratejist",      en: "Strategist" },
  { min: 3850, tr: "Şampiyon",        en: "Champion" },
  { min: 4800, tr: "Efsane",          en: "Legend" },
  { min: 5900, tr: "Siber Efsanesi",  en: "Cyber Legend" }
];

const LEVEL_KEYS = ["beginner", "intermediate", "advanced"];
const LEVEL_LABELS = {
  beginner: { tr: "Başlangıç", en: "Beginner" },
  intermediate: { tr: "Orta", en: "Intermediate" },
  advanced: { tr: "İleri", en: "Advanced" }
};

const TRAININGS = [
  /* ---------------- OLTALAMA ---------------- */
  {
    id: "phishing-basics", cat: "phishing", lvl: "beginner", min: 15, art: "mail",
    tr: {
      t: "Oltalama E-postalarını Tanıma",
      s: "Sahte e-postanın görsel ve dilsel işaretlerini öğrenin; şüpheli bir mesajı 60 saniyede değerlendirin.",
      o: ["Gönderen adresi, alan adı ve bağlantı hedefini doğrulamak", "Aciliyet, korku ve otorite baskısı içeren dil kalıplarını fark etmek", "Şüpheli mesajı doğru kanala raporlayıp tıklamadan kapatmak"],
      m: ["Gerçek vs. sahte e-posta karşılaştırması", "Bağlantı ve ek dosya analizi", "Kurum içi raporlama adımları"],
      g: ["e-posta", "oltalama", "raporlama"],
      q: [
        ["Bir e-postanın gönderenini kontrol ederken en güvenilir yöntem hangisidir?", ["Görünen adı okumak", "Alan adını ve tam adresi incelemek", "İmza görseline bakmak"], 1, "Görünen ad kolayca taklit edilir; asıl kontrol alan adı ve tam adrestir."],
        ["E-postada '10 dakika içinde işlem yapmazsanız hesabınız kapanacak' deniyorsa bu neyin işaretidir?", ["Normal bir hatırlatma", "Aciliyet baskısı", "Güvenli bir otomasyon"], 1, "Aciliyet ve korku, düşünmeden tıklamanız için kullanılan klasik baskı taktikleridir."],
        ["Şüpheli bir e-posta fark ettiniz. En doğru davranış nedir?", ["Bağlantıya tıklayıp kontrol etmek", "Yanıtlayıp gönderene sormak", "Tıklamadan kapatıp raporlamak"], 2, "Tıklamak veya yanıtlamak saldırıyı doğrular; raporlamak savunmayı güçlendirir."]
      ]
    },
    en: {
      t: "Spotting Phishing Emails",
      s: "Learn the visual and verbal signs of a fake email and assess a suspicious message in 60 seconds.",
      o: ["Verify the sender address, domain and link destination", "Recognise language patterns that use urgency, fear and authority", "Report a suspicious message through the right channel without clicking"],
      m: ["Real vs. fake email comparison", "Link and attachment analysis", "Internal reporting steps"],
      g: ["email", "phishing", "reporting"],
      q: [
        ["What is the most reliable way to check an email sender?", ["Read the display name", "Inspect the domain and full address", "Look at the signature image"], 1, "Display names are easy to spoof; the domain and full address are what matter."],
        ["An email says your account will close in 10 minutes unless you act. What is this a sign of?", ["A normal reminder", "Urgency pressure", "A secure automation"], 1, "Urgency and fear are classic pressure tactics to make you click without thinking."],
        ["You spot a suspicious email. What is the right move?", ["Click the link to check it", "Reply and ask the sender", "Close it without clicking and report it"], 2, "Clicking or replying confirms the attack; reporting strengthens defences."]
      ]
    }
  },
  {
    id: "spear-phishing", cat: "phishing", lvl: "intermediate", min: 20, art: "target",
    tr: {
      t: "Hedefli Oltalama (Spear Phishing)",
      s: "Sizi ve rolünüzü araştırarak yazılmış saldırıları, kişiselleştirilmiş mesaj tuzaklarını nasıl ayırt edersiniz?",
      o: ["Açık kaynaklardan toplanan bilgilerin nasıl kullanıldığını görmek", "Makul görünen talebin arkasındaki bilgi toplama amacını sezmek", "Doğrulama için ikinci bir kanal kullanma alışkanlığı kazanmak"],
      m: ["Hedef seçimi ve bilgi toplama", "Gerçekçi bir spear phishing vakası", "İkinci kanaldan doğrulama yöntemi"],
      g: ["hedefli saldırı", "OSINT", "doğrulama"],
      q: [
        ["Spear phishing'i sıradan oltalamadan ayıran temel özellik nedir?", ["Herkesi aynı anda hedeflemesi", "Kişiye ve role özel hazırlanması", "Yalnızca SMS ile gelmesi"], 1, "Hedefli saldırılar kişi, rol ve alışkanlıklara göre özelleştirilir."],
        ["Sosyal medyada paylaştığınız iş bilgileri neden önemlidir?", ["Saldırganın mesajı kişiselleştirmesini sağlar", "İnternet hızını artırır", "Parolanızı otomatik değiştirir"], 0, "Paylaşımlar, saldırganın güvenilir görünen bir mesaj kurgulamasına yardım eder."],
        ["Bir talebin gerçekliğini doğrulamanın en güvenli yolu nedir?", ["Aynı e-postayı yanıtlamak", "Bilinen bir telefon numarasından aramak", "Mesajdaki bağlantıyı açmak"], 1, "Bağımsız ve bilinen bir kanal, saldırganın kontrol edemediği doğrulamadır."]
      ]
    },
    en: {
      t: "Targeted Phishing (Spear Phishing)",
      s: "How do you tell apart attacks written after researching you and your role, and personalised message traps?",
      o: ["See how information gathered from open sources is used", "Sense the information-gathering goal behind a plausible request", "Build the habit of verifying through a second channel"],
      m: ["Target selection and information gathering", "A realistic spear phishing case", "Out-of-band verification"],
      g: ["targeted attack", "OSINT", "verification"],
      q: [
        ["What mainly separates spear phishing from ordinary phishing?", ["It targets everyone at once", "It is tailored to a person and role", "It only arrives by SMS"], 1, "Targeted attacks are customised to a person, role and habits."],
        ["Why does the work information you share on social media matter?", ["It helps an attacker personalise the message", "It speeds up the internet", "It rotates your password automatically"], 0, "Posts help an attacker craft a message that looks trustworthy."],
        ["What is the safest way to verify a request is genuine?", ["Reply to the same email", "Call a known phone number", "Open the link in the message"], 1, "An independent, known channel is verification the attacker does not control."]
      ]
    }
  },
  {
    id: "smishing", cat: "phishing", lvl: "beginner", min: 10, art: "sms",
    tr: {
      t: "SMS ve Mesajlaşma Oltalaması",
      s: "Kargo, banka ve kampanya kılığındaki kısa mesajların ortak kalıplarını ve güvenli tepki yollarını öğrenin.",
      o: ["Kısa bağlantı adreslerini risksiz biçimde incelemek", "Kargo, banka ve kampanya senaryolarındaki ortak kalıpları tanımak", "Şüpheli numarayı engellemek ve resmi kanaldan doğrulamak"],
      m: ["Smishing nasıl çalışır?", "Örnek mesaj galerisi", "Engelleme ve doğrulama"],
      g: ["sms", "mobil", "dolandırıcılık"],
      q: [
        ["Kısa mesajla gelen bir kargo bağlantısında ilk ne yapmalısınız?", ["Hemen tıklamak", "Bağlantı adresini ve göndereni kontrol etmek", "Numarayı rehbere kaydetmek"], 1, "Bağlantı adresi ve gönderen, mesajın sahte olup olmadığını gösterir."],
        ["Kısaltılmış (bit.ly gibi) bağlantılar neden risklidir?", ["Daha yavaş açılır", "Hedef adresi gizler", "Dosya boyutunu artırır"], 1, "Kısa bağlantılar gerçek hedefi saklar; nereye gittiğini göremezsiniz."],
        ["Şüpheli bir SMS aldınız. En güvenli davranış hangisidir?", ["Mesajdaki numarayı arayıp sormak", "Bağlantıya tıklayıp kontrol etmek", "Mesajı silip resmi kanaldan doğrulamak"], 2, "Resmi uygulama veya bilinen numara üzerinden doğrulamak güvenlidir."]
      ]
    },
    en: {
      t: "SMS and Messaging Phishing",
      s: "Learn the common patterns behind delivery, bank and campaign text messages, and how to respond safely.",
      o: ["Inspect shortened links without taking a risk", "Recognise common delivery, bank and campaign scenarios", "Block a suspicious number and verify through an official channel"],
      m: ["How smishing works", "Sample message gallery", "Blocking and verification"],
      g: ["sms", "mobile", "fraud"],
      q: [
        ["A delivery text arrives with a link. What should you check first?", ["Click it right away", "Check the link address and sender", "Save the number to contacts"], 1, "The link address and sender reveal whether the message is fake."],
        ["Why are shortened links (like bit.ly) risky?", ["They open more slowly", "They hide the real destination", "They increase file size"], 1, "Short links mask the real destination, so you cannot see where you are going."],
        ["You receive a suspicious SMS. What is the safest response?", ["Call the number in the message", "Click the link to check", "Delete it and verify through an official channel"], 2, "Verifying through an official app or a known number is safe."]
      ]
    }
  },
  {
    id: "vishing-deepfake", cat: "phishing", lvl: "intermediate", min: 15, art: "voice",
    tr: {
      t: "Sesli Oltalama ve Yapay Zeka Taklidi",
      s: "Yönetici sesi taklit eden aramalar ve deepfake ses kayıtları karşısında hangi refleksler sizi korur?",
      o: ["Yapay zeka ile üretilen sesin ipuçlarını ve sınırlarını anlamak", "Acil ödeme veya parola talebinde geri arama protokolünü uygulamak", "Tanıdık bir ses gelse bile doğrulama adımını atlamamak"],
      m: ["Deepfake ses teknolojisine bakış", "CEO dolandırıcılığı araması simülasyonu", "Doğrulama protokolü"],
      g: ["deepfake", "telefon", "yapay zeka"],
      q: [
        ["Yöneticinizin sesiyle gelen acil ödeme talebinde ne yapmalısınız?", ["Hemen ödemeyi yapmak", "Bilinen bir numaradan geri arayıp doğrulamak", "E-postayla yanıtlamak"], 1, "Ses taklit edilebilir; bağımsız bir kanaldan doğrulamak zorunludur."],
        ["Deepfake ses teknolojisi neyi mümkün kılar?", ["Gerçek bir kişinin sesini taklit etmeyi", "Telefon şebekesini kapatmayı", "SIM kartı kopyalamayı"], 0, "Deepfake araçları, kısa bir ses örneğinden ikna edici bir taklit üretebilir."],
        ["Arayan numaranın kurumunuzun numarası gibi görünmesi ne anlama gelir?", ["Arama kesinlikle güvenlidir", "Numara taklit edilebilir", "Hat şifrelenmiştir"], 1, "Numara taklidi (spoofing) yaygındır; görünen numara güven kanıtı değildir."]
      ]
    },
    en: {
      t: "Voice Phishing and AI Impersonation",
      s: "Which reflexes protect you from calls that mimic an executive's voice and deepfake audio?",
      o: ["Understand the clues and limits of AI-generated voice", "Apply a call-back protocol for urgent payment or password requests", "Never skip verification, even for a familiar voice"],
      m: ["A look at deepfake voice technology", "CEO fraud call simulation", "Verification protocol"],
      g: ["deepfake", "phone", "artificial intelligence"],
      q: [
        ["You get an urgent payment request in your manager's voice. What should you do?", ["Make the payment immediately", "Call back on a known number to verify", "Reply by email"], 1, "Voices can be cloned; verifying through an independent channel is mandatory."],
        ["What does deepfake voice technology make possible?", ["Imitating a real person's voice", "Shutting down the phone network", "Cloning a SIM card"], 0, "Deepfake tools can produce a convincing imitation from a short voice sample."],
        ["The caller ID shows your organisation's number. What does that mean?", ["The call is definitely safe", "Numbers can be spoofed", "The line is encrypted"], 1, "Caller ID spoofing is common; the displayed number is not proof of trust."]
      ]
    }
  },
  {
    id: "quishing", cat: "phishing", lvl: "intermediate", min: 10, art: "qr",
    tr: {
      t: "QR Kod Oltalaması (Quishing)",
      s: "Restoran menüsü, otopark ödemesi ve toplantı daveti kılığındaki QR kodların arkasındaki riskler.",
      o: ["QR kodun hedef adresini önizleyerek kontrol etmek", "Fiziksel ortama sonradan yerleştirilmiş kodları fark etmek", "QR üzerinden kimlik bilgisi isteyen sayfaları reddetmek"],
      m: ["QR kodun anatomisi", "Sahte ödeme sayfası vakası", "Güvenli tarama alışkanlıkları"],
      g: ["qr kod", "mobil", "ödeme"],
      q: [
        ["QR kod okutmadan önce ne yapmalısınız?", ["Kodu fotoğraflamak", "Hedef adresi önizlemek", "Kodu yazdırmak"], 1, "Tarama uygulamasının gösterdiği hedef adresi kontrol etmek, sahte yönlendirmeyi yakalar."],
        ["Otopark veya restoranda yapıştırılmış QR kodlarda hangi risk var?", ["Sonradan değiştirilmiş olabilir", "İnterneti yavaşlatır", "Pil tüketir"], 0, "Fiziksel kodlar kolayca üzerine yapıştırılan sahte kodlarla değiştirilebilir."],
        ["QR kod sizi bir ödeme sayfasına götürdü ve kart bilgisi istiyor. Ne yapmalısınız?", ["Bilgileri girmek", "Sayfayı kapatıp resmi uygulamadan devam etmek", "Ekran görüntüsü almak"], 1, "Kart bilgisi için her zaman resmi uygulamayı veya bilinen adresi kullanın."]
      ]
    },
    en: {
      t: "QR Code Phishing (Quishing)",
      s: "The risks behind QR codes disguised as restaurant menus, parking payments and meeting invitations.",
      o: ["Preview and check the QR code's destination", "Spot codes placed in the physical world after the fact", "Reject pages that ask for credentials through a QR code"],
      m: ["Anatomy of a QR code", "Fake payment page case", "Safe scanning habits"],
      g: ["qr code", "mobile", "payment"],
      q: [
        ["What should you do before scanning a QR code?", ["Take a photo of it", "Preview the destination address", "Print the code"], 1, "Checking the destination shown by your scanner catches fake redirects."],
        ["What is the risk with QR codes stuck up in car parks or restaurants?", ["They may have been swapped later", "They slow down the internet", "They drain the battery"], 0, "Physical codes can easily be covered with a fake sticker."],
        ["A QR code takes you to a payment page asking for card details. What now?", ["Enter the details", "Close it and continue in the official app", "Take a screenshot"], 1, "Always use the official app or a known address for card details."]
      ]
    }
  },

  /* ---------------- PAROLA & KİMLİK ---------------- */
  {
    id: "password-manager", cat: "auth", lvl: "beginner", min: 15, art: "key",
    tr: {
      t: "Güçlü Parola ve Parola Yöneticileri",
      s: "Uzunluk mu karmaşıklık mı? Her hesap için benzersiz parola üretmenin pratik ve akılda kalıcı yolu.",
      o: ["Parola uzunluğu ile kırılma süresi arasındaki ilişkiyi kavramak", "Parola yöneticisi kurup ana parolayı güvenle saklamak", "Aynı parolayı birden fazla hesapta kullanmanın riskini görmek"],
      m: ["Parola kırma yöntemleri", "Parola yöneticisi kurulumu", "Ana parola ve kurtarma planı"],
      g: ["parola", "parola yöneticisi", "hesap güvenliği"],
      q: [
        ["Parolada uzunluk mu karmaşıklık mı daha önemlidir?", ["Kısa ve karmaşık", "Uzun ve benzersiz", "Her yerde aynı"], 1, "Uzunluk, kaba kuvvet saldırılarına karşı en etkili tek faktördür; benzersizlik ise zincirleme ihlalleri önler."],
        ["Parola yöneticisinin temel faydası nedir?", ["Her hesap için benzersiz parola üretmek", "Parolaları e-postayla paylaşmak", "Parolayı tamamen kaldırmak"], 0, "Parola yöneticisi güçlü ve benzersiz parolaları sizin yerinize üretir ve saklar."],
        ["Ana parolanız için en iyi yaklaşım hangisidir?", ["Not defterine yazmak", "Uzun bir cümle kullanmak", "Doğum tarihinizi kullanmak"], 1, "Uzun ve akılda kalıcı bir cümle, hem güçlü hem yönetilebilir bir ana parola sağlar."]
      ]
    },
    en: {
      t: "Strong Passwords and Password Managers",
      s: "Length or complexity? A practical, memorable way to generate a unique password for every account.",
      o: ["Understand the link between password length and cracking time", "Set up a password manager and store the master password safely", "See the risk of reusing one password across accounts"],
      m: ["Password cracking methods", "Password manager setup", "Master password and recovery plan"],
      g: ["password", "password manager", "account security"],
      q: [
        ["Which matters more in a password: length or complexity?", ["Short and complex", "Long and unique", "The same everywhere"], 1, "Length is the single most effective factor against brute force; uniqueness prevents cascading breaches."],
        ["What is the main benefit of a password manager?", ["It generates a unique password for each account", "It shares passwords by email", "It removes passwords entirely"], 0, "A password manager generates and stores strong, unique passwords for you."],
        ["What is the best approach for your master password?", ["Write it in a notebook", "Use a long passphrase", "Use your date of birth"], 1, "A long, memorable passphrase is both strong and manageable."]
      ]
    }
  },
  {
    id: "mfa-basics", cat: "auth", lvl: "beginner", min: 12, art: "shield",
    tr: {
      t: "Çok Faktörlü Kimlik Doğrulama (MFA)",
      s: "Parola çalınsa bile hesabı koruyan ikinci katman: hangi MFA yöntemi ne kadar güvenli?",
      o: ["SMS, uygulama, donanım anahtarı ve passkey yöntemlerini karşılaştırmak", "MFA'yı kritik hesaplarda (e-posta, banka, bulut) etkinleştirmek", "Yedek kodları güvenli bir yerde saklamak"],
      m: ["MFA türleri ve güven seviyeleri", "Kurulum adımları", "Yedek erişim planı"],
      g: ["mfa", "2fa", "kimlik doğrulama"],
      q: [
        ["MFA hangi durumda koruma sağlar?", ["Parola çalındığında", "Cihaz kapalıyken", "İnternet yokken"], 0, "MFA, saldırgan parolayı bilse bile ikinci faktör olmadan giriş yapamamasını sağlar."],
        ["Hangisi genellikle en güçlü ikinci faktördür?", ["SMS kodu", "Donanım anahtarı veya passkey", "Güvenlik sorusu"], 1, "Donanım anahtarları ve passkey'ler, kimlik avına karşı SMS kodlarından çok daha dirençlidir."],
        ["Yedek kodları nerede saklamalısınız?", ["Ekran görüntüsü olarak galeride", "Güvenli ve çevrimdışı bir yerde", "E-posta taslağında"], 1, "Yedek kodlar, çevrimiçi hesaplardan ayrı ve güvenli bir yerde tutulmalıdır."]
      ]
    },
    en: {
      t: "Multi-Factor Authentication (MFA)",
      s: "The second layer that protects an account even when the password is stolen: which MFA method is how secure?",
      o: ["Compare SMS, app, hardware key and passkey methods", "Enable MFA on critical accounts (email, bank, cloud)", "Store backup codes in a safe place"],
      m: ["MFA types and trust levels", "Setup steps", "Backup access plan"],
      g: ["mfa", "2fa", "authentication"],
      q: [
        ["When does MFA protect you?", ["When your password is stolen", "When the device is off", "When there is no internet"], 0, "MFA stops an attacker from signing in without the second factor, even if they know the password."],
        ["Which is usually the strongest second factor?", ["An SMS code", "A hardware key or passkey", "A security question"], 1, "Hardware keys and passkeys resist phishing far better than SMS codes."],
        ["Where should you store backup codes?", ["As a screenshot in your gallery", "In a safe, offline place", "In an email draft"], 1, "Backup codes should live somewhere safe and separate from online accounts."]
      ]
    }
  },
  {
    id: "mfa-fatigue", cat: "auth", lvl: "intermediate", min: 15, art: "bell",
    tr: {
      t: "MFA Yorgunluğu ve Push Bombardımanı",
      s: "Gece yarısı gelen ısrarlı onay bildirimleri bir saldırıdır. Neden 'kabul et' tuşuna basmamalısınız?",
      o: ["MFA yorgunluğu saldırısının mantığını anlamak", "Beklenmeyen onay isteğini reddedip olay bildirmek", "Numara eşleştirme özelliğini kullanmak"],
      m: ["Push bombardımanı senaryosu", "Numara eşleştirme ayarı", "Olay sonrası adımlar"],
      g: ["mfa", "saldırı", "bildirim"],
      q: [
        ["Gece art arda gelen MFA onay bildirimleri neyin işaretidir?", ["Sistem güncellemesi", "MFA yorgunluğu saldırısı", "Pil optimizasyonu"], 1, "Saldırgan, siz onaylayana kadar bildirim göndererek pes edeceğinizi umar."],
        ["Beklemediğiniz bir onay isteği geldiğinde ne yapmalısınız?", ["Kabul etmek", "Reddedip olay bildirmek", "Görmezden gelmek"], 1, "İsteği reddetmek ve bildirmek, saldırganın parolanızı bildiğini ortaya çıkarır."],
        ["Numara eşleştirme (number matching) neyi engeller?", ["Yanlışlıkla onaylamayı", "Parola değişimini", "Cihaz güncellemesini"], 0, "Numara eşleştirme, ekranda gösterilen sayıyı girmenizi ister ve körlemesine onayı engeller."]
      ]
    },
    en: {
      t: "MFA Fatigue and Push Bombing",
      s: "Relentless approval prompts in the middle of the night are an attack. Why should you never tap approve?",
      o: ["Understand the logic of an MFA fatigue attack", "Deny an unexpected prompt and report the incident", "Use number matching"],
      m: ["Push bombing scenario", "Number matching setup", "Post-incident steps"],
      g: ["mfa", "attack", "notification"],
      q: [
        ["A burst of MFA prompts at night is a sign of what?", ["A system update", "An MFA fatigue attack", "Battery optimisation"], 1, "The attacker keeps sending prompts hoping you will give in and approve."],
        ["What should you do with an approval request you did not expect?", ["Approve it", "Deny it and report the incident", "Ignore it"], 1, "Denying and reporting reveals that an attacker knows your password."],
        ["What does number matching prevent?", ["Accidental approval", "Password changes", "Device updates"], 0, "Number matching asks you to type the number shown on screen, blocking blind approvals."]
      ]
    }
  },
  {
    id: "password-leak", cat: "auth", lvl: "intermediate", min: 20, art: "drop",
    tr: {
      t: "Sızdırılmış Parola Krizi Yönetimi",
      s: "Parolanız bir veri ihlalinde yayınlandıysa ilk saat içinde atmanız gereken adımlar.",
      o: ["Sızıntı kontrol araçlarıyla durum tespiti yapmak", "Etkilenen hesaplarda parola ve oturumları aynı anda yenilemek", "Aynı parolayı kullandığınız diğer hesapları da güncellemek"],
      m: ["Sızıntı kontrol araçları", "Hesap kurtarma sırası", "Oturum ve cihaz temizliği"],
      g: ["veri ihlali", "parola", "kriz"],
      q: [
        ["Parolanızın bir ihlalde sızdığını öğrendiniz. İlk adım nedir?", ["Beklemek", "Parolayı hemen değiştirmek ve oturumları kapatmak", "Aynı parolayı biraz güçlendirmek"], 1, "Sızan parola artık kalıcı olarak güvenilmez; hemen değiştirilmelidir."],
        ["Aynı parolayı başka hesaplarda da kullandıysanız ne yapmalısınız?", ["Sadece birini değiştirmek", "Hepsini değiştirmek", "Hiçbirini değiştirmemek"], 1, "Aynı parola, bir ihlalin tüm hesaplara yayılması demektir."],
        ["Sızıntı kontrolü neden düzenli yapılmalıdır?", ["Eski ihlaller yıllar sonra ortaya çıkar", "İnternet hızını artırır", "Parola otomatik yenilenir"], 0, "Veriler yıllar sonra satışa çıkabilir; düzenli kontrol erken harekete geçmeyi sağlar."]
      ]
    },
    en: {
      t: "Handling a Leaked Password",
      s: "The steps to take in the first hour if your password appears in a data breach.",
      o: ["Assess the situation with breach-check tools", "Reset the password and sessions together on affected accounts", "Update every other account that shared the same password"],
      m: ["Breach check tools", "Account recovery order", "Session and device cleanup"],
      g: ["data breach", "password", "crisis"],
      q: [
        ["You learn your password leaked in a breach. What is step one?", ["Wait", "Change the password immediately and end sessions", "Make the same password slightly stronger"], 1, "A leaked password is permanently untrustworthy; change it right away."],
        ["If you reused that password elsewhere, what should you do?", ["Change just one account", "Change all of them", "Change none"], 1, "A reused password means one breach spreads to every account."],
        ["Why check for leaks regularly?", ["Old breaches surface years later", "It speeds up the internet", "It rotates passwords automatically"], 0, "Data can surface for sale years later; regular checks let you act early."]
      ]
    }
  },
  {
    id: "passkeys", cat: "auth", lvl: "advanced", min: 20, art: "fingerprint",
    tr: {
      t: "Passkey ve Şifresiz Kimlik Doğrulama",
      s: "Parolanın yerini alan kriptografik anahtarlar nasıl çalışır, hangi riskler devam eder?",
      o: ["Passkey'in açık anahtar kriptografisiyle çalışma mantığını açıklamak", "Cihaz bazlı ve senkronize passkey arasındaki farkı bilmek", "Kayıp cihaz senaryosunda kurtarma akışını planlamak"],
      m: ["Passkey mimarisi", "Platform desteği ve geçiş stratejisi", "Kurtarma ve yedekleme"],
      g: ["passkey", "fido2", "şifresiz"],
      q: [
        ["Passkey'in paroladan temel farkı nedir?", ["Sunucuda kullanılabilir bir parola saklamaması", "Daha kısa olması", "Sadece mobilde çalışması"], 0, "Passkey, sunucuda ele geçirilebilecek bir sır tutmaz; kimlik doğrulama kriptografiyle yapılır."],
        ["Passkey'in bağlı olduğu cihazı kaybettiyseniz ne yapmalısınız?", ["Yeni hesap açmak", "Kurtarma veya yedek anahtarını kullanmak", "Parolayı e-postayla istemek"], 1, "Kayıt sırasında oluşturulan kurtarma yöntemi veya ikinci cihaz devreye girer."],
        ["Senkronize passkey hangi avantajı sağlar?", ["Cihazlar arasında kullanılabilirlik", "Daha düşük pil tüketimi", "Reklam engelleme"], 0, "Senkronize passkey'ler aynı hesap için birden fazla cihazda çalışır."]
      ]
    },
    en: {
      t: "Passkeys and Passwordless Authentication",
      s: "How the cryptographic keys replacing passwords work, and which risks remain.",
      o: ["Explain how passkeys use public-key cryptography", "Know the difference between device-bound and synced passkeys", "Plan the recovery flow for a lost device"],
      m: ["Passkey architecture", "Platform support and migration strategy", "Recovery and backup"],
      g: ["passkey", "fido2", "passwordless"],
      q: [
        ["What is the key difference between a passkey and a password?", ["It stores no usable secret on the server", "It is shorter", "It only works on mobile"], 0, "A passkey keeps no secret on the server that can be stolen; authentication is cryptographic."],
        ["You lose the device your passkey is bound to. What now?", ["Create a new account", "Use your recovery method or backup key", "Ask for the password by email"], 1, "The recovery method or second device you set up during registration takes over."],
        ["What advantage do synced passkeys provide?", ["They work across devices", "Lower battery use", "Ad blocking"], 0, "Synced passkeys work on multiple devices for the same account."]
      ]
    }
  },

  /* ---------------- SOSYAL MÜHENDİSLİK ---------------- */
  {
    id: "social-engineering", cat: "social", lvl: "beginner", min: 15, art: "masks",
    tr: {
      t: "Sosyal Mühendislik Temelleri",
      s: "Teknoloji değil insan hedeflenir. Otorite, aciliyet ve yardımseverlik nasıl kullanılıyor?",
      o: ["Sosyal mühendisliğin temel ikna prensiplerini tanımak", "Baskı altında karar vermeyi geciktirme refleksi geliştirmek", "Bilgi paylaşımı öncesi 'kim, ne için istiyor?' sorusunu sormak"],
      m: ["İkna prensipleri", "Kısa vaka analizleri", "Durdur-düşün-doğrula çerçevesi"],
      g: ["insan faktörü", "ikna", "farkındalık"],
      q: [
        ["Sosyal mühendislikte saldırganın asıl hedefi nedir?", ["Sunucu", "İnsan", "Yazıcı"], 1, "Sosyal mühendislik, teknik açık yerine insanın güvenini ve duygularını hedefler."],
        ["Hangisi bir ikna taktiği değildir?", ["Otorite", "Aciliyet", "Düzenli yedekleme"], 2, "Otorite ve aciliyet baskı kurar; düzenli yedekleme ise bir savunma önlemidir."],
        ["Baskı altında karar vermemek için ne yapmalısınız?", ["Hemen yanıt vermek", "Durdur, düşün, doğrula", "Konuyu değiştirmek"], 1, "Kısa bir duraklama ve bağımsız doğrulama, çoğu saldırıyı bozar."]
      ]
    },
    en: {
      t: "Foundations of Social Engineering",
      s: "The target is not technology but people. How are authority, urgency and helpfulness used against you?",
      o: ["Recognise the core persuasion principles behind social engineering", "Build the reflex to delay decisions under pressure", "Ask 'who wants this, and why?' before sharing information"],
      m: ["Persuasion principles", "Short case analyses", "Stop-think-verify framework"],
      g: ["human factor", "persuasion", "awareness"],
      q: [
        ["Who is the real target of social engineering?", ["The server", "The person", "The printer"], 1, "Social engineering targets human trust and emotion instead of a technical flaw."],
        ["Which of these is not a persuasion tactic?", ["Authority", "Urgency", "Regular backups"], 2, "Authority and urgency apply pressure; regular backups are a defence."],
        ["How do you avoid deciding under pressure?", ["Respond immediately", "Stop, think, verify", "Change the subject"], 1, "A short pause and independent verification defeats most attacks."]
      ]
    }
  },
  {
    id: "phone-scams", cat: "social", lvl: "beginner", min: 12, art: "phone",
    tr: {
      t: "Telefon Dolandırıcılığı Senaryoları",
      s: "Banka, operatör, kargo ve 'polis' aramaları: gerçek kurumlar sizden neyi asla istemez?",
      o: ["Arayan numaranın taklit edilebildiğini bilmek", "Hiçbir kurumun telefonda parola veya tek kullanımlık kod istemediğini hatırlamak", "Aramayı kapatıp resmi numaradan geri aramak"],
      m: ["Numara taklidi", "Yaygın senaryolar", "Geri arama protokolü"],
      g: ["telefon", "dolandırıcılık", "numara taklidi"],
      q: [
        ["Banka sizi arayıp tek kullanımlık kod isterse ne yapmalısınız?", ["Kodu paylaşmak", "Asla paylaşmamak ve resmi numaradan aramak", "Sadece ilk üç hanesini vermek"], 1, "Bankalar sizden doğrulama kodunu istemez; isteyen kişi saldırgandır."],
        ["Arayan numaranın gerçek kuruma ait görünmesi neyi gösterir?", ["Kesinlikle güvenilir olduğunu", "Numaranın taklit edilebildiğini", "Hattın şifreli olduğunu"], 1, "Numara taklidi yaygındır; görünen numara tek başına güven kanıtı değildir."],
        ["Telefon dolandırıcılığında en etkili savunma nedir?", ["Hızlı konuşmak", "Aramayı kapatıp resmi kanaldan doğrulamak", "Karşı tarafı yanıltmak"], 1, "Aramayı kapatmak ve resmi kanaldan doğrulamak inisiyatifi elinize alır."]
      ]
    },
    en: {
      t: "Phone Scam Scenarios",
      s: "Calls pretending to be your bank, carrier, courier or even the police: what will a real organisation never ask for?",
      o: ["Know that caller ID can be spoofed", "Remember that no organisation asks for a password or one-time code by phone", "Hang up and call back on an official number"],
      m: ["Caller ID spoofing", "Common scenarios", "Call-back protocol"],
      g: ["phone", "fraud", "spoofing"],
      q: [
        ["Your bank calls and asks for a one-time code. What do you do?", ["Share the code", "Never share it and call the official number", "Give just the first three digits"], 1, "Banks never ask for your verification code; anyone who does is an attacker."],
        ["The number looks like the real organisation. What does that show?", ["It is definitely safe", "Numbers can be spoofed", "The line is encrypted"], 1, "Caller ID spoofing is common; the displayed number alone proves nothing."],
        ["What is the most effective defence against phone fraud?", ["Talk fast", "Hang up and verify through an official channel", "Mislead the caller"], 1, "Hanging up and verifying officially puts you back in control."]
      ]
    }
  },
  {
    id: "pretexting", cat: "social", lvl: "intermediate", min: 18, art: "idcard",
    tr: {
      t: "Pretexting: Sahte Kimlikle İkna",
      s: "BT destek, denetçi veya yeni yönetici kılığına giren bir saldırganı nasıl yakalarsınız?",
      o: ["Rol yapma saldırılarındaki tutarsızlıkları fark etmek", "Kimlik doğrulamasını bağımsız bir kanaldan yapmak", "Bilgi kırıntılarının birleşerek nasıl büyük bir tablo oluşturduğunu görmek"],
      m: ["Pretext kurgusu", "BT destek taklidi vakası", "Kimlik doğrulama kontrol listesi"],
      g: ["pretexting", "kimlik", "ikna"],
      q: [
        ["Pretexting nedir?", ["Teknik bir yazılım açığı", "Sahte bir kimlik ve senaryo ile ikna etme", "Otomatik bir yedekleme"], 1, "Saldırgan, inandırıcı bir rol ve gerekçe kurgulayarak bilgi toplar."],
        ["BT destek olduğunu söyleyen biri parolanızı isterse ne yapmalısınız?", ["Vermek", "Kimliğini bağımsız kanaldan doğrulamak", "E-posta ile göndermek"], 1, "Gerçek BT ekibi parolanızı istemez; talebi bağımsız kanaldan doğrulayın."],
        ["Hangi bilgi kırıntısı saldırgan için değerlidir?", ["Masada açık duran notlar", "Tarayıcı sürümü", "Monitör parlaklığı"], 0, "Fiziksel ortamdaki notlar, saldırganın senaryosunu güçlendiren bilgiler içerir."]
      ]
    },
    en: {
      t: "Pretexting: Persuasion with a False Identity",
      s: "How do you catch an attacker posing as IT support, an auditor or a new manager?",
      o: ["Spot inconsistencies in role-play attacks", "Verify identity through an independent channel", "See how small pieces of information combine into a bigger picture"],
      m: ["Building a pretext", "IT support impersonation case", "Identity verification checklist"],
      g: ["pretexting", "identity", "persuasion"],
      q: [
        ["What is pretexting?", ["A technical software flaw", "Persuading with a false identity and scenario", "An automatic backup"], 1, "The attacker gathers information by inventing a convincing role and reason."],
        ["Someone claiming to be IT support asks for your password. What now?", ["Give it", "Verify their identity through an independent channel", "Send it by email"], 1, "Real IT staff do not ask for your password; verify the request independently."],
        ["Which fragment of information is valuable to an attacker?", ["Notes left on your desk", "Your browser version", "Your monitor brightness"], 0, "Notes in the physical environment contain details that strengthen a pretext."]
      ]
    }
  },
  {
    id: "bec", cat: "social", lvl: "intermediate", min: 20, art: "invoice",
    tr: {
      t: "İş E-postası Ele Geçirme (BEC)",
      s: "Ödeme talebi, IBAN değişikliği ve sahte fatura: para kaybının en yaygın dijital yolu.",
      o: ["BEC saldırılarının neden güvenlik filtrelerinden geçtiğini anlamak", "Ödeme ve IBAN değişikliğinde çift kanal doğrulaması uygulamak", "E-posta zinciri ele geçirildiğinde nelerin açığa çıktığını değerlendirmek"],
      m: ["BEC anatomisi", "Sahte fatura vakası", "Ödeme doğrulama süreci"],
      g: ["bec", "finans", "e-posta"],
      q: [
        ["BEC saldırılarında en sık hedeflenen nedir?", ["Ödeme ve fatura süreçleri", "Yazıcı ayarları", "Toplantı odaları"], 0, "Saldırganlar para transferi ve fatura onayı gibi doğrudan finansal süreçleri hedefler."],
        ["IBAN değişikliği talebi geldiğinde ne yapmalısınız?", ["E-postayı yanıtlayıp onaylamak", "Bilinen bir telefon numarasından doğrulamak", "Hemen ödemeyi yapmak"], 1, "IBAN değişikliği her zaman bilinen bir kanaldan doğrulanmalıdır."],
        ["BEC e-postaları neden güvenlik filtrelerinden geçebilir?", ["Gerçek bir hesaptan gönderilebilir", "Dosya boyutu küçüktür", "Konu satırı boştur"], 0, "Ele geçirilmiş gerçek bir hesap, filtreler için güvenilir görünür."]
      ]
    },
    en: {
      t: "Business Email Compromise (BEC)",
      s: "Payment requests, changed bank details and fake invoices: the most common digital route to financial loss.",
      o: ["Understand why BEC emails pass security filters", "Apply two-channel verification to payments and bank detail changes", "Assess what a compromised email thread exposes"],
      m: ["Anatomy of BEC", "Fake invoice case", "Payment verification process"],
      g: ["bec", "finance", "email"],
      q: [
        ["What is most often targeted in BEC attacks?", ["Payment and invoice processes", "Printer settings", "Meeting rooms"], 0, "Attackers target directly financial processes such as transfers and invoice approvals."],
        ["A request to change bank details arrives. What should you do?", ["Reply and approve", "Verify by calling a known number", "Pay immediately"], 1, "Bank detail changes must always be verified through a known channel."],
        ["Why can BEC emails pass security filters?", ["They can come from a real compromised account", "They are small files", "The subject line is empty"], 0, "A real compromised account looks trustworthy to filters."]
      ]
    }
  },
  {
    id: "insider-threat", cat: "social", lvl: "advanced", min: 25, art: "insider",
    tr: {
      t: "İçeriden Tehditler ve Yetki Suistimali",
      s: "Kötü niyetli, ihmal eden veya kandırılan çalışan: içeriden gelen riskleri tanımak ve sınırlamak.",
      o: ["Kötü niyetli, ihmalci ve ele geçirilmiş içeriden tehditleri ayırt etmek", "En az yetki ilkesini günlük işlere uygulamak", "Şüpheli erişim davranışlarını erken bildirmek"],
      m: ["İçeriden tehdit türleri", "Yetki ve erişim gözden geçirmesi", "Bildirim kültürü"],
      g: ["içeriden tehdit", "yetki", "erişim"],
      q: [
        ["İçeriden tehdit yalnızca kötü niyetli çalışan mıdır?", ["Evet", "Hayır; ihmal ve hesap ele geçirme de dahildir", "Sadece yöneticilerdir"], 1, "İhmal ve ele geçirilmiş hesaplar da içeriden tehdit kapsamındadır."],
        ["En az yetki ilkesi neyi amaçlar?", ["Herkesin her şeye erişmesini", "Yalnızca iş için gereken erişimi vermeyi", "Yetkileri tamamen kaldırmayı"], 1, "Gereğinden fazla yetki, hem hatayı hem kötüye kullanımı büyütür."],
        ["Şüpheli bir erişim fark ettiğinizde ne yapmalısınız?", ["Kendiniz araştırmak", "Erken bildirmek", "Sosyal medyada paylaşmak"], 1, "Erken bildirim, olay müdahalesinin en ucuz ve en etkili adımıdır."]
      ]
    },
    en: {
      t: "Insider Threats and Privilege Abuse",
      s: "The malicious, the careless or the compromised employee: recognising and limiting risk from inside.",
      o: ["Tell apart malicious, negligent and compromised insiders", "Apply least privilege to everyday work", "Report suspicious access behaviour early"],
      m: ["Insider threat types", "Privilege and access review", "Reporting culture"],
      g: ["insider threat", "privilege", "access"],
      q: [
        ["Is an insider threat only a malicious employee?", ["Yes", "No; negligence and compromised accounts count too", "Only managers"], 1, "Negligence and compromised accounts also fall under insider threats."],
        ["What does least privilege aim for?", ["Everyone accesses everything", "Granting only the access the job needs", "Removing all access"], 1, "Excess privilege amplifies both mistakes and abuse."],
        ["You notice suspicious access. What should you do?", ["Investigate alone", "Report it early", "Share it on social media"], 1, "Early reporting is the cheapest, most effective incident response step."]
      ]
    }
  },

  /* ---------------- VERİ & GİZLİLİK ---------------- */
  {
    id: "kvkk", cat: "data", lvl: "beginner", min: 20, art: "document",
    tr: {
      t: "KVKK ve Kişisel Veri Sorumluluğu",
      s: "Hangi veri kişiseldir, işlerken hangi ilkeler geçerlidir ve bir ihlalde sorumluluk kime aittir?",
      o: ["Kişisel veri ve özel nitelikli veri ayrımını yapmak", "Veri minimizasyonu ve amaç sınırlaması ilkelerini uygulamak", "İhlal durumunda bildirim süresi ve sorumluluğunu bilmek"],
      m: ["KVKK temel kavramları", "İşleme şartları ve ilkeler", "İhlal bildirim yükümlülüğü"],
      g: ["kvkk", "gizlilik", "uyum"],
      q: [
        ["Hangisi kişisel veridir?", ["Şirket logosu", "Ad, soyad ve e-posta adresi", "Ürün fiyatı"], 1, "Kimliği belirli veya belirlenebilir bir kişiye ait her bilgi kişisel veridir."],
        ["Veri minimizasyonu ne demektir?", ["Mümkün olduğunca az veri toplamak", "Tüm verileri süresiz saklamak", "Verileri paylaşmak"], 0, "Amaç için gereken kadar veri toplamak, hem uyumun hem güvenliğin temelidir."],
        ["Bir veri ihlali fark ettiğinizde ne yapmalısınız?", ["Kendiniz çözmeye çalışmak", "Derhal bildirim sürecini başlatmak", "Bekleyip gözlemlemek"], 1, "İhlal bildirimi yasal sürelere bağlıdır; gecikme sorumluluğu büyütür."]
      ]
    },
    en: {
      t: "Data Protection and Personal Data Responsibility",
      s: "What counts as personal data, which principles apply when processing it, and who is responsible after a breach?",
      o: ["Distinguish personal data from special category data", "Apply data minimisation and purpose limitation", "Know the notification window and responsibility in a breach"],
      m: ["Core data protection concepts", "Processing conditions and principles", "Breach notification duty"],
      g: ["privacy", "gdpr", "compliance"],
      q: [
        ["Which of these is personal data?", ["A company logo", "A name and email address", "A product price"], 1, "Any information relating to an identified or identifiable person is personal data."],
        ["What does data minimisation mean?", ["Collect as little as possible", "Keep all data forever", "Share the data"], 0, "Collecting only what the purpose needs is the basis of both compliance and security."],
        ["You notice a data breach. What should you do?", ["Try to fix it alone", "Start the notification process immediately", "Wait and observe"], 1, "Breach notification is bound to legal deadlines; delay increases liability."]
      ]
    }
  },
  {
    id: "data-classification", cat: "data", lvl: "intermediate", min: 15, art: "tags",
    tr: {
      t: "Veri Sınıflandırma ve Etiketleme",
      s: "Bir dosyanın 'gizli' mi 'herkese açık' mı olduğunu hızlıca belirleyin ve doğru şekilde paylaşın.",
      o: ["Kurumsal veri sınıflarını (açık, iç, gizli, çok gizli) tanımak", "Belge ve e-postaları doğru etiketlemek", "Sınıfa uygun paylaşım ve saklama kuralı seçmek"],
      m: ["Sınıflandırma şeması", "Etiketleme pratiği", "Paylaşım matrisi"],
      g: ["veri", "sınıflandırma", "etiketleme"],
      q: [
        ["Veri sınıflandırması neden yapılır?", ["Paylaşım ve koruma kurallarını belirlemek", "Dosya boyutunu küçültmek", "İnternet hızını artırmak"], 0, "Sınıf, verinin kimlerle ve nasıl paylaşılabileceğini belirler."],
        ["'Gizli' etiketli bir belgeyi nasıl paylaşmalısınız?", ["Herkese açık bağlantıyla", "Yetkili kişilerle, süreli ve kısıtlı erişimle", "Sosyal medyada"], 1, "Gizli veri yalnızca yetkili kişilerle, süreli ve kısıtlı erişimle paylaşılır."],
        ["Yanlış sınıflandırmanın olası sonucu nedir?", ["Gereksiz erişim ve sızıntı", "Daha hızlı yedekleme", "Daha iyi sıkıştırma"], 0, "Yanlış etiket, verinin gereğinden geniş kitleye açılmasına yol açar."]
      ]
    },
    en: {
      t: "Data Classification and Labelling",
      s: "Quickly decide whether a file is confidential or public, and share it the right way.",
      o: ["Recognise the data classes (public, internal, confidential, restricted)", "Label documents and emails correctly", "Choose sharing and retention rules that match the class"],
      m: ["Classification scheme", "Labelling practice", "Sharing matrix"],
      g: ["data", "classification", "labelling"],
      q: [
        ["Why classify data?", ["To define sharing and protection rules", "To shrink file size", "To speed up the internet"], 0, "The class determines who may access the data and how it may be shared."],
        ["How should a document marked confidential be shared?", ["Via a public link", "With authorised people, time-limited and restricted", "On social media"], 1, "Confidential data goes only to authorised people with time-limited, restricted access."],
        ["What can misclassification cause?", ["Unnecessary access and leaks", "Faster backups", "Better compression"], 0, "A wrong label opens data to a wider audience than intended."]
      ]
    }
  },
  {
    id: "secure-sharing", cat: "data", lvl: "beginner", min: 10, art: "cloud",
    tr: {
      t: "Güvenli Dosya Paylaşımı ve Bulut",
      s: "Yanlış kişiye gönderilen tek bir dosya büyük bir ihlale dönüşebilir. Paylaşmadan önce üç kontrol.",
      o: ["Paylaşım bağlantısında süre ve erişim kısıtı belirlemek", "Alıcı adreslerini ve ekleri göndermeden önce kontrol etmek", "Kişisel bulut hesaplarında kurumsal veri tutmamak"],
      m: ["Paylaşım modeli seçimi", "Yanlış alıcı vakası", "Geri alma ve bildirim"],
      g: ["bulut", "dosya paylaşımı", "veri"],
      q: [
        ["Bulut bağlantısı paylaşırken neyi ayarlamalısınız?", ["Erişim süresi ve yetkisi", "Yazı tipi", "Ekran parlaklığı"], 0, "Süreli ve yetkiyle sınırlı bağlantı, kalıcı açık erişimin önüne geçer."],
        ["Yanlış alıcıya e-posta gönderdiğinizi fark ettiniz. Ne yapmalısınız?", ["Hiçbir şey", "Derhal bildirip erişimi geri almaya çalışmak", "Alıcıdan yanıt beklemek"], 1, "Hızlı bildirim, erişimin geri alınmasını ve gerekli müdahaleyi başlatır."],
        ["Kurumsal veriyi kişisel bulut hesabında tutmak neden risklidir?", ["Kurumsal kontrollerin dışında kalır", "Daha yavaş yüklenir", "Dosya bozulur"], 0, "Kişisel hesaplar kurumsal erişim, yedekleme ve denetim kontrollerinin dışındadır."]
      ]
    },
    en: {
      t: "Secure File Sharing and Cloud Storage",
      s: "One file sent to the wrong person can become a serious breach. Three checks before you share.",
      o: ["Set expiry and access limits on sharing links", "Check recipients and attachments before sending", "Keep corporate data out of personal cloud accounts"],
      m: ["Choosing a sharing model", "Wrong recipient case", "Revoking access and reporting"],
      g: ["cloud", "file sharing", "data"],
      q: [
        ["What should you configure when sharing a cloud link?", ["Expiry and permissions", "The font", "Screen brightness"], 0, "Time-limited, permission-scoped links prevent permanent open access."],
        ["You realise you emailed the wrong recipient. What now?", ["Nothing", "Report it immediately and try to revoke access", "Wait for a reply"], 1, "Fast reporting triggers revocation and the necessary response."],
        ["Why is corporate data in a personal cloud account risky?", ["It sits outside corporate controls", "It uploads more slowly", "The file corrupts"], 0, "Personal accounts fall outside corporate access, backup and audit controls."]
      ]
    }
  },
  {
    id: "data-breach", cat: "data", lvl: "advanced", min: 25, art: "siren",
    tr: {
      t: "Veri İhlali Bildirimi ve Müdahale",
      s: "İhlal tespit edildiğinde ilk 72 saat: kanıt koruma, kapsam belirleme ve bildirim kararı.",
      o: ["Olay müdahale ekibinin rol dağılımını bilmek", "Kanıtları bozmadan ilk müdahaleyi yapmak", "Bildirim yükümlülüğü ve zaman çizelgesini yönetmek"],
      m: ["Olay müdahale yaşam döngüsü", "Kanıt koruma", "Bildirim ve iletişim planı"],
      g: ["olay müdahale", "veri ihlali", "kvkk"],
      q: [
        ["Olay müdahalesinde ilk hedef nedir?", ["Kanıtları koruyarak yayılmayı durdurmak", "Sosyal medyada duyurmak", "Sunucuları silmek"], 0, "Önce yayılma durdurulur; kanıtlar korunarak kapsam belirlenir."],
        ["Kanıtları neden korumalıyız?", ["Yasal ve teknik inceleme için", "Dosya boyutu için", "Estetik için"], 0, "Kanıtlar, hem yasal yükümlülük hem de kök nedeni bulmak için gereklidir."],
        ["Veri ihlali bildirimi neden geciktirilmemelidir?", ["Yasal süreler ve itibar riski", "Rapor dosyası büyür", "Ekip izne çıkar"], 0, "Bildirim süreleri sınırlıdır; gecikme yaptırım ve güven kaybı getirir."]
      ]
    },
    en: {
      t: "Data Breach Notification and Response",
      s: "The first 72 hours after a breach is detected: preserving evidence, scoping the impact and deciding on notification.",
      o: ["Know the roles within the incident response team", "Take first actions without destroying evidence", "Manage notification duties and the timeline"],
      m: ["Incident response lifecycle", "Evidence preservation", "Notification and communication plan"],
      g: ["incident response", "data breach", "privacy"],
      q: [
        ["What is the first goal in incident response?", ["Stop the spread while preserving evidence", "Announce it on social media", "Delete the servers"], 0, "Stop the spread first, then determine scope while preserving evidence."],
        ["Why preserve evidence?", ["For legal and technical investigation", "For file size", "For aesthetics"], 0, "Evidence is needed both for legal duties and to find the root cause."],
        ["Why must breach notification not be delayed?", ["Legal deadlines and reputational risk", "The report file grows", "The team goes on leave"], 0, "Notification windows are limited; delay brings penalties and lost trust."]
      ]
    }
  },

  /* ---------------- CİHAZ & AĞ ---------------- */
  {
    id: "remote-work", cat: "device", lvl: "beginner", min: 15, art: "laptop",
    tr: {
      t: "Güvenli Uzaktan Çalışma",
      s: "Ev, kafe veya ortak çalışma alanı: ekran, cihaz ve bağlantı güvenliğini aynı anda korumak.",
      o: ["Ekran gizliliği ve fiziksel çevre kontrolü yapmak", "Kurumsal VPN ve cihaz yönetimi kurallarına uymak", "Cihaz ve hesapları başkalarıyla paylaşmamak"],
      m: ["Fiziksel çevre güvenliği", "VPN ve ağ seçimi", "Kurumsal cihaz kuralları"],
      g: ["uzaktan çalışma", "vpn", "fiziksel güvenlik"],
      q: [
        ["Ortak çalışma alanında ekran gizliliği için ne yapmalısınız?", ["Ekranı herkese çevirmek", "Gizlilik filtresi kullanmak ve ekranı kilitlemek", "Parlaklığı artırmak"], 1, "Gizlilik filtresi ve ekran kilidi, omuz üstünden bakışa karşı korur."],
        ["Kurumsal VPN'in temel faydası nedir?", ["Trafiği şifrelemek", "Pili uzatmak", "Reklamları engellemek"], 0, "VPN, özellikle güvenilmeyen ağlarda trafiği şifreler."],
        ["Cihazınızı aile bireyleriyle paylaşmak neden risklidir?", ["Hesap ve veri erişimi karışır", "Cihaz yavaşlar", "Garanti biter"], 0, "Paylaşılan cihaz, oturumların ve yerel verilerin başkalarına açılması demektir."]
      ]
    },
    en: {
      t: "Secure Remote Work",
      s: "Home, café or co-working space: protecting screen, device and connection at the same time.",
      o: ["Apply screen privacy and physical environment checks", "Follow corporate VPN and device management rules", "Never share devices or accounts with others"],
      m: ["Physical environment security", "VPN and network choice", "Corporate device rules"],
      g: ["remote work", "vpn", "physical security"],
      q: [
        ["How do you protect your screen in a shared workspace?", ["Turn it toward everyone", "Use a privacy filter and lock it when away", "Increase brightness"], 1, "A privacy filter and screen lock protect against shoulder surfing."],
        ["What is the main benefit of a corporate VPN?", ["It encrypts traffic", "It extends battery life", "It blocks ads"], 0, "A VPN encrypts traffic, especially on untrusted networks."],
        ["Why is sharing your device with family risky?", ["Account and data access gets mixed", "The device slows down", "The warranty ends"], 0, "A shared device exposes sessions and local data to other people."]
      ]
    }
  },

  {
    id: "public-wifi", cat: "device", lvl: "beginner", min: 10, art: "wifi",
    tr: {
      t: "Genel Wi-Fi Ağlarında Hayatta Kalma",
      s: "Havalimanı ve kafe ağlarında hangi işlemler güvenli, hangileri ertelenmeli?",
      o: ["Sahte erişim noktası riskini tanımak", "Hassas işlemleri güvenilir bağlantıya ertelemek", "HTTPS ve VPN'in neyi koruyup neyi korumadığını bilmek"],
      m: ["Ortadaki adam saldırısı", "Güvenli ağ seçimi", "Mobil erişim noktası alternatifi"],
      g: ["wifi", "ağ", "seyahat"],
      q: [
        ["Ücretsiz Wi-Fi ağında hangi işlem ertelenmelidir?", ["Hava durumuna bakmak", "Bankacılık işlemleri", "Gazete okumak"], 1, "Hassas giriş ve ödeme işlemleri güvenilir bir bağlantıya ertelenmelidir."],
        ["Evil twin saldırısı nedir?", ["Sahte bir Wi-Fi erişim noktası", "Bozuk bir ağ kablosu", "Güçlü bir parola"], 0, "Saldırgan, meşru bir ağın adını taklit eden sahte bir erişim noktası kurar."],
        ["Güvenli olmayan ağda hangi ek önlem yardımcı olur?", ["VPN kullanmak", "Sesi yükseltmek", "Ekranı büyütmek"], 0, "VPN, ağ dinlemeye karşı trafiği şifreler."]
      ]
    },
    en: {
      t: "Surviving Public Wi-Fi",
      s: "Which tasks are safe on airport and café networks, and which should wait?",
      o: ["Recognise the risk of a rogue access point", "Postpone sensitive tasks to a trusted connection", "Know what HTTPS and a VPN do and do not protect"],
      m: ["Man-in-the-middle attacks", "Choosing a safe network", "Mobile hotspot alternative"],
      g: ["wifi", "network", "travel"],
      q: [
        ["Which task should wait on free Wi-Fi?", ["Checking the weather", "Banking", "Reading the news"], 1, "Sensitive logins and payments should wait for a trusted connection."],
        ["What is an evil twin attack?", ["A fake Wi-Fi access point", "A broken network cable", "A strong password"], 0, "The attacker sets up a rogue access point that copies a legitimate network name."],
        ["Which extra measure helps on an untrusted network?", ["Using a VPN", "Turning up the volume", "Making the screen bigger"], 0, "A VPN encrypts traffic against network eavesdropping."]
      ]
    }
  },
  {
    id: "usb-security", cat: "device", lvl: "intermediate", min: 12, art: "usb",
    tr: {
      t: "USB ve Çıkarılabilir Medya Güvenliği",
      s: "Yerde bulunan bir USB bellek neden merak uyandırır? Takmadan önce bilmeniz gerekenler.",
      o: ["Bilinmeyen medyanın otomatik çalıştırma riskini anlamak", "Kurumsal olmayan USB cihazlarını takmamak", "Medyayı güvenli biçimde taramak ve imha etmek"],
      m: ["USB tabanlı saldırı türleri", "Takma öncesi kontrol", "Güvenli imha"],
      g: ["usb", "donanım", "medya"],
      q: [
        ["Yerde bulduğunuz bir USB belleği ne yapmalısınız?", ["Hemen takmak", "Kurumsal sürece teslim etmek", "Ev bilgisayarında denemek"], 1, "Bilinmeyen medya, kurumsal güvenlik sürecine teslim edilmelidir."],
        ["USB tabanlı saldırıların temel riski nedir?", ["Kötü amaçlı yazılım bulaştırması", "Dosya boyutunu artırması", "İnterneti kapatması"], 0, "USB cihazları kötü amaçlı yazılımı doğrudan sisteme taşıyabilir."],
        ["Bilinmeyen medyayı güvenli biçimde incelemenin yolu nedir?", ["Doğrudan takmak", "İzole bir ortamda taramak", "Şifrelemek"], 1, "İzole edilmiş, ağdan kopuk bir ortamda taramak riski sınırlar."]
      ]
    },
    en: {
      t: "USB and Removable Media Security",
      s: "Why does a USB stick found on the ground spark curiosity? What to know before you plug it in.",
      o: ["Understand the autorun risk of unknown media", "Never plug in non-corporate USB devices", "Scan and dispose of media safely"],
      m: ["USB-based attack types", "Checks before plugging in", "Safe disposal"],
      g: ["usb", "hardware", "media"],
      q: [
        ["You find a USB stick on the ground. What do you do?", ["Plug it in right away", "Hand it to the corporate process", "Try it on your home computer"], 1, "Unknown media should be handed to the corporate security process."],
        ["What is the core risk of USB-based attacks?", ["Malware infection", "Larger file sizes", "Losing internet"], 0, "USB devices can carry malware directly into a system."],
        ["How do you inspect unknown media safely?", ["Plug it in directly", "Scan it in an isolated environment", "Encrypt it"], 1, "Scanning in an isolated, offline environment limits the risk."]
      ]
    }
  },
  {
    id: "patching", cat: "device", lvl: "beginner", min: 10, art: "refresh",
    tr: {
      t: "Güncelleme ve Yama Disiplini",
      s: "Ertelenen her güncelleme, bilinen bir açığı açık tutar. Güncellemeyi alışkanlığa dönüştürmek.",
      o: ["Kritik güvenlik yamalarını önceliklendirmek", "Güncelleme sonrası yeniden başlatmanın önemini bilmek", "Destek dışı yazılımlardan kaçınmak"],
      m: ["Yama neden önemli?", "Otomatik güncelleme ayarları", "Destek ömrü sonu riski"],
      g: ["güncelleme", "yama", "yazılım"],
      q: [
        ["Güvenlik yamalarını neden ertelememelisiniz?", ["Bilinen açıklar açık kalır", "Yama dosyası büyür", "Ekran kararır"], 0, "Yama yayınlandığında açık kamuya duyulur; erteleme saldırı penceresini büyütür."],
        ["Güncelleme sonrası yeniden başlatma neden önemlidir?", ["Yama tam etkin olur", "Pil dolar", "Disk küçülür"], 0, "Birçok yama ancak yeniden başlatmadan sonra tam olarak devreye girer."],
        ["Destek dışı (EOL) yazılım ne demektir?", ["Artık güvenlik güncellemesi almaz", "Daha hızlı çalışır", "Ücretsizdir"], 0, "Destek ömrü biten yazılım yeni açıklara karşı savunmasız kalır."]
      ]
    },
    en: {
      t: "Updates and Patch Discipline",
      s: "Every delayed update leaves a known vulnerability open. Turning patching into a habit.",
      o: ["Prioritise critical security patches", "Understand why restarting after an update matters", "Avoid end-of-life software"],
      m: ["Why patching matters", "Automatic update settings", "End-of-life risk"],
      g: ["update", "patch", "software"],
      q: [
        ["Why should you not delay security patches?", ["Known vulnerabilities stay open", "The patch file grows", "The screen goes dark"], 0, "Once a patch ships, the flaw is public knowledge; delay widens the attack window."],
        ["Why does restarting after an update matter?", ["The patch takes full effect", "The battery charges", "The disk shrinks"], 0, "Many patches only fully apply after a restart."],
        ["What does end-of-life (EOL) software mean?", ["It no longer receives security updates", "It runs faster", "It is free"], 0, "Software past its support life is left defenceless against new flaws."]
      ]
    }
  },
  {
    id: "ransomware", cat: "device", lvl: "intermediate", min: 20, art: "lock",
    tr: {
      t: "Fidye Yazılımı: İlk 10 Dakika",
      s: "Ekran kilitlendi, dosyalar şifrelendi: panik yapmadan yapılması gerekenler ve yapılmaması gerekenler.",
      o: ["Cihazı ağdan ayırırken kanıtları korumak", "Fidye ödemenin neden çözüm olmadığını anlamak", "Yedekleme ve geri dönüş planını devreye almak"],
      m: ["Fidye yazılımı yaşam döngüsü", "İzolasyon adımları", "Yedekten dönüş"],
      g: ["fidye yazılımı", "olay", "yedekleme"],
      q: [
        ["Fidye yazılımı şüphesi varsa ilk adım nedir?", ["Fidyeyi ödemek", "Cihazı ağdan ayırmak", "Dosyaları silmek"], 1, "Ağ bağlantısını kesmek, yayılmayı durdurmanın ilk adımıdır."],
        ["Fidye ödemek neden çözüm değildir?", ["Veri geri gelmeyebilir ve saldırı sürebilir", "Dosya boyutu artar", "İnternet yavaşlar"], 0, "Ödeme, verinin geri geleceğini garanti etmez ve saldırganı cesaretlendirir."],
        ["En etkili korunma yöntemi nedir?", ["Çevrimdışı ve test edilmiş yedek", "Daha güçlü ekran", "Daha hızlı işlemci"], 0, "Çevrimdışı, düzenli test edilen yedekler fidye yazılımına karşı en güçlü savunmadır."]
      ]
    },
    en: {
      t: "Ransomware: The First 10 Minutes",
      s: "The screen is locked and files are encrypted: what to do and what not to do without panicking.",
      o: ["Isolate the device from the network while preserving evidence", "Understand why paying the ransom is not a solution", "Activate the backup and recovery plan"],
      m: ["Ransomware lifecycle", "Isolation steps", "Restoring from backup"],
      g: ["ransomware", "incident", "backup"],
      q: [
        ["If you suspect ransomware, what is the first step?", ["Pay the ransom", "Disconnect the device from the network", "Delete the files"], 1, "Cutting the network connection is the first step to stop the spread."],
        ["Why is paying the ransom not a solution?", ["Data may not return and the attack can continue", "File size grows", "The internet slows down"], 0, "Payment does not guarantee recovery and encourages the attacker."],
        ["What is the most effective protection?", ["An offline, tested backup", "A stronger screen", "A faster processor"], 0, "Offline, regularly tested backups are the strongest defence against ransomware."]
      ]
    }
  },

  /* ---------------- UYUM & KÜLTÜR ---------------- */
  {
    id: "ai-leaks", cat: "culture", lvl: "intermediate", min: 20, art: "ai",
    tr: {
      t: "Yapay Zeka Çağında Veri Sızıntısı",
      s: "Üretken yapay zeka araçlarına yapıştırdığınız her metin, kurumsal bir veri sızıntısı olabilir.",
      o: ["Onaylı ve onaysız yapay zeka araçlarını ayırt etmek", "İstem yazarken kişisel ve gizli veriyi ayıklamak", "Gölge yapay zeka kullanımının risklerini değerlendirmek"],
      m: ["Veri akışı ve saklama", "Anonimleştirme teknikleri", "Onaylı araç kullanımı"],
      g: ["yapay zeka", "veri", "gölge it"],
      q: [
        ["Üretken yapay zeka aracına yapıştırdığınız metin neden risklidir?", ["Araç veriyi saklayabilir veya eğitimde kullanabilir", "Metin kısalır", "Dosya bozulur"], 0, "Girdiğiniz veri, aracın politikasına göre saklanabilir veya model eğitiminde kullanılabilir."],
        ["İstem (prompt) yazarken ne yapmalısınız?", ["Kişisel ve gizli veriyi çıkarmak", "Tüm müşteri listesini eklemek", "Parolaları eklemek"], 0, "İstemler yalnızca görev için gereken, anonimleştirilmiş bilgiyi içermelidir."],
        ["Onaysız yapay zeka kullanımı hangi riski doğurur?", ["Gölge IT ve veri sızıntısı", "Daha hızlı internet", "Daha iyi pil"], 0, "Onaysız araçlar, kurumsal kontrol dışında veri işleyerek gölge IT oluşturur."]
      ]
    },
    en: {
      t: "Data Leaks in the Age of AI",
      s: "Every text you paste into a generative AI tool can become a corporate data leak.",
      o: ["Tell approved and unapproved AI tools apart", "Strip personal and confidential data when writing prompts", "Assess the risks of shadow AI use"],
      m: ["Data flow and retention", "Anonymisation techniques", "Using approved tools"],
      g: ["artificial intelligence", "data", "shadow it"],
      q: [
        ["Why is text pasted into a generative AI tool risky?", ["The tool may store or train on it", "The text gets shorter", "The file corrupts"], 0, "Depending on the tool's policy, your input may be retained or used for training."],
        ["What should you do when writing a prompt?", ["Remove personal and confidential data", "Include the whole customer list", "Include passwords"], 0, "Prompts should contain only the anonymised information the task needs."],
        ["What risk does unapproved AI use create?", ["Shadow IT and data leaks", "Faster internet", "Better battery"], 0, "Unapproved tools process data outside corporate control, creating shadow IT."]
      ]
    }
  },
  {
    id: "security-culture", cat: "culture", lvl: "beginner", min: 15, art: "megaphone",
    tr: {
      t: "Siber Güvenlik Kültürü ve Bildirim Cesareti",
      s: "Hatayı gizlemek mi, bildirmek mi? Cezalandırmayan kültür, saldırıyı erken durdurmanın en ucuz yoludur.",
      o: ["Şüpheli olayı erken bildirmenin etkisini somut örneklerle görmek", "Suçlama yerine öğrenme odaklı geri bildirim vermek", "Bildirim kanallarını ve sürelerini öğrenmek"],
      m: ["Bildirim gecikmesinin maliyeti", "İyi bildirim örnekleri", "Kanallar ve süreler"],
      g: ["kültür", "bildirim", "davranış"],
      q: [
        ["Bir hata yaptığınızda en doğru davranış nedir?", ["Gizlemek", "Hemen bildirmek", "Başkasını suçlamak"], 1, "Erken bildirim, hatanın zararını ve müdahale maliyetini küçültür."],
        ["Cezalandırmayan bildirim kültürü neyi artırır?", ["Erken tespiti", "Hata sayısını", "Kağıt tüketimini"], 0, "İnsanlar cezadan korkmadığında olayları daha hızlı bildirir."],
        ["Siber güvenlikte insan faktörü neden önemlidir?", ["Saldırıların çoğu insan üzerinden başlar", "İnsanlar daha hızlı yazar", "İnsanlar daha az uyur"], 0, "Oltalama ve sosyal mühendislik doğrudan insan davranışını hedefler."]
      ]
    },
    en: {
      t: "Security Culture and the Courage to Report",
      s: "Hide the mistake or report it? A blame-free culture is the cheapest way to stop an attack early.",
      o: ["See the impact of early reporting through concrete examples", "Give learning-focused feedback instead of blame", "Know the reporting channels and timelines"],
      m: ["The cost of delayed reporting", "Good reporting examples", "Channels and timelines"],
      g: ["culture", "reporting", "behaviour"],
      q: [
        ["What is the right thing to do when you make a mistake?", ["Hide it", "Report it immediately", "Blame someone else"], 1, "Early reporting shrinks both the damage and the response cost."],
        ["What does a blame-free reporting culture increase?", ["Early detection", "The number of mistakes", "Paper use"], 0, "When people do not fear punishment, they report incidents faster."],
        ["Why does the human factor matter in security?", ["Most attacks start through people", "People type faster", "People sleep less"], 0, "Phishing and social engineering target human behaviour directly."]
      ]
    }
  },
  {
    id: "travel-security", cat: "culture", lvl: "beginner", min: 10, art: "plane",
    tr: {
      t: "Seyahat ve Tatil Dönemi Güvenliği",
      s: "Seyahatte cihaz, hesap ve sosyal medya paylaşımlarını güvenli tutmanın kısa kontrol listesi.",
      o: ["Seyahat öncesi cihaz ve hesap hazırlığı yapmak", "Konum ve tatil paylaşımlarını sonradan yapmak", "Kayıp veya çalıntı cihaz için uzaktan silme hazırlığı bulundurmak"],
      m: ["Seyahat öncesi kontrol listesi", "Sosyal medya paylaşımı", "Cihaz kaybı müdahalesi"],
      g: ["seyahat", "mobil", "sosyal medya"],
      q: [
        ["Seyahat öncesi hangi hazırlık yapılmalıdır?", ["Cihaz şifresi ve uzaktan silme ayarı", "Daha fazla uygulama yüklemek", "Ekran parlaklığını artırmak"], 0, "Güçlü cihaz şifresi ve uzaktan silme, kayıp durumunda veriyi korur."],
        ["Tatil fotoğraflarını ne zaman paylaşmalısınız?", ["Yola çıkmadan önce", "Döndükten sonra", "Her gün canlı"], 1, "Evin boş olduğunu duyurmamak için paylaşımı dönüşe bırakın."],
        ["Umumi şarj noktaları neden riskli olabilir?", ["Veri aktarımı yapabilir", "Daha yavaş şarj eder", "Kabloyu kısaltır"], 0, "Bazı umumi portlar veri aktarımı yapabilir; kendi adaptörünüzü kullanın."]
      ]
    },
    en: {
      t: "Travel and Holiday Security",
      s: "A short checklist to keep devices, accounts and social posts safe while travelling.",
      o: ["Prepare devices and accounts before you travel", "Post location and holiday updates afterwards", "Have remote wipe ready for a lost or stolen device"],
      m: ["Pre-travel checklist", "Social media sharing", "Lost device response"],
      g: ["travel", "mobile", "social media"],
      q: [
        ["What should you prepare before travelling?", ["A device passcode and remote wipe", "More installed apps", "Higher screen brightness"], 0, "A strong passcode and remote wipe protect data if the device is lost."],
        ["When should you share holiday photos?", ["Before you leave", "After you return", "Live every day"], 1, "Save the posts for after the trip so you do not advertise an empty home."],
        ["Why can public charging points be risky?", ["They can transfer data", "They charge more slowly", "They shorten the cable"], 0, "Some public ports can carry data; use your own charger."]
      ]
    }
  },
  {
    id: "incident-report", cat: "culture", lvl: "beginner", min: 8, art: "clock",
    tr: {
      t: "Olay Bildirimi: İlk 5 Dakikada Ne Yapmalı?",
      s: "Yanlış bağlantıya tıkladınız ya da parolanızı verdiniz. İlk beş dakikada atılacak adımlar.",
      o: ["Olayı panik yapmadan ve gizlemeden bildirmek", "Bağlantıyı kesmek ve oturumları sonlandırmak", "Bildirimde bulunması gereken bilgileri eksiksiz vermek"],
      m: ["İlk 5 dakika kontrol listesi", "Bildirim şablonu", "Olay sonrası takip"],
      g: ["olay", "bildirim", "müdahale"],
      q: [
        ["Yanlış bağlantıya tıkladığınızı fark ettiniz. İlk adım nedir?", ["Kapatıp unutmak", "Ağ bağlantısını kesip bildirmek", "Başka bir tarayıcıda denemek"], 1, "Bağlantıyı kesmek yayılmayı sınırlar; bildirmek müdahaleyi başlatır."],
        ["Bildirimde hangi bilgi en önemlidir?", ["Ne oldu, ne zaman ve hangi cihaz", "En sevdiğiniz renk", "O günkü yemek"], 0, "Zaman, olay ve cihaz bilgisi müdahale ekibinin hızla kapsam belirlemesini sağlar."],
        ["Olayı gizlemek neden tehlikelidir?", ["Müdahale gecikir ve yayılır", "Rapor uzar", "Ekip üzülür"], 0, "Gizlenen olay, tespit ve müdahale süresini uzatarak zararı büyütür."]
      ]
    },
    en: {
      t: "Incident Reporting: The First 5 Minutes",
      s: "You clicked the wrong link or gave away your password. The steps to take in the first five minutes.",
      o: ["Report the incident without panic or concealment", "Disconnect and terminate sessions", "Provide complete information in the report"],
      m: ["First 5 minutes checklist", "Reporting template", "Post-incident follow-up"],
      g: ["incident", "reporting", "response"],
      q: [
        ["You realise you clicked a malicious link. What is step one?", ["Close it and forget it", "Disconnect from the network and report it", "Try in another browser"], 1, "Disconnecting limits the spread; reporting starts the response."],
        ["Which information matters most in a report?", ["What happened, when, and on which device", "Your favourite colour", "What you had for lunch"], 0, "Time, event and device details let the response team scope things quickly."],
        ["Why is hiding an incident dangerous?", ["Response is delayed and it spreads", "The report gets longer", "The team feels sad"], 0, "A hidden incident lengthens detection and response time, increasing the damage."]
      ]
    }
  }
];

/* Rozet yardımcıları */
function doneCategory(profile, cat) {
  return TRAININGS.filter(function (t) { return t.cat === cat; })
    .every(function (t) { return profile.completed.indexOf(t.id) !== -1; });
}
function perfectQuizzes(profile) {
  return Object.keys(profile.quiz).filter(function (id) {
    var q = profile.quiz[id];
    return q && q.best === q.total && q.total > 0;
  }).length;
}

/* Rozetler */
const BADGES = [
  { id: "first_step", icon: "🚀", tr: { n: "İlk Adım", d: "İlk eğitimini tamamla." }, en: { n: "First Step", d: "Complete your first training." }, test: (p) => p.completed.length >= 1 },
  { id: "five", icon: "🖐️", tr: { n: "Isınma Turu", d: "5 eğitim tamamla." }, en: { n: "Warm-up", d: "Complete 5 trainings." }, test: (p) => p.completed.length >= 5 },
  { id: "ten", icon: "🔟", tr: { n: "Kararlı", d: "10 eğitim tamamla." }, en: { n: "Determined", d: "Complete 10 trainings." }, test: (p) => p.completed.length >= 10 },
  { id: "half", icon: "⚖️", tr: { n: "Yarı Yol", d: "14 eğitim tamamla." }, en: { n: "Halfway", d: "Complete 14 trainings." }, test: (p) => p.completed.length >= 14 },
  { id: "all", icon: "🏆", tr: { n: "Tam Koleksiyon", d: "28 eğitimin tamamını bitir." }, en: { n: "Full Collection", d: "Finish all 28 trainings." }, test: (p) => p.completed.length >= 28 },
  { id: "cat_phishing", icon: "🎣", tr: { n: "Oltacı Avı", d: "Tüm oltalama eğitimlerini tamamla." }, en: { n: "Phish Hunter", d: "Complete all phishing trainings." }, test: (p) => doneCategory(p, "phishing") },
  { id: "cat_auth", icon: "🔑", tr: { n: "Kilit Ustası", d: "Tüm parola ve kimlik eğitimlerini tamamla." }, en: { n: "Lock Master", d: "Complete all password and identity trainings." }, test: (p) => doneCategory(p, "auth") },
  { id: "cat_social", icon: "🎭", tr: { n: "İkna Direnişi", d: "Tüm sosyal mühendislik eğitimlerini tamamla." }, en: { n: "Persuasion Resistant", d: "Complete all social engineering trainings." }, test: (p) => doneCategory(p, "social") },
  { id: "cat_data", icon: "📁", tr: { n: "Veri Bekçisi", d: "Tüm veri ve gizlilik eğitimlerini tamamla." }, en: { n: "Data Keeper", d: "Complete all data and privacy trainings." }, test: (p) => doneCategory(p, "data") },
  { id: "cat_device", icon: "💻", tr: { n: "Cihaz Kalkanı", d: "Tüm cihaz ve ağ eğitimlerini tamamla." }, en: { n: "Device Shield", d: "Complete all device and network trainings." }, test: (p) => doneCategory(p, "device") },
  { id: "cat_culture", icon: "🌍", tr: { n: "Kültür Elçisi", d: "Tüm uyum ve kültür eğitimlerini tamamla." }, en: { n: "Culture Envoy", d: "Complete all compliance and culture trainings." }, test: (p) => doneCategory(p, "culture") },
  { id: "quiz_first", icon: "✅", tr: { n: "İlk Sınav", d: "İlk quizini tamamla." }, en: { n: "First Quiz", d: "Complete your first quiz." }, test: (p) => Object.keys(p.quiz).length >= 1 },
  { id: "quiz_perfect", icon: "💯", tr: { n: "Kusursuz", d: "Bir quizde tam puan al." }, en: { n: "Flawless", d: "Get a perfect score on a quiz." }, test: (p) => perfectQuizzes(p) >= 1 },
  { id: "quiz_master", icon: "🧠", tr: { n: "Sınav Ustası", d: "5 quizde tam puan al." }, en: { n: "Quiz Master", d: "Get perfect scores on 5 quizzes." }, test: (p) => perfectQuizzes(p) >= 5 },
  { id: "streak_3", icon: "🔥", tr: { n: "3 Gün", d: "3 günlük seri yakala." }, en: { n: "3-Day Streak", d: "Reach a 3-day streak." }, test: (p) => p.streak.count >= 3 },
  { id: "streak_7", icon: "⚡", tr: { n: "Haftalık Seri", d: "7 günlük seri yakala." }, en: { n: "Weekly Streak", d: "Reach a 7-day streak." }, test: (p) => p.streak.count >= 7 },
  { id: "level_5", icon: "⭐", tr: { n: "Kalkan", d: "5. seviyeye ulaş." }, en: { n: "Shield", d: "Reach level 5." }, test: (p) => p.xp >= 1600 }
];

const CATEGORY_KEYS = Object.keys(CATEGORIES);
const CATEGORY_TOTALS = {};
CATEGORY_KEYS.forEach(function (c) { CATEGORY_TOTALS[c] = TRAININGS.filter(function (t) { return t.cat === c; }).length; });

const LESSON_COPY = {
  tr: {
    teaching: "Bu konuyu tek bir uyarı işareti aramak yerine güvenli bir karar süreci olarak düşünün. {summary} Özellikle “{module}” adımında şu alışkanlığı uygulayın: {objective} Beklenmedik bir talep geldiğinde durun, bilinen resmi kanaldan doğrulayın ve şüpheyi kurumunuzun bildirim kanalına iletin.",
    cases: {
      phishing: "İş gününün başında bir ekip üyesi beklenmedik bir mesaj alır. Mesajın konusu şudur: {summary} Gönderen, “{module}” işlemini hemen yapmasını ister. Çalışan bağlantıya basmak yerine göndereni bağımsız bir kanaldan kontrol eder, “{objective}” ilkesini uygular ve şüpheli mesajı bildirir. Ekip, aynı mesajın başka kişilere ulaşıp ulaşmadığını kontrol eder.",
      auth: "Bir çalışan hesabına giriş yaparken olağan dışı bir uyarı görür. O sırada karşılaştığı konu şudur: {summary} Çalışan, aceleyle onay vermek yerine “{module}” adımını izler ve “{objective}” davranışını uygular. Ardından etkin oturumlarını kontrol eder ve gerekirse destek ekibine ulaşır.",
      social: "Yoğun bir iş gününde bir çalışan, kendisini yetkili biri gibi tanıtan bir kişiyle karşılaşır. Talep şu konuya dayanır: {summary} Karşı taraf, “{module}” işleminin hemen yapılması için baskı kurar. Çalışan “{objective}” ilkesini izler, talebi bağımsız kanaldan doğrular ve doğrulanana kadar bilgi ya da işlem paylaşmaz.",
      data: "Bir ekip, önemli bir dosyayı paylaşmaya hazırlanırken şu durumla karşılaşır: {summary} Dosyayı göndermeden önce ekip “{module}” adımını gözden geçirir ve “{objective}” kuralını uygular. Alıcı ve erişim kapsamı doğrulanır; gereksiz erişimler kapatılır ve belirsizlik varsa veri sorumlusuna danışılır.",
      device: "Bir çalışan seyahat ederken veya uzaktan çalışırken şu durumla karşılaşır: {summary} Ekranda “{module}” ile ilgili bir uyarı ya da istek belirir. Çalışan “{objective}” adımını izler; tanımadığı bağlantıya, cihaza veya yazılıma güvenmez. Gerekirse kurumsal destek kanalından yardım alır.",
      culture: "Bir ekip üyesi, iş akışında olağan dışı bir durum fark eder: {summary} İlk anda emin olamasa da “{module}” konusundaki kontrol adımını uygular ve “{objective}” ilkesini izler. Durumu gecikmeden bildirir; ekip kanıtları koruyup gerekli kişileri bilgilendirir."
    }
  },
  en: {
    teaching: "Treat this topic as a safe decision process, not a search for one warning sign. {summary} Pay special attention to “{module}”: {objective} When a request is unexpected, pause, verify it through a known official channel, and report your concern through your organisation’s process.",
    cases: {
      phishing: "At the start of the workday, a team member receives an unexpected message. Its subject is: {summary} The sender urges them to act on “{module}” immediately. Instead of clicking, the employee checks the sender through an independent channel, follows this principle—“{objective}”—and reports the message. The team checks whether others received it too.",
      auth: "An employee sees an unusual prompt while signing in. The issue they are dealing with is: {summary} Rather than approving in a hurry, they follow “{module}” and apply this practice: “{objective}”. They then review active sessions and contact support if needed.",
      social: "During a busy workday, an employee is approached by someone claiming authority. The request is based on this subject: {summary} The person pressures them to complete “{module}” straight away. The employee follows “{objective}”, verifies the request through an independent channel, and shares no information or approval until it is confirmed.",
      data: "A team is preparing to share an important file when this issue comes up: {summary} Before sending it, they review “{module}” and apply this rule: “{objective}”. They confirm the recipient and access scope, remove unnecessary access, and ask the data owner if anything is unclear.",
      device: "While travelling or working remotely, an employee encounters this situation: {summary} A prompt related to “{module}” appears. The employee follows “{objective}” and does not trust an unfamiliar network, device, or software. They contact the official support channel if help is needed.",
      culture: "A team member notices something unusual in a work process: {summary} They are not certain at first, but apply the check for “{module}” and follow “{objective}”. They report it promptly; the team preserves relevant evidence and informs the right people."
    }
  },
  de: {
    teaching: "Betrachten Sie dieses Thema als sicheren Entscheidungsprozess und nicht als Suche nach einem einzelnen Warnsignal. {summary} Achten Sie besonders auf „{module}“: {objective} Halten Sie bei unerwarteten Aufforderungen an, prüfen Sie sie über einen bekannten offiziellen Kanal und melden Sie Ihren Verdacht über den vorgesehenen Weg.",
    cases: {
      phishing: "Zu Beginn des Arbeitstags erhält ein Teammitglied eine unerwartete Nachricht. Ihr Thema lautet: {summary} Der Absender drängt dazu, „{module}“ sofort auszuführen. Statt auf einen Link zu klicken, prüft die Person den Absender über einen unabhängigen Kanal, befolgt den Grundsatz „{objective}“ und meldet die Nachricht. Das Team prüft, ob weitere Personen sie erhalten haben.",
      auth: "Beim Anmelden sieht eine Mitarbeiterin eine ungewöhnliche Aufforderung. Es geht um folgendes Thema: {summary} Statt hastig zu bestätigen, befolgt sie „{module}“ und setzt „{objective}“ um. Danach prüft sie aktive Sitzungen und wendet sich bei Bedarf an den Support.",
      social: "An einem arbeitsreichen Tag spricht eine Person eine Mitarbeiterin an und behauptet, eine besondere Befugnis zu haben. Die Bitte betrifft: {summary} Sie drängt darauf, „{module}“ sofort zu erledigen. Die Mitarbeiterin befolgt „{objective}“, prüft die Bitte über einen unabhängigen Kanal und gibt bis zur Bestätigung keine Informationen oder Freigabe.",
      data: "Ein Team möchte eine wichtige Datei teilen und stößt auf folgendes Problem: {summary} Vor dem Versand prüft es „{module}“ und befolgt „{objective}“. Empfänger und Zugriffsbereich werden kontrolliert, unnötige Berechtigungen entfernt und offene Fragen mit der datenverantwortlichen Person geklärt.",
      device: "Auf einer Reise oder bei der mobilen Arbeit begegnet einem Mitarbeiter folgende Situation: {summary} Es erscheint eine Aufforderung zu „{module}“. Er befolgt „{objective}“ und vertraut keinem unbekannten Netzwerk, Gerät oder Programm. Bei Bedarf nutzt er den offiziellen Supportkanal.",
      culture: "Ein Teammitglied bemerkt einen ungewöhnlichen Vorgang: {summary} Obwohl zunächst Unsicherheit besteht, prüft es „{module}“ und befolgt „{objective}“. Es meldet den Vorfall zeitnah; das Team bewahrt Belege und informiert die zuständigen Personen."
    }
  },
  fr: {
    teaching: "Considérez ce sujet comme une démarche de décision sûre, et non comme la recherche d’un seul signe d’alerte. {summary} Portez une attention particulière à « {module} » : {objective} Face à une demande inattendue, faites une pause, vérifiez-la par un canal officiel connu et signalez le doute selon la procédure de votre organisation.",
    cases: {
      phishing: "Au début de la journée, un membre de l’équipe reçoit un message inattendu. Son sujet est le suivant : {summary} L’expéditeur insiste pour effectuer « {module} » immédiatement. Au lieu de cliquer, la personne vérifie l’expéditeur par un autre canal, applique ce principe : « {objective} », puis signale le message. L’équipe vérifie si d’autres personnes l’ont reçu.",
      auth: "Lorsqu’il se connecte, un employé voit une demande inhabituelle. Le sujet est : {summary} Au lieu d’approuver dans la précipitation, il suit « {module} » et applique cette pratique : « {objective} ». Il vérifie ensuite les sessions actives et contacte l’assistance si nécessaire.",
      social: "Pendant une journée chargée, une personne prétendant avoir autorité sollicite un employé. Sa demande porte sur : {summary} Elle insiste pour réaliser « {module} » sans attendre. L’employé suit « {objective} », vérifie la demande par un canal indépendant et ne transmet aucune information ni approbation avant confirmation.",
      data: "Une équipe s’apprête à partager un fichier important lorsqu’elle rencontre ce problème : {summary} Avant l’envoi, elle examine « {module} » et applique cette règle : « {objective} ». Elle vérifie le destinataire et les droits d’accès, retire les accès superflus et demande conseil si un point reste incertain.",
      device: "En déplacement ou en télétravail, une employée rencontre la situation suivante : {summary} Une alerte liée à « {module} » apparaît. Elle suit « {objective} » et se méfie des réseaux, appareils ou logiciels inconnus. Si besoin, elle contacte le support par le canal officiel.",
      culture: "Un membre de l’équipe remarque une situation inhabituelle dans le travail : {summary} Même s’il hésite, il vérifie « {module} » et suit « {objective} ». Il signale rapidement la situation ; l’équipe préserve les éléments utiles et prévient les personnes compétentes."
    }
  },
  es: {
    teaching: "Considere este tema como un proceso para tomar decisiones seguras, no como la búsqueda de una única señal de alarma. {summary} Preste especial atención a «{module}»: {objective} Ante una solicitud inesperada, deténgase, verifíquela por un canal oficial conocido e informe de la sospecha mediante el procedimiento de su organización.",
    cases: {
      phishing: "Al comenzar la jornada, una persona del equipo recibe un mensaje inesperado. El asunto es: {summary} Quien lo envía insiste en realizar «{module}» de inmediato. En vez de hacer clic, la persona verifica al remitente por otro canal, aplica este principio: «{objective}» e informa del mensaje. El equipo comprueba si alguien más lo recibió.",
      auth: "Al iniciar sesión, un empleado ve una solicitud inusual. El tema es: {summary} En lugar de aprobarla deprisa, sigue «{module}» y aplica esta práctica: «{objective}». Después revisa las sesiones activas y contacta con soporte si es necesario.",
      social: "En un día de mucho trabajo, alguien que afirma tener autoridad se acerca a una empleada. La petición se basa en: {summary} La persona la presiona para completar «{module}» enseguida. La empleada sigue «{objective}», verifica la petición por un canal independiente y no comparte información ni aprobación hasta confirmarla.",
      data: "Un equipo se dispone a compartir un archivo importante y se encuentra con este problema: {summary} Antes de enviarlo, revisa «{module}» y aplica esta regla: «{objective}». Confirma el destinatario y los permisos, elimina accesos innecesarios y consulta al responsable de los datos si algo no está claro.",
      device: "Durante un viaje o una jornada remota, un empleado se encuentra con esta situación: {summary} Aparece un aviso relacionado con «{module}». Sigue «{objective}» y desconfía de redes, dispositivos o programas desconocidos. Si necesita ayuda, contacta con el canal oficial de soporte.",
      culture: "Una persona del equipo detecta algo inusual en un proceso de trabajo: {summary} Aunque al principio no está segura, revisa «{module}» y aplica «{objective}». Lo comunica pronto; el equipo conserva las pruebas relevantes e informa a las personas adecuadas."
    }
  },
  ar: {
    teaching: "تعامل مع هذا الموضوع بوصفه عملية لاتخاذ قرار آمن، لا بحثاً عن علامة تحذير واحدة. {summary} انتبه بشكل خاص إلى «{module}»: {objective} عند ورود طلب غير متوقع، توقّف وتحقق منه عبر قناة رسمية معروفة، ثم أبلغ عن الشك وفق إجراءات مؤسستك.",
    cases: {
      phishing: "في بداية يوم العمل، يتلقى أحد أعضاء الفريق رسالة غير متوقعة. موضوعها هو: {summary} ويحث المرسل على تنفيذ «{module}» فوراً. بدلاً من النقر، يتحقق الموظف من المرسل عبر قناة مستقلة، ويطبق هذا المبدأ: «{objective}»، ثم يبلغ عن الرسالة. ويتحقق الفريق مما إذا كان آخرون قد تلقوها.",
      auth: "أثناء تسجيل الدخول، يرى أحد الموظفين طلباً غير معتاد. والموضوع هو: {summary} بدلاً من الموافقة على عجل، يتبع «{module}» ويطبق هذه الممارسة: «{objective}». ثم يراجع الجلسات النشطة ويتواصل مع الدعم عند الحاجة.",
      social: "في يوم عمل مزدحم، يتواصل مع موظف شخص يدعي امتلاك صلاحية. ويتعلق الطلب بـ: {summary} ويضغط عليه لتنفيذ «{module}» فوراً. يتبع الموظف «{objective}»، ويتحقق من الطلب عبر قناة مستقلة، ولا يشارك معلومات أو موافقة حتى يتأكد.",
      data: "يستعد فريق لمشاركة ملف مهم، ثم يواجه هذه المسألة: {summary} قبل الإرسال، يراجع «{module}» ويطبق هذه القاعدة: «{objective}». ويتحقق من المستلم ونطاق الوصول، ويلغي الصلاحيات غير الضرورية، ويستشير مسؤول البيانات إذا بقي أي أمر غير واضح.",
      device: "أثناء السفر أو العمل عن بُعد، يواجه موظف هذا الموقف: {summary} يظهر تنبيه متعلق بـ«{module}». يتبع «{objective}» ولا يثق بشبكة أو جهاز أو برنامج غير مألوف. وإذا احتاج إلى مساعدة، يتواصل مع قناة الدعم الرسمية.",
      culture: "يلاحظ أحد أعضاء الفريق أمراً غير معتاد في سير العمل: {summary} ورغم عدم تأكده في البداية، يراجع «{module}» ويتبع «{objective}». يبلغ عن الأمر سريعاً؛ ويحافظ الفريق على الأدلة ذات الصلة ويخطر الجهات المعنية."
    }
  },
  ru: {
    teaching: "Рассматривайте эту тему как безопасный процесс принятия решений, а не поиск одного предупреждающего признака. {summary} Особое внимание уделите разделу «{module}»: {objective} Если запрос неожиданный, остановитесь, проверьте его по известному официальному каналу и сообщите о подозрении согласно правилам организации.",
    cases: {
      phishing: "В начале рабочего дня сотрудник получает неожиданное сообщение. Его тема: {summary} Отправитель торопит с выполнением действия по теме «{module}». Вместо перехода по ссылке сотрудник проверяет отправителя по независимому каналу, следует принципу «{objective}» и сообщает о сообщении. Команда проверяет, получили ли его другие сотрудники.",
      auth: "При входе в систему сотрудник видит необычный запрос. Он касается темы: {summary} Вместо поспешного подтверждения сотрудник следует разделу «{module}» и применяет правило «{objective}». Затем он проверяет активные сеансы и при необходимости обращается в поддержку.",
      social: "В напряжённый рабочий день к сотруднику обращается человек, заявляющий о своих полномочиях. Запрос связан с темой: {summary} Собеседник торопит с выполнением «{module}». Сотрудник следует правилу «{objective}», проверяет запрос по независимому каналу и не передаёт сведения и не подтверждает действие до проверки.",
      data: "Команда собирается поделиться важным файлом и сталкивается с такой ситуацией: {summary} Перед отправкой команда проверяет раздел «{module}» и применяет правило «{objective}». Сотрудники подтверждают получателя и уровень доступа, убирают лишние разрешения и уточняют сомнения у ответственного за данные.",
      device: "Во время поездки или удалённой работы сотрудник сталкивается с ситуацией: {summary} Появляется запрос, связанный с темой «{module}». Сотрудник следует «{objective}» и не доверяет незнакомой сети, устройству или программе. При необходимости он обращается в официальный канал поддержки.",
      culture: "Сотрудник замечает необычную ситуацию в рабочем процессе: {summary} Несмотря на первоначальную неуверенность, он проверяет раздел «{module}» и следует правилу «{objective}». Он своевременно сообщает о случившемся; команда сохраняет важные материалы и уведомляет ответственных лиц."
    }
  }
};

window.APP_DATA = {
  UI: UI,
  CATEGORIES: CATEGORIES,
  CATEGORY_KEYS: CATEGORY_KEYS,
  CATEGORY_TOTALS: CATEGORY_TOTALS,
  LEVELS: LEVELS,
  LEVEL_KEYS: LEVEL_KEYS,
  LEVEL_LABELS: LEVEL_LABELS,
  TRAININGS: TRAININGS,
  BADGES: BADGES,
  LESSON_COPY: LESSON_COPY
};

