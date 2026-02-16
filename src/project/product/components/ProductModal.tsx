import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Check, X, Leaf, Heart } from "lucide-react";
import { type Product } from '../types/product.types';
import { useCart } from '../hooks/useCart';
import { useState } from 'react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product, quantity);
    setShowAdded(true);
    setTimeout(() => {
      setShowAdded(false);
      onClose();
    }, 1500);
  };

  const benefits = product.benefits || [
    "Probióticos naturales",
    "Mejora la digestión",
    "Fortalece el sistema inmune",
    "100% artesanal"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="shrink-0">
          <DialogTitle className="text-2xl font-bold text-theme-ocean-twilight pr-8">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto pr-2 -mr-2 mt-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="rounded-2xl bg-linear-to-br from-theme-pale-sky to-white dark:from-gray-800 dark:to-gray-900 p-8 sticky top-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto"
                />
              </div>
              
              {!product.inStock && (
                <Badge variant="destructive" className="absolute top-4 right-4">
                  Agotado
                </Badge>
              )}
            </div>

            <div className="pb-4">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-theme-ocean-twilight">
                    {product.category === 'kefir' ? 'Kéfir' : 'Búlgaros'}
                  </Badge>
                  {product.featured && (
                    <Badge variant="outline" className="border-theme-ocean-twilight text-theme-ocean-twilight">
                      Destacado
                    </Badge>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                  {product.description}
                </p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-theme-ocean-twilight">
                    S/{product.price}
                  </span>
                  <span className="text-gray-500">/{product.unit}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-theme-ocean-twilight" />
                  Beneficios
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Leaf className="w-4 h-4 text-theme-maya-blue shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="font-medium">Cantidad:</label>
                  <div className="flex items-center border rounded-lg">
                    <button
                      className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x min-w-12.5 text-center">{quantity}</span>
                    <button
                      className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    size="lg"
                    className="flex-1 bg-theme-ocean-twilight hover:bg-theme-vivid-royal text-white"
                    onClick={handleAddToCart}
                    disabled={!product.inStock || showAdded}
                  >
                    {showAdded ? (
                      <>
                        <Check className="mr-2 h-5 w-5" />
                        ¡Agregado!
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Agregar al Carrito
                      </>
                    )}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={onClose}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {!product.inStock && (
                  <p className="text-sm text-red-500 text-center">
                    Producto temporalmente agotado
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;