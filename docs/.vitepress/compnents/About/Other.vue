<script setup lang="ts">
import { friendList } from '../../store/files'
import DefaultCard from '../DefaultCard.vue';


</script>

<template>
  <div data-fades grid-(~ gap-4 cols-1) data-fade style="--delay: 60ms;" class="p-6 sm:p-8 right">
    <!-- 友情链接 -->
    <h3 style="margin-top: 0;" mb-2>Friends</h3>
    <div class="project-list">
      <DefaultCard :data="p" v-for="(p, i) in friendList" :key="i"
        style="box-shadow: rgba(0, 0, 0, 0.2) 0px 0 0, rgba(0, 0, 0, 0.2) 0px 0 0 1px, rgba(0, 0, 0, 0.12) 0px 0 0px inset;">
        <template #icon>
          <img class="border-default w-3em h-3em rounded-2 mr-2" alt="头像" :src="p.avatar"></img>
        </template>
      </DefaultCard>
    </div>
    <!-- 添加友情链接 -->
    <a href="/apply" class="block ml-a card-df-br border-default  rounded-2 px-4 py-2">Join Friends！</a>
  </div>
</template>
<style scoped lang="scss">
.project-list {
  --at-apply: "grid sm:grid-cols-2 gap-4 grid-cols-1"
}
</style>
