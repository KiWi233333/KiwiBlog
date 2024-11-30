<script setup lang="ts">
import { friendList } from "../../store/files";
import InfiniteSwiperV2 from "../Swiper/InfiniteSwiperV2.vue";

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
    <div class="card-df rounded-10px pb-6 border-default">
      <div class="text-sm flex-row-bt-c p-4 op-60 hover:op-100 transition-opacity">
        <span>友情链接</span>
        <a href="/apply"
          class="card block card-df hover:shadow transition-shadow border-default rounded-2 px-4 py-1.2 pr-5">
          <i i-solar:link-broken p-2 mr-1></i>
          APPLY
        </a>
      </div>
      <!-- <InfiniteSwiper :data="friendDomList" :isHoverPaused="false" /> -->
      <InfiniteSwiperV2>
        <div>
          <div flex>
            <a v-for="(item, i) in friendList" :key="i" :href="item.link" :target="item.linkTarget"
              style="width: 280px;">
              <div class="flex items-center">
                <img class="card-df w-16 h-16 rounded-full mr-4" :src="item.avatar" alt="">
                <div class="flex flex-col">
                  <span class="text-lg font-bold">{{ item.title }}</span>
                  <small class="text-gray-500 truncate max-w-12em">{{ item.details }}</small>
                </div>
              </div>
            </a>
          </div>
          <div class="grid items-start cols-3 gap-4 mt-4 flex-shrink-0 flex-nowrap mr-4 translate-x-140px">
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
        </div>
      </InfiniteSwiperV2>
    </div>
    <h2>All Links</h2>
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
