import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-cream/50 px-6 py-4 flex justify-between items-center transition-all">
        <div className="flex items-center gap-2 text-mustard font-heading font-bold text-2xl tracking-tighter">
          IKAY <span className="text-brown">RESIDENCE</span>
        </div>
        <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-brown/70">
          <a href="#hero" className="hover:text-mustard transition-colors">Beranda</a>
          <a href="#keunggulan" className="hover:text-mustard transition-colors">Keunggulan</a>
          <a href="#unit" className="hover:text-mustard transition-colors">Tipe Unit</a>
          <a href="#lokasi" className="hover:text-mustard transition-colors">Lokasi</a>
          <a href="#testimoni" className="hover:text-mustard transition-colors">Testimoni</a>
        </div>
        <a href="https://wa.me/6281222206992" className="bg-mustard text-white px-5 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-brown transition-all shadow-soft active:scale-95 whitespace-nowrap">
          Hubungi Kami
        </a>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-28 pb-16 bg-gradient-to-br from-mustard via-cream to-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-mustard/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brown/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <div className="relative inline-block mb-8">
              <span className="inline-block px-6 py-2 text-[10px] font-black tracking-[0.4em] uppercase bg-white text-mustard rounded-lg shadow-sm border border-mustard/10">
                IKAY RESIDENCE KENDARI
              </span>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-mustard rounded-full flex items-center justify-center text-white text-xl animate-bounce shadow-xl border-4 border-white">
                ✨
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-heading font-black mb-6 text-brown uppercase tracking-tighter leading-[0.85] drop-shadow-sm">
              WAKTUNYA PUNYA <br />
              <span className="text-white drop-shadow-[0_4px_4px_rgba(226,165,59,0.3)]">RUMAH SENDIRI</span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-xl md:text-2xl text-brown/70 mb-12 leading-relaxed font-light">
              Hunian Modern, Nyaman & Strategis di Kendari.
              <span className="block mt-4 font-bold text-mustard uppercase tracking-widest text-sm">Mewujudkan mimpi keluarga muda.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-14">
              <a href="#unit" className="bg-brown text-white px-12 py-6 rounded-2xl font-bold uppercase tracking-widest hover:bg-mustard hover:shadow-2xl hover:shadow-mustard/40 transition-all transform hover:-translate-y-2 text-sm text-center active:scale-95 text-center">
                Cek Unit Sekarang
              </a>
              <a href="https://wa.me/6281222206992" className="bg-white border-2 border-brown/10 text-brown px-12 py-6 rounded-2xl font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all text-sm text-center active:scale-95 text-center">
                Simulasi KPR
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-6 bg-white/40 backdrop-blur-md p-5 rounded-3xl border border-white/60 inline-flex shadow-premium transform hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-mustard rounded-2xl flex items-center justify-center text-3xl shadow-glow">🏷️</div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-mustard mb-1">Promo Terbatas</p>
                <p className="text-brown font-black text-xl leading-tight tracking-tight">DP + AKAD MULAI 500 RIBUAN</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative w-full animate-fade-up delay-200">
            <div className="lg:hidden absolute -top-10 left-1/2 -translate-x-1/2 z-20 bg-mustard text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl glow-subtle whitespace-nowrap border-2 border-white">
              DP + AKAD MULAI 500 RIBUAN
            </div>

            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-premium border-[12px] border-white group perspective-image">
              <Image
                src="https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=1170&auto=format&fit=crop"
                alt="Modern Residence Ikay"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent opacity-60"></div>

              <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-mustard font-black text-[10px] uppercase tracking-[0.3em] mb-2">Lokasi Strategis</p>
                    <p className="text-brown font-black text-2xl tracking-tight leading-none italic">Kota Kendari, Sultra</p>
                  </div>
                  <div className="w-16 h-16 bg-cream rounded-3xl flex items-center justify-center text-3xl shadow-inner">🏛️</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-14 -right-10 text-[10rem] animate-pulse opacity-10 select-none rotate-12">🌿</div>
            <div className="absolute -bottom-14 -left-10 text-[8rem] animate-bounce delay-1000 opacity-10 select-none -rotate-12">🍃</div>
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section id="keunggulan" className="py-32 bg-zinc-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 animate-fade-up">
            <span className="text-mustard font-black tracking-[0.5em] uppercase text-xs mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-brown uppercase tracking-tighter">Kenapa Harus <span className="text-mustard">IKAY Residence?</span></h2>
            <div className="w-24 h-1.5 bg-mustard mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: "📍", title: "Lokasi Strategis", desc: "Akses mudah ke pusat kota, sekolah, dan pusat perbelanjaan di Kendari." },
              { icon: "🛡️", title: "Legalitas Aman", desc: "Sertifikat dan perizinan lengkap. Investasi properti tanpa rasa cemas." },
              { icon: "💎", title: "Cicilan Ringan", desc: "Skema pembayaran fleksibel yang ramah untuk kantong keluarga muda." },
              { icon: "🌿", title: "Lingkungan Nyaman", desc: "Suasana asri dan tenang, ideal untuk tumbuh kembang buah hati Anda." },
              { icon: "🌊", title: "Bebas Banjir", desc: "Sistem drainase modern dan elevasi tanah yang optimal menjamin keamanan." },
              { icon: "🛣️", title: "Akses Mudah", desc: "Dekat dengan jalan utama, mempermudah mobilitas harian Anda." },
            ].map((item, i) => (
              <div key={i} className={`bg-white p-12 rounded-[2.5rem] shadow-soft border border-cream/30 hover:-translate-y-3 transition-all duration-500 group hover:shadow-premium animate-fade-up delay-${(i + 1) * 100}`}>
                <div className="w-20 h-20 bg-cream/30 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:bg-mustard group-hover:text-white transition-all shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-heading font-black text-brown mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipe Rumah Section */}
      <section id="unit" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10 animate-fade-up">
            <div className="max-w-2xl">
              <span className="text-mustard font-black tracking-[0.5em] uppercase text-xs mb-4 block">Unit Plans</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-brown uppercase tracking-tighter leading-none">Tipe Rumah <br /><span className="text-mustard">Modern Minimalis</span></h2>
            </div>
            <div className="bg-mustard text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-glow italic transform hover:scale-105 transition-transform">
              Limited Edition Units
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative animate-fade-up">
              <div className="relative aspect-[16/10] rounded-[3.5rem] overflow-hidden shadow-premium border-[10px] border-zinc-50 group">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                  alt="Tipe 36 Residence"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
                />
                <div className="absolute top-10 right-10 flex flex-col gap-3">
                  <div className="bg-white/95 backdrop-blur px-6 py-2 rounded-xl text-brown font-black text-xs uppercase shadow-xl tracking-widest text-center">Tipe 36</div>
                  <div className="bg-mustard/95 backdrop-blur px-6 py-2 rounded-xl text-white font-black text-xs uppercase shadow-xl tracking-widest text-center">Luas 72m²</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10 animate-fade-up delay-200">
              <div className="space-y-4">
                <span className="text-mustard font-bold uppercase tracking-[0.3em] text-[10px] flex items-center gap-2">
                  <span className="w-10 h-0.5 bg-mustard"></span> Spesifikasi Premium
                </span>
                <h3 className="text-5xl font-heading font-black text-brown uppercase tracking-tighter italic">Signature 36</h3>
                <p className="text-zinc-500 font-light text-lg">Rumah subsidi berkualitas real estate. Tata ruang efisien untuk kenyamanan maksimal.</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🛌", label: "2 Kamar Tidur" },
                  { icon: "🚿", label: "1 Kamar Mandi" },
                  { icon: "🛋️", label: "Ruang Tamu" },
                  { icon: "🚗", label: "Carport" },
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-zinc-50 rounded-2xl hover:bg-cream/20 transition-colors border border-transparent hover:border-cream font-bold text-brown text-sm uppercase tracking-wider">
                    <span className="text-2xl">{spec.icon}</span>
                    <span>{spec.label}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-brown text-white py-7 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-mustard hover:shadow-glow transition-all active:scale-95 shadow-lg group">
                Lihat Detail Unit <span className="inline-block transition-transform group-hover:translate-x-2 ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-mustard rounded-[4rem] p-16 md:p-24 relative overflow-hidden shadow-glow group">
            <div className="absolute top-[-50%] left-[-10%] w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-[3000ms]"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left">
              <div className="max-w-2xl space-y-8 animate-fade-up">
                <div className="inline-block px-8 py-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white font-black text-xs uppercase tracking-[0.4em]">
                  Limited Time Offer
                </div>
                <h2 className="text-5xl md:text-8xl font-heading font-black text-white uppercase tracking-tighter leading-none italic">
                  PROMO SPESIAL <br /><span className="text-brown">TERBATAS</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "DP Ringan", sub: "Hanya 500 Ribu" },
                    { title: "KPR Subsidi", sub: "Flat Sampai Lunas" },
                    { title: "Proses Cepat", sub: "Akad dalam 14 Hari" },
                  ].map((p, i) => (
                    <div key={i} className="text-white border-l-2 border-white/30 pl-6 text-left">
                      <p className="font-black text-2xl mb-1 tracking-tight">{p.title}</p>
                      <p className="text-white/70 text-sm font-light uppercase tracking-widest">{p.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-fade-up delay-300">
                <a href="https://wa.me/6281222206992" className="bg-white text-brown px-16 py-8 rounded-[2.5rem] font-black uppercase tracking-[0.4em] text-sm hover:shadow-2xl hover:scale-110 transition-all block active:scale-95 border-b-8 border-zinc-200 text-center">
                  Ajukan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lokasi Section */}
      <section id="lokasi" className="py-32 bg-zinc-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12 animate-fade-up">
              <div>
                <span className="text-mustard font-black tracking-[0.5em] uppercase text-xs mb-4 block">Our Address</span>
                <h2 className="text-4xl md:text-6xl font-heading font-black text-brown uppercase tracking-tighter">Lokasi <span className="text-mustard">Strategis</span></h2>
                <div className="w-20 h-1.5 bg-mustard mt-6 rounded-full"></div>
              </div>

              <div className="space-y-10">
                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-3xl shadow-soft shrink-0">📍</div>
                  <div>
                    <h4 className="text-xl font-black text-brown uppercase tracking-tight mb-2">Alamat Utama</h4>
                    <p className="text-zinc-500 font-light text-lg leading-relaxed">Jl. Konggoasa, Puuwatu – Kendari, <br />Sulawesi Tenggara</p>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-3xl shadow-soft shrink-0">🏙️</div>
                  <div>
                    <h4 className="text-xl font-black text-brown uppercase tracking-tight mb-2">Akses Terdekat</h4>
                    <p className="text-zinc-500 font-light text-lg leading-relaxed">Hanya 10 menit ke pusat bisnis dan perkantoran <br />utama Kota Kendari.</p>
                  </div>
                </div>
              </div>

              <a href="https://maps.app.goo.gl/..." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-mustard font-black uppercase tracking-[0.3em] text-xs hover:gap-6 transition-all group">
                Buka Di Google Maps <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>

            <div className="relative animate-fade-up delay-300">
              <div className="relative aspect-square md:aspect-video rounded-[4rem] overflow-hidden shadow-premium border-[12px] border-white grayscale hover:grayscale-0 transition-all duration-1000 group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127253.21045239967!2d122.45561085!3d-3.97824125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d98f2b3eedb93ad%3A0x6e26875508a65873!2sKendari%2C%20Kendari%20City%2C%20South%20East%20Sulawesi!5e0!3m2!1sen!2sid!4v1740240361234!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                ></iframe>
              </div>
              <div className="absolute -bottom-10 -right-10 text-8xl opacity-30 animate-pulse">🌿</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section id="testimoni" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 animate-fade-up">
            <span className="text-mustard font-black tracking-[0.5em] uppercase text-xs mb-4 block">Client Stories</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-brown uppercase tracking-tighter">Apa Kata <span className="text-mustard">Mereka?</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Andi Wijaya", role: "Wirausaha", text: "Prosesnya sangat cepat dan transparan. Akhirnya saya bisa punya rumah sendiri dengan cicilan yang sangat terjangkau.", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" },
              { name: "Siti Rahma", role: "ASN", text: "Lokasinya asri dan udaranya masih segar. Sangat cocok untuk saya yang ingin ketenangan setelah pulang kerja.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" },
              { name: "Eko Pratama", role: "Karyawan Swasta", text: "Bangunannya rapi dan desainnya modern banget, nggak kelihatan kayak rumah subsidi biasa. Mantap IKAY!", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" },
            ].map((testi, i) => (
              <div key={i} className="bg-zinc-50 p-12 rounded-[3.5rem] border border-zinc-100 hover:bg-cream/10 transition-all duration-500 animate-fade-up group relative">
                <div className="absolute top-10 right-10 text-mustard/20 text-6xl font-serif italic text-right">"</div>
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img src={testi.img} alt={testi.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-black text-brown uppercase tracking-tight">{testi.name}</h4>
                    <p className="text-mustard font-black text-[9px] uppercase tracking-[0.2em]">{testi.role}</p>
                  </div>
                </div>
                <p className="text-zinc-600 font-light italic leading-relaxed text-lg text-left">"{testi.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Akhir Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 text-center animate-fade-up">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-[8rem] font-heading font-black text-brown uppercase tracking-tighter leading-[0.85] italic">
              JANGAN <br /><span className="text-mustard">TUNDA LAGI</span>
            </h2>
            <p className="text-2xl md:text-3xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
              Miliki rumah impian Anda sekarang juga. <br />Persediaan unit semakin menipis setiap harinya.
            </p>

            <div className="pt-10 flex flex-col items-center gap-8 text-center">
              <a href="https://wa.me/6281222206992" className="bg-mustard text-white px-20 py-8 rounded-[3rem] font-black uppercase tracking-[0.5em] text-sm hover:bg-brown hover:shadow-glow transition-all active:scale-95 shadow-2xl hover:scale-105 group relative overflow-hidden text-center">
                <span className="relative z-10 italic">Hubungi Marketing</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </a>
              <div className="flex items-center gap-4 text-brown/50 font-black uppercase tracking-[0.3em] text-sm">
                <span>WhatsApp:</span>
                <span className="text-brown">0812-2220-6992</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-24 text-white border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-20 mb-20 text-left">
            <div className="col-span-1 md:col-span-2">
              <div className="text-mustard font-heading font-black text-4xl tracking-tighter mb-10">
                IKAY <span className="text-white">RESIDENCE</span>
              </div>
              <p className="text-zinc-500 max-w-sm mb-10 leading-relaxed font-light text-lg">
                Membangun masa depan keluarga Indonesia melalui hunian berkualitas, modern, dan strategis di Kota Kendari.
              </p>
              <div className="flex gap-6">
                {['Fb', 'Ig', 'Yt'].map(social => (
                  <div key={social} className="w-12 h-12 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-mustard hover:border-mustard transition-all cursor-pointer text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white">
                    {social}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="text-mustard font-black italic uppercase tracking-[0.3em] text-xs">Navigation</h4>
              <ul className="space-y-6 text-zinc-500 text-sm font-black uppercase tracking-[0.2em]">
                <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#keunggulan" className="hover:text-white transition-colors">Advantages</a></li>
                <li><a href="#unit" className="hover:text-white transition-colors">Unit Types</a></li>
                <li><a href="#lokasi" className="hover:text-white transition-colors">Location</a></li>
              </ul>
            </div>

            <div className="space-y-10 text-left">
              <h4 className="text-mustard font-black italic uppercase tracking-[0.3em] text-xs">Contact Us</h4>
              <ul className="space-y-6 text-zinc-500 text-xs font-light tracking-widest">
                <li className="flex gap-4">📍 <span>Kendari, Sulawesi Tenggara</span></li>
                <li className="flex gap-4">📞 <span>0812-2220-6992</span></li>
                <li className="flex gap-4">✉️ <span>hello@ikayresidence.com</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} IKAY RESIDENCE. Crafted with Excellence.
            </p>
            <div className="flex gap-8 text-zinc-700 text-[9px] font-black uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Mobile */}
      <div className="fixed bottom-6 right-6 z-[100] lg:hidden animate-fade-up">
        <a
          href="https://wa.me/6281222206992"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group relative border-4 border-white"
        >
          <div className="absolute -top-12 right-0 bg-white text-brown text-[10px] font-black px-4 py-2 rounded-xl shadow-xl whitespace-nowrap border border-cream/50 pointer-events-none group-hover:opacity-100 transition-opacity">
            Konsultasi Gratis
            <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white rotate-45 border-r border-b border-cream/50"></div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
