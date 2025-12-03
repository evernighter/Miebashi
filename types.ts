export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  locationQuery: string; // Used to generate Google Maps Search URL
  icon?: 'shopping' | 'food' | 'transport' | 'hotel' | 'walking';
}

export interface RestaurantItem {
  id: string;
  name: string;
  description?: string;
  mapUrl: string;
  tags: string[];
}

export type Tab = 'day1' | 'day2' | 'day3' | 'food';