// src/hooks/use-mouse-position.js
import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let requestId;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      // 降低 lerp factor 使動畫更平滑，增加延遲感
      currentX = lerp(currentX, targetX, 0.07);  // 從 0.2 改為 0.08
      currentY = lerp(currentY, targetY, 0.07);  // 從 0.2 改為 0.08
      
      setPosition({ x: currentX, y: currentY });
      requestId = requestAnimationFrame(animate);
    };

    const updatePosition = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('mousemove', updatePosition);
    requestId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return position;
}