import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Eye, Plus, Check } from "lucide-react";
import { type Product } from '@/project/product/types/product.types';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAdded, setShowAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'kefir':
        return 'bg-theme-ocean-twilight';
      case 'bulgaros':
        return 'bg-theme-vivid-royal';
      default:
        return 'bg-theme-maya-blue';
    }
  };

  return (
    <Card 
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(product)}
    >
      <div className={`absolute top-4 left-4 z-10 ${getCategoryColor(product.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
        {product.category === 'kefir' ? 'Kéfir' : 'Búlgaros'}
      </div>

      {!product.inStock && (
        <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Agotado
        </div>
      )}

      <div className="relative h-48 overflow-hidden bg-linear-to-br from-theme-pale-sky to-white dark:from-gray-800 dark:to-gray-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-white hover:bg-theme-pale-sky"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
          {product.inStock && (
            <Button
              size="icon"
              className="rounded-full bg-theme-ocean-twilight hover:bg-theme-vivid-royal text-white"
              onClick={handleAddToCart}
            >
              {showAdded ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </Button>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 group-hover:text-theme-ocean-twilight transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-theme-ocean-twilight">
              S/{product.price}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              /{product.unit}
            </span>
          </div>

          <Button
            size="sm"
            className={`${product.inStock ? 'bg-theme-ocean-twilight hover:bg-theme-vivid-royal' : 'bg-gray-400 cursor-not-allowed'} text-white`}
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {showAdded ? '¡Agregado!' : 'Agregar'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;