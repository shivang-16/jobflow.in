import React from 'react';
import CornerFolder from './cornerfolder';
import TransparentfolderSrc from '../../../../public/folderwhite-removebg-preview.png';
import checkbox from '../../../../public/checkbox.webp';
import StickyNote from './notecard';
import foldercard from '../../../../public/foldercard1.png'
import bottomright from '../../../../public/bottomright.png'
import trackercard from '../../../../public/tracker.png'

const BackgroundPattern = () => {
  return (
    <div className="absolute rounded-[40px] border border-gray-200 bg-gray-50 inset-0 overflow-hidden">
      <div
        className="absolute z-0 inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle, #a8a9a9 0.5px, transparent 1.5px),
            radial-gradient(circle, #a8a9a9 0.5px, transparent 1.5px)
          `,
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 4px 4px',
        }}
      />
       
       <StickyNote
        text="Tracking your Job Application using Excel sheet??."
        className="top-6 left-[3%] rotate-[5deg]"
      />

       <CornerFolder
         className="w-[20%]"
         position="top-left"
         folderSrc={TransparentfolderSrc}
         overlaySrc={checkbox}
         overlayClassName="w-[20%] left-[40%] bg-white p-[10px] rounded-[10px] drop-shadow-lg -rotate-[20deg]"
         Folderclassname="opacity-50 drop-shadow-[0px_10px_15px_rgba(0,0,0,0.25)]"
       />
      <CornerFolder
        className="w-[25%]"
        position="bottom-left"
        folderSrc={foldercard}

      />
      <CornerFolder
       className="w-[55%]"
       position='bottom-right'
       folderSrc={trackercard}
/>
     <CornerFolder
        className="w-[20%]"
        position="top-right"
        folderSrc={bottomright}

      /> 
    </div>
  );
};

export default BackgroundPattern;
