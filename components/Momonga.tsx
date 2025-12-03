import React from 'react';

interface Props {
  className?: string;
  pose?: 'standard' | 'peeking';
}

export const Momonga: React.FC<Props> = ({ className, pose }) => {
  return (
    <img 
      src="https://ugc-media.4gamers.com.tw/puku-prod-zh/member/NmCSJaYmwo59kc1EkxogqYAl-wI/mondou/d28bec82-2186-4127-8f26-3099ea9334df.jpg" 
      alt="Chiikawa Momonga"
      className={`${className} rounded-full object-cover border-2 border-white shadow-sm bg-white`}
    />
  );
};