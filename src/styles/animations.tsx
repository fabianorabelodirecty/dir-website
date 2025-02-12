import { keyframes } from "@emotion/react";

export const fadeFromLeft = keyframes`
  from {
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
  }
  to {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: left;
  }
`;
