<script setup lang="ts">
import UserInfoCard from "./UserInfoCard.vue";
import Container from "./Container.vue";
import Catalog from "./Catalog.vue";
import Other from "./Other.vue";
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_7fr_2fr] gap-10 items-start">
    <!-- 左侧 -->
    <UserInfoCard class="content-card md:sticky top-6rem left-0" />
    <!-- 内容 -->
    <main class="flex flex-col gap-8">
      <Container class="content-card" />
      <Other class="content-card" />
    </main>
    <!-- 右侧 -->
    <Catalog data-fade style="--lv: 3; --anima: latter-slice-left"
      class="content-card md:sticky top-6rem left-0 w-full" />
  </div>
</template>
<style scoped lang="scss">
.content-card {
  --at-apply: "p-4 sm:p-6 ";
}
</style>
