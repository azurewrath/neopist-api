const { PrismaClient } = require("@prisma/client");
const p = new PrismaClient();
(async () => {
  const count = await p.question.count();
  if (count > 0) { console.log("questions already:", count); await p.$disconnect(); return; }
  const client = await p.user.findFirst({ where: { role: "client" } });
  const therapist = await p.therapist.findFirst();
  if (!client || !therapist) { console.log("no client/therapist"); await p.$disconnect(); return; }
  const samples = [
    ["Anksiyete ile bas etmek icin gunluk hayatta neler yapabilirim?", "Duzenli nefes egzersizleri, uyku duzeni ve kaygi tetikleyicilerini fark etmek iyi bir baslangictir. Bir uzmanla birlikte plan olusturmak sureci hizlandirir."],
    ["Online terapi yuz yuze terapi kadar etkili midir?", "Arastirmalar online terapinin bircok durumda yuz yuze terapi kadar etkili olabilecegini gostermektedir."],
    ["Ilk seansa nasil hazirlanmaliyim?", "Neyi konusmak istediginizi kisaca not almak yardimci olabilir. Ilk seansta tanima odaklı ilerlenir."],
    ["Cift terapisine ne zaman baslanmali?", "Iletisim kopuklugu veya tekrarlayan catismalar hissediyorsaniz erken destek almak faydalidir."],
    ["Cocuklar icin psikolojik destek ne zaman dusunulmeli?", "Davranis degisiklikleri, uyku sorunlari veya ani ice kapanma gibi durumlarda bir uzmana danismak faydalidir."],
  ];
  for (const [title, ans] of samples) {
    const q = await p.question.create({ data: { clientId: client.id, title, body: title, status: "answered" } });
    await p.answer.create({ data: { questionId: q.id, therapistId: therapist.id, body: ans, status: "published" } });
  }
  console.log("seeded 5 questions");
  await p.$disconnect();
})().catch((e) => { console.error(e); process.exit(1); });
