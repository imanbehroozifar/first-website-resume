import { keyframes } from "styled-components";

export const MoveToTop = keyframes`
0% {
  opacity:0  ;
  transform: translateY(+100px);

}
100%{
opacity: 1;
transform: translate(0)
}
`
export const MoveToLeft = keyframes`
0% {
  opacity:0  ;
  transform: translateX(+100px);

}
50%{  opacity:0;
  transform: translateX(50px) ;
}
100%{
opacity: 1;
transform: translate(0)
}
`
export const MoveToRight = keyframes`
0% {
  opacity:0  ;
  transform: translateX(-100px);

}
50%{
  opacity:0;
  transform: translateX(-50px) ;
}
100%{
opacity: 1;
transform: translate(0)
}
`
export const Rotate = keyframes`
0% {
  transform: rotate(20deg);
}
50%{
  transform: rotate(0);
}
100%{
  transform: rotate(20deg) ;
}
`


