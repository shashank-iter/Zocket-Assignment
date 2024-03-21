import { useRef, useEffect } from 'react';
import PatternMask from './assets/pattern_mask.png';
import Mask from './assets/mask.png';
const Canvas = ({ imageSrc, caption, callToAction, backgroundColor }) => {
 const canvasRef = useRef(null);

 useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas background color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height/1.5);

   // Set the design pattern
    const pattern = new Image();
    pattern.src = PatternMask;
    pattern.onload = function() {
      ctx.drawImage(pattern, 0, 0, canvas.width, canvas.height);
    };
    ctx.globalCompositeOperation = "source-over";

   // Set the mask
    const mask = new Image();
    mask.src = Mask;
    mask.onload = function() {
      ctx.drawImage(mask, 0, 66, canvas.width, canvas.height/1.82);
      ctx.globalCompositeOperation = "source-over";
    };

   ctx.globalCompositeOperation = "source-over";




    // Load and draw the image
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 45, 20, canvas.width/1.5, canvas.height/1.5);
      ctx.imageSmoothingEnabled = false;
      ctx.globalCompositeOperation = "source-atop";

      // Draw caption and call to action
      ctx.font = '10px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText(caption, 10, 135);
      ctx.fillText(callToAction, 10, 145);
    };
    img.src = imageSrc;
 }, [imageSrc, caption, callToAction, backgroundColor]);

 return <canvas ref={canvasRef} style={{height:"1080px", height:"1080px", height:"500px",width:"500px"}}  className="border-2 border-gray-500"></canvas>;
};

export default Canvas;
