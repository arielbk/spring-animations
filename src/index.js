import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './index.css';

function Card() {
  const [flipped, set] = useState(false)
  const { transform, opacity, boxShadow } = useSpring({
    boxShadow: '3px 0 60px rgba(0,0,0,0.0.07)',
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg) scale(${flipped ? 1 : 1.1})`,
    config: { mass: 5, tension: 300, friction: 50 },
  })
  return (
    <div onClick={() => set(state => !state)}>
      <a.div className="c back" style={{ opacity, boxShadow: boxShadow.interpolate(o => 1 - o), transform }}>imgimgimg </a.div>
      <a.div className="c front" style={{ opacity: opacity.interpolate(o => 1 - o), boxShadow, transform: transform.interpolate(t => `${t}`) }}>Actual time table info text</a.div>
    </div>
  )
}

render(<Card />, document.getElementById('root'))