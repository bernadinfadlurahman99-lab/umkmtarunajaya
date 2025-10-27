function ProductsApp() {
  try {
    const [selectedCategory, setSelectedCategory] = React.useState('Semua');

    const categories = ['Semua', 'Makanan Ringan', 'Bahan Baku', 'Kue Basah', 'Kue Kering', 'Frozen Food'];
    
    const products = [
      { id: 1, image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&q=80', name: 'Keripik Singkong Original', category: 'Makanan Ringan', price: 'Rp 25.000' },
      { id: 2, image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=500&q=80', name: 'Tepung Mocaf Premium', category: 'Bahan Baku', price: 'Rp 35.000' },
      { id: 3, image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500&q=80', name: 'Kue Singkong Keju', category: 'Kue Basah', price: 'Rp 45.000' },
      { id: 4, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80', name: 'Keripik Singkong Balado', category: 'Makanan Ringan', price: 'Rp 28.000' },
      { id: 5, image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500&q=80', name: 'Brownies Singkong', category: 'Kue Basah', price: 'Rp 55.000' },
      { id: 6, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&q=80', name: 'Stick Singkong Keju', category: 'Kue Kering', price: 'Rp 32.000' }
    ];

    const filteredProducts = selectedCategory === 'Semua' 
      ? products 
      : products.filter(p => p.category === selectedCategory);

    return (
      <div className="min-h-screen bg-white" data-name="products-app" data-file="products-app.js">
        <Header />
        <section className="py-16 bg-[var(--bg-light)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-4">Katalog Produk Singkong</h1>
            <p className="text-lg text-[var(--text-secondary)] text-center mb-12">
              Temukan produk olahan singkong pilihan terbaik
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === cat 
                      ? 'bg-[var(--primary-color)] text-white' 
                      : 'bg-white text-[var(--text-primary)] hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <span className="text-sm text-[var(--primary-color)] font-medium">{product.category}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-3">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-[var(--primary-color)]">{product.price}</span>
                      <button className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--secondary-color)] transition-colors">
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ProductsApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProductsApp />);