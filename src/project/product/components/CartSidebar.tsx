import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2, ShoppingBag, Plus, Minus, X, Loader2 } from "lucide-react";
import { useCart } from '../hooks/useCart';
import { type CartItem } from '../types/product.types';
import { useState } from 'react';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "51921066773";

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [isSending, setIsSending] = useState(false);
  
  const totalItems = items.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);

  const generateWhatsAppMessage = () => {
    let message = "🛒 *NUEVO PEDIDO - KéfirShop*\n\n";
    message += "📋 *DETALLE DEL PEDIDO:*\n";
    message += "─────────────────\n\n";
    
    items.forEach((item, index) => {
      const subtotal = item.price * item.quantity;
      message += `*${index + 1}. ${item.name}*\n`;
      message += `   📦 Cantidad: ${item.quantity} ${item.unit}\n`;
      message += `   💰 Precio unitario: S/${item.price}\n`;
      message += `   💵 Subtotal: S/${subtotal.toFixed(2)}\n\n`;
    });
    
    message += "─────────────────\n";
    message += `*💰 TOTAL DEL PEDIDO: S/${getTotalPrice().toFixed(2)}*\n\n`;
    
    message += "👤 *DATOS DEL CLIENTE:*\n";
    message += "─────────────────\n";
    message += "Por favor, proporcióname tus datos para coordinar la entrega:\n";
    message += "• Nombre completo:\n";
    message += "• Dirección:\n";
    message += "• Teléfono de contacto:\n\n";
    
    message += "✅ *¡Gracias por tu preferencia!*\n";
    message += "En breve me comunicaré contigo para confirmar el pedido.";
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    setIsSending(true);
    
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      setIsSending(false);
      clearCart();
      onClose();
    }, 1500);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader className="space-y-2">
          <SheetTitle className="flex items-center gap-2 text-2xl">
            <ShoppingBag className="w-5 h-5" />
            Carrito de Compras ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh]">
            <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg mb-2">Tu carrito está vacío</p>
            <p className="text-gray-400 text-sm mb-4">¡Agrega algunos productos!</p>
            <Button onClick={onClose} variant="outline">
              Seguir Comprando
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 h-[calc(100vh-250px)] my-4">
              <div className="space-y-4 pr-4">
                {items.map((item: CartItem) => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="w-20 h-20 rounded-lg bg-linear-to-br from-theme-pale-sky to-white p-2 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        S/{item.price} / {item.unit}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded-lg">
                          <button
                            className="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 text-sm border-x min-w-7.5 text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-semibold text-theme-ocean-twilight">
                          S/{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <SheetFooter className="border-t pt-4">
              <div className="w-full space-y-4">
                {/* Resumen del pedido */}
                <div className="bg-theme-pale-sky/20 dark:bg-gray-800/50 p-3 rounded-lg">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                    <span className="font-medium">S/{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Envío:</span>
                    <span className="font-medium">Por calcular</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                    <span>Total:</span>
                    <span className="text-theme-ocean-twilight">
                      S/{getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  ⚡ Al solicitar el pedido serás redirigido a WhatsApp
                </p>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      clearCart();
                      onClose();
                    }}
                    disabled={isSending}
                  >
                    Vaciar Carrito
                  </Button>
                  <Button
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    onClick={handleWhatsAppOrder}
                    disabled={isSending}
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <svg
                          className="mr-2 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.004 2C6.517 2 2.032 6.484 2.032 11.97c0 1.836.476 3.635 1.384 5.223L2.11 21.332l4.296-1.286a9.958 9.958 0 0 0 5.598 1.644c5.485 0 9.97-4.485 9.97-9.97 0-5.486-4.485-9.971-9.97-9.971zm0 18.192c-1.47 0-2.913-.393-4.174-1.132l-.3-.178-2.545.762.78-2.49-.196-.314a8.211 8.211 0 0 1-1.29-4.382c0-4.527 3.684-8.21 8.21-8.21 4.527 0 8.21 3.683 8.21 8.21 0 4.527-3.683 8.21-8.21 8.21zm4.516-6.148c-.247-.124-1.463-.722-1.69-.804-.227-.083-.392-.124-.557.124-.165.247-.64.804-.785.969-.145.165-.29.186-.537.062-.247-.124-1.043-.384-1.987-1.226-.734-.654-1.23-1.463-1.374-1.71-.145-.247-.015-.38.108-.504.113-.113.247-.29.37-.435.124-.145.165-.248.248-.413.082-.165.041-.31-.02-.434-.062-.124-.557-1.342-.763-1.837-.2-.48-.402-.414-.557-.422-.145-.008-.31-.008-.475-.008a.915.915 0 0 0-.66.31c-.227.248-.867.848-.867 2.067 0 1.22.887 2.398 1.012 2.563.124.166 1.727 2.646 4.186 3.632.585.234 1.042.374 1.398.48.588.175 1.123.15 1.546.09.472-.066 1.463-.597 1.668-1.174.206-.577.206-1.07.145-1.174-.062-.103-.227-.166-.474-.29z"/>
                        </svg>
                        Solicitar por WhatsApp
                      </>
                    )}
                  </Button>
                </div>

                <Button
                  variant="link"
                  className="w-full text-gray-500"
                  onClick={onClose}
                  disabled={isSending}
                >
                  Seguir Comprando
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;