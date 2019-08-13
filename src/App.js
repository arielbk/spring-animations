import React, { useState } from 'react';
// import styled from 'styled-components';
import {useSpring, animated as a} from 'react-spring';

// const Card = styled.section`
//   width: 80%;
//   max-width: 800px;
//   background: #fff;
//   margin: 6rem auto;
//   padding: 6rem;
//   box-shadow: 0 2px 50px rgba(0,0,0,0.05);

//   transform-style: preserve-3d;
//   transform-origin: center right;

//   transition: 1s;
//   &:hover {
//     transform: translateX(-100%) rotateY(-180deg);
//   }
// `;

function Card() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg) scale(${flipped ? 10 : 1})`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div onClick={() => set(state => !state)}>
      <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div>
  )
}

function App() {
  // const props = useSpring({transform: 'translateX(-100%) rotateY(-180deg)', from: { translate: 'none', transformStyle: 'preserve-3d', transformOrigin: 'center right'} });
  // return <Card>Spring</Card>
  // return <animated.div style={props}>I will fade in</animated.div>
  // return <Card />
  return <div onClick={() => set(state => !state)}>
      <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div>
}

export default App;
