// src/components/ui/gradient-background.js
'use client';
import { useEffect, useRef } from 'react';

// 擴展 GradientBackground 組件
export default function GradientBackground() {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // 創建漸層
      const createGradient = () => {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, 
          canvas.height / 2, 
          0,
          canvas.width / 2, 
          canvas.height / 2, 
          canvas.width / 2
        );
        
        gradient.addColorStop(0, 'rgba(50, 50, 50, 0.3)');
        gradient.addColorStop(1, 'rgba(10, 10, 10, 1)');
        
        return gradient;
      };
  
      // 動畫循環
      let animationFrame;
      const animate = () => {
        ctx.fillStyle = createGradient();
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        animationFrame = requestAnimationFrame(animate);
      };
  
      animate();
      
      return () => cancelAnimationFrame(animationFrame);
    }, []);
  
    return (
      <div className="w-full h-full overflow-hidden bg-[#0a0a0a] transform-gpu relative">
        <div id="Gradients">
          <canvas 
            ref={canvasRef}
            className="w-full h-full absolute pointer-events-none"
          />
        </div>
      </div>
    );
  }