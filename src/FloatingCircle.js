import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const SvgStyles = styled.svg`
  position: fixed;
  ${props => `${props.align[0]}: ${props.position[0]}px;`}
  ${props => `${props.align[1]}: ${props.position[1]}px;`}
`;

const Circle = ({ radius, fill, position, align }) => {
  return (
    <SvgStyles position={position} align={align} viewBox="0 0 2 2" width={radius} fill={fill}>
      <circle cx="1" cy="1" r="1"/>
    </SvgStyles>
)};

export default ({ divider = 2, scroll, radius = 50, fill = "#ccc", position = [100,100], align = ['left', 'top'] }) => {
  const [styles, set] = useSpring(() => ({ transform: 'translate3d(0, 0px, 0)', config: { mass: 1, friction: 4, tension: 40 } }));

  useEffect(() => {
    if (!scroll) return;
    set({ transform: `translate3d(0, ${Math.abs(scroll / divider) || 0}px, 0)` });
  }, [scroll]);

  return (
    <animated.div style={styles}>
      <Circle radius={radius} fill={fill} position={position} align={align} />
    </animated.div>
  )
}
