import React, { useState, useEffect, useRef } from 'react';
import FloatingCircle from './FloatingCircle';
import { loremIpsum } from 'lorem-ipsum';

export default () => {
  const containerRef = useRef();
  const [scrollTop, setScrollTop] = useState();

  
  useEffect(() => {
    const handleScroll = () => setScrollTop(containerRef.current.getBoundingClientRect().top);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
    <div ref={containerRef} style={{
        position: "relative",
        minHeight: '200vh',
        overflow: 'auto',
        padding: '3rem',
        lineHeight: 1.35,
      }}>

      <FloatingCircle scroll={scrollTop} divider={1.5} radius={50} position={[200, 300]} />
      <FloatingCircle scroll={scrollTop} divider={1.3} radius={100} position={[200, 300]} />
      <FloatingCircle scroll={scrollTop} divider={1} radius={300} position={[200, 300]} />

      {/* {loremIpsum({ count: 100 })} */}
    </div>
    </div>
  );
}
