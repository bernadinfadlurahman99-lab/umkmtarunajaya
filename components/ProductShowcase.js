function ProductShowcase() {
  try {
    const products = [
      {
        image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&q=80',
        name: 'Keripik Singkong Original',
        category: 'Makanan Ringan',
        price: 'Rp 25.000'
      },
      {
        image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=500&q=80',
        name: 'Tepung Mocaf Premium',
        category: 'Bahan Baku',
        price: 'Rp 35.000'
      },
      {
        image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500&q=80',
        name: 'Kue Singkong Keju',
        category: 'Kue Basah',
        price: 'Rp 45.000'
      }
    ];

    return (
      <section className="py-20 bg-[var(--bg-light)]" data-name="product-showcase" data-file="components/ProductShowcase.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Produk Unggulan</h2>
          <p className="section-subtitle">
            Produk olahan singkong pilihan terbaik
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <span className="text-sm text-[var(--primary-color)] font-medium">{product.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[var(--primary-color)]">{product.price}</span>
                    <button className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--secondary-color)] transition-colors">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="products.html" className="btn-primary">
              Lihat Semua Produk
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProductShowcase component error:', error);
    return null;
  }
}