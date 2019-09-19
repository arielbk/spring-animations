import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const SvgStyles = styled.svg`
  position: absolute;
  ${props => `${props.align[0]}: ${props.position[0]}px;`}
  ${props => `${props.align[1]}: ${props.position[1]}px;`}
`;

const Circle = ({ radius, fill, position, align }) => {
  return (
    <SvgStyles position={position} align={align} viewBox="0 0 2 2" width={radius} fill={fill}>
      <circle cx="1" cy="1" r="1"/>
    </SvgStyles>
)};

export default ({ depth = 2, scroll, radius = 50, fill = "#FCEBF1", position = [100,100], align = ['left', 'top'] }) => {

  // todo: circles that are further 'back' should not move as much? -- the movement should be more proportional
  const [styles, set] = useSpring(() => ({ position: 'absolute', width: radius, height: radius, zIndex: -1, transform: 'translate3d(0, 500px, 0)', config: { mass: 1.2, friction: 5, tension: 30 } }));

  useEffect(() => {
    if (!scroll) return;
    set({ transform: `translate3d(0, ${scroll * (depth / 4) + 500 || 0}px, 0)` });
  }, [scroll]);

  return (
    <animated.div style={styles}>
      <Circle radius={radius} fill={fill} position={position} align={align} />
    </animated.div>
  )
}
