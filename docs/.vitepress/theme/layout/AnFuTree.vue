<script setup lang='ts'>
import { useRafFn } from '@vueuse/core';
import { onMounted, ref, watch } from 'vue';
const { random } = Math;
function initCanvas(canvas: HTMLCanvasElement, width = 1920, height = 1000, _dpi?: number) {
  const ctx = canvas.getContext('2d')!;
  const dpr = window.devicePixelRatio || 1;
  // @ts-expect-error
  const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
  const dpi = _dpi || dpr / bsr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = dpi * width;
  canvas.height = dpi * height;
  ctx.scale(dpi, dpi);
  return { ctx, dpi };
}
const r180 = Math.PI;
const r90 = Math.PI / 2;
const r60 = Math.PI / 3;
const r30 = Math.PI / 6;
const r15 = Math.PI / 12;
const r120 = Math.PI / 3 * 2;
const r360 = Math.PI * 2;



function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
  const dx = r * Math.cos(theta);
  const dy = r * Math.sin(theta);
  return [x + dx, y + dy];
}

const canvasRef = ref<HTMLCanvasElement | null>(null);


const f = {
  start: () => { },
};

const init = ref(5);
const len = ref(5);
const stopped = ref(false);

watch([init, len], () => f.start());

onMounted(async () => {
  const canvas = canvasRef.value!;
  const { ctx } = initCanvas(canvas);
  const { width, height } = canvas;
  let steps: Function[] = [];
  let prevSteps: Function[] = [];

  let iterations = 0;

  const step = (x: number, y: number, rad: number) => {
    const length = random() * len.value;
    const [nx, ny] = polar2cart(x, y, length, rad);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(nx, ny);
    ctx.stroke();

    const rad1 = rad + random() * r15;
    const rad2 = rad - random() * r15;

    if (nx < -100 || nx > 1920 || ny < -100 || ny > 1920)
      return;

    if (iterations <= init.value || random() > 0.5)
      steps.push(() => step(nx, ny, rad1));
    if (iterations <= init.value || random() > 0.5)
      steps.push(() => step(nx, ny, rad2));
  };

  const frame = () => {
    iterations += 1;
    prevSteps = steps;
    steps = [];

    if (!prevSteps.length) {
      controls.pause();
      stopped.value = true;
    }
    prevSteps.forEach(i => i());
  };

  const controls = useRafFn(frame, { immediate: false });

  f.start = () => {
    controls.pause();
    iterations = 0;
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#b9b9b930';
    prevSteps = [];
    steps = random() < 0.5
      ? [
        () => step(0, random() * 1920, 0),
        () => step(1920, random() * 1000, r90),
      ]
      : [
        () => step(random() * 1920, 0, r90),
        () => step(random() * 1920, 1000, -r90),
      ];
    controls.resume();
    stopped.value = false;
  };

  f.start();
});
</script>

<template>
  <canvas ref="canvasRef" id="treeCanvasRef" :class="{ 'drawing': !stopped }"
    class="hidden sm:block fixed top-0 w-1920px min-h-100dvh overflow-hidden left-0 -z-1"></canvas>
</template>

<style lang="scss">
html.stop-transition #treeCanvasRef.drawing {
  display: none !important;
}
</style>
