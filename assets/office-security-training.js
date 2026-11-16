/* 30. eğitim: Ofiste Fiziksel Bilgi Güvenliği */
(function () {
  "use strict";
  var training = {
    id: "office-physical-security", cat: "culture", lvl: "beginner", min: 12, art: "shield",
    tr: {
      t: "Ofiste Fiziksel Bilgi Güvenliği",
      s: "Ziyaretçi, açık ekran, unutulan çıktı ve şüpheli USB gibi günlük ofis risklerine doğru tepki verin.",
      o: ["Yetkisiz kişilerin güvenli alanlara girişini önlemek", "Ekranları ve basılı belgeleri başıboş bırakmamak", "Bulunan USB ve şüpheli durumları güvenli biçimde bildirmek"],
      m: ["Ziyaretçi ve kapıdan takip", "Açık ekranlar ve basılı belgeler", "Şüpheli USB ve bildirim"],
      g: ["ofis", "fiziksel güvenlik", "ziyaretçi", "temiz masa"],
      q: [
        ["Rozeti olmadığını söyleyen biri senden güvenli kapıdan birlikte geçmeni istiyor. Ne yaparsın?", ["Kapıyı tutup içeri alırım", "Kişiyi resepsiyona yönlendirir, kendi rozetimi paylaşmam", "İçeri alıp sonra yöneticime söylerim"], 1, "Nazikçe durdurup resepsiyona yönlendirin. Her ziyaretçi kendi yetkisiyle giriş yapmalı; kapıyı başkası için açık tutmak güvenlik kontrolünü atlatabilir."],
        ["Ortak yazıcıda müşteri bilgileri içeren bir çıktı buldun. İlk adımın ne?", ["Belgeyi güvenli biçimde alıp sahibine veya ilgili ekibe ulaştırırım", "Kimin yazdırdığını anlamak için fotoğrafını çekerim", "Başkasının belgesi olduğu için bırakırım"], 0, "Belgeyi görünür yerde bırakmayın ve fotoğrafını çekmeyin. Kurum sürecine göre güvenli biçimde sahibine ulaştırın veya bildirin."],
        ["Lobide üzerinde “Maaş Listesi” yazan bir USB bellek buldun. Ne yapmalısın?", ["İçindekini görmek için bilgisayarıma takarım", "Bulduğum yerde bırakıp güvenlik/BT ekibine bildiririm", "Kendi cihazımda tarayıp sonra açarım"], 1, "Bilinmeyen USB'yi hiçbir cihaza takmayın. Konumunu not edin ve kurumunuzun güvenlik ya da BT ekibine teslim edin."]
      ]
    },
    en: {
      t: "Physical Information Security at Work",
      s: "Respond safely to everyday office risks: visitors, unattended screens, printouts and unknown USB drives.",
      o: ["Prevent unauthorised entry to secure areas", "Keep screens and printed documents attended", "Report found USB drives and unusual situations safely"],
      m: ["Visitors and tailgating", "Unattended screens and printouts", "Unknown USB drives and reporting"],
      g: ["office", "physical security", "visitors", "clear desk"],
      q: [
        ["Someone says they forgot their badge and asks you to let them through a secure door. What do you do?", ["Hold the door and let them in", "Direct them to reception and do not share your badge", "Let them in and tell my manager later"], 1, "Politely stop and direct them to reception. Each visitor must use their own authorised access; holding the door can bypass a security check."],
        ["You find a printout with customer details at a shared printer. What is your first step?", ["Secure it and get it to its owner or the right team", "Photograph it to identify who printed it", "Leave it because it belongs to someone else"], 0, "Do not leave the document exposed or photograph it. Secure it and return or report it using your organisation's process."],
        ["You find a USB drive in the lobby labelled “Payroll”. What should you do?", ["Plug it into my computer to see what is inside", "Leave it unplugged and report it to Security or IT", "Scan it on my personal device first"], 1, "Never connect an unknown USB drive to a device. Note where you found it and hand it to your organisation's Security or IT team."]
      ]
    },
    de: {
      t: "Physische Informationssicherheit im Büro",
      s: "Richtig reagieren bei Besuchern, unbeaufsichtigten Bildschirmen, Ausdrucken und unbekannten USB-Sticks.",
      o: ["Unbefugten den Zutritt zu geschützten Bereichen verwehren", "Bildschirme und Ausdrucke nicht unbeaufsichtigt lassen", "Gefundene USB-Sticks und Auffälligkeiten sicher melden"],
      m: ["Besucher und unbefugtes Mitgehen", "Bildschirme und Ausdrucke", "Unbekannte USB-Sticks und Meldung"],
      g: ["Büro", "physische Sicherheit", "Besucher", "Clean Desk"],
      q: [
        ["Jemand hat den Ausweis vergessen und bittet dich, die Sicherheitstür aufzuhalten. Was tust du?", ["Ich halte die Tür auf", "Ich verweise die Person an den Empfang und teile meinen Ausweis nicht", "Ich lasse sie hinein und informiere später meine Führungskraft"], 1, "Bitte die Person höflich zum Empfang. Jeder Besucher muss eine eigene Zutrittsberechtigung haben."],
        ["Am Gemeinschaftsdrucker liegt ein Ausdruck mit Kundendaten. Was ist der erste Schritt?", ["Sicher verwahren und an die zuständige Person weitergeben", "Ein Foto machen, um den Absender zu finden", "Liegen lassen"], 0, "Lasse vertrauliche Unterlagen nicht offen liegen und fotografiere sie nicht. Sichere sie nach dem vorgesehenen Verfahren."],
        ["Du findest im Foyer einen USB-Stick mit der Aufschrift „Gehaltsliste“. Was tust du?", ["An den Computer anschließen", "Nicht anschließen und dem Sicherheits- oder IT-Team melden", "Zuerst am privaten Gerät prüfen"], 1, "Schließe unbekannte USB-Sticks niemals an. Melde den Fundort und gib den Stick an das Sicherheits- oder IT-Team."]
      ]
    },
    fr: {
      t: "Sécurité physique de l’information au bureau",
      s: "Adoptez les bons réflexes face aux visiteurs, écrans laissés ouverts, impressions et clés USB inconnues.",
      o: ["Empêcher les accès non autorisés aux zones protégées", "Ne pas laisser les écrans et documents imprimés sans surveillance", "Signaler sans risque les clés USB trouvées et les situations inhabituelles"],
      m: ["Visiteurs et accès à la suite d’un collègue", "Écrans et documents imprimés", "Clés USB inconnues et signalement"],
      g: ["bureau", "sécurité physique", "visiteurs", "bureau propre"],
      q: [
        ["Une personne sans badge vous demande de lui tenir la porte sécurisée. Que faites-vous ?", ["Je lui tiens la porte", "Je l’oriente vers l’accueil et ne partage pas mon badge", "Je la laisse entrer et préviens mon responsable plus tard"], 1, "Orientez-la poliment vers l’accueil. Chaque visiteur doit avoir son propre accès autorisé."],
        ["Vous trouvez une impression contenant des données client près d’une imprimante partagée. Que faites-vous d’abord ?", ["La sécuriser et la remettre à son propriétaire ou à l’équipe concernée", "La photographier pour identifier l’expéditeur", "La laisser sur place"], 0, "Ne laissez pas le document exposé et ne le photographiez pas. Sécurisez-le et signalez-le selon la procédure."],
        ["Vous trouvez une clé USB portant la mention « Paie » dans le hall. Que faire ?", ["La brancher pour voir son contenu", "Ne pas la brancher et prévenir l’équipe Sécurité ou IT", "La scanner sur mon appareil personnel"], 1, "Ne branchez jamais une clé inconnue. Signalez le lieu de découverte et remettez-la à l’équipe Sécurité ou IT."]
      ]
    },
    es: {
      t: "Seguridad física de la información en la oficina",
      s: "Responde de forma segura ante visitantes, pantallas desatendidas, documentos impresos y USB desconocidos.",
      o: ["Evitar accesos no autorizados a zonas protegidas", "No dejar pantallas ni documentos impresos sin supervisión", "Comunicar de forma segura los USB encontrados y situaciones inusuales"],
      m: ["Visitantes y acceso a continuación", "Pantallas y documentos impresos", "USB desconocidos y comunicación"],
      g: ["oficina", "seguridad física", "visitantes", "mesa despejada"],
      q: [
        ["Alguien dice que olvidó su tarjeta y te pide que le abras la puerta segura. ¿Qué haces?", ["Le sujeto la puerta", "Le indico que vaya a recepción y no comparto mi tarjeta", "Le dejo pasar y aviso después a mi responsable"], 1, "Indícale amablemente que acuda a recepción. Cada visitante debe usar su propia autorización."],
        ["Encuentras una impresión con datos de clientes en una impresora compartida. ¿Qué haces primero?", ["La guardo de forma segura y la entrego a su propietario o al equipo correspondiente", "Le hago una foto para averiguar quién la imprimió", "La dejo allí porque no es mía"], 0, "No dejes el documento expuesto ni lo fotografíes. Asegúralo y devuélvelo o notifícalo según el procedimiento."],
        ["Encuentras un USB en el vestíbulo con la etiqueta «Nóminas». ¿Qué haces?", ["Lo conecto para ver qué contiene", "No lo conecto e informo a Seguridad o TI", "Lo analizo primero en mi dispositivo personal"], 1, "Nunca conectes un USB desconocido. Anota dónde lo encontraste y entrégalo al equipo de Seguridad o TI."]
      ]
    },
    ar: {
      t: "الأمن المادي للمعلومات في المكتب",
      s: "تصرّف بأمان مع الزوار والشاشات غير المراقبة والمطبوعات ووحدات USB المجهولة.",
      o: ["منع الدخول غير المصرح به إلى المناطق المحمية", "عدم ترك الشاشات والمستندات المطبوعة دون مراقبة", "الإبلاغ الآمن عن وحدات USB المفقودة والمواقف غير المعتادة"],
      m: ["الزوار والدخول خلف الموظف", "الشاشات والمطبوعات", "وحدات USB المجهولة والإبلاغ"],
      g: ["المكتب", "الأمن المادي", "الزوار", "المكتب المرتب"],
      q: [
        ["قال شخص إنه نسي بطاقة الدخول وطلب منك فتح الباب الآمن. ماذا تفعل؟", ["أمسك الباب وأدعه يدخل", "أوجهه إلى الاستقبال ولا أشارك بطاقتي", "أدعه يدخل ثم أخبر مديري لاحقًا"], 1, "وجّهه بلطف إلى الاستقبال. يجب أن يستخدم كل زائر تصريح الدخول الخاص به."],
        ["وجدت مطبوعة تحتوي على بيانات عملاء قرب طابعة مشتركة. ما أول خطوة؟", ["أؤمنها وأسلمها إلى صاحبها أو الفريق المعني", "أصورها لمعرفة من طبعها", "أتركها لأنها تخص شخصًا آخر"], 0, "لا تترك المستند مكشوفًا ولا تصوره. أمّنه وأعده أو أبلغ عنه وفق إجراءات المؤسسة."],
        ["وجدت وحدة USB في الردهة مكتوبًا عليها «الرواتب». ماذا تفعل؟", ["أوصلها بجهازي لأرى محتواها", "لا أوصلها وأبلغ فريق الأمن أو تقنية المعلومات", "أفحصها أولًا على جهازي الشخصي"], 1, "لا توصل وحدة USB مجهولة بأي جهاز. أبلغ عن مكان العثور عليها وسلمها إلى فريق الأمن أو تقنية المعلومات."]
      ]
    },
    ru: {
      t: "Физическая защита информации в офисе",
      s: "Правильные действия с посетителями, оставленными без присмотра экранами, распечатками и неизвестными USB-накопителями.",
      o: ["Не допускать посторонних в защищённые зоны", "Не оставлять экраны и распечатки без присмотра", "Безопасно сообщать о найденных USB-накопителях и необычных ситуациях"],
      m: ["Посетители и проход вслед за сотрудником", "Экраны и распечатки", "Неизвестные USB-накопители и сообщения"],
      g: ["офис", "физическая безопасность", "посетители", "чистый стол"],
      q: [
        ["Человек говорит, что забыл пропуск, и просит придержать защищённую дверь. Что делать?", ["Придержать дверь", "Направить его на ресепшен и не передавать свой пропуск", "Впустить и позже сообщить руководителю"], 1, "Вежливо направьте человека на ресепшен. У каждого посетителя должен быть собственный разрешённый доступ."],
        ["У общего принтера лежит распечатка с данными клиентов. Что сделать сначала?", ["Убрать её в безопасное место и передать владельцу или нужной команде", "Сфотографировать, чтобы найти автора", "Оставить на месте"], 0, "Не оставляйте документ открытым и не фотографируйте его. Защитите его и сообщите по установленной процедуре."],
        ["В холле найден USB-накопитель с надписью «Зарплата». Что делать?", ["Подключить к компьютеру и посмотреть содержимое", "Не подключать и сообщить службе безопасности или ИТ", "Сначала проверить на личном устройстве"], 1, "Не подключайте неизвестный USB-накопитель. Сообщите, где он найден, и передайте его службе безопасности или ИТ."]
      ]
    }
  };
  data = window.APP_DATA;
  data.TRAININGS.push(training);
})();