<script setup>
import { selfName } from '../../theme-config/constant';

</script>

<template>
  <div class="flex gap-4 sm:gap-2 flex-col items-center mx-a sm:(w-full)">
    <img src="/avatar.png"
      class="border-rounded-random hover:(rounded-1/2) transition-border-radius  w-1/3 sm:(w-1/2) mx-a" alt="头像">
    <div class="flex-row-c-c">
      <h3 class="font-steps h-1.2em" style='--lv: 1;margin: 0.6em 0;text-align: center;'>{{ selfName }}</h3>
    </div>
    <!-- 联系 -->
    <div class="mx-a w-4/5 border-default border-0 border-y-1px w-full">
      <small class="flex gap-4 items-center w-full h-2rem">
        <i class="i-carbon:location"></i>
        <a target="_blank"
          href="https://www.bing.com/maps?osid=414f6073-28b0-4f10-af33-92d146a2845c&cp=23.171926~113.203812&lvl=11&pi=0&imgid=2cf04fdd-6730-43f9-a96f-c9e0a91a8e11&v=2&sV=2&form=S00027"
          style="color: inherit;">广东省广州市天河</a>
      </small>
      <small class="flex gap-4 items-center w-full h-2rem" title="email:kiwi2333@qq.com">
        <i class="i-carbon:email"></i>
        <a target="_blank" href="mailto:kiwi2333@qq.com" style="color: inherit;">kiwi2333@qq.com</a>
      </small>
    </div>
    <!-- 媒体 -->
    <div class="grid mt-2 w-full mx-a sm:grid-cols-5 grid-cols-8 gap-2" style='--lv: 2;'>
      <a href="https://github.com/KiWi233333" target="_blank">
        <img src="/github.png" alt="github" class="rounded-6px object-cover shadow">
      </a>
      <a href="https://space.bilibili.com/37574787" target="_blank">
        <img src="/bilibili.png" alt="bilibili" class="rounded-6px object-cover shadow">
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: 640px) {
  .content-card {
    border: 0;
  }
}

.font-steps {
  overflow: hidden;
  width: 0;
  text-wrap: nowrap;
  animation: 1s text-steps-in ease-in-out forwards;
}

@keyframes text-steps-in {
  from {
    width: 0;
  }

  to {
    width: 5em;
  }
}

.border-rounded-random {
  border-radius: 67% 33% 70% 45% / 45% 54% 46% 70%;
  animation: border-anima 20s ease-in-out infinite;
}

@keyframes border-anima {
  0%, 100% {
    border-radius: 67% 33% 70% 45% / 45% 54% 46% 70%;
  }

  12.5% {
    border-radius: 60% 40% 65% 42% / 42% 60% 40% 65%;
  }

  25% {
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
  }

  37.5% {
    border-radius: 40% 60% 42% 65% / 65% 40% 60% 42%;
  }

  50% {
    border-radius: 40% 70% 40% 80% / 80% 40% 70% 40%;
  }

  62.5% {
    border-radius: 40% 80% 40% 70% / 70% 40% 80% 40%;
  }

  75% {
    border-radius: 36% 90% 36% 90% / 90% 36% 36% 90%;
  }

  87.5% {
    border-radius: 40% 70% 40% 60% / 60% 40% 70% 40%;
  }
}
</style>
