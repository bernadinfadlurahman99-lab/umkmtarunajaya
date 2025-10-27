function Footer() {
  try {
    return (
      <footer className="bg-gray-900 text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                  <div className="icon-leaf text-xl text-white"></div>
                </div>
                <span className="ml-3 text-xl font-bold">Singkong Nusantara</span>
              </div>
              <p className="text-gray-400">Platform terpercaya untuk produk olahan singkong berkualitas dari UMKM lokal</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2">
                <li><a href="index.html" className="text-gray-400 hover:text-white transition-colors">Beranda</a></li>
                <li><a href="products.html" className="text-gray-400 hover:text-white transition-colors">Produk</a></li>
                <li><a href="about.html" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Bantuan</h4>
              <ul className="space-y-2">
                <li><a href="contact.html" className="text-gray-400 hover:text-white transition-colors">Kontak</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-facebook text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-instagram text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-twitter text-lg"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Singkong Nusantara. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}