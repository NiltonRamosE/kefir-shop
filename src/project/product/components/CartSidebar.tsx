import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2, ShoppingBag, Plus, Minus, X } from "lucide-react";
import { useCart } from '../hooks/useCart';
import { type CartItem } from '../types/product.types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  
  const totalItems = items.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);

  const handleCheckout = () => {
    alert('¡Gracias por tu compra! Pronto recibirás un correo con los detalles.');
    clearCart();
    onClose();
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
            <ScrollArea className="flex-1 h-[calc(100vh-200px)] my-4">
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
                          <span className="px-3 py-1 text-sm border-x">
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
                <div className="flex justify-between text-lg">
                  <span>Subtotal</span>
                  <span className="font-bold text-theme-ocean-twilight">
                    S/{getTotalPrice().toFixed(2)}
                  </span>
                </div>

                <p className="text-xs text-gray-500">
                  * Los costos de envío se calcularán al finalizar la compra
                </p>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      clearCart();
                      onClose();
                    }}
                  >
                    Vaciar Carrito
                  </Button>
                  <Button
                    className="flex-1 bg-theme-ocean-twilight hover:bg-theme-vivid-royal"
                    onClick={handleCheckout}
                  >
                    Proceder al Pago
                  </Button>
                </div>

                <Button
                  variant="link"
                  className="w-full text-gray-500"
                  onClick={onClose}
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