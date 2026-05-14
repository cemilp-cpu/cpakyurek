A<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Sanal Yöre - Sözcüklük</title>
<style>
body { font-family: sans-serif; padding: 20px; line-height: 1.5; background-color: #f4f4f4; }
.ana-konteynir { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
.arama-alani { display: flex; gap: 10px; margin-bottom: 20px; justify-content: center; }
input { padding: 10px; width: 60%; border: 2px solid #ccc; border-radius: 5px; font-size: 16px; }
button { padding: 10px 20px; cursor: pointer; background-color: #2c3e50; color: white; border: none; border-radius: 5px; }
button:hover { background-color: #34495e; }

.kumeler { display: flex; gap: 20px; margin-top: 20px; }
.kume { flex: 1; padding: 15px; border: 2px solid #eee; border-radius: 8px; min-height: 100px; text-align: center; transition: 0.3s; }

/* Renkli Göstergeler */
.aktif-mavi { border-color: blue !important; background-color: #e7f0ff; box-shadow: 0 0 15px blue; }
.aktif-kirmizi { border-color: red !important; background-color: #ffe7e7; box-shadow: 0 0 15px red; }

.sonuclar { margin-top: 20px; padding: 15px; border-top: 2px solid #eee; }
.liste-item { padding: 5px 0; border-bottom: 1px solid #eee; font-weight: bold; }
.ovgu { color: green; font-style: italic; margin-top: 10px; }
</style>
</head>
<body>

<div class="ana-konteynir">
<h2 style="text-align: center;">Sözcüklük Çalışması</h2>

<div class="arama-alani">
<input type="text" id="sozcukGirdisi" placeholder="Sözcük yazınız..." onkeydown="if(event.key==='Enter') sozcukBul()">
<button onclick="sozcukBul()">BUL / SOR</button>
<button onclick="temizle()" style="background-color: #7f8c8d;">Başka Sözcük Sor</button>
</div>

<div class="kumeler">
<div id="kumeA" class="kume">
<h3>A Kümesi</h3>
<p>(Yabancı Kökenli)</p>
</div>
<div id="kumeB" class="kume">
<h3>B Kümesi</h3>
<p>(Önerilen Türkçe)</p>
</div>
</div>

<div id="sonucAlani" class="sonuclar">
<p>Sonuçlar burada 1., 2. şeklinde sıralanacak...</p>
</div>
</div>

<script src="ekler.js"></script>
</body>
</html>

