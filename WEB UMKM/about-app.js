function AboutApp() {
  try {
    return (
      <div className="min-h-screen bg-white" data-name="about-app" data-file="about-app.js">
        <Header />
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Singkong Nusantara</h1>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Platform yang didedikasikan untuk mengembangkan dan mempromosikan produk olahan singkong berkualitas dari petani dan UMKM lokal
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
                <p className="text-lg text-[var(--text-secondary)] mb-4">
                  Kami berkomitmen untuk memberdayakan petani singkong dan pelaku UMKM dengan menyediakan platform digital untuk memasarkan produk olahan singkong berkualitas ke pasar yang lebih luas.
                </p>
                <p className="text-lg text-[var(--text-secondary)]">
                  Melalui platform ini, kami ingin meningkatkan nilai jual singkong lokal, mendukung ketahanan pangan, dan mengembangkan industri olahan singkong Indonesia.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" alt="Team" className="rounded-2xl shadow-xl" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-green-50 rounded-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <div className="icon-target text-2xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">Visi</h3>
                <p className="text-[var(--text-secondary)]">Menjadi platform terdepan dalam mengembangkan industri olahan singkong Indonesia</p>
              </div>
              <div className="text-center p-8 bg-green-50 rounded-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <div className="icon-users text-2xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">Komunitas</h3>
                <p className="text-[var(--text-secondary)]">Membangun ekosistem yang mendukung petani singkong dan pengolah lokal</p>
              </div>
              <div className="text-center p-8 bg-green-50 rounded-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <div className="icon-trending-up text-2xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">Ketahanan Pangan</h3>
                <p className="text-[var(--text-secondary)]">Mendukung diversifikasi pangan lokal melalui produk berbasis singkong</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('AboutApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AboutApp />);
