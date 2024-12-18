import React from 'react';
import { cn } from '@/lib/utlis';

interface StickyNoteProps {
  text: string; 
  className?: string;
}

const StickyNote = ({ text, className }: StickyNoteProps) => {
  return (
    <div
      className={cn(
        'absolute top-0 left-0 w-[15%] h-[40%] bg-yellow-300 p-4 shadow-md rotate-[-6deg] border border-yellow-400',
        className
      )}
    >

      <p className="text-[14px] text-gray-800 italic font-[cursive] leading-snug">
        {text}
      </p>


      <div
        className="absolute -top-2 right-2 w-4 h-4 bg-red-500 rounded-full shadow-lg"
        style={{
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >

        <div className="absolute top-[5px] left-[5px] w-1 h-1 bg-white rounded-full" />
      </div>
    </div>
  );
};

export default StickyNote;
