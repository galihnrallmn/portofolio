export const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.6,
  },
};

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: -40,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.6,
  },
};

export const fadeRight = {
  initial: {
    opacity: 0,
    x: 40,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.6,
  },
};
