var imrecDisEl = document.getElementById('imlec-dis');
var imrecIcEl = document.getElementById('imlec-ic');
var imrecX = 0, imrecY = 0, hedefX = 0, hedefY = 0;

document.addEventListener('mousemove', function(e) {
  hedefX = e.clientX; hedefY = e.clientY;
  imrecIcEl.style.left = e.clientX + 'px';
  imrecIcEl.style.top = e.clientY + 'px';
});

function imrecAnim() {
  imrecX += (hedefX - imrecX) * 0.18;
  imrecY += (hedefY - imrecY) * 0.18;
  imrecDisEl.style.left = imrecX + 'px';
  imrecDisEl.style.top = imrecY + 'px';
  requestAnimationFrame(imrecAnim);
}
imrecAnim();

document.querySelectorAll('a, button, .proje-kart, .sosyal-link, .filtre-buton').forEach(function(el) {
  el.addEventListener('mouseenter', function() { document.body.classList.add('imlec-hover'); });
  el.addEventListener('mouseleave', function() { document.body.classList.remove('imlec-hover'); });
});

var daktiloCumleler = [
  'Front-End Geliştirici',
  'Web Tasarımcı',
  'Yaratıcı Kodlayıcı',
  'Sürekli Öğrenen',
  'Problem Çözücü'
];
var aktifCumleIndeksi = 0;
var aktifKarIndeksi = 0;
var siliyorMu = false;
var daktiloBekleme = 80;
var daktiloCumleEl = document.getElementById('daktilo-metin');

function daktiloCalis() {
  var mevcutCumle = daktiloCumleler[aktifCumleIndeksi];
  if (!siliyorMu) {
    aktifKarIndeksi++;
    daktiloCumleEl.textContent = mevcutCumle.substring(0, aktifKarIndeksi);
    if (aktifKarIndeksi >= mevcutCumle.length) {
      siliyorMu = true;
      setTimeout(daktiloCalis, 1800);
      return;
    }
  } else {
    aktifKarIndeksi--;
    daktiloCumleEl.textContent = mevcutCumle.substring(0, aktifKarIndeksi);
    if (aktifKarIndeksi === 0) {
      siliyorMu = false;
      aktifCumleIndeksi = (aktifCumleIndeksi + 1) % daktiloCumleler.length;
    }
    daktiloBekleme = 45;
  }
  setTimeout(daktiloCalis, daktiloBekleme);
}
daktiloCalis();

var temaDurumu = 'karanlik';
var temaButon = document.getElementById('tema-buton');
temaButon.addEventListener('click', function() {
  temaDurumu = temaDurumu === 'karanlik' ? 'aydinlik' : 'karanlik';
  document.documentElement.setAttribute('data-tema', temaDurumu === 'aydinlik' ? 'aydinlik' : '');
  temaButon.textContent = temaDurumu === 'aydinlik' ? '☾' : '☀';
});

var hamburgerButon = document.getElementById('hamburger');
var navMenu = document.getElementById('nav-menu');
hamburgerButon.addEventListener('click', function() {
  navMenu.classList.toggle('acik');
});
navMenu.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() { navMenu.classList.remove('acik'); });
});

var yetenekListesi = [
  { isim: 'HTML5', yuzde: 85 },
  { isim: 'CSS3 / SCSS', yuzde: 80 },
  { isim: 'JavaScript', yuzde: 70 },
  { isim: 'Responsive Tasarım', yuzde: 75 },
  { isim: 'Git & GitHub', yuzde: 65 },
  { isim: 'Bootstrap', yuzde: 70 }
];

var dersListesi = [
  'İnternet Programcılığı 1', 'İnternet Programcılığı 2',
  'Veritabanı Yönetimi', 'Nesne Yönelimli Programlama',
  'Algoritma ve Programlama', 'Bilgisayar Ağları',
  'İşletim Sistemleri', 'Grafik Tasarım',
  'Mobil Uygulama Geliştirme', 'Yazılım Mühendisliği'
];

var yetenekBarKap = document.getElementById('yetenek-barlari');
yetenekListesi.forEach(function(yetenek) {
  var satir = document.createElement('div');
  satir.className = 'yetenek-satiri';
  satir.innerHTML =
    '<div class="yetenek-ust">' +
      '<span class="yetenek-isim">' + yetenek.isim + '</span>' +
      '<span class="yetenek-yuzde">' + yetenek.yuzde + '%</span>' +
    '</div>' +
    '<div class="yetenek-bar-arka">' +
      '<div class="yetenek-bar-on" data-hedef="' + yetenek.yuzde + '"></div>' +
    '</div>';
  yetenekBarKap.appendChild(satir);
});

var dersKap = document.getElementById('ders-listesi');
dersListesi.forEach(function(ders) {
  var span = document.createElement('span');
  span.className = 'ders-etiketi';
  span.textContent = ders;
  dersKap.appendChild(span);
});

var projeListesi = [
  {
    baslik: 'E-Ticaret Web Sitesi',
    aciklama: 'HTML, CSS ve JavaScript ile geliştirilmiş, ürün listeleme ve sepet yönetimi içeren statik e-ticaret sitesi.',
    kategori: 'web',
    emoji: '🛒',
    etiketler: ['HTML', 'CSS', 'JavaScript', 'Responsive']
  },
  {
    baslik: 'Hava Durumu Uygulaması',
    aciklama: 'OpenWeather API kullanılarak şehir bazlı anlık hava durumu gösteren web uygulaması.',
    kategori: 'web',
    emoji: '🌤',
    etiketler: ['JavaScript', 'API', 'Fetch', 'CSS']
  },
  {
    baslik: 'Mobil Todo Uygulaması',
    aciklama: 'LocalStorage ile görev saklayan, kategori filtreleme ve öncelik belirleme özellikli mobil uyumlu uygulama.',
    kategori: 'mobil',
    emoji: '✅',
    etiketler: ['HTML', 'CSS', 'JS', 'LocalStorage']
  },
  {
    baslik: 'Kişisel Blog Tasarımı',
    aciklama: 'Makale okuma deneyimine odaklanan, karanlık/aydınlık mod destekli minimal blog arayüzü.',
    kategori: 'tasarim',
    emoji: '✍',
    etiketler: ['HTML', 'CSS', 'Grid', 'Tipografi']
  },
  {
    baslik: 'Restoran Sipariş Ekranı',
    aciklama: 'Kategorilere göre menü filtreleme, sepet hesaplama ve sipariş özetleri içeren interaktif arayüz.',
    kategori: 'mobil',
    emoji: '🍔',
    etiketler: ['JavaScript', 'CSS', 'Array', 'DOM']
  },
  {
    baslik: 'CSS Animasyon Kütüphanesi',
    aciklama: 'Saf CSS ile 20+ hazır animasyon efekti içeren, kopyala-yapıştır kullanımlı kod kitaplığı.',
    kategori: 'tasarim',
    emoji: '✨',
    etiketler: ['CSS', 'Animasyon', 'Keyframes']
  }
];

var aktifKategori = 'hepsi';

var kategoriler = [
  { deger: 'hepsi', etiket: 'Tümü' },
  { deger: 'web', etiket: 'Web Projeleri' },
  { deger: 'mobil', etiket: 'Mobil Projeler' },
  { deger: 'tasarim', etiket: 'Tasarım' }
];

var filtreCubugu = document.getElementById('filtre-cubugu');
kategoriler.forEach(function(kat) {
  var buton = document.createElement('button');
  buton.className = 'filtre-buton' + (kat.deger === 'hepsi' ? ' aktif' : '');
  buton.textContent = kat.etiket;
  buton.addEventListener('click', function() {
    aktifKategori = kat.deger;
    document.querySelectorAll('.filtre-buton').forEach(function(b) { b.classList.remove('aktif'); });
    buton.classList.add('aktif');
    projeleriRender();
  });
  filtreCubugu.appendChild(buton);
});

function projeleriRender() {
  var filtrelenmisprojeler = projeListesi.filter(function(proje) {
    return aktifKategori === 'hepsi' || proje.kategori === aktifKategori;
  });

  var izgara = document.getElementById('proje-izgarasi');
  izgara.innerHTML = '';

  filtrelenmisprojeler.map(function(proje) {
    var kart = document.createElement('div');
    kart.className = 'proje-kart';

    var kategoriClass = 'kategori-' + proje.kategori;
    var etiketHTML = proje.etiketler.map(function(e) {
      return '<span class="proje-etiketi">' + e + '</span>';
    }).join('');

    kart.innerHTML =
      '<div class="proje-gorsel">' +
        '<span>' + proje.emoji + '</span>' +
        '<span class="proje-kategori-etiket ' + kategoriClass + '">' + proje.kategori + '</span>' +
      '</div>' +
      '<div class="proje-icerik">' +
        '<h3 class="proje-baslik">' + proje.baslik + '</h3>' +
        '<p class="proje-aciklama">' + proje.aciklama + '</p>' +
        '<div class="proje-etiketler">' + etiketHTML + '</div>' +
      '</div>';

    return kart;
  }).forEach(function(kart) { izgara.appendChild(kart); });
}

projeleriRender();

var sosyalListesi = [
  { ikon: '✉', baslik: 'E-posta', alt: 'berkayozturk04@outlook.com', link: 'mailto:berkayozturk04@outlook.com' },
  { ikon: '⌥', baslik: 'GitHub', alt: 'github.com/ber7ay', link: 'https://github.com/ber7ay' },
  { ikon: '◈', baslik: 'LinkedIn', alt: 'linkedin.com', link: 'https://linkedin.com' }
];

var sosyalKap = document.getElementById('sosyal-liste');
sosyalListesi.forEach(function(sosyal) {
  var link = document.createElement('a');
  link.href = sosyal.link;
  link.className = 'sosyal-link';
  link.target = '_blank';
  link.innerHTML =
    '<div class="sosyal-ikon">' + sosyal.ikon + '</div>' +
    '<div>' +
      '<div class="sosyal-bilgi-baslik">' + sosyal.baslik + '</div>' +
      '<div class="sosyal-bilgi-alt">' + sosyal.alt + '</div>' +
    '</div>';
  sosyalKap.appendChild(link);
});

function mesajGonder() {
  var ad = document.getElementById('form-ad').value.trim();
  var email = document.getElementById('form-email').value.trim();
  var mesaj = document.getElementById('form-mesaj').value.trim();
  if (!ad || !email || !mesaj) {
    alert('Lütfen tüm alanları doldurunuz!');
    return;
  }
  alert('Mesajın gönderildi! En kısa sürede dönüş yapacağım. 🚀');
  document.getElementById('form-ad').value = '';
  document.getElementById('form-email').value = '';
  document.getElementById('form-mesaj').value = '';
}

var barlarCalistiMi = false;

function gorunurlukKontrol() {
  var gizliElemanlar = document.querySelectorAll('.gizli');
  gizliElemanlar.forEach(function(el) {
    var konum = el.getBoundingClientRect();
    if (konum.top < window.innerHeight - 80) {
      el.classList.add('gorune');
    }
  });

  if (!barlarCalistiMi) {
    var yetenekBolumu = document.getElementById('yetenekler');
    var konum = yetenekBolumu.getBoundingClientRect();
    if (konum.top < window.innerHeight - 100) {
      barlarCalistiMi = true;
      document.querySelectorAll('.yetenek-bar-on').forEach(function(bar) {
        var hedef = bar.getAttribute('data-hedef');
        bar.style.width = hedef + '%';
      });
    }
  }
}

window.addEventListener('scroll', gorunurlukKontrol);
gorunurlukKontrol();
