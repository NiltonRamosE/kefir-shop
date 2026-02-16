import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos", href: "/productos" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/sofia.ayala.3781", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/sofia.lib_113", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-linear-to-r from-theme-ocean-twilight to-theme-vivid-royal bg-clip-text text-transparent">
              KéfirShop
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Descubre el poder del kéfir con nuestros productos artesanales, 
              elaborados con pasión y respeto por la tradición.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-theme-pale-sky/50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-theme-ocean-twilight dark:hover:text-theme-maya-blue hover:bg-theme-pale-sky transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-theme-ocean-twilight dark:hover:text-theme-maya-blue text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-theme-ocean-twilight mt-0.5 shrink-0" />
                <span className="text-gray-600 dark:text-gray-300 text-sm"><a href="tel:+51921066773">+51 921 066 773</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
              © {currentYear} KéfirShop. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sofía Libertad Ayala Arias
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;