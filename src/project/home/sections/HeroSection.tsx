import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [navbarHeight, setNavbarHeight] = useState(64); // 64px = 16 (pt-16)

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    // Actualizar al montar y al redimensionar
    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: navbarHeight }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-theme-pale-sky rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-theme-maya-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-theme-sky-reflection rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Resto del contenido igual... */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-pale-sky/50 dark:bg-gray-800 mb-6">
              <Sparkles className="w-4 h-4 text-theme-ocean-twilight" />
              <span className="text-sm font-medium text-theme-ocean-twilight dark:text-theme-maya-blue">
                Descubre el poder del Kéfir
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-linear-to-r from-theme-ocean-twilight to-theme-vivid-royal bg-clip-text text-transparent">
                Bienestar Natural
              </span>
              <br />
              en Cada Gota
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Descubre nuestros productos derivados del kéfir, elaborados artesanalmente 
              para brindarte todos los beneficios de este superalimento milenario.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-theme-ocean-twilight hover:bg-theme-vivid-royal text-white group"
                onClick={() => window.location.href = "/productos"}
              >
                Explorar Productos
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-theme-ocean-twilight text-theme-ocean-twilight hover:bg-theme-pale-sky/50"
                onClick={() => {
                  const element = document.querySelector("#beneficios");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Conoce Más
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-theme-ocean-twilight">100%</div>
                <div className="text-sm text-gray-500">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-theme-ocean-twilight">+500</div>
                <div className="text-sm text-gray-500">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-theme-ocean-twilight">24/7</div>
                <div className="text-sm text-gray-500">Soporte</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative rounded-3xl bg-linear-to-br from-theme-pale-sky to-white dark:from-gray-800 dark:to-gray-900 p-8 shadow-2xl mb-8">
                  <img
                    src="/kefir.webp"
                    alt="Producto de Kéfir"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-semibold text-theme-ocean-twilight">Nuevo</span>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-semibold text-theme-vivid-royal">Probióticos</span>
                  </div>
                </div>

                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-theme-maya-blue rounded-full filter blur-3xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;