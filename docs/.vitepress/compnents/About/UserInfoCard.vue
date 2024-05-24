<script setup>
</script>

<template>
  <div data-fades data-fade class="flex flex-col items-center mx-a sm:(w-full)">
    <img src="/avatar.png"
      class="border-default hover:(rounded-1/2) rounded-1/2 sm:rounded-3 transition-border-radius  sm:(w-1/2) mx-a"
      alt="头像">
    <h3 class="font-steps" style='--lv: 1;margin: 0.6em 0;text-align: center;' data-fade>{{ "Kiwi2333" }}</h3>
    <!-- 联系 -->
    <div data-fades class="mx-a w-4/5 border-default border-0 border-y-1px w-full" data-fade>
      <small class="flex gap-4 items-center w-full h-2rem">
        <i class="i-carbon:location"></i>
        <a target="_blank"
          href="https://www.bing.com/maps?osid=414f6073-28b0-4f10-af33-92d146a2845c&cp=23.171926~113.203812&lvl=11&pi=0&imgid=2cf04fdd-6730-43f9-a96f-c9e0a91a8e11&v=2&sV=2&form=S00027"
          style="color: inherit;">广东省广州市天河</a>
      </small>
      <small class="flex gap-4 items-center w-full h-2rem">
        <i class="i-carbon:email"></i>
        <a target="_blank" href="mailto:kiwi2333@qq.com" style="color: inherit;">kiwi2333@qq.com</a>
      </small>
    </div>
    <!-- 媒体 -->
    <div class="grid mt-4 w-full mx-a sm:grid-cols-5 grid-cols-6 gap-2" data-fades style='--lv: 2;'>
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
</style>
