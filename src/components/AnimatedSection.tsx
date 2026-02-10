import { ReactNode } from 'react';
import { motion } from 'framer-motion';
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}
export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  id
}: AnimatedSectionProps) {
  return (
    <motion.div
      id={id}
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut'
      }}
      className={className}>

      {children}
    </motion.div>);

}