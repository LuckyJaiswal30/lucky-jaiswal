export const transition = {
  duration: 0.72,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

export const sectionViewport = {
  once: false,
  amount: 0.2,
};
