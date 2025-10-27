function Hero() {
  try {
    return (
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
                Produk Olahan Singkong<br />
                <span className="text-[var(--primary-color)]">Sehat & Bergizi</span>
              </h1>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Dukung petani dan UMKM lokal dengan membeli produk olahan singkong berkualitas tinggi. Dari keripik singkong, tepung mocaf, hingga camilan modern berbasis singkong.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="products.html" className="btn-primary">
                  Lihat Produk
                </a>
                <a href="about.html" className="btn-outline">
                  Pelajari Lebih Lanjut
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1585238341710-7b8b4c8b8b08?w=800&q=80" alt="Produk Singkong" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}