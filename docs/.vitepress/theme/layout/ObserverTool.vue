<template>
</template>
<script setup lang="ts">
import { nextTick, } from 'vue';


const obsever = () => {
  // 当对象进入窗体可视范围 IntersectionObserver
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(item => {
      if (item.isIntersecting) {
        item.target.classList.add('animate')
        observer.unobserve(item.target)
      }
    })
  })
  // 观察者：组件动画
  let observerAnimate = new IntersectionObserver((entries, observer) => {
    entries.forEach(item => {
      if (item.isIntersecting) {
        item.target.classList.add('animateStart')
        observer.unobserve(item.target)
      }
    })
  })
  // 添加监测对象
  function setMarks(classNames: string[]) {
    classNames.forEach(name => {
      document.querySelectorAll(name).forEach(mark => {
        observer.observe(mark)
      })
    });
  }
  setMarks(['.mark1', '.mark2', '.mark3', '.mark4', '.mark5'])
  // 进入视野加载动画
  document.querySelectorAll('.animatejs').forEach(item => {
    observerAnimate.observe(item)
  })
}
nextTick(() => {
  obsever()
})
</script>
<style>

:root {
  --text-mark-color: #60ffaf;
  --text-mark-color1: #60ffaf;
  --text-mark-color2: #8d73ff;
  --text-mark-color3: #ffbc0d;
  --text-mark-color4: #dc284d;
  --text-mark-color5: #444444;
}
.mark1,
.mark2,
.mark3,
.mark4,
.mark5 {
  background-color: transparent;
  color: inherit;
  background-image: linear-gradient(var(--text-mark-color), var(--text-mark-color));
  background-repeat: no-repeat;
  background-size: 0% 36%;
  background-position: 0% 100%;
}

.mark2 {
  background-image: linear-gradient(var(--text-mark-color2), var(--text-mark-color2));
}

.mark3 {
  background-image: linear-gradient(var(--text-mark-color3), var(--text-mark-color3));
}

.mark4 {
  background-image: linear-gradient(var(--text-mark-color4), var(--text-mark-color4));
}

.mark5 {
  background-image: linear-gradient(var(--text-mark-color5), var(--text-mark-color5));
}

.mark1.animate,
.mark2.animate,
.mark3.animate,
.mark4.animate,
.mark5.animate {
  animation: 1s font-slice-bg-anim ease-in-out forwards;
}

.animateStart {
  animation-play-state: running;
}

.animatejs {
  animation-play-state: paused;
}

/* 背景颜色滑动 */
@keyframes font-slice-bg-anim {
    to {
        background-size: 100% 36%;
    }
}

/* 变换边框 */
@keyframes border-transform {

    0%,
    100% {
        border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }

    14% {
        border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }

    28% {
        border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
    }

    42% {
        border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }

    56% {
        border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
    }

    70% {
        border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }

    84% {
        border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
    }
}

</style>