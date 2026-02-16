import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Qué es el kéfir y cuáles son sus beneficios?",
      answer: "El kéfir es un alimento probiótico fermentado, rico en bacterias beneficiosas y levaduras. Ayuda a mejorar la digestión, fortalecer el sistema inmunológico y promover una flora intestinal saludable. Nuestros productos mantienen todas estas propiedades naturales."
    },
    {
      question: "¿Cómo debo conservar los productos de kéfir?",
      answer: "Los productos de kéfir deben mantenerse refrigerados entre 2°C y 8°C. Una vez abiertos, recomendamos consumirlos en un plazo de 5-7 días para garantizar su frescura y propiedades probióticas."
    },
    {
      question: "¿Los productos contienen azúcares añadidos?",
      answer: "Nuestros productos son 100% naturales y no contienen azúcares añadidos. El dulzor proviene únicamente del proceso de fermentación natural. Para nuestras variedades saborizadas, usamos frutas frescas y miel orgánica."
    },
    {
      question: "¿Son aptos para personas con intolerancia a la lactosa?",
      answer: "Sí, durante el proceso de fermentación, las bacterias y levaduras del kéfir consumen la mayor parte de la lactosa, haciendo que nuestros productos sean generalmente bien tolerados por personas con intolerancia leve a moderada."
    },
    {
      question: "¿Cómo puedo incorporar el kéfir en mi dieta diaria?",
      answer: "Puedes consumirlo solo, mezclado con frutas, en smoothies, como base para aderezos de ensaladas, o incluso en recetas de repostería saludable. Es versátil y delicioso de muchas maneras."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-linear-to-b from-white to-theme-pale-sky/30 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-linear-to-r from-theme-ocean-twilight to-theme-vivid-royal bg-clip-text text-transparent">
              Preguntas Frecuentes
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Resolvemos tus dudas sobre nuestros productos de kéfir y cómo incorporarlos en tu vida diaria.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-gray-100 hover:text-theme-ocean-twilight dark:hover:text-theme-maya-blue py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            ¿No encuentras lo que buscas?{" "}
            <a
              href="#contacto"
              className="text-theme-ocean-twilight hover:text-theme-vivid-royal font-semibold underline underline-offset-4"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contáctanos directamente
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;