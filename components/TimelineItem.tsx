import React from 'react';
import { ScheduleItem } from '../types';
import { MapPin, ShoppingBag, Utensils, Train, Building, Footprints } from 'lucide-react';

interface Props {
  item: ScheduleItem;
  isLast: boolean;
}

const getIcon = (type?: string) => {
  switch (type) {
    case 'shopping': return <ShoppingBag size={18} className="text-white" />;
    case 'food': return <Utensils size={18} className="text-white" />;
    case 'transport': return <Train size={18} className="text-white" />;
    case 'hotel': return <Building size={18} className="text-white" />;
    case 'walking': return <Footprints size={18} className="text-white" />;
    default: return <MapPin size={18} className="text-white" />;
  }
};

const getIconColor = (type?: string) => {
  switch (type) {
    case 'shopping': return 'bg-pink-400';
    case 'food': return 'bg-red-400';
    case 'transport': return 'bg-green-400';
    case 'hotel': return 'bg-purple-400';
    default: return 'bg-pink-500';
  }
};

export const TimelineItem: React.FC<Props> = ({ item, isLast }) => {
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.locationQuery)}`;

  return (
    <div className="relative flex gap-4 mb-2">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[19px] top-10 bottom-[-16px] w-0.5 bg-pink-200" />
      )}

      {/* Icon Bubble */}
      <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full ${getIconColor(item.icon)} flex items-center justify-center shadow-md border-2 border-white`}>
        {getIcon(item.icon)}
      </div>

      {/* Content Card */}
      <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-pink-100 mb-4 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-1">
          <span className="inline-block px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 text-xs font-bold">
            {item.time}
          </span>
          <a 
            href={mapLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-xs font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded-full hover:bg-blue-100 transition-colors"
          >
            <MapPin size={12} className="mr-1" />
            導航
          </a>
        </div>
        <h3 className="text-gray-800 font-bold text-lg mb-1 leading-tight">{item.title}</h3>
        {item.description && (
          <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
        )}
      </div>
    </div>
  );
};