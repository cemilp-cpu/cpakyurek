// Sözcüklük Veri Bankası
// A Kümesi: Yabancı Kökenli Sözcükler
// B Kümesi: Önerilen Türkçe Sözcükler

const sozcukVerileri = [
    {
        yabanci: "Kriter",
        turkce: "Ölçüt"
    },
    {
        yabanci: "Olasılık",
        turkce: "Olası"
    },
    {
        yabanci: "Problem",
        turkce: "Sorun"
    },
    {
        yabanci: "Detay",
        turkce: "Ayrıntı"
    }
    // Yeni sözcük çiftlerini buraya, yukarıdaki biçimde eklemeye devam edebilirsiniz.
];
GitHub ve Uygulama Notları:
Dosya İsmi: Bu kodları ekler.js adıyla kaydedin.

A ve B Kümesi Mantığı: yabanci karşılığı A kümesini, turkce karşılığı ise B kümesini temsil eder. HTML dosyamız bu iki veriyi otomatik olarak ayırıp kendi sütunlarına yerleştirecektir.

Yazım Kuralları: Verileri eklerken tam yazım kurallarına bağlı kalarak, tırnak işaretleri ve virgüllere (,) dikkat etmeniz yeterlidir
