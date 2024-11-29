<script setup lang="ts">
import { friendList } from "../../store/files";
import InfiniteSwiper from "../Swiper/InfiniteSwiper.vue";

const friendDomList = friendList.map(item => {
  return {
    width: 280,
    template: `
      <a href="${item.link}" target="${item.linkTarget}" class="transition flex flex-col gap-2">
        <div class="flex items-center">
          <img class="card-df w-16 h-16 rounded-full mr-4" src="${item.avatar}" alt="">
          <div class="flex flex-col">
            <span class="text-lg font-bold">${item.title}</span>
            <small class="text-gray-500 truncate max-w-12em">${item.details}</small>
          </div>
        </div>
      </a>
    `,
  };
});
</script>

<template>
  <section class="grid cols-1">
    <!-- 友情链接 -->
    <h2>Friends</h2>
    <div class="card-df rounded-10px py-6 border-default">
      <InfiniteSwiper :data="friendDomList" />
    </div>
    <div class="project-list mt-4">
      <a v-for="(data, i) in friendList" :href="data.link" :target="data.linkTarget || '_self'"
        class="flex items-center gap-2 card card-df border-default rounded-10px shadow-sm p-3 hover:shadow transition-all"
        :class="{ 'no-link': !data.link }">
        <img class="w-3em h-3em rounded-2 mr-2" alt="头像" :src="data.avatar"></img>
        <div class="right truncate">
          <strong class="block truncate">{{ data.title }}</strong>
          <small class="text-sm truncate max-w-8em sm:max-w-12em op-60">{{ data.details }}</small>
        </div>
      </a>
    </div>
    <!-- 添加友情链接 -->
    <a href="/apply"
      class="card mt-4 block ml-a card-df hover:shadow transition-shadow border-default rounded-2 px-4 py-1.5 pr-5">
      <i i-solar:link-broken p-2 mr-1></i>
      APPLY
    </a>
  </section>
</template>
<style scoped lang="scss">
.project-list {
  --at-apply: "grid grid-cols-2 lg:grid-cols-3 gap-4";
}

.card {
  --at-apply: "text-color";

  &:hover {
    --at-apply: "bg-color";
    color: inherit;
  }
}
</style>
