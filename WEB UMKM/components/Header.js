function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleNavigation = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `index.html#${sectionId}`;
      }
      setIsMenuOpen(false);
    };

    return (
      <header className="bg-white shadow-sm sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="icon-leaf text-xl text-white"></div>
              </div>
              <span className="ml-3 text-xl font-bold text-[var(--primary-color)]">Singkong Nusantara</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="index.html" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium transition-colors">Beranda</a>
              <a href="products.html" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium transition-colors">Produk</a>
              <a href="about.html" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium transition-colors">Tentang</a>
              <a href="contact.html" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium transition-colors">Kontak</a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-2xl text-[var(--text-primary)]`}></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <a href="index.html" className="block py-2 text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium">Beranda</a>
              <a href="products.html" className="block py-2 text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium">Produk</a>
              <a href="about.html" className="block py-2 text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium">Tentang</a>
              <a href="contact.html" className="block py-2 text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium">Kontak</a>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}