import React from 'react';
import { Heart, MapPin, Trash2, X } from 'lucide-react';

function Wishlist({ wishlist, isOpen, onClose, onRemoveFromWishlist, onShowRoute }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="text-red-500" size={20} />
              <h2 className="text-xl font-bold text-gray-900">My Wishlist</h2>
              <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
                {wishlist.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {wishlist.length === 0 ? (
            <div className="text-center py-8">
              <Heart className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-500">Your wishlist is empty</p>
              <p className="text-gray-400 text-sm mt-1">Start exploring and add places you'd like to visit!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                    <button
                      onClick={() => onRemoveFromWishlist(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="capitalize">{item.type.replace('_', ' ')}</span>
                    {item.distance && (
                      <div className="flex items-center space-x-1">
                        <MapPin size={12} />
                        <span>{item.distance < 1 ? `${Math.round(item.distance * 1000)}m` : `${item.distance.toFixed(1)}km`}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => onShowRoute(item)}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm"
                  >
                    Show Route
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
