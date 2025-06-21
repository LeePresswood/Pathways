import { useRef, useEffect } from 'react';
import './Canvas.css';

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                // Example: Draw a simple graph node
                ctx.fillStyle = '#3498db'; // Node color
                ctx.beginPath();
                ctx.arc(150, 150, 50, 0, Math.PI * 2); // Draw a circle (node)
                ctx.fill();

                // Example: Draw a connecting edge
                ctx.strokeStyle = '#2ecc71'; // Edge color
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(150, 150); // Start at the node
                ctx.lineTo(300, 300); // End at another point
                ctx.stroke();
            }
        }
    }, []);

    return (
        <canvas ref={canvasRef} width={800} height={600} className="canvas" />
    );
};

export default Canvas;
