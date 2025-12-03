import { ScheduleItem, RestaurantItem } from './types';

export const DAY_1_DATA: ScheduleItem[] = [
  {
    id: 'd1-1',
    time: '15:30 - 16:30',
    title: 'Check in',
    description: '辦理飯店入住手續，放置行李。',
    locationQuery: 'Okinawa Hotel Check In', 
    icon: 'hotel'
  },
  {
    id: 'd1-2',
    time: '16:30 - 17:00',
    title: '前往【おもろまち駅】',
    description: '歌町車站 (Omoromachi Station)',
    locationQuery: 'Omoromachi Station',
    icon: 'transport'
  },
  {
    id: 'd1-3',
    time: '17:00 - 18:30',
    title: 'DFS 國際精品 / T Galleria',
    description: '享受免稅購物樂趣。',
    locationQuery: 'T Galleria Okinawa by DFS',
    icon: 'shopping'
  },
  {
    id: 'd1-4',
    time: '18:30 - 20:30',
    title: 'San-A 那霸 Main Place',
    description: '從 DFS 步行約 5-10 分鐘。在此享用晚餐並購物。',
    locationQuery: 'San-A Naha Main Place',
    icon: 'food'
  },
  {
    id: 'd1-5',
    time: '20:30 - 20:45',
    title: '前往【安里站】',
    description: '搭乘單軌電車前往安里站。',
    locationQuery: 'Asato Station',
    icon: 'transport'
  },
  {
    id: 'd1-6',
    time: '20:45 - 22:30',
    title: '榮町市場商店街',
    description: '昭和風格居酒屋街，適合吃宵夜、逛特色小店。',
    locationQuery: 'Sakaemachi Market',
    icon: 'food'
  }
];

export const DAY_2_DATA: ScheduleItem[] = [
  {
    id: 'd2-1',
    time: '09:00 - 10:00',
    title: 'Junkudo 書店 (那霸店)',
    description: '【美榮橋站】綺綺指定逛文具。',
    locationQuery: 'Junkudo Naha',
    icon: 'shopping'
  },
  {
    id: 'd2-2',
    time: '10:00 - 11:30',
    title: '浮島通 (Ukishima St)',
    description: '沿著浮島通往牧志方向走，探索文青小店與古著店。',
    locationQuery: 'Ukishima Street Naha',
    icon: 'walking'
  },
  {
    id: 'd2-3',
    time: '11:30 - 13:00',
    title: '午餐：綺綺指定沖繩麵',
    description: '享用道地沖繩麵料理。',
    locationQuery: 'Okinawa Soba Naha',
    icon: 'food'
  },
  {
    id: 'd2-4',
    time: '13:00 - 15:00',
    title: '牧志公設市場 & 傳統工藝館',
    description: '參觀市場與那霸市傳統工藝館。',
    locationQuery: 'Makishi Public Market',
    icon: 'shopping'
  },
  {
    id: 'd2-5',
    time: '15:00 - 17:00',
    title: '國際通逛街',
    description: '沿著國際通往縣廳方向漫步購物。',
    locationQuery: 'Kokusai Dori',
    icon: 'walking'
  },
  {
    id: 'd2-6',
    time: '17:00 - 18:30',
    title: '琉貿百貨 (Ryubo)',
    description: '步行到國際通尾端的百貨公司。',
    locationQuery: 'Ryubo Department Store',
    icon: 'shopping'
  },
  {
    id: 'd2-7',
    time: '18:30 - 21:00',
    title: '國際通屋台村',
    description: '回到牧志站附近的屋台村，欣賞聖誕點燈與晚餐。',
    locationQuery: 'Kokusai Dori Yataimura',
    icon: 'food'
  },
  {
    id: 'd2-8',
    time: '21:00 - 22:30',
    title: 'Union 超市 (スカラ国際通り店)',
    description: '逛沖繩知名超市採買。',
    locationQuery: 'Union Supermarket Kokusai Dori',
    icon: 'shopping'
  }
];

export const DAY_3_DATA: ScheduleItem[] = [
  {
    id: 'd3-1',
    time: '09:00 - 10:00',
    title: '前往【小祿站】',
    description: '吃早餐，車站空橋直通 AEON，可將行李寄放於 AEON 置物櫃。',
    locationQuery: 'Oroku Station',
    icon: 'transport'
  },
  {
    id: 'd3-2',
    time: '10:00 - 11:30',
    title: 'AEON 百貨 / Jusco / BEST 電器',
    description: '小祿站周邊購物。',
    locationQuery: 'Aeon Naha Shopping Center',
    icon: 'shopping'
  },
  {
    id: 'd3-3',
    time: '11:30 - 12:30',
    title: '午餐時間',
    description: '在附近享用美味午餐。',
    locationQuery: 'Oroku Station Lunch',
    icon: 'food'
  },
  {
    id: 'd3-4',
    time: '12:30 - 12:45',
    title: '前往【那霸機場】',
    description: '從小祿站搭單軌電車至那霸機場（僅需2站，約5分鐘）。',
    locationQuery: 'Naha Airport',
    icon: 'transport'
  },
  {
    id: 'd3-5',
    time: '12:45 - 13:30',
    title: '那霸機場週邊購物',
    description: '逛機場國內線航廈的商店街（比國際線更好逛）。',
    locationQuery: 'Naha Airport Domestic Terminal',
    icon: 'shopping'
  }
];

export const RESTAURANT_DATA: RestaurantItem[] = [
  {
    id: 'r1',
    name: 'JEF 苦瓜漢堡',
    description: '沖繩限定！必吃特色速食。',
    mapUrl: 'https://maps.app.goo.gl/GSJ84KXn2UoBp8uX6',
    tags: ['漢堡', '沖繩限定', '苦瓜']
  },
  {
    id: 'r2',
    name: 'OKINAWA SOBA EIBUN',
    description: '人氣沖繩麵名店。',
    mapUrl: 'https://maps.app.goo.gl/hN17QzEcLsLdgnLL8',
    tags: ['沖繩麵', '排隊美食']
  },
  {
    id: 'r3',
    name: 'oHacorté Izumizaki',
    description: '知名的水果塔甜點店。',
    mapUrl: 'https://maps.app.goo.gl/Ns99GL79QpiuvV3R6',
    tags: ['甜點', '水果塔', '咖啡']
  },
  {
    id: 'r4',
    name: '通堂拉麵 (小祿本店)',
    description: '知名的男人麵與女人麵。',
    mapUrl: 'https://maps.app.goo.gl/h3ZaAcyiKDKQbLfcA',
    tags: ['拉麵', '宵夜']
  }
];