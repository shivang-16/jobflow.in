import React from 'react';
import { cn } from '@/lib/utlis';
import Image from 'next/image';

interface CornerFolderProps {
  position: 'top-left'| 'top-right' | 'bottom-left' | 'bottom-right';
  folderSrc: any; 
  overlaySrc?: any; 
  overlayClassName?: string; 
  className?: string;
  Folderclassname?:string;
}

const positionStyles = {
  'top-left': 'rotate-[22deg] top-10 left-[-8%]',
  'bottom-left': 'rotate-[-5deg] bottom-[-20%] left-6',
  'top-right': 'rotate-[-22deg] md:top-5 right-[-8%] -top-5', 
  'bottom-right': 'rotate-[2deg] -bottom-4 -right-[20%]',
};

const CornerFolder = ({ position, folderSrc, overlaySrc, overlayClassName, className,Folderclassname }: CornerFolderProps) => {
  return (
    <div className={cn('absolute', className, positionStyles[position])}>
      {/* Folder Image */}
      <Image
        src={folderSrc}
        alt="folder"
        className={cn("relative w-full h-auto",Folderclassname)}
      />
      {/* Overlay Image */}
      {overlaySrc && (
        <Image
          src={overlaySrc}
          alt="overlay"
          className={cn(
            'absolute inset-0 m-auto rounded-[10px] object-contain', 
            overlayClassName 
          )}
        />
      )}
    </div>
  );
};

export default CornerFolder;
