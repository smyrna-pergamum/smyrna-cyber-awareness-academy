/* İz Sür · Outlook-style phishing case training for Smyrna Cyber Academy. */
(function () {
  "use strict";
  var data = window.APP_DATA;
  var training = {
    id: "phishing-inbox-simulation", cat: "phishing", lvl: "intermediate", min: 20, art: "mail",
    tr: { t: "İz Sür: Oltalama Vaka Simülasyonu", s: "Outlook benzeri gelen kutusunda 10 gerçekçi e-postayı iki bölümde incele; kendi adınla ilerle, XP ve akademi rozetleri kazan.", o: ["Gönderen adresini ve gerçek alan adını incelemek", "Aciliyet, parola, kod ve ödeme taleplerindeki riskleri fark etmek", "Şüpheli iletileri güvenli biçimde doğrulayıp bildirmek"], m: ["Birinci bölüm · Gelen kutusu vakaları", "İkinci bölüm · Hedefli mesajlar", "Vaka notları ve kişisel sonuç"], g: ["oltalama", "Outlook", "vaka simülasyonu"], q: [] },
    en: { t: "Trace It: Phishing Inbox Simulation", s: "Review 10 realistic messages in an Outlook-style inbox across two parts. Use your academy profile and earn XP.", o: ["Inspect sender addresses and the real domain", "Recognise risk in urgent, password, code and payment requests", "Verify and report suspicious messages safely"], m: ["Part one · Inbox cases", "Part two · Targeted messages", "Case notes and personal results"], g: ["phishing", "Outlook", "case simulation"], q: [] }
  };
  var cases = {
    tr: [
      {subject:"Hesabınız 2 saat içinde kapatılacak",from:"Google Workspace Güvenlik",email:"security@google-workspace-alerts.com",body:"Merhaba {{name}}, olağandışı bir oturum nedeniyle hesabınız askıya alınacak. Erişimi korumak için bilgilerinizi hemen doğrulayın.\n\nHesabı doğrula\n\ngoogle-workspace-alerts.com.verify-user.co",clues:["Gönderen alan adı resmî değil","Hesap kapatma tehdidi","Yanıltıcı bağlantı hedefi"],answer:0,explain:"Gönderen Google’a ait değil; gerçek alan adı verify-user.co. Hesap kapatma tehdidi ve aciliyet tıklatmaya çalışıyor. Bağlantıyı açma, iletinin ekran görüntüsünü veya başlık bilgilerini kurumunun bildirim kanalına gönder."},
      {subject:"Kasım yemek kartı yüklemesi tamamlandı",from:"İnsan Kaynakları",email:"ik@mavikare.example",body:"Merhaba {{name}}, Kasım ayı yemek kartı yüklemesi tamamlandı. Tutar ve kart bakiyeni her zamanki çalışan portalından kontrol edebilirsin.\n\nBu e-postada bağlantı veya ek yoktur. Soruların için şirket içi İK kanalından bize ulaşabilirsin.\n\nİyi çalışmalar, İnsan Kaynakları",clues:["Bilinen şirket alan adı","Şifre veya ödeme talebi yok","Bağlantı ve ek yok"],answer:1,explain:"Gönderen şirketin bilinen alan adını kullanıyor ve mesaj beklenen bir bilgilendirme. Yine de portalı e-postadaki bir bağlantıdan değil, kayıtlı adresinden aç."},
      {subject:"ÖNEMLİ: Yeni banka hesabımız — bugünkü ödeme",from:"Tedarikçi Muhasebe",email:"fatura@acme-tedarik.co",body:"Merhaba Finans Ekibi, banka bilgilerimiz değişti. Bugünkü 48.750 TL ödemenizi gecikmemesi için yeni hesaba gönderin. Bu değişikliği telefonda teyit etmeye gerek yok; yöneticiniz bilgilendirildi.\n\nYeni IBAN: TR00 0000 0000 0000 0000 0000 00\nDekontu bu e-postaya yanıtlayın.",clues:["Acil ödeme baskısı","IBAN değişikliği e-postayla bildirilmiş","Bağımsız teyidi caydırıyor"],answer:0,explain:"Banka hesabı değişikliği ve acil ödeme, iş e-postası dolandırıcılığı işaretidir. Ödeme yapma. Tedarikçiyi kayıtlı telefon numarasından ara ve talebi şirket sürecinden bildir."},
      {subject:"Ece Yılmaz sizinle “Q4 Lansman Planı” dosyasını paylaştı",from:"Drive Bildirimleri",email:"drive-shares@google.com",body:"Ece Yılmaz sizinle bir dosya paylaştı:\n\nQ4 Lansman Planı · MaviKare ekibi\n\nDrive’da aç\n\nPaylaşımı beklemiyorsan gönderenle mevcut iletişim kanalınızdan teyit et.",clues:["Gönderen alan adı google.com","Dosya adı iş bağlamına uyuyor","Beklenmeyen paylaşımı yine teyit et"],answer:1,explain:"Gönderen alan adı google.com ve dosya adı şirket içi projeyle uyumlu; ileti parola istemiyor. Paylaşımı beklemiyorsan açmadan önce Ece’ye tanıdık bir kanaldan sor. Görünen ad tek başına kanıt değildir."},
      {subject:"Paketiniz teslim edilemedi — gümrük ücreti",from:"Kargo Destek",email:"bildirim@teslimat-takip.help",body:"Sayın {{name}}, gönderiniz adres hatası nedeniyle bekletiliyor. Yeniden teslimat için 32,90 TL işlem ücretini 12 saat içinde ödeyin.\n\nTeslimatı planla\n\nEk: teslimat_detaylari.zip\nteslimat-secure.help/pay/81504",clues:["Beklenmeyen ücret","Kurye markası olmayan alan adı","ZIP eki ve süre baskısı"],answer:0,explain:"Gönderen bilinen bir kargo şirketinin alan adını kullanmıyor; acil ücret ve ZIP eki istiyor. Ödeme yapma ve eki indirme. Takip numarasını kargo şirketinin resmî sitesine kendin yazarak kontrol et."},
      {subject:"Oturumunuzu korumak için kodunuzu yanıtlayın",from:"Microsoft Hesap Güvenliği",email:"no-reply@ms-secure-auth.help",body:"Merhaba {{name}}, yeni cihazdan giriş denemesi algıladık. Hesabınızı korumak için telefonunuza gelen 6 haneli kodu bu e-postayı yanıtlayarak gönderin.\n\n15 dakika içinde yanıt gelmezse hesabınız kilitlenecek.",clues:["Tek kullanımlık kodu istiyor","Resmî olmayan alan adı","Hesap kilidiyle acele ettiriyor"],answer:0,explain:"Tek kullanımlık doğrulama kodu parolan kadar hassastır. Güvenilir destek ekipleri bu kodu e-postayla istemez. Mesajı bildirim kanalına ilet; giriş denemesini ayrı bir resmî kanaldan kontrol et."},
      {subject:"Kasım bordron hazır",from:"İnsan Kaynakları",email:"ik@mavikare.example",body:"Merhaba {{name}}, Kasım bordro belgeleri çalışan portalına yüklendi. Her zamanki şirket portalına kendin giderek bordronu görüntüleyebilirsin.\n\nBu mesajda dosya eki veya yeni bağlantı bulunmuyor. Soruların için İK ekibine şirket içi kanaldan ulaşabilirsin.",clues:["Şirketin tanıdık alan adı","Yeni bağlantı veya ek yok","Beklenen çalışan akışıyla tutarlı"],answer:1,explain:"İleti seni e-postadaki bir bağlantıya yönlendirmiyor ve parola ya da kod istemiyor. Bordronu kayıtlı çalışan portalından aç. Beklemediğin bir ek olsaydı ayrıca doğrulaman gerekirdi."},
      {subject:"Gizli: şimdi 5 dijital hediye kartı al",from:"Genel Müdür",email:"gm@mavikare-management.com",body:"Merhaba {{name}}, toplantıdayım, telefona çıkamıyorum. Müşteri ekibine teşekkür için 5 hediye kartı al ve kodlarını hemen bana ilet. Bunu şimdilik kimseyle paylaşma.\n\n15 dakika içinde halledebilir misin?",clues:["Şirket dışı benzer alan adı","Hediye kartı kodu talebi","Gizlilik ve acil yanıt baskısı"],answer:0,explain:"Gönderen adresi şirket alan adı değil. Hediye kartı kodları para gibi kullanılabilir; gizlilik ve acele baskısı teyidi engellemeye çalışıyor. Satın alma yapma. Yöneticine bildiğin kanaldan ulaş."},
      {subject:"Parola sıfırlama talebin alındı",from:"BT Destek",email:"destek@mavikare.example",body:"Merhaba {{name}}, şirket portalında başlattığın parola sıfırlama isteği alındı. Talep sana ait değilse bu e-postaya yanıt verme; şirket içi BT yardım masasına ulaş.\n\nBT ekibi parolanı veya doğrulama kodunu e-postayla istemez. Bu mesajda sıfırlama bağlantısı yoktur.",clues:["Şirket alan adı","Parola veya kod istemiyor","Bilinen sıfırlama akışı"],answer:1,explain:"Bu ileti parola sıfırlama isteğini teyit ediyor, ancak parola veya kod istemiyor ve bağlantı içermiyor. Talebi sen başlatmadıysan BT yardım masasına bildirip hesabını güvene al."},
      {subject:"İmzan bekleniyor: tedarikçi sözleşmesi",from:"MaviKare Sözleşme",email:"evrak@mavikare-docs.signing.center",body:"Merhaba {{name}}, imzan bekleyen sözleşme için son hatırlatma. Belgeye erişmek için şirket hesabınla oturum açman gerekiyor.\n\nBelgeyi incele\n\nmavikare-docs.signing.center/login\n\nİşlem 30 dakika sonra iptal edilir.",clues:["Şirketi andıran farklı alan adı","Şirket parolasıyla giriş istiyor","Sahte süre sınırı"],answer:0,explain:"“mavikare” sözcüğü alan adında geçse de gerçek şirket alan adı değil. Sahte giriş sayfası parolanı çalmayı hedefliyor. Bağlantıyı açma; belgeyi bekliyorsan gönderen ekiple bilinen kanaldan doğrula."}
    ],
    en: [
      {subject:"Your account will be closed in 2 hours",from:"Google Workspace Security",email:"security@google-workspace-alerts.com",body:"Hello {{name}}, unusual activity was detected and your account will be suspended. Verify your details now to keep access.\n\nVerify account\n\ngoogle-workspace-alerts.com.verify-user.co",clues:["Sender domain is not official","Account closure threat","Misleading link target"],answer:0,explain:"The sender is not Google; the real domain is verify-user.co. The account threat and urgency are designed to make you click. Do not open it; report the message through your organisation’s channel."},
      {subject:"November meal-card credit is complete",from:"Human Resources",email:"hr@mavikare.example",body:"Hello {{name}}, your November meal-card credit is complete. Check the amount and balance through your usual employee portal.\n\nThere is no link or attachment in this email. Contact HR through the company channel if you have questions.\n\nRegards, Human Resources",clues:["Known company domain","No password or payment request","No link or attachment"],answer:1,explain:"The sender uses the known company domain and the message is routine. Still open the portal from your saved address, not through a link in an email."},
      {subject:"IMPORTANT: Our new bank account — payment due today",from:"Supplier Accounts",email:"invoice@acme-supply.co",body:"Hello Finance, our bank details have changed. Send today’s payment to the new account to avoid a delay. There is no need to verify by phone; your manager has been informed.\n\nNew account: GB00 0000 0000 0000 0000\nReply with the transfer receipt.",clues:["Urgent payment pressure","Bank details changed by email","Discourages independent verification"],answer:0,explain:"A bank-detail change and urgent payment are common business email compromise signals. Do not pay. Call the supplier using a number already on file and report the request through your finance process."},
      {subject:"Ece Yilmaz shared “Q4 Launch Plan” with you",from:"Drive Notifications",email:"drive-shares@google.com",body:"Ece Yilmaz shared a file with you:\n\nQ4 Launch Plan · MaviKare team\n\nOpen in Drive\n\nIf you were not expecting this share, verify with the sender through a channel you already use.",clues:["Sender domain is google.com","File fits the work context","Unexpected shares still need checking"],answer:1,explain:"The sender domain is google.com and the file fits the project context; it does not ask for a password. If you did not expect the share, check with Ece through a familiar channel. A display name alone is not proof."},
      {subject:"Delivery failed — customs fee required",from:"Parcel Support",email:"notice@delivery-track.help",body:"Hello {{name}}, your parcel is on hold due to an address issue. Pay a 2.90 fee within 12 hours to reschedule delivery.\n\nReschedule delivery\n\nAttachment: delivery_details.zip\ndelivery-secure.help/pay/81504",clues:["Unexpected fee","Domain is not the courier’s","ZIP attachment and deadline"],answer:0,explain:"The sender is not using a known courier domain and asks for an urgent fee with a ZIP attachment. Do not pay or download it. Check the tracking number by typing the courier’s official address yourself."},
      {subject:"Reply with your code to secure your session",from:"Microsoft Account Security",email:"no-reply@ms-secure-auth.help",body:"Hello {{name}}, we detected a sign-in from a new device. Reply to this email with the six-digit code sent to your phone to protect your account.\n\nYour account will be locked if you do not reply within 15 minutes.",clues:["Requests a one-time code","Unofficial domain","Uses a lockout threat"],answer:0,explain:"A one-time verification code is as sensitive as your password. Trusted support teams do not ask for it by email. Report this message and check the sign-in attempt through a separate official channel."},
      {subject:"Your November payslip is ready",from:"Human Resources",email:"hr@mavikare.example",body:"Hello {{name}}, November payslips are available in the employee portal. Go to the company portal you normally use to view yours.\n\nThis message has no attachment or new link. Contact HR through the internal channel if you have questions.",clues:["Known company domain","No new link or attachment","Fits a normal employee process"],answer:1,explain:"The message does not direct you to an email link or ask for a password or code. Open the saved employee portal. An unexpected attachment would need separate verification."},
      {subject:"Confidential: buy 5 digital gift cards now",from:"Chief Executive",email:"ceo@mavikare-management.com",body:"Hello {{name}}, I am in a meeting and cannot take calls. Buy five gift cards for the client team and send me the codes now. Please keep this between us for the moment.\n\nCan you do it in the next 15 minutes?",clues:["Lookalike external domain","Gift-card code request","Secrecy and urgency"],answer:0,explain:"The sender address is outside the company domain. Gift-card codes are as good as cash; secrecy and urgency try to prevent verification. Do not buy anything. Contact the executive through a known channel."},
      {subject:"Password reset request received",from:"IT Support",email:"support@mavikare.example",body:"Hello {{name}}, we received the password reset request you started in the company portal. If you did not make this request, do not reply; contact the internal IT desk.\n\nIT will never ask for your password or verification code by email. This message contains no reset link.",clues:["Company domain","No password or code requested","Matches a known reset flow"],answer:1,explain:"This confirms a reset request but does not ask for a password or code and includes no link. If you did not start it, tell the IT help desk and secure your account."},
      {subject:"Signature required: supplier agreement",from:"MaviKare Contracts",email:"documents@mavikare-docs.signing.center",body:"Hello {{name}}, this is a final reminder about a contract awaiting your signature. Sign in with your company account to view the document.\n\nReview document\n\nmavikare-docs.signing.center/login\n\nThe request expires in 30 minutes.",clues:["Lookalike company name in another domain","Requests company sign-in","Artificial deadline"],answer:0,explain:"The word “mavikare” appears in the address, but the actual domain is different. The fake sign-in page wants your password. Do not open it; verify the document with the sender through a known channel."}
    ]
  };
  function makeQuestions(locale) {
    
    var labels = locale === "tr" ? ["Oltalama / şüpheli", "Güvenli / meşru"] : ["Phishing / suspicious", "Safe / legitimate"];
    return cases[locale].map(function (c, index) {
      var prompt = locale === "tr" ? "Vaka " + (index + 1) + ": Bu iletiyi nasıl sınıflandırırsın?" : "Case " + (index + 1) + ": How would you classify this message?";
      return [prompt, labels, c.answer, c.explain, { outlook: c }];
    });
  }
  training.tr.q = makeQuestions("tr");
  training.en.q = makeQuestions("en");
  data.TRAININGS.push(training);

  var body = document.querySelector("#quiz-body");
  var step = document.querySelector("#quiz-step");
  var lang = function () { return document.documentElement.lang === "tr" ? "tr" : "en"; };
  var current = { index: -1, question: null };
  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
      return { "&":"&amp;", "<":"&lt;", ">":"&gt;", """:"&quot;", "'":"&#39;" }[ch];
    });
  }
  function profileName() {
    try {
      var state = JSON.parse(localStorage.getItem("siber-farkindalik.v2") || "null");
      var profile = state && state.profiles && state.profiles[state.active];
      return profile && profile.name ? profile.name : (lang() === "tr" ? "Misafir" : "Guest");
    } catch (e) { return lang() === "tr" ? "Misafir" : "Guest"; }
  }
  function setStep(index) {
    var part = index < 5 ? 1 : 2;
    var item = index < 5 ? index + 1 : index - 4;
    step.textContent = lang() === "tr"
      ? "Bölüm " + part + " / 2 · Vaka " + item + " / 5"
      : "Part " + part + " / 2 · Case " + item + " / 5";
  }
  function drawCase(index, q, answered, chosen) {
    var c = q[4].outlook;
    var name = profileName();
    var bodyText = c.body.replace(/\{\{name\}\}/g, esc(name));
    var options = q[1].map(function (label, option) {
      var cls = "option outlook-answer";
      if (answered) {
        if (option === q[2]) cls += " correct";
        else if (option === chosen) cls += " wrong";
        else cls += " dim";
      }
      return '<button type="button" class="' + cls + '" data-opt="' + option + '"' + (answered ? " disabled" : "") + '><span class="key">' + (option === 0 ? "A" : "B") + '</span><span>' + esc(label) + '</span></button>';
    }).join("");
    var feedback = answered
      ? '<div class="quiz-explain ' + (chosen === q[2] ? "ok" : "no") + '"><span><b>' +
        esc(chosen === q[2] ? (lang() === "tr" ? "Doğru karar." : "Correct.") : (lang() === "tr" ? "Vaka notunu incele." : "Review the case note.")) +
        '</b> ' + esc(c.explain) + '</span></div>'
      : "";
    body.dataset.currentOutlookIndex = String(index);
    body.innerHTML =
      '<div class="outlook-shell">' +
        '<div class="outlook-topbar"><span class="outlook-wordmark">Outlook</span><span class="outlook-search">' + esc(lang() === "tr" ? "Ara" : "Search") + '</span><span class="outlook-account">' + esc(name) + '</span></div>' +
        '<div class="outlook-commandbar"><span>' + esc(lang() === "tr" ? "İleti" : "Message") + '</span><span>' + esc(lang() === "tr" ? "Arşivle" : "Archive") + '</span><span>' + esc(lang() === "tr" ? "Sil" : "Delete") + '</span><span>' + esc(lang() === "tr" ? "Yenile" : "Refresh") + '</span><span class="outlook-label">Smyrna Cyber · ' + esc(lang() === "tr" ? "Eğitim simülasyonu" : "Training simulation") + '</span></div>' +
        '<div class="outlook-layout">' +
          '<nav class="outlook-folders" aria-label="' + esc(lang() === "tr" ? "Posta klasörleri" : "Mail folders") + '"><div class="outlook-new">＋ ' + esc(lang() === "tr" ? "Yeni ileti" : "New mail") + '</div><div class="outlook-folder is-current">▣ ' + esc(lang() === "tr" ? "Gelen Kutusu" : "Inbox") + '<b>1</b></div><div class="outlook-folder">☆ ' + esc(lang() === "tr" ? "Önemli" : "Important") + '</div><div class="outlook-folder">◷ ' + esc(lang() === "tr" ? "Taslaklar" : "Drafts") + '</div><div class="outlook-folder">↗ ' + esc(lang() === "tr" ? "Gönderilmiş Öğeler" : "Sent Items") + '</div><div class="outlook-folder">▱ ' + esc(lang() === "tr" ? "Silinmiş Öğeler" : "Deleted Items") + '</div></nav>' +
          '<section class="outlook-message-list"><div class="outlook-list-head">' + esc(lang() === "tr" ? "Odaklanmış" : "Focused") + ' <span>' + esc(lang() === "tr" ? "Diğer" : "Other") + '</span></div><div class="outlook-message is-selected"><b>' + esc(c.from) + '</b><span>' + esc(c.subject) + '</span><small>' + esc(lang() === "tr" ? "Şimdi" : "Now") + '</small></div><div class="outlook-message"><b>' + esc(lang() === "tr" ? "Güvenlik ekibi" : "Security team") + '</b><span>' + esc(lang() === "tr" ? "Haftalık güvenlik özeti" : "Weekly security digest") + '</span><small>' + esc(lang() === "tr" ? "Dün" : "Yesterday") + '</small></div></section>' +
          '<article class="outlook-reading"><div class="outlook-context">' + esc(lang() === "tr" ? "Vaka " + (index + 1) + " · İleti incelemesi" : "Case " + (index + 1) + " · Message review") + '</div><h3 class="outlook-subject">' + esc(c.subject) + '</h3><div class="outlook-sender-row"><span class="outlook-avatar">' + esc((c.from.charAt(0) || "M").toUpperCase()) + '</span><div><b>' + esc(c.from) + '</b><small>' + esc(c.email) + '</small></div><span class="outlook-date">' + esc(lang() === "tr" ? "Bugün 09:14" : "Today 9:14 AM") + '</span></div><div class="outlook-to">' + esc(lang() === "tr" ? "Kime:" : "To:") + ' <b>' + esc(name) + ' &lt;' + esc(name.toLocaleLowerCase().replace(/[^a-z0-9]+/g, ".")) + '@mavikare.example&gt;</b></div><div class="outlook-mail-body">' + bodyText.split("\n").map(function (line) { return line ? '<p>' + esc(line) + '</p>' : '<p class="outlook-spacer"></p>'; }).join("") + '</div><div class="outlook-clues"><b>' + esc(lang() === "tr" ? "İnceleme notları" : "Review clues") + '</b><div>' + c.clues.map(function (clue) { return '<span>' + esc(clue) + '</span>'; }).join("") + '</div></div></article>' +
        '</div>' +
        '<div class="outlook-decision"><p class="quiz-q">' + esc(q[0]) + '</p><div class="quiz-options">' + options + '</div>' + feedback + '</div>' +
      '</div>';
  }
  function showBreak() {
    var name = profileName();
    setStep(5);
    body.dataset.partReady = "true";
    body.innerHTML = '<div class="outlook-part-break"><span class="outlook-break-kicker">' + esc(lang() === "tr" ? "Bölüm 1 tamamlandı" : "Part one complete") + '</span><h3>' + esc(lang() === "tr" ? "İyi gidiyorsun, " + name + "." : "Good work, " + name + ".") + '</h3><p>' + esc(lang() === "tr" ? "İlk beş iletiyi inceledin. İkinci bölümde hedefli mesajlar ve hesap güvenliği vakaları seni bekliyor." : "You reviewed the first five messages. Part two brings targeted messages and account-security cases.") + '</p><button type="button" class="btn btn-primary" id="outlook-part-continue">' + esc(lang() === "tr" ? "İkinci bölüme geç" : "Continue to part two") + ' →</button></div>';
    body.querySelector("#outlook-part-continue").addEventListener("click", function () {
      body.dataset.partReady = "continued";
      drawCase(5, current.question, false, -1);
    });
  }
  function renderIfNeeded() {
    var prompt = body.querySelector(".quiz-q");
    if (!prompt) return;
    var qText = prompt.textContent;
    var q = training.tr.q.concat(training.en.q).find(function (entry) { return entry[0] === qText; });
    if (!q || !q[4] || !q[4].outlook) return;
    var index = q[4].outlook && cases.tr.findIndex(function (c) { return c.subject === q[4].outlook.subject; });
    if (index < 0) index = cases.en.findIndex(function (c) { return c.subject === q[4].outlook.subject; });
    if (index < 0) return;
    current = { index: index, question: q };
    if (index === 0 && body.dataset.currentOutlookIndex !== "0") body.dataset.partReady = "";
    if (index === 5 && body.dataset.partReady !== "continued") { showBreak(); return; }
    var selectedWrong = body.querySelector(".option.wrong");
    var marked = body.querySelector(".option.correct, .option.wrong");
    var chosen = selectedWrong ? Number(selectedWrong.dataset.opt) : (marked ? q[2] : -1);
    drawCase(index, q, !!marked, chosen);
    setStep(index);
  }
  new MutationObserver(renderIfNeeded).observe(body, { childList: true, subtree: true });
})();