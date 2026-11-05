import { useEffect, useRef, useState } from "react";

const BRAND_LOGO_URL =
  "https://storage.googleapis.com/producer-app-public/producer/25953ce3-17fe-4b95-b715-978bbe13ebd1";

function clearOuterWhiteBackdrop(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;

  const visited = new Uint8Array(w * h);
  const queue: number[] = [];

  for (let x = 0; x < w; x++) {
    queue.push(x, (h - 1) * w + x);
    visited[x] = 1;
    visited[(h - 1) * w + x] = 1;
  }
  for (let y = 1; y < h - 1; y++) {
    queue.push(y * w, y * w + (w - 1));
    visited[y * w] = 1;
    visited[y * w + (w - 1)] = 1;
  }

  let head = 0;
  while (head < queue.length) {
    const idx = queue[head++];
    const pi = idx * 4;
    const a = data[pi + 3];
    const brightness = (data[pi] + data[pi + 1] + data[pi + 2]) / 3;

    const isTransparent = a < 20;
    const isWhite = brightness > 210;
    if (!isTransparent && !isWhite) continue;

    if (isWhite) {
      const alphaFactor = Math.max(0, Math.min(1, (255 - brightness) / 45));
      data[pi + 3] = Math.round(a * alphaFactor);
    }

    const x = idx % w;
    const y = Math.floor(idx / w);
    const neighbours = [
      y > 0 ? idx - w : -1,
      y < h - 1 ? idx + w : -1,
      x > 0 ? idx - 1 : -1,
      x < w - 1 ? idx + 1 : -1,
    ];
    for (const n of neighbours) {
      if (n >= 0 && !visited[n]) {
        visited[n] = 1;
        queue.push(n);
      }
    }
  }

  ctx.putImageData(imgData, 0, 0);
}

export function BrandLogo({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onerror = () => setFailed(true);
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);

      try {
        clearOuterWhiteBackdrop(ctx, canvas.width, canvas.height);
      } catch {
        // Pixel access can be blocked; the plain image is still drawn
      }
    };
    img.src = BRAND_LOGO_URL;
  }, []);

  if (failed) {
    return <img src={BRAND_LOGO_URL} className={className} alt="Green Glacier logo" />;
  }

  return <canvas ref={canvasRef} className={className} role="img" aria-label="Green Glacier logo" />;
}
