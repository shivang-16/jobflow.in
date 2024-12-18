import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utlis';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
}

const Card = ({ children, className, delay = 0, ...props }: CardProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
      }}
      className={cn(
        "bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.08)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;