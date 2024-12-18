import React from 'react';
import CornerFolder from './cornerfolder';
import TransparentfolderSrc from '../../../../public/folderwhite-removebg-preview.png';
import checkbox from '../../../../public/checkbox.webp';
import StickyNote from './notecard';
import foldercard from '../../../../public/foldercard1.png'
import bottomright from '../../../../public/bottomright.png'
import trackercard from '../../../../public/tracker.png'
import Image from 'next/image';

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
        className="top-6 md:block hidden left-[3%] rotate-[5deg]"
      />

      <CornerFolder
        className="w-[20%] md:block hidden"
        position="top-left"
        folderSrc={TransparentfolderSrc}
        overlaySrc={checkbox}
        overlayClassName="w-[20%] left-[40%] bg-white p-[10px] rounded-[10px] drop-shadow-lg -rotate-[20deg]"
        Folderclassname="opacity-50  drop-shadow-[0px_10px_15px_rgba(0,0,0,0.25)]"
      />
      <CornerFolder
        className="w-[25%] md:block hidden"
        position="bottom-left"
        folderSrc={foldercard}
      />
      <CornerFolder
        className="w-[55%] md:block hidden"
        position="bottom-right"
        folderSrc={trackercard}
      />
      <CornerFolder
        className="md:w-[20%] w-[35%]"
        position="top-right"
        folderSrc={bottomright}
      />

      {/* Small screen Image */}
      <Image
        src={trackercard}
        alt="trackercard"
        className="md:hidden z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px]"
      />
    </div>
  );
};

export default BackgroundPattern;
