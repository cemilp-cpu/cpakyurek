d/ Veri Tabanımız (Buraya istediğiniz kadar ekleme yapabilirsiniz)
const sozluk = [
{ yabanci: "Adisyon", turkce: "Hesap Fişi" },
{ yabanci: "Data", turkce: "Veri" },
{ yabanci: "Lansman", turkce: "Tanıtım" },
{ yabanci: "Objektif", turkce: "Nesnel" },
{ yabanci: "Full", turkce: "Tam / Dolu" }
];

function sozcukBul() {
const girdi = document.getElementById('sozcukGirdisi').value.trim().toLowerCase();
const sonucAlani = document.getElementById('sonucAlani');
const kumeA = document.getElementById('kumeA');
const kumeB = document.getElementById('kumeB');

// Sıfırlama
sonucAlani.innerHTML = "";
kumeA.classList.remove('aktif-mavi');
kumeB.classList.remove('aktif-kirmizi');

if (girdi === "") return;

let bulunanlar = [];
let kumeTipi = ""; // 'A' veya 'B'

// Arama İşlemi
sozluk.forEach(item => {
if (item.yabanci.toLowerCase().includes(girdi)) {
bulunanlar.push(item.yabanci + " -> " + item.turkce);
kumeTipi = "A";
} else if (item.turkce.toLowerCase().includes(girdi)) {
bulunanlar.push(item.turkce + " (Önerilen)");
kumeTipi = "B";
}
});

// Sonuçları Yazdırma
if (bulunanlar.length > 0) {
let htmlContent = "<h4>Bulunan Sonuçlar:</h4>";
bulunanlar.forEach((s, index) => {
htmlContent += `<div class="liste-item">${index + 1}. ${s}</div>`;
});
sonucAlani.innerHTML = htmlContent;

// Küme Lambalarını Yakma
if (kumeTipi === "A") kumeA.classList.add('aktif-mavi');
if (kumeTipi === "B") kumeB.classList.add('aktif-kirmizi');

} else {
// Bulamazsa Övgü ve Katkı İsteği
sonucAlani.innerHTML = `
<p>Aradığınız sözcüğü henüz haznemize katamadık.</p>
<p class="ovgu">Sizin bu konuda bir öneriniz var mı? Değerli katkılarınız bizim için çok kıymetlidir.</p>
`;
}
}

function temizle() {
document.getElementById('sozcukGirdisi').value = "";
document.getElementById('sonucAlani').innerHTML = "<p>Yeni sözcük sorabilirsiniz...</p>";
document.getElementById('kumeA').classList.remove('aktif-mavi');
document.getElementById('kumeB').classList.remove('aktif-kirmizi');
document.getElementById('sozcukGirdisi').focus();
}

.
