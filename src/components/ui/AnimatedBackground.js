// src/components/ui/animated-background.js
'use client';
import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  
  const config = {
    blurAmount: '150px',              // 模糊程度
    animationSpeed: 0.01,           // 動畫速度
    gradientSize: 0.1,               // 漸層大小
    backgroundColor: '#0a0a0a',      // 背景顏色
    gradients: [
      {
        color: 'rgba(112, 190, 250, 0.95)',  // 第一個漸層顏色
        amplitude: 0.2                        // 移動幅度
      },
    ]
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // 設置 canvas 尺寸
    const setCanvasSize = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // 創建漸層點
    const gradientPoints = config.gradients.map((gradient, index) => ({
      x: canvas.width * 0.3,
      y: canvas.height * 0.3,
      color: gradient.color,
      amplitude: gradient.amplitude
    }));

    // 動畫函數
    let animationFrame;
    let time = 0;
    const animate = () => {
      time += config.animationSpeed;
      
      // 清除畫布
      ctx.fillStyle = config.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 更新漸層點位置
      gradientPoints.forEach((point, index) => {
        point.x = canvas.width * (0.3 + Math.sin(time + index) * point.amplitude);
        point.y = canvas.height * (0.3 + Math.cos(time + index) * point.amplitude);
      });

      // 繪製漸層
      gradientPoints.forEach(point => {
        const gradient = ctx.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          canvas.width * config.gradientSize
        );

        gradient.addColorStop(0, point.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    // 清理函數
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div className="relative w-full h-full" style={{ filter: `blur(${config.blurAmount})` }}>
        <div 
          className="w-full h-full overflow-hidden transform-gpu relative"
          style={{ backgroundColor: config.backgroundColor }}
        >
          <div id="Gradients">
            <canvas
              ref={canvasRef}
              className="w-full h-full absolute pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}