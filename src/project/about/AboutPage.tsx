import { useState } from 'react';
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  FlaskConical, 
  Award, 
  Leaf, 
  ChevronRight,
  MapPin,
  Calendar,
  BookOpen,
  Heart
} from "lucide-react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('historia');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-20 pb-16">
        {/* Hero Section - Título principal */}
        <section className="bg-linear-to-r from-theme-ocean-twilight to-theme-vivid-royal text-white py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Conoce la historia detrás de KéfirShop y la pasión por los productos naturales
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  
                  
                  <div className="rounded-2xl overflow-hidden shadow-xl bg-linear-to-br from-theme-pale-sky to-white dark:from-gray-800 dark:to-gray-900 p-4">
                    <div className="relative aspect-3/4 rounded-xl overflow-hidden group">
                        <div className="absolute inset-0 bg-linear-to-br from-theme-ocean-twilight/20 to-theme-vivid-royal/20">
                        <img 
                            src="/sofia.jpg" 
                            alt="Sofía Libertad Ayala Arias - Fundadora de KéfirShop"
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        <div className="absolute inset-0 bg-linear-to-t from-theme-ocean-twilight/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                            <p className="font-semibold text-theme-ocean-twilight text-sm">Sofía Libertad Ayala Arias</p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">Bachiller en Ingeniería Agroindustrial</p>
                        </div>
                        </div>

                        <div className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none" />
                    </div>

                    <div className="mt-3 text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                        Fundadora de KéfirShop
                        </p>
                    </div>
                  </div>

                  <div className="mt-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
                    <h3 className="font-semibold text-lg mb-2 text-theme-ocean-twilight">Información</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-theme-maya-blue" />
                        <span>Bachiller en Ingeniería Agroindustrial</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-theme-maya-blue" />
                        <span>Universidad Nacional del Santa (UNS)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-theme-maya-blue" />
                        <span>Apasionada por la investigación</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-8">
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                  <button
                    className={`px-6 py-3 font-medium transition-colors relative ${
                      activeTab === 'historia' 
                        ? 'text-theme-ocean-twilight border-b-2 border-theme-ocean-twilight' 
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                    }`}
                    onClick={() => setActiveTab('historia')}
                  >
                    Historia
                  </button>
                  <button
                    className={`px-6 py-3 font-medium transition-colors relative ${
                      activeTab === 'investigacion' 
                        ? 'text-theme-ocean-twilight border-b-2 border-theme-ocean-twilight' 
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                    }`}
                    onClick={() => setActiveTab('investigacion')}
                  >
                    Investigación
                  </button>
                  <button
                    className={`px-6 py-3 font-medium transition-colors relative ${
                      activeTab === 'vision' 
                        ? 'text-theme-ocean-twilight border-b-2 border-theme-ocean-twilight' 
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                    }`}
                    onClick={() => setActiveTab('vision')}
                  >
                    Visión
                  </button>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  {activeTab === 'historia' && (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-theme-ocean-twilight mb-4">
                        Nuestra Historia
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        <span className="font-semibold text-theme-ocean-twilight">Sofía Libertad Ayala Arias</span>, 
                        bachiller en Ingeniería Agroindustrial por la Universidad Nacional del Santa (UNS), 
                        es la mente creativa y el corazón detrás de KéfirShop.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Desde muy joven, Sofía mostró un gran interés por los procesos agroindustriales 
                        y la búsqueda de alternativas naturales que puedan mejorar la calidad de vida de 
                        las personas. Su formación académica y su pasión por la investigación la llevaron 
                        a explorar el mundo de los fermentados y probióticos, descubriendo en el kéfir un 
                        superalimento con un potencial increíble.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Lo que comenzó como un proyecto personal para compartir los beneficios del kéfir 
                        con familiares y amigos, pronto se convirtió en KéfirShop, un emprendimiento que 
                        busca acercar productos artesanales, saludables y llenos de tradición a más hogares.
                      </p>
                      <div className="mt-6 p-4 bg-theme-pale-sky/30 rounded-lg">
                        <p className="italic text-gray-600 dark:text-gray-400">
                          "Creo firmemente que la naturaleza nos provee de todo lo necesario para 
                          mantenernos saludables. Mi objetivo es compartir ese conocimiento y hacer 
                          accesibles estos beneficios a través de productos de calidad."
                        </p>
                        <p className="text-right font-semibold mt-2">— Sofía Ayala</p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'investigacion' && (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-theme-ocean-twilight mb-4">
                        Trayectoria Investigadora
                      </h2>
                      
                      <Card className="border-l-4 border-l-theme-ocean-twilight">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-theme-ocean-twilight/10">
                              <Award className="w-6 h-6 text-theme-ocean-twilight" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-1">
                                Investigación en la Universidad de São Paulo, Brasil
                              </h3>
                              <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>Ganadora de subvención económica - Pasantía de investigación</span>
                              </p>
                              <p className="text-gray-700 dark:text-gray-300">
                                Sofía resultó ganadora de una subvención económica que le permitió desarrollar 
                                su trabajo de investigación durante un mes en una de las instituciones académicas 
                                más grandes e importantes de Brasil e Iberoamérica.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="mt-6">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <FlaskConical className="w-5 h-5 text-theme-ocean-twilight" />
                          Proyecto: Biopelículas funcionales
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          Su investigación trata sobre el <span className="font-medium">desarrollo y caracterización de 
                          biopelículas funcionales</span> elaboradas a partir de almidón de yuca y extractos 
                          de algarrobo.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          <span className="font-medium">Objetivo:</span> Obtener un material que no solo sea amigable 
                          con el medio ambiente, sino que también pueda mejorar la conservación de alimentos 
                          y agregar valor a productos locales.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                          <span className="font-medium">Importancia de la pasantía:</span> La estancia en Brasil fue 
                          fundamental para llevar a cabo la caracterización de estas películas, evaluando 
                          sus propiedades mecánicas, estructurales y antimicrobianas.
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        <Badge className="bg-theme-ocean-twilight/10 text-theme-ocean-twilight hover:bg-theme-ocean-twilight/20">
                          Biopelículas funcionales
                        </Badge>
                        <Badge className="bg-theme-ocean-twilight/10 text-theme-ocean-twilight hover:bg-theme-ocean-twilight/20">
                          Almidón de yuca
                        </Badge>
                        <Badge className="bg-theme-ocean-twilight/10 text-theme-ocean-twilight hover:bg-theme-ocean-twilight/20">
                          Extractos de algarrobo
                        </Badge>
                        <Badge className="bg-theme-ocean-twilight/10 text-theme-ocean-twilight hover:bg-theme-ocean-twilight/20">
                          Propiedades antimicrobianas
                        </Badge>
                        <Badge className="bg-theme-ocean-twilight/10 text-theme-ocean-twilight hover:bg-theme-ocean-twilight/20">
                          Conservación de alimentos
                        </Badge>
                      </div>
                    </div>
                  )}

                  {activeTab === 'vision' && (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-theme-ocean-twilight mb-4">
                        Visión y Filosofía
                      </h2>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Card>
                          <CardContent className="p-6">
                            <Leaf className="w-8 h-8 text-theme-ocean-twilight mb-3" />
                            <h3 className="font-semibold text-lg mb-2">Compromiso con la calidad</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Productos artesanales elaborados con procesos que respetan la tradición 
                              y maximizan los beneficios naturales del kéfir.
                            </p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-6">
                            <BookOpen className="w-8 h-8 text-theme-ocean-twilight mb-3" />
                            <h3 className="font-semibold text-lg mb-2">Innovación con base científica</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Aplicar los conocimientos adquiridos en la investigación académica para 
                              desarrollar productos cada vez mejores.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="sm:col-span-2">
                          <CardContent className="p-6">
                            <h3 className="font-semibold text-lg mb-2 text-center">Filosofía de trabajo</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-center italic">
                              "Unir la tradición de los fermentados con el conocimiento científico para 
                              ofrecer productos que realmente marquen la diferencia en la salud de las personas."
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="mt-6 text-center">
                        <Button 
                          className="bg-theme-ocean-twilight hover:bg-theme-vivid-royal text-white"
                          onClick={() => window.location.href = "/productos"}
                        >
                          Conoce nuestros productos
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-theme-ocean-twilight" />
                    Trayectoria Académica
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-theme-ocean-twilight mt-1.5"></div>
                        <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-600 absolute top-4"></div>
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="font-semibold">Bachiller en Ingeniería Agroindustrial</p>
                        <p className="text-sm text-gray-500">Universidad Nacional del Santa (UNS)</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-theme-maya-blue mt-1.5"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Investigadora - Pasantía en Universidad de São Paulo</p>
                        <p className="text-sm text-gray-500">Brasil - Investigación en biopelículas funcionales</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;