import styled from '@emotion/styled'

const TIMING = '1s'

export const FadeInUp = styled.div`
  transition: opacity ${TIMING} cubic-bezier(0.165, 0.84, 0.44, 1), transform ${TIMING} cubic-bezier(0.165, 0.84, 0.44, 1);
  animation: fade-in-up ${TIMING} cubic-bezier(0.165, 0.84, 0.44, 1);

  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`