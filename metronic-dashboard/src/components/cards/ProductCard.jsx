import { ShoppingCart, Heart, Eye } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="card group cursor-pointer overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image || `https://picsum.photos/seed/${product.id}/400/300`}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.badge && (
          <span className="absolute top-3 right-3 badge badge-danger">{product.badge}</span>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button className="btn btn-primary btn-sm">
            <ShoppingCart size={16} />
          </button>
          <button className="btn btn-secondary btn-sm">
            <Heart size={16} />
          </button>
          <button className="btn btn-secondary btn-sm">
            <Eye size={16} />
          </button>
        </div>
      </div>
      <div className="card-body">
        <p className="text-xs text-gray-500 uppercase">{product.category}</p>
        <h3 className="font-semibold text-gray-900 mt-1 mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-primary-600">${product.price}</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">${product.oldPrice}</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
