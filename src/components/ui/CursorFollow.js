// src/components/ui/cursor-follow.js
'use client';
import { useMousePosition } from '@/hooks/use_mouse_position';

export default function CursorFollow() {
  const position = useMousePosition();
  
  return (
    <div
      className="fixed pointer-events-none"
      style={{
        width: '13px',          // 更小的尺寸
        height: '13px',         // 更小的尺寸
        top: 0,
        left: 0,
        zIndex: 13,
        borderRadius: '999px',
        background: 'linear-gradient(180deg, rgb(112, 190, 250) 0%, rgb(255, 255, 255) 100%)',
        opacity: 1,
        transform: `translate(0%, 0%) translateX(${position.x}px) translateY(${position.y}px)`,
      }}
    />
  );
}