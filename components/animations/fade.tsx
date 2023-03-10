import React, { PropsWithChildren } from "react";
import { m as motion } from "framer-motion";

interface FadeProps extends PropsWithChildren {
  delay?: number;
  transformDuration?: number;
  opacityDuration?: number;
  duration?: number;
  threshold?: number;
  y?: number;
  x?: number;
  triggerOnce?: boolean;
  noOpacityAnim?: boolean;
  inline?: boolean;
}

const Fade = ({
  delay = 0,
  duration,
  transformDuration = 1.5,
  opacityDuration = 0.6,
  threshold = 0.2,
  y = 0,
  x = 0,
  triggerOnce = true,
  noOpacityAnim = false,
  inline,
  children,
}: FadeProps) => {
  const variants = {
    hidden: { opacity: noOpacityAnim ? 1 : 0, y, x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        y: {
          ease: [0.185, -0.01, 0, 1],
          duration: duration || transformDuration,
        },
        x: {
          ease: [0.185, -0.01, 0, 1],
          duration: duration || transformDuration,
        },
        opacity: {
          duration: duration || opacityDuration,
        },
      },
    },
  };

  const commonProps = {
    variants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: triggerOnce, amount: threshold },
  };

  return inline ? (
    <motion.span style={{ display: "inline-block" }} {...commonProps}>
      {children}
    </motion.span>
  ) : (
    <motion.div {...commonProps}>{children}</motion.div>
  );
};

export default Fade;
