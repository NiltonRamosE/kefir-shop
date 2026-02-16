import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/shared/ModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos", href: "/productos" },
    { name: "Nosotros", href: "/about" },
    { name: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            onClick={(e) => scrollToSection(e, "#inicio")}
            className="text-2xl font-bold bg-linear-to-r from-theme-ocean-twilight to-theme-vivid-royal bg-clip-text text-transparent"
          >
            Kéfir<span className="text-theme-maya-blue">Shop</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-700 dark:text-gray-200 hover:text-theme-ocean-twilight dark:hover:text-theme-maya-blue transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="bg-theme-ocean-twilight hover:bg-theme-vivid-royal text-white transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = "/productos"}
            >
              Ver Productos
            </Button>
            <ModeToggle />
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-700 dark:text-gray-200 hover:text-theme-ocean-twilight dark:hover:text-theme-maya-blue transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="w-full bg-theme-ocean-twilight hover:bg-theme-vivid-royal text-white"
                onClick={() => window.location.href = "/productos"}
              >
                Ver Productos
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;