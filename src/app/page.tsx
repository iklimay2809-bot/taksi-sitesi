import Image from "next/image";
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Car, 
  Navigation, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle,
  FileText,
  Compass
} from "lucide-react";

export default function Home() {
  const taxiImages = [
    {
      src: "/görsel/taksi1.jpeg",
      title: "Geniş ve Rahat İç Alan",
      desc: "Yolculuk boyunca rahat edebileceğiniz, temiz ve klimalı araç içi."
    },
    {
      src: "/görsel/taksi2.jpeg",
      title: "Geniş Bagaj Kapasitesi",
      desc: "Bavul, pazar ve eşyalarınız için geniş bagaj hacmi."
    },
    {
      src: "/görsel/taksi3.jpeg",
      title: "Bakımlı Sarı Taksi",
      desc: "Teknik bakımları aksatılmayan, güvenli sürüşe uygun araç."
    },
    {
      src: "/görsel/taksi4.jpeg",
      title: "Alazı & Serinyol Güzergâhı",
      desc: "Bölge yollarını ve kestirmelerini iyi bilen şoför tecrübesi."
    },
    {
      src: "/görsel/taksi5.jpeg",
      title: "Dikmece & Hatay Çevresi",
      desc: "İster mahalle içi kısa mesafe, ister ilçeler arası ulaşım."
    }
  ];

  const serviceAreas = [
    { name: "Alazı Köyü / Mahallesi", desc: "Doğrudan adrese çağrı ve hızlı intikal" },
    { name: "Serinyol Bölgesi", desc: "Çarşı, anayol ve mahalle içi ulaşım" },
    { name: "Dikmece ve Çevresi", desc: "Bağlantı yolları ve merkez hatları" },
    { name: "Antakya & Hatay Merkez", desc: "Hastane, otogar ve resmi kurum transferleri" },
    { name: "Havalimanı & Şehirlerarası", desc: "Önceden saatli randevu ile karşılama" },
  ];

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* 1. NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Sol: Hemen Ara Butonu */}
            <div className="flex-1 flex justify-start">
              <a 
                href="tel:05313930146" 
                className="group relative inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.45)] transition-all duration-300 transform active:scale-95"
              >
                <div className="w-7 h-7 rounded-lg bg-black/15 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Phone className="w-4 h-4 text-zinc-950 fill-current" />
                </div>
                <span className="tracking-wide">Hemen Ara</span>
              </a>
            </div>

            {/* Orta: Ortalanmış Başlık / Logo - ALAZI TAKSİ */}
            <div className="flex-shrink-0 text-center px-2">
              <a href="#" className="inline-block group py-1">
                <span className="block text-2xl sm:text-3xl md:text-4xl font-black tracking-wider bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-orange-300 transition-all duration-300 pb-1">
                  ALAZI TAKSİ
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-amber-500/90 uppercase">
                  Mehmet Sarıkaya • Bağımsız Taksi
                </span>
              </a>
            </div>

            {/* Sağ: 7/24 Kesintisiz Hizmet Butonu */}
            <div className="flex-1 flex justify-end">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-zinc-900/90 border border-amber-500/30 text-zinc-200 text-xs sm:text-sm font-medium shadow-inner">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-zinc-300 hidden md:inline">7/24</span>
                <span className="text-amber-400 font-semibold">Aktif Taksi</span>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 2. HERO BÖLÜMÜ - GERÇEKÇİ & ALAZI / SERİNYOL / DİKMECE ODAKLI */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#09090b] via-[#0e0e12] to-[#09090b]">
        {/* Arka plan ışık efektleri */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Sol Yazı Alanı */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              {/* Bölge Etiketi */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Alazı • Serinyol • Dikmece • Hatay Çevresi</span>
              </div>

              {/* Kesilme Sorunu Çözülmüş, Büyük Başlık */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-snug sm:leading-tight">
                <span className="inline-block pb-3 bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent">
                  Alazı, Serinyol ve Dikmece'de
                </span>
                <span className="block pb-2 bg-gradient-to-r from-yellow-300 via-orange-300 to-white bg-clip-text text-transparent">
                  Doğrudan Şoföre Ulaşın
                </span>
              </h1>

              {/* Gerçekçi, Net Açıklama (Durağa bağlı değil vurgusu) */}
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Aradığınızda durağa, sekretere veya sıraya takılmadan doğrudan aracı kullanan şoför <strong className="text-amber-400 font-semibold">Mehmet Sarıkaya</strong> ile görüşürsünüz. Alazı, Serinyol, Dikmece ve Hatay genelinde kapınıza en kısa sürede gelerek gideceğiniz yere güvenle ulaştırırız.
              </p>

              {/* Arama ve WhatsApp Butonları */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a 
                  href="tel:05313930146" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-bold text-base sm:text-lg text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>0531 393 01 46</span>
                </a>

                <a 
                  href="https://wa.me/905313930146?text=Merhaba%2C%20taksiye%20ihtiyac%C4%B1m%20var.%20Konumumu%20payla%C5%9F%C4%B1yorum." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-zinc-100 bg-zinc-900 border border-zinc-750 border-emerald-500/30 hover:border-emerald-400 hover:bg-zinc-850 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>WhatsApp'tan Konum At</span>
                </a>
              </div>

              {/* Gerçekçi Şeffaf Bilgi Notu */}
              <div className="pt-3 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Durağa bağlı değildir; bağımsız şahıs aracıdır. Doğrudan şoförle muhatap olursunuz.</span>
              </div>

            </div>

            {/* Sağ: taksi3.jpeg Fotoğrafı ve Rafine Edilmiş Hover Efekti */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="group relative w-full max-w-md lg:max-w-none">
                
                {/* Dış Glow Efekti */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-orange-500/25 to-amber-600/30 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Ana Fotoğraf Kartı */}
                <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-amber-500/30 group-hover:border-amber-400/80 shadow-2xl transition-all duration-500">
                  
                  {/* taksi3.jpeg Görseli */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                    <Image 
                      src="/görsel/taksi3.jpeg" 
                      alt="Alazı Taksi - Mehmet Sarıkaya Aracı" 
                      fill 
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Üst Gradyan */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-500"></div>

                    {/* Bilgi Kartı */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-amber-500/25">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Hizmet Veren Araç</p>
                          <p className="text-zinc-100 font-bold text-sm sm:text-base">Alazı Taksi • 31 T 0099</p>
                        </div>
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-zinc-950 flex items-center justify-center font-bold">
                          <Car className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GERÇEKÇİ HİZMET BÖLGELERİ & ÇALIŞMA ŞEKLİ (Hayal Yazılar Yerine Doğal Bilgilendirme) */}
      <section className="py-16 bg-[#0c0c10] border-y border-zinc-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">Nasıl Çalışıyoruz?</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold pb-1">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent">
                Hizmet Verdiğimiz Bölgeler ve Güzergâhlar
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Alazı, Serinyol ve Dikmece'de sabit durağa bağlı kalmadan bölgede aktif çalışan özel taksimiz ile nerelere hizmet veriyoruz:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            <div className="p-5 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all">
              <div className="flex items-center gap-3 mb-3 text-amber-400">
                <Compass className="w-5 h-5" />
                <h3 className="font-bold text-base text-zinc-100">Alazı ve Çevre Köyler</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Alazı köyü ve komşu yerleşim yerlerinde doğrudan kapınıza gelir, çarşıya, hastaneye ya da merkeze güvenle ulaştırır.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all">
              <div className="flex items-center gap-3 mb-3 text-amber-400">
                <Compass className="w-5 h-5" />
                <h3 className="font-bold text-base text-zinc-100">Serinyol Çarşı & Mahalleler</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Serinyol merkez, anayol üzeri, üniversite kavşağı ve mahalle içi ulaşım taleplerinize en kısa sürede yanıt verilir.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all">
              <div className="flex items-center gap-3 mb-3 text-amber-400">
                <Compass className="w-5 h-5" />
                <h3 className="font-bold text-base text-zinc-100">Dikmece Bölgesi</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Dikmece mahallesi içi ve bağlantı güzergâhlarında sakin, kurallara uyan güvenli yolculuk sağlanır.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all">
              <div className="flex items-center gap-3 mb-3 text-amber-400">
                <Navigation className="w-5 h-5" />
                <h3 className="font-bold text-base text-zinc-100">Antakya / Hatay Merkez</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Şehir merkezindeki resmi kurumlar, bankalar, iş yerleri ve çarşı ziyaretleri için gidiş-dönüş ulaşım imkânı.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all">
              <div className="flex items-center gap-3 mb-3 text-amber-400">
                <Clock className="w-5 h-5" />
                <h3 className="font-bold text-base text-zinc-100">Havalimanı & Otogar Randevusu</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Uçak veya otobüs saatinize göre önceden saat belirleyebilir, gecikme yaşamadan vaktinde kapınızdan alınabilirsiniz.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all">
              <div className="flex items-center gap-3 mb-3 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-bold text-base text-zinc-100">Doğrudan Şoför İletişimi</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Aracı bizzat Mehmet Sarıkaya kullandığı için telefonu doğrudan şoför açar, kaç dakikada geleceğini net olarak söyler.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HAKKIMIZDA & BİLGİLENDİRME */}
      <section className="py-20 bg-[#09090b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Sol Görsel */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
                <div className="relative aspect-[4/3] w-full">
                  <Image 
                    src="/görsel/taksi2.jpeg" 
                    alt="Alazı Taksi - Mehmet Sarıkaya" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-zinc-950/80 backdrop-blur-sm border border-amber-500/30">
                    <p className="text-amber-400 font-semibold text-sm">Mehmet Sarıkaya</p>
                    <p className="text-zinc-300 text-xs">Alazı, Serinyol ve Dikmece sakinlerine doğrudan özel taksi hizmeti.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Metin */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <span>Hakkımızda</span>
              </div>

              {/* Kesilmeyen Başlık */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight pb-1">
                <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent">
                  Alazı Taksi Hakkında
                </span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                Hatay'ın Alazı, Serinyol ve Dikmece bölgelerinde uzun yıllardır yaşayan ve yolları çok iyi bilen biri olarak, herhangi bir durağa bağlı olmaksızın kendi aracımla bağımsız taksi hizmeti vermekteyim.
              </p>

              <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                Büyük duraklardaki sıra bekleme, aracın kimin geleceğinin bilinmemesi gibi durumlar yerine; doğrudan aradığınızda aracı kullanan şoförle konuşur, net bir varış saati alır ve temiz aracımızla güvenle yolculuk yaparsınız. Ailenizle, misafirlerinizle veya tek başınıza gönül rahatlığıyla tercih edebilirsiniz.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#121217] border border-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-zinc-200 text-xs sm:text-sm font-medium">Yerel Güzergâh Hâkimiyeti</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#121217] border border-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-zinc-200 text-xs sm:text-sm font-medium">Temiz ve Sigara Kokusuz Araç</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. TÜM ARAÇ GÖRSELLERİ (GALERİ - 5 FOTOĞRAF) */}
      <section className="py-20 bg-[#0c0c10] border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <span>Araç Fotoğrafları</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight pb-1">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent">
                Hizmet Verdiğimiz Taksimiz
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300">
              Yolculuk yapacağınız aracın güncel fotoğraflarını aşağıdan inceleyebilirsiniz.
            </p>
          </div>

          {/* 5 Fotoğraf Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {taxiImages.map((item, index) => (
              <div 
                key={index} 
                className={`group relative rounded-2xl overflow-hidden bg-[#121217] border border-zinc-800 hover:border-amber-500/50 shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-500 ${index === 0 ? "lg:col-span-2 sm:row-span-1" : ""}`}
              >
                <div className={`relative w-full ${index === 0 ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[4/3]"} overflow-hidden bg-zinc-950`}>
                  <Image 
                    src={item.src} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-85 group-hover:opacity-60 transition-opacity"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="inline-block px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[11px] font-bold mb-1">
                      Fotoğraf {index + 1}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs mt-0.5 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. İLETİŞİM & HARİTA (CUMHURİYET CD. HATAY MERKEZ) */}
      <section className="py-20 bg-[#09090b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <span>İletişim & Konum</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight pb-1">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent">
                Taksi Çağırmak İçin Ulaşın
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300">
              Alazı, Serinyol, Dikmece ve Hatay genelinde taksi ihtiyacınız olduğunda 7/24 doğrudan arayabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Sol: İletişim Bilgileri */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              
              {/* Telefon Kartı */}
              <div className="p-5 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-zinc-950 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-6 h-6 fill-current" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-bold">Doğrudan Şoför Telefonu</p>
                    <a 
                      href="tel:05313930146" 
                      className="text-2xl sm:text-3xl font-black text-zinc-100 hover:text-amber-400 transition-colors block"
                    >
                      0531 393 01 46
                    </a>
                    <p className="text-zinc-400 text-xs sm:text-sm pt-1">
                      Şoför: Mehmet Sarıkaya. Aradığınızda doğrudan telefona bakılır ve tahmini varış süresi bildirilir.
                    </p>
                  </div>
                </div>
              </div>

              {/* Konum / Adres Kartı */}
              <div className="p-5 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-bold">Faaliyet & Hizmet Alanı</p>
                    <p className="text-lg font-bold text-zinc-100">
                      Alazı • Serinyol • Dikmece
                    </p>
                    <p className="text-zinc-300 font-medium text-sm">
                      Cumhuriyet Cd. 31060 Hatay Merkez / Türkiye
                    </p>
                    <p className="text-zinc-400 text-xs pt-1">
                      Sabit durağa bağlı olmayıp, belirtilen hatlar ve çevre mahallelerde mobil olarak hizmet vermektedir.
                    </p>
                  </div>
                </div>
              </div>

              {/* Butonlar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a 
                  href="tel:05313930146" 
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-sm text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Hemen Ara</span>
                </a>

                <a 
                  href="https://wa.me/905313930146?text=Merhaba%2C%20taksiye%20ihtiyac%C4%B1m%20var.%20Konumumu%20payla%C5%9F%C4%B1yorum." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-semibold text-sm text-zinc-100 bg-zinc-900 border border-emerald-500/40 hover:bg-zinc-850 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Konum</span>
                </a>
              </div>

            </div>

            {/* Sağ: Cumhuriyet Cd. Hatay Merkez Haritası */}
            <div className="lg:col-span-7 min-h-[380px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative bg-zinc-950">
              <iframe 
                src="https://maps.google.com/maps?q=Cumhuriyet%20Cd.%2031060%20Hatay%20Merkez%20T%C3%BCrkiye&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                className="w-full h-full min-h-[380px] border-0 filter grayscale contrast-125 opacity-90 hover:opacity-100 hover:filter-none transition-all duration-500"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Cumhuriyet Cd. Hatay Merkez Konumu"
              ></iframe>
              <div className="absolute top-4 left-4 pointer-events-none bg-zinc-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/30 text-xs font-semibold text-amber-400">
                Cumhuriyet Cd. 31060 Hatay Merkez
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FOOTER & TIKLANDIĞINDA AÇILAN KVKK METNİ */}
      <footer className="bg-[#050507] border-t border-zinc-850 border-zinc-800/80 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Logo & Kısa Açıklama */}
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent">
              ALAZI TAKSİ
            </span>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Alazı, Serinyol ve Dikmece'de durağa bağlı olmayan 7/24 bağımsız özel taksi hizmeti. Şoför: Mehmet Sarıkaya.
            </p>
          </div>

          {/* TIKLANDIĞINDA AÇILAN (COLLAPSIBLE) KVKK METNİ */}
          <div className="max-w-3xl mx-auto my-6">
            <details className="group rounded-xl bg-zinc-900/60 border border-zinc-800/90 p-4 transition-all">
              <summary className="flex items-center justify-between cursor-pointer list-none text-zinc-400 hover:text-amber-400 text-xs sm:text-sm font-medium transition-colors select-none">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>KVKK ve Gizlilik Aydınlatma Metni (Görüntülemek için tıklayın)</span>
                </span>
                <span className="text-xs text-amber-500 group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              
              <div className="pt-4 mt-3 border-t border-zinc-800/80 text-xs text-zinc-400 space-y-2.5 leading-relaxed">
                <p>
                  <strong>6698 Sayılı KVKK Uyarınca Bilgilendirme:</strong> Alazı Taksi (Mehmet Sarıkaya) olarak, yolcularımızın telefon görüşmeleri veya WhatsApp üzerinden paylaştığı ad-soyad, telefon numarası ve konum bilgileri yalnızca taksi yönlendirme ve yolcu güvenliği amacıyla sınırlı olarak işlenmektedir.
                </p>
                <p>
                  Paylaşılan bu veriler kesinlikle ticari amaçlarla üçüncü kişilere devredilmez, satılmaz veya reklam amaçlı kullanılmaz. Yolculuk tamamlandıktan sonra verileriniz saklanmaz. Bilgi talepleriniz için şoförle doğrudan iletişime geçebilirsiniz.
                </p>
                <div className="pt-1 text-[11px] text-zinc-400 flex justify-between">
                  <span>Veri Sorumlusu: Mehmet Sarıkaya</span>
                  <span>Hatay / Türkiye</span>
                </div>
              </div>
            </details>
          </div>

          {/* En Alt Telif & Bilgi */}
          <div className="pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2">
            <p>&copy; {new Date().getFullYear()} Alazı Taksi (Mehmet Sarıkaya). Tüm hakları saklıdır.</p>
            <p>Alazı • Serinyol • Dikmece • Hatay</p>
          </div>

        </div>
      </footer>

      {/* 8. MOBİL İÇİN SABİT HIZLI ARAMA ÇUBUĞU */}
      <div className="fixed bottom-4 right-4 sm:hidden z-50 flex flex-col gap-2">
        <a 
          href="https://wa.me/905313930146?text=Merhaba%2C%20taksiye%20ihtiyac%C4%B1m%20var.%20Konumumu%20payla%C5%9F%C4%B1yorum." 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp'tan Konum At"
          className="w-13 h-13 p-3.5 rounded-full bg-emerald-500 text-zinc-950 flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        >
          <MessageCircle className="w-6 h-6 fill-current text-white" />
        </a>
        <a 
          href="tel:05313930146" 
          aria-label="Taksiyi Ara"
          className="w-13 h-13 p-3.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.5)] active:scale-95 transition-transform"
        >
          <Phone className="w-6 h-6 fill-current" />
        </a>
      </div>

    </main>
  );
}
