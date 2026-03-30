import React, { memo, useId, forwardRef } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';

const ICON_VARIANTS = {
  left: {
    initial: { scale: 0.8, opacity: 0, x: 0, y: 0, rotate: 0 },
    animate: { scale: 1, opacity: 1, x: 0, y: 0, rotate: -6, transition: { duration: 0.4, delay: 0.1 } },
    hover: { x: -22, y: -5, rotate: -15, scale: 1.1, transition: { duration: 0.2 } }
  },
  center: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.4, delay: 0.2 } },
    hover: { y: -10, scale: 1.15, transition: { duration: 0.2 } }
  },
  right: {
    initial: { scale: 0.8, opacity: 0, x: 0, y: 0, rotate: 0 },
    animate: { scale: 1, opacity: 1, x: 0, y: 0, rotate: 6, transition: { duration: 0.4, delay: 0.3 } },
    hover: { x: 22, y: -5, rotate: 15, scale: 1.1, transition: { duration: 0.2 } }
  }
};

export const cn = (...classes) => classes.filter(Boolean).join(' ');

export const IconContainer = memo(({ children, variant, className = '' }) => (
  <motion.div
    variants={ICON_VARIANTS[variant]}
    className={cn(
      'w-14 h-14 rounded-xl flex items-center justify-center shadow-md',
      'bg-white border border-gray-200 group-hover:shadow-xl group-hover:border-primary/30',
      'transition-all duration-300',
      className
    )}
  >
    <div className="text-primary transition-colors duration-300">
      {children}
    </div>
  </motion.div>
));
IconContainer.displayName = 'IconContainer';

export const MultiIconDisplay = memo(({ icons }) => {
  if (!icons || icons.length < 3) return null;
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="flex justify-center items-center isolate relative"
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <IconContainer variant="left" className="z-10">{icons[0]}</IconContainer>
        <IconContainer variant="center" className="z-20 mx-1">{icons[1]}</IconContainer>
        <IconContainer variant="right" className="z-10">{icons[2]}</IconContainer>
      </motion.div>
    </LazyMotion>
  );
});
MultiIconDisplay.displayName = 'MultiIconDisplay';
