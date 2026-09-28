import Image from "next/image";
import { Phone, MapPin, ShieldCheck, Clock, ThumbsUp } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-taxi-gray font-sans text-taxi-black scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-taxi-black text-taxi-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-taxi-yellow tracking-wider">SARIKAYA</span>
              <span className="text-2xl font-light ml-2">TAKSİ</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#anasayfa" className="hover:text-taxi-yellow transition-colors duration-300">Ana Sayfa</a>
              <a href="#hakkimizda" className="hover:text-taxi-yellow transition-colors duration-300">Hakkımızda</a>
              <a href="#araclarimiz" className="hover:text-taxi-yellow transition-colors duration-300">Araçlarımız</a>
              <a href="#iletisim" className="hover:text-taxi-yellow transition-colors duration-300">İletişim</a>
            </div>
            <div className="hidden md:flex items-center">
              <a href="tel:05313930146" className="bg-taxi-yellow text-taxi-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                0531 393 01 46
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="anasayfa" className="pt-20 min-h-[90vh] flex items-center bg-taxi-black relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 bg-[url('/görsel/taksi1.jpeg')] bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pt-16 pb-12 md:py-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight group-hover:text-taxi-yellow transition-colors duration-500">
              Hatay'da Güvenilir <br/> ve Hızlı Ulaşım
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Şehir içi ve şehirler arası yolculuklarınızda temiz, konforlu araçlarımız ve deneyimli şoför kadromuzla 7/24 hizmetinizdeyiz. Vaktiniz ve güvenliğiniz bizim için değerli.
            </p>
            <a href="tel:05313930146" className="inline-flex items-center bg-taxi-yellow text-taxi-black text-lg px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              <Phone className="mr-2" /> Taksiyi Ara
            </a>
          </div>
          
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
             <div className="absolute inset-0 flex items-center justify-center transform transition-all duration-500 hover:scale-105 hover:rotate-1 mt-8 md:mt-0">
                <div className="relative w-[90%] h-[90%] rounded-2xl overflow-hidden shadow-2xl border-4 border-taxi-yellow/20 hover:border-taxi-yellow">
                  <Image 
                    src="/görsel/taksi2.jpeg" 
                    alt="Taksi Hizmeti" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-taxi-black to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-taxi-yellow font-bold text-xl">Konforlu ve Temiz Araçlar</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Hakkımızda Section */}
      <section id="hakkimizda" className="py-24 bg-taxi-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-taxi-black mb-4">Hakkımızda</h2>
            <div className="w-24 h-1 bg-taxi-yellow mx-auto"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/görsel/taksi3.jpeg" alt="Hakkımızda" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl font-semibold text-taxi-black">Müşteri Memnuniyeti Odaklı Hizmet</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Yılların verdiği tecrübe ile Hatay Merkez'de ulaşım ihtiyaçlarınızı en profesyonel şekilde karşılıyoruz. Amacımız sadece sizi bir yerden diğerine götürmek değil; yolculuğunuzun güvenli, huzurlu ve konforlu geçmesini sağlamaktır.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Araçlarımızın bakımları düzenli olarak yapılmakta ve hijyen standartlarına üst düzeyde özen gösterilmektedir. Ailenizle veya yalnız seyahat ederken içiniz rahat olsun; sizi ve sevdiklerinizi gitmek istediğiniz yere güvenle ulaştırmak en büyük önceliğimizdir.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                 <div className="flex items-center space-x-3">
                   <ShieldCheck className="text-taxi-yellow w-8 h-8" />
                   <span className="font-medium text-taxi-black">Güvenli Seyahat</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <Clock className="text-taxi-yellow w-8 h-8" />
                   <span className="font-medium text-taxi-black">7/24 Kesintisiz Hizmet</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <ThumbsUp className="text-taxi-yellow w-8 h-8" />
                   <span className="font-medium text-taxi-black">%100 Müşteri Memnuniyeti</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Araçlarımız Section */}
      <section id="araclarimiz" className="py-24 bg-taxi-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-taxi-black mb-4">Araçlarımız</h2>
            <div className="w-24 h-1 bg-taxi-yellow mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sizlere daha iyi hizmet verebilmek için araçlarımızı her zaman bakımlı ve temiz tutuyoruz. Yolculuğunuz boyunca rahat etmeniz için gerekli tüm donanımlara sahibiz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
              <Image src="/görsel/taksi1.jpeg" alt="Taksi Görsel 1" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
              <Image src="/görsel/taksi4.jpeg" alt="Taksi Görsel 2" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md group md:col-span-2 lg:col-span-1">
              <Image src="/görsel/taksi5.jpeg" alt="Taksi Görsel 3" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* İletişim ve Footer Section */}
      <footer id="iletisim" className="bg-taxi-black text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* İletişim Bilgileri */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-taxi-yellow">Bize Ulaşın</h2>
              <p className="text-gray-400 mb-10 text-lg">
                Hemen taksi çağırmak, fiyat bilgisi almak veya ileri tarihli rezervasyon yaptırmak için bizimle iletişime geçebilirsiniz. Size bir telefon kadar yakınız.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="bg-taxi-yellow/20 p-4 rounded-full text-taxi-yellow">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1">Telefon</h4>
                    <a href="tel:05313930146" className="text-gray-300 hover:text-taxi-yellow transition-colors text-xl block">
                      0531 393 01 46
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5">
                  <div className="bg-taxi-yellow/20 p-4 rounded-full text-taxi-yellow">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1">Adres</h4>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Cumhuriyet Cd. 31060<br/>
                      Hatay Merkez / Türkiye
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Harita */}
            <div className="h-[400px] w-full rounded-2xl overflow-hidden border-2 border-gray-800 shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102127.13524967385!2d36.082701103986874!3d36.21639014169727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1525e9d9e4a8dc73%3A0xa6450f3b069695d7!2sHatay%20Merkez%2C%20Hatay!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
          </div>
        </div>
        
        {/* Alt Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Mehmet Sarıkaya Taksi. Tüm hakları saklıdır.</p>
            <p className="mt-2 md:mt-0">Tasarım ve Geliştirme</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
