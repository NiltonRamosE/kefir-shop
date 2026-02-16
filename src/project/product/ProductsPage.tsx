import { useState } from 'react';
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import ProductModal from '@/project/product/components/ProductModal';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Filter } from "lucide-react";
import type{ Product } from './types/product.types';
import { useCart } from './hooks/useCart';

// Mock data - productos
const products: Product[] = [
  {
    id: '1',
    name: 'Kéfir de Leche Natural',
    description: 'Kéfir de leche 100% natural, rico en probióticos y beneficios para tu salud digestiva. Elaborado artesanalmente.',
    price: 14,
    unit: 'L',
    image: '/kefir.webp',
    category: 'kefir',
    inStock: true,
    featured: true,
    benefits: [
      'Alto en probióticos',
      'Mejora la digestión',
      'Fortalece el sistema inmune',
      'Fuente de calcio'
    ],
    nutritionalInfo: {
      calories: 60,
      protein: 3.5,
      carbs: 4.8,
      fat: 3.2
    }
  },
  {
    id: '2',
    name: 'Búlgaros de Kéfir',
    description: 'Gránulos de kéfir activos para que puedas preparar tu propio kéfir en casa. Vienen con instrucciones detalladas.',
    price: 10,
    unit: 'kg',
    image: '/bulgaros.webp',
    category: 'bulgaros',
    inStock: true,
    featured: true,
    benefits: [
      'Reutilizables',
      'Cultivo activo',
      'Fáciles de cuidar',
      'Rinden infinitamente'
    ]
  },
];

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const { getTotalItems } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-20 pb-16">
        {/* Header */}
        <div className="bg-linear-to-r from-theme-ocean-twilight to-theme-vivid-royal text-white py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Productos</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Descubre nuestra selección de productos de kéfir, elaborados con pasión y respeto por la tradición.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Filters and Cart */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 flex gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Buscar productos..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Category filter */}
              <select
                className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-800"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="todos">Todos</option>
                <option value="kefir">Kéfir</option>
                <option value="bulgaros">Búlgaros</option>
              </select>
            </div>

            {/* Cart button */}
            <Button
              className="bg-theme-ocean-twilight hover:bg-theme-vivid-royal text-white relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Carrito
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron productos</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('todos');
                }}
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Modals and Sidebars */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default ProductsPage;