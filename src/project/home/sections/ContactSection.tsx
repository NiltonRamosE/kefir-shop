import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.message) return;

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const phoneNumber = "51921066773";

    const message =
      "============================\n" +
      "   NUEVA CONSULTA - KÉFIRSHOP\n" +
      "============================\n\n" +
      "Nombre:\n" +
      formData.name + "\n\n" +
      "Consulta:\n" +
      formData.message + "\n\n";

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    setIsLoading(false);
    setIsSubmitted(true);

    window.open(whatsappURL, "_blank");

    setFormData({ name: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="contacto" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-linear-to-r from-theme-ocean-twilight to-theme-vivid-royal bg-clip-text text-transparent">
                Hablemos
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              ¿Tienes preguntas sobre nuestros productos? ¿Quieres saber más sobre el kéfir?
              Estamos aquí para ayudarte.
            </p>

            <div className="space-y-4 mb-8">
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-theme-pale-sky/30 dark:bg-gray-800">
                <div className="p-3 rounded-full bg-theme-ocean-twilight/10">
                  <Phone className="w-5 h-5 text-theme-ocean-twilight" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Teléfono</h3>
                  <p className="text-gray-600 dark:text-gray-300">+51 921 066 773</p>
                  <p className="text-gray-600 dark:text-gray-300">Lunes - Domingo: 9:00 - 20:00</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-linear-to-r from-theme-ocean-twilight to-theme-vivid-royal text-white">
              <p className="text-lg font-semibold mb-2">¿Listo para empezar?</p>
              <p className="text-white/90">
                Únete a más de 500 clientes satisfechos que ya disfrutan de nuestros productos.
              </p>
            </div>
          </div>

          <div className="bg-theme-pale-sky/20 dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gracias por contactarnos. Te responderemos a la mayor brevedad posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre completo
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Sofía Ayala"
                    className="w-full bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="¿En qué podemos ayudarte?"
                    rows={5}
                    className="w-full bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-theme-ocean-twilight hover:bg-theme-vivid-royal text-white group"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Enviar Mensaje
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;