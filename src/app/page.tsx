import Image from "next/image";
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Award, 
  Car, 
  Navigation, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  FileText
} from "lucide-react";

export default function Home() {
  const taxiImages = [
    {
      src: "/görsel/taksi1.jpeg",
      title: "Konforlu & Klimalı İç Hacim",
      desc: "Her mevsim ideal ısıda, ferah ve tertemiz yolculuk deneyimi."
    },
    {
      src: "/görsel/taksi2.jpeg",
      title: "Geniş Bagaj Kapasitesi",
      desc: "Havalimanı, otogar ve alışveriş seyahatleriniz için geniş bagaj alanı."
    },
    {
      src: "/görsel/taksi3.jpeg",
      title: "Düzenli Bakımlı Araç",
      desc: "Periyodik teknik ve mekanik bakımları eksiksiz yapılan güvenli araç."
    },
    {
      src: "/görsel/taksi4.jpeg",
      title: "Şehir İçi & Şehirlerarası",
      desc: "Hatay merkez başta olmak üzere tüm çevre ilçelere konforlu transfer."
    },
    {
      src: "/görsel/taksi5.jpeg",
      title: "Prestijli & Güvenli Seyahat",
      desc: "Yolculuk boyunca sakin, güvenli ve kurallara tam riayet eden sürüş."
    }
  ];

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* 1. NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Sol: Hemen Ara Butonu */}
            <div className="flex-1 flex justify-start">
              <a 
                href="tel:05313930146" 
                className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm sm:text-base text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.45)] transition-all duration-300 transform active:scale-95"
              >
                <div className="w-7 h-7 rounded-lg bg-black/15 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Phone className="w-4 h-4 text-zinc-950 fill-current" />
                </div>
                <span className="tracking-wide">Hemen Ara</span>
              </a>
            </div>

            {/* Orta: Ortalanmış Başlık / Logo */}
            <div className="flex-shrink-0 text-center px-2">
              <a href="#" className="inline-block group">
                <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-orange-300 transition-all duration-300">
                  MEHMET SARIKAYA
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-amber-500/90 uppercase -mt-0.5">
                  Taksi Hizmeti
                </span>
              </a>
            </div>

            {/* Sağ: 7/24 Kesintisiz Hizmet Butonu */}
            <div className="flex-1 flex justify-end">
              <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-xl bg-zinc-900/90 border border-amber-500/30 text-zinc-200 text-xs sm:text-sm font-medium shadow-inner">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-zinc-300 hidden sm:inline">7/24</span>
                <span className="text-amber-400 font-semibold">Aktif Hizmet</span>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 2. HERO & HOVER BÖLÜMÜ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#09090b] via-[#0e0e12] to-[#09090b]">
        {/* Arka plan ışık efektleri */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-orange-500/10 blur-[110px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Sol Yazı Alanı */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Hatay Merkez & İlçeler Güvenli Taksi</span>
              </div>

              {/* Sarıdan Beyaza Geçişli Büyük Başlık */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12]">
                <span className="block bg-gradient-to-r from-amber-400 via-amber-200 to-white bg-clip-text text-transparent">
                  Hatay'da Güvenli,
                </span>
                <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-white bg-clip-text text-transparent mt-1">
                  Hızlı & Konforlu Ulaşım
                </span>
              </h1>

              {/* Büyütülmüş Açıklama Paragrafı */}
              <p className="text-lg sm:text-xl lg:text-2xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Günün her saatinde temiz, ferah ve bakımlı aracımızla kapınızdayız. Mehmet Sarıkaya güvencesiyle Hatay merkez ve çevre güzergâhlarda vaktinde, huzurlu bir seyahat sunuyoruz.
              </p>

              {/* Buton ve Telefon Bilgisi */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href="tel:05313930146" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>0531 393 01 46</span>
                </a>

                <div className="px-5 py-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Sıra beklemeden doğrudan şoföre ulaşın</span>
                </div>
              </div>

              {/* Hızlı Güven Rozetleri */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-zinc-800/80 max-w-xl mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">7/24</div>
                  <div className="text-xs sm:text-sm text-zinc-400">Kesintisiz Servis</div>
                </div>
                <div className="text-center lg:text-left border-x border-zinc-800 px-2">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">%100</div>
                  <div className="text-xs sm:text-sm text-zinc-400">Müşteri Memnuniyeti</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">Hızlı</div>
                  <div className="text-xs sm:text-sm text-zinc-400">Dakik Ulaşım</div>
                </div>
              </div>

            </div>

            {/* Sağ: taksi3.jpeg Fotoğrafı ve Özel Hover Efekti */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="group relative w-full max-w-md lg:max-w-none">
                
                {/* Dış Glow Efekti (Hover anında sarı/turuncu ışıma artar) */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/40 via-orange-500/30 to-amber-600/40 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Ana Fotoğraf Kartı */}
                <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border-2 border-amber-500/30 group-hover:border-amber-400 shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                  
                  {/* taksi3.jpeg Görseli */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                    <Image 
                      src="/görsel/taksi3.jpeg" 
                      alt="Mehmet Sarıkaya Taksi Aracı" 
                      fill 
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Üstüne Şık Karartma Gradyanı */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                    {/* Fotoğraf Üzerindeki Dinamik Bilgi Kartı */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-amber-500/25 transition-transform duration-500 group-hover:translate-y-[-2px]">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Hizmetinizde Olan Araç</p>
                          <h2 className="text-zinc-100 font-bold text-base sm:text-lg">Klimalı, Temiz ve Geniş</h2>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-zinc-950 flex items-center justify-center font-black">
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

      {/* 3. ÖNE ÇIKAN ÖZELLİKLER (Sade kalmaması için profesyonel kartlar) */}
      <section className="py-16 bg-[#0c0c10] border-y border-zinc-850 border-zinc-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">7/24 Kesintisiz Hizmet</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Günün ve gecenin her saati, acil hastane ya da yolculuk ihtiyaçlarınızda tek telefonla yanınızdayız.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Güvenli ve Huzurlu</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Trafik kurallarına tam riayet, sakin sürüş tarzı ve güler yüzlü yaklaşımla ailenizle huzurla seyahat edin.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Havalimanı & Şehirlerarası</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Hatay içi mahallelerin yanı sıra havalimanı, otogar ve çevre illere planlı transfer desteği.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Temiz & Bakımlı Araç</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Her gün düzenli temizlenen, periyodik bakımları zamanında yapılan hijyenik ve klimalı taksi.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HAKKIMIZDA BÖLÜMÜ */}
      <section className="py-24 bg-[#09090b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Sol: Görsel */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
                <div className="relative aspect-[4/3] w-full">
                  <Image 
                    src="/görsel/taksi2.jpeg" 
                    alt="Mehmet Sarıkaya Taksi Hakkımızda" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-zinc-950/80 backdrop-blur-sm border border-amber-500/30">
                    <p className="text-amber-400 font-semibold text-sm">Mehmet Sarıkaya</p>
                    <p className="text-zinc-300 text-xs">Yılların getirdiği yerel tecrübe ve dürüst esnaflık anlayışı.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ: Metin Alanı */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide">
                <span>Hakkımızda</span>
              </div>

              {/* Sarıdan Beyaza Başlık */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent">
                  Hatay'da Samimi, Saygılı ve
                </span>
                <span className="block bg-gradient-to-r from-amber-300 to-white bg-clip-text text-transparent mt-1">
                  Güvenilir Yol Arkadaşınız
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed">
                Yolculuğun sadece bir adresten diğerine gitmek olmadığının, o esnada duyulan güven ve huzurun ne kadar kıymetli olduğunun bilincindeyiz. Hatay Merkez'de ikamet eden ve bölgeyi sokak sokak çok iyi bilen Mehmet Sarıkaya olarak, yolcularımızın konforunu ilk sıraya koyuyoruz.
              </p>

              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
                Aracımızın periyodik mekanik bakımları ve iç hijyeni aksatılmadan yapılır. İster sabahın ilk ışıklarında bir iş randevusuna yetişin, ister gece geç saatlerde eve dönüş yapın; her zaman aynı saygı, dikkat ve titizlikle hizmet veririz.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#121217] border border-zinc-800">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-zinc-200 text-sm font-medium">Bölgeye Hakim Güzergâh Bilgisi</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#121217] border border-zinc-800">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-zinc-200 text-sm font-medium">Temiz ve Kokusu Rahatsız Etmeyen Araç</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. TÜM ARAÇ GÖRSELLERİ (GALERİ - 5 FOTOĞRAF) */}
      <section className="py-24 bg-[#0c0c10] border-t border-zinc-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide">
              <span>Araç Filomuz</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent">
                Yolculuk Edeceğiniz Aracımız
              </span>
            </h2>

            <p className="text-lg text-zinc-300 leading-relaxed">
              Aracımızın iç ve dış durumunu, temizliğini ve konforunu dilediğiniz gibi inceleyebilirsiniz. Her detay sizin rahatınız için düşünülmüştür.
            </p>
          </div>

          {/* 5 Görsel Grid Düzeni */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxiImages.map((item, index) => (
              <div 
                key={index} 
                className={`group relative rounded-2xl overflow-hidden bg-[#121217] border border-zinc-800 hover:border-amber-500/50 shadow-lg hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-500 ${index === 0 ? "lg:col-span-2 sm:row-span-1" : ""}`}
              >
                <div className={`relative w-full ${index === 0 ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[4/3]"} overflow-hidden bg-zinc-950`}>
                  <Image 
                    src={item.src} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="inline-block px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold mb-1.5">
                      Görsel {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-1 line-clamp-2">
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
      <section className="py-24 bg-[#09090b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide">
              <span>İletişim & Konum</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent">
                Bize Kolayca Ulaşın
              </span>
            </h2>

            <p className="text-lg text-zinc-300 leading-relaxed">
              Taksi çağırmak, fiyat sormak ya da ileri tarihli havalimanı/otogar transferi planlamak için dilediğiniz zaman arayabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Sol: İletişim Kartları */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* Telefon Kartı */}
              <div className="p-6 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-zinc-950 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-6 h-6 fill-current" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-bold">Doğrudan İletişim Hattı</p>
                    <a 
                      href="tel:05313930146" 
                      className="text-2xl sm:text-3xl font-extrabold text-zinc-100 hover:text-amber-400 transition-colors block"
                    >
                      0531 393 01 46
                    </a>
                    <p className="text-zinc-400 text-sm pt-1">
                      Telefonla tek dokunuşla hemen arayabilir, taksinizin bulunduğunuz konuma kaç dakikada geleceğini öğrenebilirsiniz.
                    </p>
                  </div>
                </div>
              </div>

              {/* Adres Kartı */}
              <div className="p-6 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-amber-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-bold">Hizmet Noktası / Konum</p>
                    <p className="text-xl font-bold text-zinc-100">
                      Cumhuriyet Cd. 31060
                    </p>
                    <p className="text-zinc-300 font-medium text-base">
                      Hatay Merkez / Türkiye
                    </p>
                    <p className="text-zinc-400 text-sm pt-1">
                      Hatay Merkez merkezli olarak Antakya, Defne ve tüm çevre ilçelere süratle hareket edilir.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hızlı Arama Butonu */}
              <a 
                href="tel:05313930146" 
                className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-base text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Hemen Taksi İste (0531 393 01 46)</span>
              </a>

            </div>

            {/* Sağ: Cumhuriyet Cd. Hatay Merkez Haritası */}
            <div className="lg:col-span-7 min-h-[380px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative bg-zinc-950">
              <iframe 
                src="https://maps.google.com/maps?q=Cumhuriyet%20Cd.%2031060%20Hatay%20Merkez%20T%C3%BCrkiye&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                className="w-full h-full min-h-[400px] border-0 filter grayscale contrast-125 opacity-90 hover:opacity-100 hover:filter-none transition-all duration-500"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Cumhuriyet Cd. Hatay Merkez Konumu"
              ></iframe>
              <div className="absolute top-4 left-4 pointer-events-none bg-zinc-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-amber-500/30 text-xs font-semibold text-amber-400">
                Cumhuriyet Cd. 31060 Hatay Merkez
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FOOTER & KVKK METNİ */}
      <footer className="bg-[#050507] border-t border-zinc-850 border-zinc-800/80 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Üst Kısım: Başlık & Özet */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent">
              MEHMET SARIKAYA TAKSİ
            </span>
            <p className="text-zinc-400 text-sm">
              Hatay'da 7 gün 24 saat güvenli, hijyenik ve dakik ulaşım anlayışı ile hizmetinizdeyiz.
            </p>
          </div>

          {/* KVKK Metni (Footer Altında Orta Kısımda) */}
          <div className="max-w-4xl mx-auto my-10 p-6 sm:p-8 rounded-2xl bg-[#0c0c10] border border-zinc-800/90 text-left space-y-4 shadow-inner">
            <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-800 text-amber-400 font-bold text-sm sm:text-base">
              <FileText className="w-4 h-4 flex-shrink-0" />
              <span>KVKK ve Gizlilik Aydınlatma Bildirimi</span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca; Mehmet Sarıkaya Taksi Hizmeti tarafından sunulan ulaşım ve rezervasyon faaliyetleri kapsamında, yolcularımızın telefon görüşmeleri ya da doğrudan paylaşılan konum bilgileri yalnızca taksi çağırma, adrese intikal ve yolcu güvenliğinin temini amacıyla sınırlı olarak işlenmektedir.
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Paylaştığınız ad-soyad, telefon numarası ve biniş/varış güzergâh verileriniz hiçbir üçüncü kişi, kurum ya da reklam kuruluşu ile kesinlikle paylaşılmaz ve ticari maksatla satılmaz. Hizmetin tamamlanmasının ardından verileriniz yasal mevzuat sınırları haricinde saklanmaz. Tarafımızla iletişime geçerek kişisel verilerinizin durumuna dair bilgi alma hakkına her zaman sahipsiniz.
            </p>

            <div className="pt-2 text-[11px] sm:text-xs text-zinc-400 flex items-center justify-between border-t border-zinc-800/50">
              <span>Veri Sorumlusu: Mehmet Sarıkaya</span>
              <span>Hatay Merkez / Türkiye</span>
            </div>
          </div>

          {/* En Alt Telif & Bilgi */}
          <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3">
            <p>&copy; {new Date().getFullYear()} Mehmet Sarıkaya Taksi. Tüm hakları saklıdır.</p>
            <p className="text-zinc-400">Cumhuriyet Cd. 31060 Hatay Merkez</p>
          </div>

        </div>
      </footer>

      {/* 8. MOBİL İÇİN SABİT HIZLI ARAMA ÇUBUĞU */}
      <div className="fixed bottom-4 right-4 sm:hidden z-50">
        <a 
          href="tel:05313930146" 
          aria-label="Taksiyi Ara"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.5)] active:scale-95 transition-transform"
        >
          <Phone className="w-6 h-6 fill-current" />
        </a>
      </div>

    </main>
  );
}
