import { useEffect, useRef } from 'react';

const use3D = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('webgl');
    if (!context) return;

    // Initialize 3D scene
    const initScene = () => {
      // Set clear color to white
      context.clearColor(1.0, 1.0, 1.0, 1.0);
      context.clear(context.COLOR_BUFFER_BIT | context.DEPTH_BUFFER_BIT);
      
      // Add more 3D rendering logic here
    };

    initScene();

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initScene();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { canvasRef };
};

export default use3D;