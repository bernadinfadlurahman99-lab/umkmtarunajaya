function Features() {
  try {
    const features = [
      {
        icon: 'shield-check',
        title: 'Produk Higienis',
        description: 'Semua produk diolah dengan standar kebersihan dan keamanan pangan'
      },
      {
        icon: 'truck',
        title: 'Pengiriman Segar',
        description: 'Pengiriman cepat untuk menjaga kesegaran produk ke seluruh Indonesia'
      },
      {
        icon: 'sprout',
        title: 'Dari Petani Lokal',
        description: 'Langsung dari petani singkong dan pengrajin lokal Indonesia'
      },
      {
        icon: 'leaf',
        title: '100% Alami',
        description: 'Tanpa bahan pengawet berbahaya, dibuat dari singkong pilihan'
      }
    ];

    return (
      <section className="py-20 bg-white" data-name="features" data-file="components/Features.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Mengapa Memilih Kami?</h2>
          <p className="section-subtitle">
            Platform terpercaya untuk produk olahan singkong berkualitas
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className={`icon-${feature.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[var(--text-secondary)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}