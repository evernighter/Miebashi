import React from 'react';
import { RestaurantItem } from '../types';
import { MapPin, ExternalLink, UtensilsCrossed } from 'lucide-react';

interface Props {
  item: RestaurantItem;
}

export const RestaurantCard: React.FC<Props> = ({ item }) => {
  return (
    <a 
      href={item.mapUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl p-5 shadow-sm border border-pink-100 mb-4 hover:shadow-md transition-all active:scale-[0.98]"
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-50 text-red-500 p-1.5 rounded-full">
              <UtensilsCrossed size={16} />
            </span>
            <h3 className="text-gray-800 font-bold text-lg leading-tight">{item.name}</h3>
          </div>
          
          <p className="text-gray-500 text-sm mb-3 pl-1">{item.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="px-2 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium border border-green-100">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="ml-3 text-pink-400">
          <ExternalLink size={20} />
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-dashed border-gray-100 flex items-center text-xs text-blue-500 font-medium">
        <MapPin size={14} className="mr-1" />
        開啟 Google Maps
      </div>
    </a>
  );
};